/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFiles, UseGuards } from '@nestjs/common';
import { FoldersService } from './folders.service';
import { CreateFolderDto } from './dto/create-folder.dto';
import { UpdateFolderDto } from './dto/update-folder.dto';
import { AnyFilesInterceptor, FileFieldsInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import * as fs from 'fs';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('folders')
export class FoldersController {
    constructor(private readonly foldersService: FoldersService) { }

    @Post('selling')
    @UseInterceptors(
        AnyFilesInterceptor({
            storage: diskStorage({
                destination: (req, file, cb) => {
                    const folderNum = req.body.folderNum; // Récupération du numéro de dossier
                    const uploadPath = `./uploads/procedures/selling/${folderNum}`;

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
    async createSelling(
        @UploadedFiles() files: Express.Multer.File[],
        @Body() createFolderDto: CreateFolderDto
    ) {

        console.log('FILES : ', files)

        // Construction de l'objet requiredFiles avec les chemins des fichiers
        const uploadedFiles = {};
        files.forEach((file) => {
            uploadedFiles[file.fieldname] = `/uploads/procedures/selling/${createFolderDto.folderNum}/${file.filename}`;
        });

        // Assignation du champ requiredFiles au DTO
        createFolderDto.requiredFiles = uploadedFiles;
        createFolderDto.endDate = null;

        console.log("Final folder: ", createFolderDto);

        // Sauvegarde dans la base de données via le service
        return this.foldersService.create(createFolderDto);
    }

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

        console.log('FILES : ', files)

        // Construction de l'objet requiredFiles avec les chemins des fichiers
        const uploadedFiles = {};
        files.forEach((file) => {
            uploadedFiles[file.fieldname] = `/uploads/procedures/companyFormation/${createFolderDto.folderNum}/${file.filename}`;
        });

        // Assignation du champ requiredFiles au DTO
        createFolderDto.requiredFiles = uploadedFiles;
        createFolderDto.endDate = null;
        console.log("Final folder: ", createFolderDto);

        // Sauvegarde dans la base de données via le service
        return this.foldersService.create(createFolderDto);
    }

    @Post('companyModification')
    @UseInterceptors(
        AnyFilesInterceptor({
            storage: diskStorage({
                destination: (req, file, cb) => {
                    const folderNum = req.body.folderNum; // Récupération du numéro de dossier
                    const uploadPath = `./uploads/procedures/companyModification/${folderNum}`;

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
    async createCompanyModification(
        @UploadedFiles() files: Express.Multer.File[],
        @Body() createFolderDto: CreateFolderDto
    ) {

        console.log('FILES : ', files)

        // Construction de l'objet requiredFiles avec les chemins des fichiers
        const uploadedFiles = {};
        files.forEach((file) => {
            uploadedFiles[file.fieldname] = `/uploads/procedures/companyModification/${createFolderDto.folderNum}/${file.filename}`;
        });

        // Assignation du champ requiredFiles au DTO
        createFolderDto.requiredFiles = uploadedFiles;
        createFolderDto.endDate = null;
        console.log("Final folder: ", createFolderDto);

        // Sauvegarde dans la base de données via le service
        return this.foldersService.create(createFolderDto);
    }

    @Post('transferOfMovableProperty')
    @UseInterceptors(
        AnyFilesInterceptor({
            storage: diskStorage({
                destination: (req, file, cb) => {
                    const folderNum = req.body.folderNum; // Récupération du numéro de dossier
                    const uploadPath = `./uploads/procedures/transferOfMovableProperty/${folderNum}`;

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
    async createTransferOfMovableProperty(
        @UploadedFiles() files: Express.Multer.File[],
        @Body() createFolderDto: CreateFolderDto
    ) {

        console.log('FILES : ', files)

        // Construction de l'objet requiredFiles avec les chemins des fichiers
        const uploadedFiles = {};
        files.forEach((file) => {
            uploadedFiles[file.fieldname] = `/uploads/procedures/transferOfMovableProperty/${createFolderDto.folderNum}/${file.filename}`;
        });

        // Assignation du champ requiredFiles au DTO
        createFolderDto.requiredFiles = uploadedFiles;
        createFolderDto.endDate = null;
        console.log("Final folder: ", createFolderDto);

        // Sauvegarde dans la base de données via le service
        return this.foldersService.create(createFolderDto);
    }

    @Post('transferOfRealEstate')
    @UseInterceptors(
        AnyFilesInterceptor({
            storage: diskStorage({
                destination: (req, file, cb) => {
                    const folderNum = req.body.folderNum; // Récupération du numéro de dossier
                    const uploadPath = `./uploads/procedures/transferOfRealEstate/${folderNum}`;

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
    async createTransferOfRealEstate(
        @UploadedFiles() files: Express.Multer.File[],
        @Body() createFolderDto: CreateFolderDto
    ) {

        console.log('FILES : ', files)

        // Construction de l'objet requiredFiles avec les chemins des fichiers
        const uploadedFiles = {};
        files.forEach((file) => {
            uploadedFiles[file.fieldname] = `/uploads/procedures/transferOfRealEstate/${createFolderDto.folderNum}/${file.filename}`;
        });

        // Assignation du champ requiredFiles au DTO
        createFolderDto.requiredFiles = uploadedFiles;
        createFolderDto.endDate = null;
        console.log("Final folder: ", createFolderDto);

        // Sauvegarde dans la base de données via le service
        return this.foldersService.create(createFolderDto);
    }

    // @UseGuards(JwtAuthGuard)
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
