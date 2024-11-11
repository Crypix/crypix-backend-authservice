import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { CONFIG_MODULE_OPTIONS } from './config/ConfigModule.config';
import { DrizzleModule } from './modules/drizzle/drizzle.module';
import { UserRegisterModule } from './modules/UserRegister/UserRegisterModule.module';

@Module({
	imports: [ConfigModule.forRoot(CONFIG_MODULE_OPTIONS), DrizzleModule, UserRegisterModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
