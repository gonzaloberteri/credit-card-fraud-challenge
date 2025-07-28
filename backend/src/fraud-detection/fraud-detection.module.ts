import { Module, forwardRef } from '@nestjs/common';
import { FraudDetectionController } from './fraud-detection.controller';
import { FraudDetectionService } from './fraud-detection.service';
import { GraphQLClientModule } from '../graphql/graphql-client.module';
import { AppModule } from '../app.module';

@Module({
  imports: [GraphQLClientModule, forwardRef(() => AppModule)],
  controllers: [FraudDetectionController],
  providers: [FraudDetectionService],
  exports: [FraudDetectionService],
})
export class FraudDetectionModule {}
