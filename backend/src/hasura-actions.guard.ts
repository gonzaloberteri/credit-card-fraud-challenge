import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class HasuraActionsGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<Request>();
    const hasuraSecret = request.headers['x-hasura-actions-secret'] as string;
    const expectedSecret = process.env.HASURA_ACTIONS_SECRET;

    if (!expectedSecret) {
      throw new UnauthorizedException('HASURA_ACTIONS_SECRET not configured');
    }

    if (!hasuraSecret || hasuraSecret !== expectedSecret) {
      throw new UnauthorizedException('Invalid Hasura actions secret');
    }

    return true;
  }
}
