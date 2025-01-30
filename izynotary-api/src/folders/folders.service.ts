import { Injectable } from '@nestjs/common';
import { CreateFolderDto } from './dto/create-folder.dto';
import { UpdateFolderDto } from './dto/update-folder.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Folder } from './entities/folder.entity';
import { EntityManager, Repository } from 'typeorm';
import { Step } from 'src/steps/entities/step.entity';
import { Customer } from 'src/customers/entities/customer.entity';

@Injectable()
export class FoldersService {

    constructor(
        @InjectRepository(Folder) private readonly folderRepository: Repository<Folder>,
        @InjectRepository(Customer) private readonly customerRepository: Repository<Customer>,
        private readonly entityManager: EntityManager
    ) {}

    async create(createFolderDto: CreateFolderDto) {

        const customer = await this.customerRepository.findOneBy({ id: createFolderDto.customerId });

        let step;

        if (createFolderDto.procedureType == 'Vente') {
            step = new Step({
                steps: [
                    {
                        "stepNum": '1',
                        "status": 'Terminée',
                        "action": 'Fourniture des pièces',
                        "documents": createFolderDto.requiredFiles,
                        "comment": '',
                        "editBy": ''
                    },
                    {
                        "stepNum": '2',
                        "status": 'Non débuté',
                        "action": 'Rédaction l\'acte de vente',
                        "documents": [],
                        "comment": '',
                        "editBy": ''
                    },
                    {
                        "stepNum": '3',
                        "status": 'Non débuté',
                        "action": 'Règlement total ou partiel des frais',
                        "documents": [],
                        "comment": '',
                        "editBy": ''
                    },
                    {
                        "stepNum": '4',
                        "status": 'Non débuté',
                        "action": 'Signature de l\'acte de vente',
                        "documents": [],
                        "comment": '',
                        "editBy": ''
                    },
                    {
                        "stepNum": '5',
                        "status": 'Non débuté',
                        "action": 'Dépôt de l\'acte signé',
                        "documents": [],
                        "comment": '',
                        "editBy": ''
                    },
                    {
                        "stepNum": '6',
                        "status": 'Non débuté',
                        "action": 'Livrables',
                        "documents": [],
                        "comment": '',
                        "editBy": ''
                    }
                ]
            });
        } else if (createFolderDto.procedureType == 'Constitution de société') {
            
            step = new Step({
                steps: [
                    {
                        "stepNum": '1',
                        "status": 'Terminée',
                        "action": 'Fourniture des pièces',
                        "documents": {
                            "customerCNI": {
                                "name": "CNI du client",
                                "path": createFolderDto.requiredFiles.customerCNI ? createFolderDto.requiredFiles.customerCNI : '',
                                "filled": createFolderDto.requiredFiles.customerCNI ? true : false,
                                "editBy": ''
                            },
                            "criminalRecord": {
                                "name": "Casier judiciaire",
                                "path": createFolderDto.requiredFiles.criminalRecord ? createFolderDto.requiredFiles.criminalRecord : '',
                                "filled": createFolderDto.requiredFiles.criminalRecord ? true : false,
                                "editBy": ''
                            },
                            "lease": {
                                "name": "Bail",
                                "path": createFolderDto.requiredFiles.lease ? createFolderDto.requiredFiles.lease : '',
                                "filled": createFolderDto.requiredFiles.lease ? true : false,
                                "editBy": ''
                            },
                            "sketchOfGeoLocation": {
                                "name": "Croquis de la situation géographique",
                                "path": createFolderDto.requiredFiles.sketchOfGeoLocation ? createFolderDto.requiredFiles.sketchOfGeoLocation : '',
                                "filled": createFolderDto.requiredFiles.sketchOfGeoLocation ? true : false,
                                "editBy": ''
                            },
                            "formForCompanyFormation": {
                                "name": "Fiche à renseigner de la société à consulter",
                                "path": createFolderDto.requiredFiles.formForCompanyFormation ? createFolderDto.requiredFiles.formForCompanyFormation : '',
                                "filled": createFolderDto.requiredFiles.formForCompanyFormation ? true : false,
                                "editBy": ''
                            },
                            "capitalToBeReleased": {
                                "name": "Capital à libérer",
                                "path": createFolderDto.requiredFiles.capitalToBeReleased ? createFolderDto.requiredFiles.capitalToBeReleased : '',
                                "filled": createFolderDto.requiredFiles.capitalToBeReleased ? true : false,
                                "editBy": ''
                            },

                        },
                        "comment": ''
                    },
                    {
                        "stepNum": '2',
                        "status": 'Non débuté',
                        "action": 'Rédaction des status',
                        "documents": {
                            "writingTheStatus": {
                                "name": "Rédaction des status",
                                "path": '',
                                "filled": false,
                                "editBy": ''
                            }
                        },
                        "comment": ''
                    },
                    {
                        "stepNum": '3',
                        "status": 'Non débuté',
                        "action": 'Règlement total ou partiel des frais',
                        "documents": {
                            "paymentOfFees": {
                                "name": "Règlement des frais",
                                "path": '',
                                "filled": false,
                                "editBy": ''
                            }
                        },
                        "comment": ''
                    },
                    {
                        "stepNum": '4',
                        "status": 'Non débuté',
                        "action": 'Signature des actes',
                        "documents": {
                            "documentsSigned": {
                                "name": "Actes signés par le client",
                                "path": '',
                                "filled": false,
                                "editBy": ''
                            }
                        },
                        "comment": ''
                    },
                    {
                        "stepNum": '5',
                        "status": 'Non débuté',
                        "action": 'Dépôt des actes signés',
                        "documents": {
                            "depositOfDocumentsSigned": {
                                "name": "Dépôt au CEPICI des actes signés",
                                "path": '',
                                "filled": false,
                                "editBy": ''
                            }
                        },
                        "comment": ''
                    },
                    {
                        "stepNum": '6',
                        "status": 'Non débuté',
                        "action": 'Livrables',
                        "documents": {
                            "acts": {
                                "name": "Actes",
                                "path": '',
                                "filled": false,
                                "editBy": ''
                            }
                        },
                        "comment": ''
                    }
                ]
            });
        } else if (createFolderDto.procedureType == 'Modificaion de société') {
            
            step = new Step({
                steps: [
                    {
                        "stepNum": '1',
                        "status": 'Terminée',
                        "action": 'Fourniture des pièces',
                        "documents": {
                            "customerCNI": {
                                "name": "CNI du client",
                                "path": createFolderDto.requiredFiles[0] ? createFolderDto.requiredFiles[0] : '',
                                "filled": createFolderDto.requiredFiles[0] ? true : false,
                                "editBy": ''
                            },
                            "RCCM": {
                                "name": "RCCM",
                                "path": createFolderDto.requiredFiles[1] ? createFolderDto.requiredFiles[1] : '',
                                "filled": createFolderDto.requiredFiles[1] ? true : false,
                                "editBy": ''
                            },
                            "status": {
                                "name": "Statut",
                                "path": createFolderDto.requiredFiles[2] ? createFolderDto.requiredFiles[2] : '',
                                "filled": createFolderDto.requiredFiles[2] ? true : false,
                                "editBy": ''
                            },
                            "DNSV": {
                                "name": "DNSV",
                                "path": createFolderDto.requiredFiles[3] ? createFolderDto.requiredFiles[3] : '',
                                "filled": createFolderDto.requiredFiles[3] ? true : false,
                                "editBy": ''
                            }
                        },
                        "comment": ''
                    },
                    {
                        "stepNum": '2',
                        "status": 'Non débuté',
                        "action": 'Rédaction des status',
                        "documents": {
                            "writingTheStatus": {
                                "name": "Rédaction des status",
                                "path": '',
                                "filled": false,
                                "editBy": ''
                            }
                        },
                        "comment": ''
                    },
                    {
                        "stepNum": '3',
                        "status": 'Non débuté',
                        "action": 'Règlement total ou partiel des frais',
                        "documents": {
                            "paymentOfFees": {
                                "name": "Règlement des frais",
                                "path": '',
                                "filled": false,
                                "editBy": ''
                            }
                        },
                        "comment": ''
                    },
                    {
                        "stepNum": '4',
                        "status": 'Non débuté',
                        "action": 'Signature des actes',
                        "documents": {
                            "documentsSigned": {
                                "name": "Actes modificatifs signés",
                                "path": '',
                                "filled": false,
                                "editBy": ''
                            }
                        },
                        "comment": ''
                    },
                    {
                        "stepNum": '5',
                        "status": 'Non débuté',
                        "action": 'Dépôt des actes signés',
                        "documents": {
                            "depositOfDocumentsSigned": {
                                "name": "Dépôt des Actes modificatifs signés à la Direction Générale des impôts",
                                "path": '',
                                "filled": false,
                                "editBy": ''
                            }
                        },
                        "comment": ''
                    },
                    {
                        "stepNum": '6',
                        "status": 'Non débuté',
                        "action": 'Livrables',
                        "documents": {
                            "acts": {
                                "name": "Actes",
                                "path": '',
                                "filled": false,
                                "editBy": ''
                            }
                        },
                        "comment": ''
                    }
                ]
            });
        } else if (createFolderDto.procedureType == 'Succession de biens mobiliers') {
            step = new Step({
                steps: [
                    {
                        "stepNum": '1',
                        "status": 'Terminée',
                        "action": 'Fourniture des pièces',
                        "documents": {
                            "customerCNI": {
                                "name": "CNI du client",
                                "path": createFolderDto.requiredFiles[0] ? createFolderDto.requiredFiles[0] : '',
                                "filled": createFolderDto.requiredFiles[0] ? true : false,
                                "editBy": ''
                            },
                            "birthCertificate": {
                                "name": "Extrait d'acte de naissance",
                                "path": createFolderDto.requiredFiles[1] ? createFolderDto.requiredFiles[1] : '',
                                "filled": createFolderDto.requiredFiles[1] ? true : false,
                                "editBy": ''
                            }
                        },
                        "comment": ''
                    },
                    {
                        "stepNum": '2',
                        "status": 'Non débuté',
                        "action": 'Demande auprès de la banque',
                        "documents": {
                            "deedOfSale": {
                                "name": "Acte de vente",
                                "path": '',
                                "filled": false,
                                "editBy": ''
                            }
                        },
                        "comment": ''
                    },
                    {
                        "stepNum": '3',
                        "status": 'Non débuté',
                        "action": 'Élaboration de la lettre de constitution',
                        "documents": {
                            "feeSettlement": {
                                "name": "Règlements des frais",
                                "path": '',
                                "filled": false,
                                "editBy": ''
                            }
                        },
                        "comment": ''
                    },
                    {
                        "stepNum": '4',
                        "status": 'Non débuté',
                        "action": 'Déclaration de la succession',
                        "documents": {
                            "declarationOfTheEstate": {
                                "name": "Déclaration de la succession auprès de la Direction Générale des Impôts",
                                "path": '',
                                "filled": false,
                                "editBy": ''
                            }
                        },
                        "comment": ''
                    },
                    {
                        "stepNum": '5',
                        "status": 'Non débuté',
                        "action": 'Dépôt auprès de la banque',
                        "documents": {
                            "depositOfRequiredDocuments": {
                                "name": "Dépôt des pièces requises par la banque",
                                "path": '',
                                "filled": false,
                                "editBy": ''
                            }
                        },
                        "comment": ''
                    },
                    {
                        "stepNum": '6',
                        "status": 'Non débuté',
                        "action": 'Livrables',
                        "documents": {
                            "statusOfRepayments ": {
                                "name": "État des reversements ",
                                "path": '',
                                "filled": false,
                                "editBy": ''
                            }
                        },
                        "comment": ''
                    }
                ]
            });
        } else if (createFolderDto.procedureType == 'Succession de biens immobiliers') {
            step = new Step({
                steps: [
                    {
                        "stepNum": '1',
                        "status": 'Terminée',
                        "action": 'Fourniture des pièces',
                        "documents": {
                            "cniOfRightsHolders": {
                                "name": "CNI du client",
                                "path": createFolderDto.requiredFiles[0] ? createFolderDto.requiredFiles[0] : '',
                                "filled": createFolderDto.requiredFiles[0] ? true : false,
                                "editBy": ''
                            },
                            "cniOfTheDonor": {
                                "name": "CNI du donateur",
                                "path": createFolderDto.requiredFiles[1] ? createFolderDto.requiredFiles[1] : '',
                                "filled": createFolderDto.requiredFiles[1] ? true : false,
                                "editBy": ''
                            },
                            "birthCertificateOfTheRightsHolders": {
                                "name": "Extrait d'acte de naissance",
                                "path": createFolderDto.requiredFiles[2] ? createFolderDto.requiredFiles[2] : '',
                                "filled": createFolderDto.requiredFiles[2] ? true : false,
                                "editBy": ''
                            }
                        },
                        "comment": ''
                    },
                    {
                        "stepNum": '2',
                        "status": 'Non débuté',
                        "action": 'Règlement des frais',
                        "documents": {
                            "paymentOfFees": {
                                "name": "Règlement des frais",
                                "path": '',
                                "filled": false,
                                "editBy": ''
                            }
                        },
                        "comment": ''
                    },
                    {
                        "stepNum": '3',
                        "status": 'Non débuté',
                        "action": 'Évaluation des différents biens immobiliers',
                        "documents": {
                            "evaluationOfDifferentRealEstate": {
                                "name": "Évaluation des différents biens immobiliers",
                                "path": '',
                                "filled": false,
                                "editBy": ''
                            }
                        },
                        "comment": ''
                    },
                    {
                        "stepNum": '4',
                        "status": 'Non débuté',
                        "action": 'Déclaration de la succession',
                        "documents": {
                            "statementOfTheSuccession": {
                                "name": "Déclaration de la succession auprès de la Direction Générale des Impôts",
                                "path": '',
                                "filled": false,
                                "editBy": ''
                            }
                        },
                        "comment": ''
                    },
                    {
                        "stepNum": '5',
                        "status": 'Non débuté',
                        "action": 'Établissement de l\'attestation immobilière',
                        "documents": {
                            "RealEstateAttestation": {
                                "name": "Établissement de l'attestation immobilière",
                                "path": '',
                                "filled": false,
                                "editBy": ''
                            }
                        },
                        "comment": ''
                    },
                    {
                        "stepNum": '6',
                        "status": 'Non débuté',
                        "action": 'Dépôt de l\'attestion immobilière',
                        "documents": {
                            "depositOfRealEstateCertificate": {
                                "name": "Dépôt de la dite attestation immobilière auprès de la Direction Générale des Impôts",
                                "path": '',
                                "filled": false,
                                "editBy": ''
                            }
                        },
                        "comment": ''
                    },
                    {
                        "stepNum": '7',
                        "status": 'Non débuté',
                        "action": 'Livrables',
                        "documents": {
                            "statusOfRepayments": {
                                "name": "État des reversements",
                                "path": '',
                                "filled": false,
                                "editBy": ''
                            }
                        },
                        "comment": ''
                    }
                ]
            });
        }

        const folder = new Folder({
            ...createFolderDto
        });

        folder.step = step;
        folder.customer = customer;

        await this.entityManager.save(folder);
    }

    async findAll() {
        return await this.folderRepository.find({relations: {customer: true, step: true}});
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
