import { relations } from 'drizzle-orm';
import { pgTable, varchar, timestamp } from 'drizzle-orm/pg-core';
import { UserTonWallet } from './UserTonWallet.schema';

const TgaUser = pgTable('TgaUser', {
	telegramUserID: varchar({ length: 32 }).primaryKey(),
	username: varchar({ length: 255 }),
	firstName: varchar({ length: 255 }).notNull(),
	lastName: varchar({ length: 255 }).notNull(),
	languageCode: varchar({ length: 32 }).notNull(),
	photoUrl: varchar({ length: 255 }).notNull(),

	updatedAt: timestamp({ mode: 'date', precision: 3 }).$onUpdate(() => new Date()),
	created_at: timestamp({ mode: 'date', precision: 3 }).defaultNow().notNull(),
});

export const TgaUserRelations = relations(TgaUser, ({ one }) => ({
	TonWallet: one(UserTonWallet),
}));

type TgaUserData = typeof TgaUser.$inferInsert;

export type { TgaUserData };
export { TgaUser };
