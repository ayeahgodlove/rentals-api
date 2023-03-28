import { User } from "../../entities/user";
import { IUser } from "../../../domain/models/user";

export interface IUserRepository {
    create(user: IUser): Promise<User>;
    findById(id: string): Promise<User | null>;
    findByName(userNo: string): Promise<User | null>;
    getAll(): Promise<User[]>;
    update(user: IUser): Promise<User>;
    delete(id: string): Promise<void>;
  }