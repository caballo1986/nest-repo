import { Controller, Get, HttpCode, Req, Res, Param, ParseIntPipe, ParseBoolPipe, Query, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { ValidateuserPipe } from './pipes/validateuser/validateuser.pipe';
import { AuthGuard } from './guards/auth/auth.guard';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('/')
export class HelloController {
    @Get('/')
    index(@Req() request: Request, @Res() response: Response) {
        console.log("🚀 ~ HelloController ~ index ~ Request:", request.url)
        response.status(200).json({ 
            message: 'Incialando a Mother Facker',
        });
    }
    @Get('notfound')
    @HttpCode(404)
    notFoundPage() {
        return '404 not found';
    }
    @Get('error')
    @HttpCode(500)
    errorPage() {
        return '500 error';
    }
    @Get('new')
    @HttpCode(201)
    newPage() {
        return '201 created';
    }

    @Get('ticket/:num')  
    getNumber(@Param('num', ParseIntPipe)num: number) {
        return  num + 14;
    }

    @Get('active/:status')  
    isUserActive(@Param('status', ParseBoolPipe) status: boolean) {
        console.log("🚀 ~ HelloController ~ isUserActive ~ status:", status)
        return status ? 'active' : 'inactive';
    }

    @Get('greet')
    //@ApiOperation({ summary: 'crear un mensaje de saludo' })
    //@ApiTags('greet')
    //@ApiResponse({ status: 201, description: 'Mensaje de saludo' })
    @UseGuards(AuthGuard)
    greet(@Query(ValidateuserPipe) query: { name: string , age: number }) {
        console.log("🚀 ~ HelloController ~ greet ~ name:", typeof query.name)
        console.log("🚀 ~ HelloController ~ greet ~ age:", typeof query.age)
        return `Hello ${query.name}, you are ${query.age + 30} years old`;
    }


}
