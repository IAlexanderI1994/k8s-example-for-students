import {Module} from '@nestjs/common';
import {ClientsModule, Transport} from "@nestjs/microservices";
import {AppService} from './app.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'MATH_SERVICE',
        transport: Transport.TCP,
        options: {
          port: 3001,
          host: process.env.SMS_SERVICE_HOST,
        }
      },
    ]),
  ],
  providers: [AppService],
})
export class AppModule {
}
