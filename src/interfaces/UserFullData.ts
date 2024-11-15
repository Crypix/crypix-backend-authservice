import type { TgaUserData } from '@drizzle/schemas/TgaUser.schema';
import type { UserTonWalletData } from '@drizzle/schemas/UserTonWallet.schema';

interface UserFullData extends TgaUserData {
	TonWallet: UserTonWalletData;
}

export type { UserFullData };
