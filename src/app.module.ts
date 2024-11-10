import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { CONFIG_MODULE_OPTIONS } from './config/ConfigModule.config';

@Module({
  imports: [ConfigModule.forRoot(CONFIG_MODULE_OPTIONS)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
