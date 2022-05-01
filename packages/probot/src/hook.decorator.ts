import { applyDecorators, SetMetadata } from '@nestjs/common';
import { ProbotMetadata } from './probot.types';
import { EmitterWebhookEventName } from '@octokit/webhooks';

export function Hook(events: EmitterWebhookEventName[]): MethodDecorator {
  return applyDecorators(SetMetadata(ProbotMetadata.name, { events }));
}
