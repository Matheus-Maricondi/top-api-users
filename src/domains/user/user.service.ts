import { IUserCreate, IUserUpdate } from '@entities/user.entity';
import { Injectable } from '@nestjs/common';
import { UserRepositoryService } from '@repositories/user/user.repository.service';

@Injectable()
export class UserService {
    constructor(
        private readonly userRepositoryService: UserRepositoryService,
    ) {}
    async findAll(): Promise<any | null> {
        return await this.userRepositoryService.findAll();
    }
    async create(user: IUserCreate): Promise<any> {
        return await this.userRepositoryService.create(user);
    }
    async update(user: IUserUpdate): Promise<any> {
        return await this.userRepositoryService.update(user);
    }
    async delete(user: { id: number }): Promise<any> {
        return await this.userRepositoryService.delete(user);
    }
}
