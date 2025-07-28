import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import * as Cookies from 'cookies';

export interface AuthenticatedRequest extends Request {
  userId?: string;
}

interface JwtPayload {
  sub: string;
  exp: number;
  nbf: number;
  azp?: string;
}

@Injectable()
export class ClerkAuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<AuthenticatedRequest>();
    const response = context.switchToHttp().getResponse<Response>();

    try {
      const publicKey = process.env.CLERK_PEM_PUBLIC_KEY;

      if (!publicKey) {
        throw new UnauthorizedException('JWT public key not configured');
      }

      // Retrieve session token from either `__session` cookie for same-origin request
      // or from the `Authorization` header for cross-origin requests
      const cookies = new Cookies(request, response);
      const tokenSameOrigin = cookies.get('__session');
      const tokenCrossOrigin = request.headers.authorization?.replace(
        'Bearer ',
        '',
      );

      if (!tokenSameOrigin && !tokenCrossOrigin) {
        throw new UnauthorizedException('Not signed in');
      }

      let decoded: JwtPayload;
      const options = { algorithms: ['RS256'] as jwt.Algorithm[] };
      const permittedOrigins = [
        'http://localhost:3000',
        'http://localhost:5173',
        'http://localhost:3001', // Dashboard dev server
        'https://central-patient-profile.fly.dev', // Dashboard production URL
        'https://central-patient-profile-staging.fly.dev', // Dashboard staging URL
      ];

      if (tokenSameOrigin) {
        decoded = jwt.verify(tokenSameOrigin, publicKey, options) as JwtPayload;
      } else {
        decoded = jwt.verify(
          tokenCrossOrigin!,
          publicKey,
          options,
        ) as JwtPayload;
      }

      // Validate the token's expiration (exp) and not before (nbf) claims
      const currentTime = Math.floor(Date.now() / 1000);
      if (decoded.exp < currentTime || decoded.nbf > currentTime) {
        throw new UnauthorizedException('Token is expired or not yet valid');
      }

      // Validate the token's authorized party (azp) claim
      if (decoded.azp && !permittedOrigins.includes(decoded.azp)) {
        throw new UnauthorizedException("Invalid 'azp' claim");
      }

      request.userId = decoded.sub;
      return true;
    } catch (error) {
      console.error('Token verification failed:', error);
      throw new UnauthorizedException('Invalid or expired token');
    }
  }
}
