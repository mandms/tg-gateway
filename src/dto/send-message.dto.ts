import { IsMobilePhone, IsNotEmpty, IsString } from 'class-validator';

export class SendMessageDto {

  @IsString()
  @IsNotEmpty()
  message: string;

  @IsNotEmpty()
  @IsMobilePhone('ru-RU', null, {
    message: 'Номер телефона введен неверно',
  })
  phone: string;
}
