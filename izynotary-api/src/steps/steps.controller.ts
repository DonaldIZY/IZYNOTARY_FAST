import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StepsService } from './steps.service';
import { CreateStepDto } from './dto/create-step.dto';
import { UpdateStepDto } from './dto/update-step.dto';

@Controller('steps')
export class StepsController {
    constructor(private readonly stepsService: StepsService) {}

    @Post()
    async create(@Body() createStepDto: CreateStepDto) {
        return this.stepsService.create(createStepDto);
    }

    @Get()
    async findAll() {
        return this.stepsService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return this.stepsService.findOne(+id);
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() updateStepDto: UpdateStepDto) {
        return this.stepsService.update(+id, updateStepDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        return this.stepsService.remove(+id);
    }
}
