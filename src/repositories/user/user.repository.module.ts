import { Module } from '@nestjs/common';
import { UserRepositoryService } from '@repositories/user/user.repository.service';

@Module({
    providers: [UserRepositoryService],
    exports: [UserRepositoryService],
})
export class UserRepositoryModule {}
