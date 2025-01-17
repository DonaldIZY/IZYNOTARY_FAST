import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFiles } from '@nestjs/common';
import { FoldersService } from './folders.service';
import { CreateFolderDto } from './dto/create-folder.dto';
import { UpdateFolderDto } from './dto/update-folder.dto';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('folders')
export class FoldersController {
    constructor(private readonly foldersService: FoldersService) {}

    @Post()
    @UseInterceptors(
        FileFieldsInterceptor(
            [
                { name: 'requiredFiles[customerCNI]', maxCount: 1 },
                { name: 'requiredFiles[criminalRecord]', maxCount: 1 },
                { name: 'requiredFiles[lease]', maxCount: 1 },
                { name: 'requiredFiles[sketchOfGeoLocation]', maxCount: 1 },
                { name: 'requiredFiles[formForCompanyFormation]', maxCount: 1 },
                { name: 'requiredFiles[capitalToBeReleased]', maxCount: 1 },
            ],
            {
                storage: diskStorage({
                    destination: './uploads/procedures',
                    filename: (req, file, callback) => {
                        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
                        const ext = extname(file.originalname);
                        callback(null, `${file.fieldname.replace('requiredFiles[', '').replace(']', '')}-${uniqueSuffix}${ext}`);
                    },
                }),
            },
        ),
    )
    async create(
        @UploadedFiles() files: Record<string, Express.Multer.File[]>,
        @Body() createFolderDto: CreateFolderDto
    ) {
        console.log('📂 Fichiers reçus:', files);

        // Construction de l'objet requiredFiles avec les chemins des fichiers
        const uploadedFiles = {};
        Object.keys(files).forEach((key) => {
            uploadedFiles[key.replace('requiredFiles[', '').replace(']', '')] = `/uploads/procedures/${files[key][0].filename}`;
        });

        // Assignation du champ requiredFiles au DTO
        createFolderDto.requiredFiles = uploadedFiles;

        // Sauvegarde dans la base de données via le service
        return this.foldersService.create(createFolderDto);
    }

    @Get()
    async findAll() {
        return this.foldersService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return this.foldersService.findOne(+id);
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() updateFolderDto: UpdateFolderDto) {
        return this.foldersService.update(+id, updateFolderDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        return this.foldersService.remove(+id);
    }
}
