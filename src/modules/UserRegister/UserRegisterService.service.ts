import { Inject, Injectable } from '@nestjs/common';
import { DizzleDbProvider, DRIZZLE } from '../drizzle/drizzle.module';

@Injectable()
class UserRegisterService {
	constructor(@Inject(DRIZZLE) private DrizzleProvider: DizzleDbProvider) {}
}

export { UserRegisterService };
