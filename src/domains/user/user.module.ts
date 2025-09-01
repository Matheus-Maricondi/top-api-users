import { Module } from '@nestjs/common';
import { UserConsumer } from '@domains/user/user.consumer';
import { UserService } from '@domains/user/user.service';
import { UserRepositoryModule } from '@repositories/user/user.repository.module';

@Module({
  imports: [
    UserRepositoryModule
  ],
  controllers: [UserConsumer],
  providers: [UserService]
})
export class UserModule {}
