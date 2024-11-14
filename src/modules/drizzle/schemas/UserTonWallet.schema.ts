import { pgTable, varchar, timestamp } from 'drizzle-orm/pg-core';
import { TgaUser } from './TgaUser.schema';
import { relations } from 'drizzle-orm';

const UserTonWallet = pgTable('TgaUserWallet', {
	telegramUserID: varchar({ length: 32 })
		.primaryKey()
		.references(() => TgaUser.telegramUserID),
	UserFriendly: varchar({ length: 256 }).notNull(),
	RawAddress: varchar({ length: 256 }).notNull(),
	BridgeKey: varchar({ length: 256 }),
	AppName: varchar({ length: 256 }),

	updatedAt: timestamp({ mode: 'date', precision: 3 }).$onUpdate(() => new Date()),
	created_at: timestamp({ mode: 'date', precision: 3 }).defaultNow().notNull(),
});

export const UserTonWalletRelations = relations(UserTonWallet, ({ one }) => ({
	user: one(TgaUser, { fields: [UserTonWallet.telegramUserID], references: [TgaUser.telegramUserID] }),
}));

type UserTonWalletData = typeof UserTonWallet.$inferSelect;

export type { UserTonWalletData };
export { UserTonWallet };
