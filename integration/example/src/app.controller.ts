import { Controller, Get } from '@nestjs/common';
import { Hook } from '@yieldbits/probot';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'Hello World!';
  }

  @Hook(['issue_comment.created'])
  async hook(context) {
    this.appService.sample(context);
  }
}
