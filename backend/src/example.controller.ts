import { Controller, Post, UseGuards, Body } from '@nestjs/common';
import { HasuraActionsGuard } from './hasura-actions.guard';

@Controller('actions')
export class ExampleController {
  @Post('example')
  @UseGuards(HasuraActionsGuard)
  handleAction(@Body() payload: unknown) {
    return { message: 'Action processed successfully', data: payload };
  }
}
