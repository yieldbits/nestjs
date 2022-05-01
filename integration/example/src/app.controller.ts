import { Controller, Get } from '@nestjs/common';
import { Hook } from '@yieldbits/probot';

@Controller()
export class AppController {
  @Get()
  getHello(): string {
    return 'Hello World!';
  }

  @Hook(['issue_comment.created'])
  async hook(context) {
    console.log(context);
  }
}
