import type { TgaUserData } from '../modules/drizzle/schemas/TgaUser.schema';
import type { UserTonWalletData } from '../modules/drizzle/schemas/UserTonWallet.schema';

interface UserFullData extends TgaUserData {
	TonWallet: UserTonWalletData;
}

export type { UserFullData };
