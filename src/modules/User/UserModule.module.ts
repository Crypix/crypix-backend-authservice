import { Module } from '@nestjs/common';
import { UserRegisterService } from './UserRegisterService.service';
import { UserController } from './UserController.controller';
import { DrizzleModule } from '@drizzle/drizzle.module';
import { UserService } from './UserService.service';
import { UserWalletModule } from '../UserTonWallet/UserWalletModule.module';

@Module({
	imports: [DrizzleModule, UserWalletModule],
	controllers: [UserController],
	providers: [UserRegisterService, UserService],
	exports: [UserRegisterService],
})
class UserModule {}

export { UserModule };
