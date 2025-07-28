import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLClientModule } from './graphql/graphql-client.module';
import { HasuraService, TransactionGeneratorService } from './services';
import { FraudDetectionModule } from './fraud-detection/fraud-detection.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GraphQLClientModule,
    FraudDetectionModule,
  ],
  controllers: [AppController],
  providers: [AppService, HasuraService, TransactionGeneratorService],
  exports: [AppService, HasuraService],
})
export class AppModule {}
