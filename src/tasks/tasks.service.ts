import { Injectable , HttpCode, NotFoundException} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-tasks.dto';
import { UpdateTaskDto } from './dto/update-tasks.dto';

export interface User {
    name: string;
    age: number;
}
@Injectable()
export class TasksService {

    private tasks = [];
    getAllTasks() {
        return this.tasks;
    }
    createTask(task: CreateTaskDto) {
        console.log("🚀 ~ TasksService ~ createTask ~ task:", task)
        this.tasks.push({ 
            ...task,
            id: this.tasks.length + 1,
        });
        return task;
    }
    updateTask(task: UpdateTaskDto) {
        console.log("🚀 ~ TasksService ~ updateTask ~ task:", task)
        return 'Actualizando tareas';
    }
    deleteTask() {
        return 'Eliminando tareas';
    }   
    updateTaskstatus() {
        return 'Actualizando el estado de tareas';
    }
    getTask(id: number) {
        const taskFound = this.tasks.find(task => task.id === id);
        if (taskFound) {
            return taskFound;
        }   
        return new NotFoundException(`Task with id ${id} not found`);
        return 'no se encontro la tarea'
        throw new Error('Task not found');
    }
}