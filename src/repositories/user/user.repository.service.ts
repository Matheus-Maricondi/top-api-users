import { Injectable, Inject } from '@nestjs/common';
import { IUserCreate, IUserUpdate } from '@entities/user.entity';
import { Knex } from 'knex';

@Injectable()
export class UserRepositoryService {
    constructor(
        @Inject('KNEX_CONNECTION') private readonly knex: Knex
  ) {}

    async findAll(): Promise<any | null> {
        const users: any = await this.knex<any>('users')
        return users;
    }
    async create(user: IUserCreate): Promise<IUserCreate[]> {
        return await this.knex<IUserCreate>('users').insert(user).returning('*');
    }
    async update(user: IUserUpdate): Promise<IUserUpdate[]> {
        return await this.knex<IUserUpdate>('users').where({ id: user.id }).update(user).returning('*');
    }
    async delete(user: { id: number }): Promise<any> {
        return await this.knex<IUserUpdate>('users').where({ id: user.id }).delete().returning('*');
    }
}