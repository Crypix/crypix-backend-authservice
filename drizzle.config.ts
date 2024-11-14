import 'dotenv/config';
import { config } from 'dotenv';
import { defineConfig } from 'drizzle-kit';

config({ path: '../crypix-infrastructure/.main.env' });

export default defineConfig({
	schema: './src/modules/drizzle/schemas/schema.ts',
	dialect: 'postgresql',
	dbCredentials: {
		url: process.env.DRIZZLE_AUTH_DB_CONN,
	},
});
