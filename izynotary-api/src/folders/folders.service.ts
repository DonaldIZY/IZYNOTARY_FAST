import { Injectable } from '@nestjs/common';
import { CreateFolderDto } from './dto/create-folder.dto';
import { UpdateFolderDto } from './dto/update-folder.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Folder } from './entities/folder.entity';
import { EntityManager, Repository } from 'typeorm';
import { Step } from 'src/steps/entities/step.entity';

@Injectable()
export class FoldersService {

    constructor(
        @InjectRepository(Folder) private readonly folderRepository: Repository<Folder>,
        private readonly entityManager: EntityManager
    ) {}

    async create(createFolderDto: CreateFolderDto) {

        let step;

        if (createFolderDto.procedureType == 'Vente') {
            step = new Step({
                steps: [
                    {
                        stepNum: '1',
                        status: 'Non débuté',
                        action: 'Fourniture des pièces',
                        document: [],
                        comment: '',
                        editBy: ''
                    },
                    {
                        stepNum: '2',
                        status: 'Non débuté',
                        action: 'Rédaction l\'acte de vente',
                        document: [],
                        comment: '',
                        editBy: ''
                    },
                    {
                        stepNum: '3',
                        status: 'Non débuté',
                        action: 'Règlement total ou partiel des frais',
                        document: [],
                        comment: '',
                        editBy: ''
                    },
                    {
                        stepNum: '4',
                        status: 'Non débuté',
                        action: 'Signature de l\'acte de vente',
                        document: [],
                        comment: '',
                        editBy: ''
                    },
                    {
                        stepNum: '5',
                        status: 'Non débuté',
                        action: 'Dépôt de l\'acte signé',
                        document: [],
                        comment: '',
                        editBy: ''
                    },
                    {
                        stepNum: '6',
                        status: 'Non débuté',
                        action: 'Livrables',
                        document: [],
                        comment: '',
                        editBy: ''
                    }
                ]
            });
        } else if (createFolderDto.procedureType == 'Constitution de société' || createFolderDto.procedureType == 'Modification de société') {
            step = new Step({
                steps: [
                    {
                        stepNum: '1',
                        status: 'Non débuté',
                        action: 'Fourniture des pièces',
                        document: [],
                        comment: '',
                        editBy: ''
                    },
                    {
                        stepNum: '2',
                        status: 'Non débuté',
                        action: 'Rédaction des status',
                        document: [],
                        comment: '',
                        editBy: ''
                    },
                    {
                        stepNum: '3',
                        status: 'Non débuté',
                        action: 'Règlement total ou partiel des frais',
                        document: [],
                        comment: '',
                        editBy: ''
                    },
                    {
                        stepNum: '4',
                        status: 'Non débuté',
                        action: 'Signature des actes',
                        document: [],
                        comment: '',
                        editBy: ''
                    },
                    {
                        stepNum: '5',
                        status: 'Non débuté',
                        action: 'Dépôt des actes signés',
                        document: [],
                        comment: '',
                        editBy: ''
                    },
                    {
                        stepNum: '6',
                        status: 'Non débuté',
                        action: 'Livrables',
                        document: [],
                        comment: '',
                        editBy: ''
                    }
                ]
            });
        } else if (createFolderDto.procedureType == 'Succession de biens mobiliers') {
            step = new Step({
                steps: [
                    {
                        stepNum: '1',
                        status: 'Non débuté',
                        action: 'Fourniture des pièces',
                        document: [],
                        comment: '',
                        editBy: ''
                    },
                    {
                        stepNum: '2',
                        status: 'Non débuté',
                        action: 'Demande auprès de la banque',
                        document: [],
                        comment: '',
                        editBy: ''
                    },
                    {
                        stepNum: '3',
                        status: 'Non débuté',
                        action: 'Élaboration de la lettre de constitution',
                        document: [],
                        comment: '',
                        editBy: ''
                    },
                    {
                        stepNum: '4',
                        status: 'Non débuté',
                        action: 'Déclaration de la succession',
                        document: [],
                        comment: '',
                        editBy: ''
                    },
                    {
                        stepNum: '5',
                        status: 'Non débuté',
                        action: 'Livrables',
                        document: [],
                        comment: '',
                        editBy: ''
                    }
                ]
            });
        } else if (createFolderDto.procedureType == 'Succession de biens immobiliers ') {
            step = new Step({
                steps: [
                    {
                        stepNum: '1',
                        status: 'Non débuté',
                        action: 'Fourniture des pièces',
                        document: [],
                        comment: '',
                        editBy: ''
                    },
                    {
                        stepNum: '2',
                        status: 'Non débuté',
                        action: 'Règlement des frais',
                        document: [],
                        comment: '',
                        editBy: ''
                    },
                    {
                        stepNum: '3',
                        status: 'Non débuté',
                        action: 'Évaluation des différents biens immobiliers',
                        document: [],
                        comment: '',
                        editBy: ''
                    },
                    {
                        stepNum: '4',
                        status: 'Non débuté',
                        action: 'Déclaration de la succession',
                        document: [],
                        comment: '',
                        editBy: ''
                    },
                    {
                        stepNum: '5',
                        status: 'Non débuté',
                        action: 'Établissement de l\'attestation immobilière',
                        document: [],
                        comment: '',
                        editBy: ''
                    },
                    {
                        stepNum: '6',
                        status: 'Non débuté',
                        action: 'Dépôt de l\'attestion immobilière',
                        document: [],
                        comment: '',
                        editBy: ''
                    },
                    {
                        stepNum: '7',
                        status: 'Non débuté',
                        action: 'Livrables',
                        document: [],
                        comment: '',
                        editBy: ''
                    }
                ]
            });
        }

        const folder = new Folder({...createFolderDto});
        await this.entityManager.save(folder);
    }

    async findAll() {
        return await this.folderRepository.find();
    }

    async findOne(id: number) {
        return await this.folderRepository.findOneBy({ id });
    }

    async update(id: number, updateFolderDto: UpdateFolderDto) {
        const folder = await this.folderRepository.findOneBy({ id });
        Object.assign(folder, updateFolderDto);
        await this.entityManager.save(folder);
    }

    async remove(id: number) {
        await this.folderRepository.delete(id);
    }
     
}
