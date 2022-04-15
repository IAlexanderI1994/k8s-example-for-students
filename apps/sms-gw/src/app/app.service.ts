import {Inject, Injectable, OnModuleInit} from '@nestjs/common';
import {ClientProxy} from "@nestjs/microservices";

@Injectable()
export class AppService implements OnModuleInit {

  constructor(
    @Inject('MATH_SERVICE') private client: ClientProxy,
  ) {}
  onModuleInit(): any {

    setInterval( async () => {
      const pattern = { cmd: 'sum' };
      const payload = [1, 2, 3];
      console.log('tick')
      try {
        await this.client.send<number>(pattern, payload).toPromise();

      }
      catch (e) {
        console.error(e.message, e.trace)
      }

    }, 2000)

  }

}
