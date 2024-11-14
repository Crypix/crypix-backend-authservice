import { Inject, Injectable } from '@nestjs/common';
import { DizzleDbProvider, DRIZZLE } from '../drizzle/drizzle.module';
import { type User as TgaUserType } from '@telegram-apps/init-data-node';
import { TgaUser, TgaUserData } from '../drizzle/schemas/TgaUser.schema';
import { eq } from 'drizzle-orm';

@Injectable()
class UserService {
	constructor(@Inject(DRIZZLE) private DrizzleProvider: DizzleDbProvider) {}

	public async GetUser(UserData: TgaUserType, withWallet: boolean = true): Promise<TgaUserData> {
		const UserId = UserData.id.toString();
		return this.DrizzleProvider.query.TgaUser.findFirst({
			where: eq(TgaUser.telegramUserID, UserId),
			with: withWallet ? { TonWallet: true } : null,
		});
	}
}

export { UserService };
