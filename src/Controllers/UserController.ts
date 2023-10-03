//user controller

import { Autowire, BodyParam, Controller, Delete, Get, PathParam, Post, Put } from "@ibaraki-douji/api";
import { UserService } from "../Services/UserService";
import { User } from "../Models/UserModel";

@Controller('/users')
export class UserController {

    @Autowire()
    private userService: UserService;

    constructor() {}

    @Get('/:id')
    public getOne(
        @PathParam("id") id: number
    ) { 
        return this.userService.getUser(id);
    }

    @Get('/:email')
    public getOneByEmail(
        @PathParam("email") email: string
    ) { 
        return this.userService.getUserByEmail(email);
    }

    @Get('/')
    public async getAll() {
        return this.userService.getUsers();
    }

    @Post('/')
    public async create(
        @BodyParam() user: User
    ) {
        return this.userService.createUser(user);
    }

    @Put('/:id')
    public async update(
        @PathParam("id") id: number,
        @BodyParam() user: User
    ) {
        return this.userService.updateUser(id, user);
    }

    @Delete('/:id')
    public async delete(
        @PathParam("id") id: number
    ) {
        return this.userService.deleteUser(id);
    }

}
