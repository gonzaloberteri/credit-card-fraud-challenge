import { Inject, Module } from '@nestjs/common';
import {
  GraphQLRequestModule,
  GraphQLClientInject,
} from '@golevelup/nestjs-graphql-request';
import { ConfigService } from '@nestjs/config';
import { GraphQLClient as GQLClient } from 'graphql-request';
import { getSdk } from '../generated/graphql';

const GraphQLClient = 'GraphQLClient';

export type ProfileGqlSdk = ReturnType<typeof getSdk>;

export const InjectProfileGraphQLClient = () => Inject(GraphQLClient);

@Module({
  imports: [
    GraphQLRequestModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const endpoint =
          configService.get<string>('HASURA_GRAPHQL_ENDPOINT') || '';
        const secret =
          configService.get<string>('HASURA_GRAPHQL_ADMIN_SECRET') || '';

        return {
          endpoint,
          options: {
            headers: {
              'content-type': 'application/json',
              'x-hasura-admin-secret': secret,
            },
          },
        };
      },
    }),
  ],
  providers: [
    {
      provide: GraphQLClient,
      inject: [GraphQLClientInject],
      useFactory: (client: GQLClient) => getSdk(client),
    },
  ],
  exports: [GraphQLClient],
})
export class GraphQLClientModule {}
