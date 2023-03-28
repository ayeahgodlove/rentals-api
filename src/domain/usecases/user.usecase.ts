import { IUserRepository } from "../../data/repositories/contracts/iuser.repository";
import { User } from "../../data/entities/user";
import { IUser } from "../models/user";

export class UserUseCase {
    /**
     *
     */
    constructor(private readonly userRepository: IUserRepository) {}

    async createUser(user: IUser): Promise<User> {
        const existingUser = await this.userRepository.findByName(user.username);
    
        if (existingUser) {
          throw new Error('User already exists');
        }
    
        // const _user = new User({user}); 
        //because it's already done in the Repository
        return this.userRepository.create(user);
      }
    
      async getAll(): Promise<User[]> {
        return this.userRepository.getAll();
      }

      async getUserById(id: string): Promise<User | null> {
        return this.userRepository.findById(id);
      }
    
      async getUserByName(user: IUser): Promise<User | null> {
        const _user = await this.userRepository.findByName(user.username);
    
        if (!_user) {
          return null;
        }
    
        return _user;
      }
    
      async updateUser(user: IUser): Promise<User> {
        return this.userRepository.update(user);
      }
    
      async deleteUser(id: string): Promise<void> {
        return this.userRepository.delete(id);
      }
}
