import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('customers')
export class CustomersController {
    constructor(private readonly customersService: CustomersService) {}

    @Post()
    @UseInterceptors(FileInterceptor('imageOfIdentification', {
        storage: diskStorage({
            destination: './uploads', // Dossier de destination
            filename: (req, file, callback) => {
                const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
                const ext = extname(file.originalname);
                callback(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
            },
        }),
    }))
    async create(@UploadedFile() file: Express.Multer.File, @Body() createCustomerDto: CreateCustomerDto) {
        
        const imageUrl = `/uploads/${file.filename}`;
        createCustomerDto.imageOfIdentification = imageUrl;

        return this.customersService.create(createCustomerDto);
    }

    @Get()
    async findAll() {
        return this.customersService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return this.customersService.findOne(+id);
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() updateCustomerDto: UpdateCustomerDto) {
        return this.customersService.update(+id, updateCustomerDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        return this.customersService.remove(+id);
    }
}
