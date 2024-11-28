import { UsersService } from './users.service';
import { Controller,Get ,Post, Body ,UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user-dto';

@Controller()
export class UsersController {
    constructor(private UsersService: UsersService){}

    @Get('/users')
    getAllTasks(){
       return this.UsersService.getUsers();
    }

    @Post('/users')
    //@UsePipes(new ValidationPipe())
    createUser(@Body() user: CreateUserDto) {
        return this.UsersService.createUser(user);
    }
}
