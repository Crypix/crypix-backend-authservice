import { Inject, Injectable } from '@nestjs/common';
import { DizzleDbProvider, DRIZZLE } from '../drizzle/drizzle.module';
import { type User as TgaUserType } from '@telegram-apps/init-data-node';
import { TgaUser, TgaUserData } from '../drizzle/schemas/TgaUser.schema';
import { eq } from 'drizzle-orm';
import { ValidateData } from 'src/utils/ValidateData';
import { UserService } from './UserService.service';

@Injectable()
class UserRegisterService {
	constructor(
		@Inject(DRIZZLE) private DrizzleProvider: DizzleDbProvider,
		private UserService: UserService,
	) {}

	public async RegisterUser(UserData: TgaUserType): Promise<TgaUserData> {
		const UserId = UserData.id.toString();
		const ExistingUser = await this.UserService.GetUser(UserData);
		if (ExistingUser) {
			const DataToUpdate = ValidateData(ExistingUser, UserData);
			return ExistingUser;
		}

		const DataToInsert = {
			telegramUserID: UserId,
			username: UserData?.username ?? null,
			firstName: UserData.firstName,
			lastName: UserData.lastName,
			languageCode: UserData.languageCode,
			photoUrl: UserData.photoUrl,
		};

		const NewUser = await this.DrizzleProvider.insert(TgaUser).values(DataToInsert).returning();
		return NewUser[0];
	}
}

export { UserRegisterService };
