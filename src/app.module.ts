import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      { name: 'BOT_SERVICE', transport: Transport.TCP, options: { port: 5667 } },
    ]),
  ],
  controllers: [AppController]
})
export class AppModule {
}
