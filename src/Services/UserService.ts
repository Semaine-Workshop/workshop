//user service

import { Autowire, Service } from "@ibaraki-douji/api";
import { UserRepository } from "../Repositories/UserRepository";
import { User } from "../Models/UserModel";

@Service()
export class UserService {

    @Autowire()
    private userRepository: UserRepository;

    public async getUser(id: number) {
        return this.userRepository.get(id);
    }

    public async getUserByEmail(email: string) {
        return this.userRepository.getByEmail(email);
    }

    public async getUsers() {
        return this.userRepository.getAll();
    }

    public async createUser(user: User) {
        return this.userRepository.create(user);
    }

    public async updateUser(id: number, user: User) {
        return this.userRepository.update(id, user);
    }

    public async deleteUser(id: number) {
        return this.userRepository.delete(id);
    }
}