import {
  Inject,
  Injectable,
  Logger,
  OnApplicationBootstrap,
  OnApplicationShutdown,
  OnModuleInit,
} from '@nestjs/common';
import * as _ from 'lodash';
import { v4 } from 'uuid';
import { DiscoveryService } from '@golevelup/nestjs-discovery';
import { ModuleProviders, ProbotConfig, ProbotMetadata } from './probot.types';
import { createProbot, createSmee } from './probot.helpers';
import { Probot } from 'probot';

@Injectable()
export class ProbotDiscovery
  implements OnModuleInit, OnApplicationBootstrap, OnApplicationShutdown
{
  private readonly logger = new Logger('ProbotDiscovery');

  private readonly hooks: Map<string, any>;

  private smee: any;

  private readonly probot: Probot;

  constructor(
    private readonly discoveryService: DiscoveryService,
    @Inject(ModuleProviders.ProbotConfig) private readonly config: ProbotConfig
  ) {
    this.hooks = new Map<string, any>();
    this.probot = createProbot(this.config);
  }

  public async onModuleInit() {
    const discoveredHooks: any = [
      ...(await this.discoveryService.controllerMethodsWithMetaAtKey(
        ProbotMetadata.name
      )),
    ];

    _.each(discoveredHooks, (hook) => {
      this.hooks.set(v4(), hook);
    });
  }

  onApplicationBootstrap(): any {
    if (!_.isEmpty(this.config.webhookProxy)) {
      this.smee = createSmee(this.config);
      this.smee.start();
    }

    this.mountHooks();
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onApplicationShutdown(signal?: string): any {
    // TODO clear probot event handlers on shutdown
  }

  mountHooks() {
    this.probot
      .load(
        (app: {
          on: (arg0: any, arg1: (context: any) => Promise<void>) => any;
        }) => {
          this.hooks.forEach((hook) => {
            const { meta, discoveredMethod } = hook;
            app.on(meta.events, this.initContext(discoveredMethod.handler));
          });
        }
      )
      .then(() => {
        this.logger.log('Hook event listeners initialized');
      })
      .catch(this.logger.error);
  }

  initContext(fn: (context: any) => any) {
    return async (context: any) => {
      await fn(context);
    };
  }

  receiveHook(request) {
    const id = request.headers['x-github-delivery'] as string;
    const event = request.headers['x-github-event'];
    const body = request.body;

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return this.probot.receive({ id, name: event, payload: body });
  }
}
