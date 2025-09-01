import { Controller } from '@nestjs/common';
import { UserService } from '@domains/user/user.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class UserConsumer {
    constructor(private readonly user: UserService) {}

    @MessagePattern('users')
    async getAll() {
       return await this.user.findAll()
    }

    @MessagePattern('user_create')
    async create(@Payload() data: any) {
       return await this.user.create(data)
    }

    @MessagePattern('user_update')
    async update(@Payload() data: any) {
        return await this.user.update(data)
    }

    @MessagePattern('user_delete')
    async delete(@Payload() data: any) {
        return await this.user.delete(data)
    }
}