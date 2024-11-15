import { Module } from '@nestjs/common';
import { UserWalletService } from './UserWalletService.service';
import { UserWalletController } from './UserWalletController.controller';
import { DrizzleModule } from '@drizzle/drizzle.module';

@Module({
	imports: [DrizzleModule],
	providers: [UserWalletService],
	controllers: [UserWalletController],
	exports: [UserWalletService],
})
class UserWalletModule {}

export { UserWalletModule };
