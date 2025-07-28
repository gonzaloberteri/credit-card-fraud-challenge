import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class HasuraJwtService {
  generateJWT(userId: string, customClaims: Record<string, any> = {}): string {
    const jwtSecret = process.env.HASURA_GRAPHQL_JWT_SECRET;

    if (!jwtSecret) {
      throw new Error('HASURA_GRAPHQL_JWT_SECRET not configured');
    }

    const payload = {
      sub: userId,
      iat: Math.floor(Date.now() / 1000),
      exp: Math.floor(Date.now() / 1000) + 60 * 60, // 1 hour expiration
      'https://hasura.io/jwt/claims': {
        'x-hasura-allowed-roles': ['user'],
        'x-hasura-default-role': 'user',
        'x-hasura-user-id': userId,
        ...customClaims,
      },
    };

    return jwt.sign(payload, jwtSecret, { algorithm: 'HS256' });
  }
}
