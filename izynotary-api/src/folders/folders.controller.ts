import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFiles } from '@nestjs/common';
import { FoldersService } from './folders.service';
import { CreateFolderDto } from './dto/create-folder.dto';
import { UpdateFolderDto } from './dto/update-folder.dto';
import { AnyFilesInterceptor, FileFieldsInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import * as fs from 'fs';
import { GenerateID } from 'src/utils/generateID.util';

@Controller('folders')
export class FoldersController {
    constructor(private readonly foldersService: FoldersService) {}

    @Post('companyFormation')
    @UseInterceptors(
        AnyFilesInterceptor({
            storage: diskStorage({
                destination: (req, file, cb) => {
                    const folderNum = req.body.folderNum; // Récupération du numéro de dossier
                    const uploadPath = `./uploads/procedures/companyFormation/${folderNum}`;

                    // Vérifier et créer le dossier si nécessaire
                    if (!fs.existsSync(uploadPath)) {
                        fs.mkdirSync(uploadPath, { recursive: true });
                    }

                    cb(null, uploadPath);
                },
                filename: (req, file, cb) => {
                    const ext = extname(file.originalname);
                    cb(null, `${file.fieldname}${ext}`);
                },
            }),
        }),
    )
    
    async createCompanyFormation(
        @UploadedFiles() files: Express.Multer.File[],
        @Body() createFolderDto: CreateFolderDto
    ) {

        console.log('FILES : ',files)

        // Construction de l'objet requiredFiles avec les chemins des fichiers
        const uploadedFiles = {};
        files.forEach((file) => {
            uploadedFiles[file.fieldname] = `/uploads/procedures/companyFormation/${createFolderDto.folderNum}/${file.filename}`;
        });

        // Assignation du champ requiredFiles au DTO
        createFolderDto.requiredFiles = uploadedFiles;

        console.log("Final folder: ", createFolderDto);

        // Sauvegarde dans la base de données via le service
        return this.foldersService.create(createFolderDto);
    }

    @Post('companyModification')
    @UseInterceptors(
        FileFieldsInterceptor(
            [
                { name: 'requiredFiles[customerCNI]', maxCount: 1 },
                { name: 'requiredFiles[RCCM]', maxCount: 1 },
                { name: 'requiredFiles[status]', maxCount: 1 },
                { name: 'requiredFiles[DNSV]', maxCount: 1 },
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
    async createCompanyModification(
        @UploadedFiles() files: Record<string, Express.Multer.File[]>,
        @Body() createFolderDto: CreateFolderDto
    ) {

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

    @Post('transferOfMovableProperty')
    @UseInterceptors(
        FileFieldsInterceptor(
            [
                { name: 'requiredFiles[customerCNI]', maxCount: 1 },
                { name: 'requiredFiles[birthCertificate]', maxCount: 1 },
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
    async createTransferOfMovableProperty(
        @UploadedFiles() files: Record<string, Express.Multer.File[]>,
        @Body() createFolderDto: CreateFolderDto
    ) {

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

    @Post('transferOfRealEstate')
    @UseInterceptors(
        FileFieldsInterceptor(
            [
                { name: 'requiredFiles[cniOfRightsHolders]', maxCount: 1 },
                { name: 'requiredFiles[cniOfTheDonor]', maxCount: 1 },
                { name: 'requiredFiles[birthCertificateOfTheRightsHolders]', maxCount: 1 },
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
    async createTransferOfRealEstate(
        @UploadedFiles() files: Record<string, Express.Multer.File[]>,
        @Body() createFolderDto: CreateFolderDto
    ) {

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
