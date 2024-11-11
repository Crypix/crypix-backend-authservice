import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';
import { InitData } from '@telegram-apps/init-data-node';

@Controller()
export class AppController {
	constructor(private readonly appService: AppService) {}

	@MessagePattern({ cmd: 'AuthOrRegister' })
	AuthOrRegister(data: InitData) {
		return 'Hello world 2!';
	}
}
