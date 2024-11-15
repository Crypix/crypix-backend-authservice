import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { CONFIG_MODULE_OPTIONS } from './config/ConfigModule.config';
import { DrizzleModule } from '@drizzle/drizzle.module';
import { UserModule } from '@modules/User/UserModule.module';
import { UserWalletModule } from '@modules/UserTonWallet/UserWalletModule.module';

@Module({
	imports: [ConfigModule.forRoot(CONFIG_MODULE_OPTIONS), DrizzleModule, UserModule, UserWalletModule],
})
export class AppModule {}
