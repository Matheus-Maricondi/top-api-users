import { Module } from '@nestjs/common';
import { UserModule } from '@domains/user/user.module';
import { KnexModule } from './knex/knex.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
     ConfigModule.forRoot({
      isGlobal: true,
    }),
    KnexModule,
    UserModule
  ]
})
export class AppModule {}
