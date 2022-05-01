import { Controller, Post, Req, Type } from '@nestjs/common';
import { Request } from 'express';
import { ProbotDiscovery } from './probot.discovery';

export function getControllerClass({ path }): Type<any> {
  @Controller()
  class HookController {
    constructor(private readonly probotDiscovery: ProbotDiscovery) {}

    @Post([path])
    // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/explicit-module-boundary-types
    async hooks(@Req() req: Request) {
      await this.probotDiscovery.receiveHook(req);
    }
  }

  return HookController;
}
