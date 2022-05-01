import { DynamicModule, Module } from '@nestjs/common';
import { ModuleOptions, ModuleProviders } from './probot.types';
import { DiscoveryModule } from '@golevelup/nestjs-discovery';
import { ProbotDiscovery } from './probot.discovery';
import { getControllerClass } from './hook.controller';

@Module({
  imports: [DiscoveryModule],
})
export class ProbotModule {
  static forRoot(options: ModuleOptions): DynamicModule {
    const { path: hookPath } = options;
    const HookController = getControllerClass({ path: hookPath });
    return {
      global: options.isGlobal || true,
      module: ProbotModule,
      controllers: [HookController],
      providers: [
        {
          provide: ModuleProviders.ProbotConfig,
          useFactory: () => options.config,
        },
        ProbotDiscovery,
      ],
    };
  }
}
