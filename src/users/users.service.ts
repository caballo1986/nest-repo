import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user-dto';
import { PrismaService } from '../prisma.service';

@Injectable()
export class UsersService {
    /*private users: any[] = [
      {
        id:1,
        name: 'John',
        phone: '123456789',
      } ,
      {
        id:2,
        name: 'Mary',
        phone: '987654321',
      } 
    ];*/
  constructor(private prisma: PrismaService) {}
  getUsers(){
        return this.prisma.user.findMany();
    }
  createUser(user: CreateUserDto) {
    return this.prisma.user.create({data: user});
    /*return {
      ...user,
      id: this.users.length + 1,
    }*/
    }
}
