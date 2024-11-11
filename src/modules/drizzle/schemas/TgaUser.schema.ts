import { integer, pgTable, varchar, timestamp } from 'drizzle-orm/pg-core';

const TgaUser = pgTable('TgaUser', {
	telegramID: integer().primaryKey(),
	firstName: varchar({ length: 255 }).notNull(),
	lastName: varchar({ length: 255 }).notNull(),
	languageCode: varchar({ length: 32 }).notNull(),

	created_at: timestamp().defaultNow().notNull(),
});

export { TgaUser };
