import { Module } from '@nestjs/common';
import { UserRegisterService } from './UserRegisterService.service';
import { UserRegisterController } from './UserRegisterController.controller';
import { DrizzleModule } from '../drizzle/drizzle.module';

@Module({
	imports: [DrizzleModule],
	controllers: [UserRegisterController],
	providers: [UserRegisterService],
	exports: [UserRegisterService],
})
class UserRegisterModule {}

export { UserRegisterModule };
