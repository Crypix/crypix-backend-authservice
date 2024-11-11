import { Inject, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Pool } from 'pg';

import { drizzle, NodePgDatabase } from 'drizzle-orm/node-postgres';

import * as schemas from './schemas/schema';

const DRIZZLE = Symbol('drizzle-connection');
type DizzleDbProvider = NodePgDatabase<typeof schemas>;

// const InjectSchema = (
//     entity: keyof typeof schemas,
//     dataSource: string = DRIZZLE,
//   ): ReturnType<typeof Inject> => Inject(getRepositoryToken(entity, dataSource));

@Module({
	providers: [
		{
			provide: DRIZZLE,
			inject: [ConfigService],
			useFactory: async (ConfigService: ConfigService) => {
				const pool = new Pool({
					connectionString: ConfigService.get<string>('DRIZZLE_AUTH_DB_CONN'),
				});
				return drizzle({ client: pool, schema: schemas }) as DizzleDbProvider;
			},
		},
	],
	exports: [DRIZZLE],
})
class DrizzleModule {}

export type { DizzleDbProvider };
export { DrizzleModule, DRIZZLE };
