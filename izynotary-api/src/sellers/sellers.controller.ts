import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { SellersService } from './sellers.service';
import { CreateSellerDto } from './dto/create-seller.dto';
import { UpdateSellerDto } from './dto/update-seller.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('sellers')
export class SellersController {
  constructor(private readonly sellersService: SellersService) {}

  @Post()
  @UseInterceptors(FileInterceptor('imageOfIdentification', {
    storage: diskStorage({
        destination: './uploads/sellers', // Dossier de destination
        filename: (req, file, callback) => {
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
            const ext = extname(file.originalname);
            callback(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
        },
    }),
  }))
  async create(@UploadedFile() file: Express.Multer.File, @Body() createSellerDto: CreateSellerDto) {
    
    const imageUrl = `/uploads/sellers/${file.filename}`;
    createSellerDto.imageOfIdentification = imageUrl;

    return this.sellersService.create(createSellerDto);
  }

  @Get()
  async findAll() {
    return this.sellersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.sellersService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateSellerDto: UpdateSellerDto) {
    return this.sellersService.update(+id, updateSellerDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.sellersService.remove(+id);
  }
}
