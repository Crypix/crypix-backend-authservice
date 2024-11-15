import { Inject, Injectable } from '@nestjs/common';
import { UserTonWallet, UserTonWalletData } from '@drizzle/schemas/UserTonWallet.schema';
import { DRIZZLE, DizzleDbProvider } from '@drizzle/drizzle.module';
import { TgaUserData } from '@drizzle/schemas/TgaUser.schema';
import type { UserTonWalletBody } from '@interfaces/UserTonWallet';
import { eq } from 'drizzle-orm';
import { ValidateData } from '@utils/ValidateData';

@Injectable()
class UserWalletService {
	constructor(@Inject(DRIZZLE) private DrizzleProvider: DizzleDbProvider) {}

	public async CreateUserTonWallet(TgaUser: TgaUserData, WalletData: UserTonWalletBody): Promise<UserTonWalletData> {
		const ExisitingWallet = await this.DrizzleProvider.query.UserTonWallet.findFirst({
			where: eq(UserTonWallet.telegramUserID, TgaUser.telegramUserID),
		});
		if (ExisitingWallet) {
			const DataToUpdate = ValidateData(ExisitingWallet, WalletData);
			return ExisitingWallet;
		}

		const DataToInsert = {
			telegramUserID: TgaUser.telegramUserID,
			UserFriendly: WalletData.UserFriendly,
			RawAddress: WalletData.RawAddress,
			BridgeKey: WalletData.BridgeKey,
			AppName: WalletData.AppName,
		};

		try {
			const newWallet = await this.DrizzleProvider.insert(UserTonWallet).values(DataToInsert).returning();
			return newWallet[0];
		} catch (err) {
			return null;
		}
	}
}

export { UserWalletService };
