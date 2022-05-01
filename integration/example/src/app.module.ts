import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ProbotModule } from '@yieldbits/probot';
import * as dotenv from 'dotenv';

const { parsed: envConfig } = dotenv.config();

@Module({
  imports: [
    ProbotModule.forRoot({
      path: 'hook',
      config: {
        appId: envConfig.GH_APP_ID,
        clientId: envConfig.GH_CLIENT_ID,
        clientSecret: envConfig.GH_CLIENT_SECRET,
        privateKey: envConfig.GH_PRIVATE_KEY,
        webhookSecret: envConfig.GH_WEBHOOK_SECRET,
        webhookProxy: envConfig.GH_WEBHOOK_PROXY,
        webhookPath: envConfig.GH_WEBHOOK_PATH,
      },
    }),
  ],
  controllers: [AppController],
})
export class AppModule {}
