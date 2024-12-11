import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IdentifierService } from './identifier.service';
import { CreateIdentifierDto } from './dto/create-identifier.dto';
import { UpdateIdentifierDto } from './dto/update-identifier.dto';

@Controller('identifier')
export class IdentifierController {
	
	constructor(private readonly identifierService: IdentifierService) {}

	@Post()
	async create(@Body() createIdentifierDto: CreateIdentifierDto) {
		return this.identifierService.create(createIdentifierDto);
	}

	@Get()
	async findAll() {
		return this.identifierService.findAll();
	}

	@Get(':id')
	async findOne(@Param('id') id: string) {
		return this.identifierService.findOne(+id);
	}

	@Patch(':id')
	async update(@Param('id') id: string, @Body() updateIdentifierDto: UpdateIdentifierDto) {
		return this.identifierService.update(+id, updateIdentifierDto);
	}

	@Delete(':id')
	async remove(@Param('id') id: string) {
		return this.identifierService.remove(+id);
	}

}
