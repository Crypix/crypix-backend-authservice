import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { type User as TgaUserType } from '@telegram-apps/init-data-node';
import { UserRegisterService } from './UserRegisterService.service';
import { UserService } from './UserService.service';
import { UserWalletService } from '../UserTonWallet/UserWalletService.service';
import { UserTonWalletBody } from 'src/interfaces/UserTonWallet';
import { UserFullData } from 'src/interfaces/UserFullData';
import { UserTonWalletData } from '../drizzle/schemas/UserTonWallet.schema';

@Controller()
class UserController {
	constructor(
		private UserRegisterService: UserRegisterService,
		private UserWalletService: UserWalletService,
	) {}

	@MessagePattern({ cmd: 'AuthOrRegister' })
	public async AuthOrRegister(UserData: { user: TgaUserType; wallet: UserTonWalletBody }) {
		let wallet: UserTonWalletData;
		const user = (await this.UserRegisterService.RegisterUser(UserData.user)) as UserFullData;

		if (!user.TonWallet) {
			wallet = await this.UserWalletService.CreateUserTonWallet(user, UserData.wallet);
		}
		return { user: user, TonWallet: user.TonWallet ?? wallet };
	}
}

export { UserController };
