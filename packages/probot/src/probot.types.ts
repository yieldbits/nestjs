export interface ProbotConfig {
  appId: string;
  privateKey: string;

  webhookSecret?: string;
  webhookPath?: string;

  ghUrl?: string;

  clientId: string;
  clientSecret: string;

  webhookProxy?: string;
}

export interface OctokitConfig {
  auth: Record<string, any>;
  probot: ProbotConfig;
}

export interface ModuleOptions {
  isGlobal?: boolean;
  path: string;
  config: ProbotConfig;
}

export enum ProbotMetadata {
  name = 'probot/metadata/hook',
}

export enum ModuleProviders {
  ProbotConfig = 'probot/provider/config',
}
