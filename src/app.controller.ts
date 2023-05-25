import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { SendMessageDto } from './dto/send-message.dto';

@Controller()
export class AppController {
  @Inject('BOT_SERVICE') private client: ClientProxy;

  @Post()
  getHello(@Body() sendMessageDto: SendMessageDto): Observable<string> {
    return this.client.send<string>('sendMessage', sendMessageDto);
  }
}
