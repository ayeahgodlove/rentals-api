// src/presentation/mappers/UserMapper.ts

import { User } from "../../data/entities/user";
import { IUser } from "../../domain/models/user";

export class UserMapper {
  toDTO(user: User): IUser {
    const userDTO: IUser = {
        id: `${user.id}`,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
        slug: user.slug,
        username: user.username,
        fullname: user.fullname,
        address: user.address,
        email: user.email,
        password: user.password,
        role: user.role
    };
    return userDTO;
  }
  toDTOs(users: User[]): IUser[] {
    const _users = users.map(user => {
      const userDTO: IUser = {
        id: `${user.id}`,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
        slug: user.slug,
        username: user.username,
        fullname: user.fullname,
        address: user.address,
        email: user.email,
        password: user.password,
        role: user.role
    };

      return userDTO
    })
    return _users;
  }
}
