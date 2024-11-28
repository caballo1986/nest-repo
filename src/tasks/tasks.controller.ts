import { Body, Controller, Delete, Get, Patch, Post, Put, Query, Param, UsePipes, ValidationPipe } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-tasks.dto';
import { UpdateTaskDto } from './dto/update-tasks.dto';

@Controller('/tasks')
export class TasksController  {
    TasksService: TasksService;
    constructor(private tasksService: TasksService) {
        this.tasksService = tasksService;
    }
    
    @Get()
    getAllTasks(@Query() query: any) {
        console.log("🚀 ~ TasksController ~ getAllTasks ~ query:", query)
        return this.tasksService.getAllTasks();
    }

    @Get('/:id')
    getTask(@Param('id') id: string) {
        return this.tasksService.getTask(parseInt(id));
    }
    /*@Get('/')
    index() {
        return 'Incialando a Mother Facker';
    }*/
    @Post()
    @UsePipes(new ValidationPipe())
    createTask(@Body()  task: CreateTaskDto) {
        return this.tasksService.createTask(task);
    }
    @Put()
    updateTask(@Body() task: UpdateTaskDto) {
        return this.tasksService.updateTask(task);
    }
    @Delete()
    deleteTask() {
        return this.tasksService.deleteTask();
    }
    @Patch()
    updateTaskstatus() {
        return this.tasksService.updateTaskstatus();
    }
}