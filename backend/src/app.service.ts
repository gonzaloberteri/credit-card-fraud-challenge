import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  InjectProfileGraphQLClient,
  ProfileGqlSdk,
} from './graphql/graphql-client.module';
import { HasuraService } from './services/hasura.service';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);

  constructor(
    private configService: ConfigService,
    @InjectProfileGraphQLClient() private profileSdk: ProfileGqlSdk,
    private hasuraService: HasuraService,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }
}
