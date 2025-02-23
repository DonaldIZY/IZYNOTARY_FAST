/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from 'src/customers/entities/customer.entity';
import { Seller } from 'src/sellers/entities/seller.entity';
import { Step } from 'src/steps/entities/step.entity';
import { User } from 'src/users/entities/user.entity';
import { EntityManager, Repository } from 'typeorm';
import { CreateFolderDto } from './dto/create-folder.dto';
import { UpdateFolderDto } from './dto/update-folder.dto';
import { Folder } from './entities/folder.entity';

@Injectable()
export class FoldersService {

    constructor(
        @InjectRepository(Folder) private readonly folderRepository: Repository<Folder>,
        @InjectRepository(Customer) private readonly customerRepository: Repository<Customer>,
        @InjectRepository(Seller) private readonly sellerRepository: Repository<Seller>,
        @InjectRepository(User) private readonly userRepository: Repository<User>,
        private readonly entityManager: EntityManager
    ) { }

    async create(createFolderDto: CreateFolderDto) {

        const customer = await this.customerRepository.findOneBy({ id: createFolderDto.customerId });

        const seller = createFolderDto.procedureType == 'Vente' ? await this.sellerRepository.findOneBy({ id: createFolderDto.sellerId }) : null;

        const assignedTo = await this.userRepository.findOneBy({ id: createFolderDto.assignedToId });

        let step;

        if (createFolderDto.procedureType == 'Vente') {
            step = new Step({
                steps: [
                    {
                        "stepNum": '1',
                        "status":
                            createFolderDto.requiredFiles.sellerCNI &&
                                createFolderDto.requiredFiles.partnerCNI &&
                                createFolderDto.requiredFiles.certificateOfBirthOrMarriage &&
                                createFolderDto.requiredFiles.CIEOrSODECIInvoice &&
                                createFolderDto.requiredFiles.taxStatusCertificate &&
                                createFolderDto.requiredFiles.titleDeed &&
                                createFolderDto.requiredFiles.landRegistry &&
                                createFolderDto.requiredFiles.certificateOfLocation ? 'Terminé' : 'En cours',
                        "action": 'Fourniture des pièces',
                        "documents": {
                            "sellerCNI": {
                                "name": "CNI du vendeur",
                                "path": createFolderDto.requiredFiles.sellerCNI ? createFolderDto.requiredFiles.sellerCNI : '',
                                "filled": createFolderDto.requiredFiles.sellerCNI ? true : false,
                                "editBy": '',
                                "allowed": false,
                                "disallowed": false
                            },
                            "partnerCNI": {
                                "name": "CNI du conjoint",
                                "path": createFolderDto.requiredFiles.partnerCNI ? createFolderDto.requiredFiles.partnerCNI : '',
                                "filled": createFolderDto.requiredFiles.partnerCNI ? true : false,
                                "editBy": '',
                                "allowed": false,
                                "disallowed": false
                            },
                            "certificateOfBirthOrMarriage": {
                                "name": "Extrait d'acte de naissance ou de mariage",
                                "path": createFolderDto.requiredFiles.certificateOfBirthOrMarriage ? createFolderDto.requiredFiles.certificateOfBirthOrMarriage : '',
                                "filled": createFolderDto.requiredFiles.certificateOfBirthOrMarriage ? true : false,
                                "editBy": '',
                                "allowed": false,
                                "disallowed": false
                            },
                            "CIEOrSODECIInvoice": {
                                "name": "Facture de CIE ou SODECI",
                                "path": createFolderDto.requiredFiles.CIEOrSODECIInvoice ? createFolderDto.requiredFiles.CIEOrSODECIInvoice : '',
                                "filled": createFolderDto.requiredFiles.CIEOrSODECIInvoice ? true : false,
                                "editBy": '',
                                "allowed": false,
                                "disallowed": false
                            },
                            "taxStatusCertificate": {
                                "name": "Attestation de situation fiscale",
                                "path": createFolderDto.requiredFiles.taxStatusCertificate ? createFolderDto.requiredFiles.taxStatusCertificate : '',
                                "filled": createFolderDto.requiredFiles.taxStatusCertificate ? true : false,
                                "editBy": '',
                                "allowed": false,
                                "disallowed": false
                            },
                            "titleDeed": {
                                "name": "Titre de propriété",
                                "path": createFolderDto.requiredFiles.titleDeed ? createFolderDto.requiredFiles.titleDeed : '',
                                "filled": createFolderDto.requiredFiles.titleDeed ? true : false,
                                "editBy": '',
                                "allowed": false,
                                "disallowed": false
                            },
                            "landRegistry": {
                                "name": "État foncier",
                                "path": createFolderDto.requiredFiles.landRegistry ? createFolderDto.requiredFiles.landRegistry : '',
                                "filled": createFolderDto.requiredFiles.landRegistry ? true : false,
                                "editBy": '',
                                "allowed": false,
                                "disallowed": false
                            },
                            "certificateOfLocation": {
                                "name": "Certificat de localisation",
                                "path": createFolderDto.requiredFiles.certificateOfLocation ? createFolderDto.requiredFiles.certificateOfLocation : '',
                                "filled": createFolderDto.requiredFiles.certificateOfLocation ? true : false,
                                "editBy": '',
                                "allowed": false,
                                "disallowed": false
                            }
                        },
                        "comment": '',
                        "startDate": new Date(),
                        "endDate":
                            createFolderDto.requiredFiles.sellerCNI &&
                                createFolderDto.requiredFiles.partnerCNI &&
                                createFolderDto.requiredFiles.certificateOfBirthOrMarriage &&
                                createFolderDto.requiredFiles.CIEOrSODECIInvoice &&
                                createFolderDto.requiredFiles.taxStatusCertificate &&
                                createFolderDto.requiredFiles.titleDeed &&
                                createFolderDto.requiredFiles.landRegistry &&
                                createFolderDto.requiredFiles.certificateOfLocation ? new Date() : null
                    },
                    {
                        "stepNum": '2',
                        "status":
                            createFolderDto.requiredFiles.sellerCNI &&
                                createFolderDto.requiredFiles.partnerCNI &&
                                createFolderDto.requiredFiles.certificateOfBirthOrMarriage &&
                                createFolderDto.requiredFiles.CIEOrSODECIInvoice &&
                                createFolderDto.requiredFiles.taxStatusCertificate &&
                                createFolderDto.requiredFiles.titleDeed &&
                                createFolderDto.requiredFiles.landRegistry &&
                                createFolderDto.requiredFiles.certificateOfLocation ? 'En cours' : 'Non débuté',

                        "action": 'Rédaction l\'acte de vente',
                        "documents": {
                            "deedOfSale": {
                                "name": "Acte de vente",
                                "path": '',
                                "filled": false,
                                "editBy": ''
                            }
                        },
                        "comment": '',
                        "startDate": null,
                        "endDate": null
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
                        "comment": '',
                        "startDate": null,
                        "endDate": null
                    },
                    {
                        "stepNum": '4',
                        "status": 'Non débuté',
                        "action": 'Signature de l\'acte de vente',
                        "documents": {
                            "deedOfSaleSigned": {
                                "name": "Acte de vente signé par l'acquéreur et le vendeur",
                                "path": '',
                                "filled": false,
                                "editBy": ''
                            }
                        },
                        "comment": '',
                        "startDate": null,
                        "endDate": null
                    },
                    {
                        "stepNum": '5',
                        "status": 'Non débuté',
                        "action": "Dépôt de l'acte signé",
                        "documents": {
                            "deedOfSaleDeposited": {
                                "name": "Dépôt de l'acte signé à la Direction Générale des Impôts",
                                "path": '',
                                "filled": false,
                                "editBy": ''
                            }
                        },
                        "comment": '',
                        "startDate": null,
                        "endDate": null
                    },
                    {
                        "stepNum": '6',
                        "status": 'Non débuté',
                        "action": 'Livrables',
                        "documents": {
                            "deedOfSale": {
                                "name": "Acte de vente",
                                "path": '',
                                "filled": false,
                                "editBy": ''
                            },
                            "CMPF": {
                                "name": "CMPF",
                                "path": '',
                                "filled": false,
                                "editBy": ''
                            }
                        },
                        "comment": '',
                        "startDate": null,
                        "endDate": null
                    }
                ]
            });
        } else if (createFolderDto.procedureType == 'Constitution de société') {

            step = new Step({
                steps: [
                    {
                        "stepNum": '1',
                        "status":
                            createFolderDto.requiredFiles.customerCNI &&
                                createFolderDto.requiredFiles.criminalRecord &&
                                createFolderDto.requiredFiles.lease &&
                                createFolderDto.requiredFiles.sketchOfGeoLocation &&
                                createFolderDto.requiredFiles.formForCompanyFormation &&
                                createFolderDto.requiredFiles.capitalToBeReleased ? 'Terminé' : "En cours",
                        "action": 'Fourniture des pièces',
                        "documents": {
                            "customerCNI": {
                                "name": "CNI du client",
                                "path": createFolderDto.requiredFiles.customerCNI ? createFolderDto.requiredFiles.customerCNI : '',
                                "filled": createFolderDto.requiredFiles.customerCNI ? true : false,
                                "editBy": '',
                                "allowed": false,
                                "disallowed": false
                            },
                            "criminalRecord": {
                                "name": "Casier judiciaire",
                                "path": createFolderDto.requiredFiles.criminalRecord ? createFolderDto.requiredFiles.criminalRecord : '',
                                "filled": createFolderDto.requiredFiles.criminalRecord ? true : false,
                                "editBy": '',
                                "allowed": false,
                                "disallowed": false
                            },
                            "lease": {
                                "name": "Contrat de bail",
                                "path": createFolderDto.requiredFiles.lease ? createFolderDto.requiredFiles.lease : '',
                                "filled": createFolderDto.requiredFiles.lease ? true : false,
                                "editBy": '',
                                "allowed": false,
                                "disallowed": false
                            },
                            "sketchOfGeoLocation": {
                                "name": "Croquis de la situation géographique",
                                "path": createFolderDto.requiredFiles.sketchOfGeoLocation ? createFolderDto.requiredFiles.sketchOfGeoLocation : '',
                                "filled": createFolderDto.requiredFiles.sketchOfGeoLocation ? true : false,
                                "editBy": '',
                                "allowed": false,
                                "disallowed": false
                            },
                            "formForCompanyFormation": {
                                "name": "Fiche à renseigner de la société à consulter",
                                "path": createFolderDto.requiredFiles.formForCompanyFormation ? createFolderDto.requiredFiles.formForCompanyFormation : '',
                                "filled": createFolderDto.requiredFiles.formForCompanyFormation ? true : false,
                                "editBy": '',
                                "allowed": false,
                                "disallowed": false
                            },
                            "capitalToBeReleased": {
                                "name": "Capital à libérer",
                                "path": createFolderDto.requiredFiles.capitalToBeReleased ? createFolderDto.requiredFiles.capitalToBeReleased : '',
                                "filled": createFolderDto.requiredFiles.capitalToBeReleased ? true : false,
                                "editBy": '',
                                "allowed": false,
                                "disallowed": false
                            },

                        },
                        "comment": '',
                        "startDate": new Date(),
                        "endDate":
                            createFolderDto.requiredFiles.customerCNI &&
                                createFolderDto.requiredFiles.criminalRecord &&
                                createFolderDto.requiredFiles.lease &&
                                createFolderDto.requiredFiles.sketchOfGeoLocation &&
                                createFolderDto.requiredFiles.formForCompanyFormation &&
                                createFolderDto.requiredFiles.capitalToBeReleased ? new Date() : null
                    },
                    {
                        "stepNum": '2',
                        "status":
                            createFolderDto.requiredFiles.customerCNI &&
                                createFolderDto.requiredFiles.criminalRecord &&
                                createFolderDto.requiredFiles.lease &&
                                createFolderDto.requiredFiles.sketchOfGeoLocation &&
                                createFolderDto.requiredFiles.formForCompanyFormation &&
                                createFolderDto.requiredFiles.capitalToBeReleased ? 'En cours' : 'Non débuté',
                        "action": 'Rédaction des statuts',
                        "documents": {
                            "writingTheStatus": {
                                "name": "Rédaction des statuts",
                                "path": '',
                                "filled": false,
                                "editBy": ''
                            }
                        },
                        "comment": '',
                        "startDate": null,
                        "endDate": null
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
                        "comment": '',
                        "startDate": null,
                        "endDate": null
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
                        "comment": '',
                        "startDate": null,
                        "endDate": null
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
                        "comment": '',
                        "startDate": null,
                        "endDate": null
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
                        "comment": '',
                        "startDate": null,
                        "endDate": null
                    }
                ]
            });
        } else if (createFolderDto.procedureType == 'Modification de société') {

            step = new Step({
                steps: [
                    {
                        "stepNum": '1',
                        "status":
                            createFolderDto.requiredFiles.customerCNI &&
                                createFolderDto.requiredFiles.RCCM &&
                                createFolderDto.requiredFiles.Statut &&
                                createFolderDto.requiredFiles.DNSV ? 'Terminé' : 'En cours',
                        "action": 'Fourniture des pièces',
                        "documents": {
                            "customerCNI": {
                                "name": "CNI du client",
                                "path": createFolderDto.requiredFiles.customerCNI ? createFolderDto.requiredFiles.customerCNI : '',
                                "filled": createFolderDto.requiredFiles.customerCNI ? true : false,
                                "editBy": ''
                            },
                            "RCCM": {
                                "name": "RCCM",
                                "path": createFolderDto.requiredFiles.RCCM ? createFolderDto.requiredFiles.RCCM : '',
                                "filled": createFolderDto.requiredFiles.RCCM ? true : false,
                                "editBy": ''
                            },
                            "status": {
                                "name": "Statut",
                                "path": createFolderDto.requiredFiles.Statut ? createFolderDto.requiredFiles.Statut : '',
                                "filled": createFolderDto.requiredFiles.Statut ? true : false,
                                "editBy": ''
                            },
                            "DNSV": {
                                "name": "DNSV",
                                "path": createFolderDto.requiredFiles.DNSV ? createFolderDto.requiredFiles.DNSV : '',
                                "filled": createFolderDto.requiredFiles.DNSV ? true : false,
                                "editBy": ''
                            }
                        },
                        "comment": '',
                        "startDate": new Date(),
                        "endDate":
                            createFolderDto.requiredFiles.customerCNI &&
                                createFolderDto.requiredFiles.RCCM &&
                                createFolderDto.requiredFiles.Statut &&
                                createFolderDto.requiredFiles.DNSV ? new Date() : null
                    },
                    {
                        "stepNum": '2',
                        "status":
                            createFolderDto.requiredFiles.customerCNI &&
                                createFolderDto.requiredFiles.RCCM &&
                                createFolderDto.requiredFiles.Statut &&
                                createFolderDto.requiredFiles.DNSV ? 'En cours' : 'Non débuté',
                        "action": 'Rédaction des statuts',
                        "documents": {
                            "writingTheStatus": {
                                "name": "Rédaction des statuts",
                                "path": '',
                                "filled": false,
                                "editBy": ''
                            }
                        },
                        "comment": '',
                        "startDate": null,
                        "endDate": null
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
                        "comment": '',
                        "startDate": null,
                        "endDate": null
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
                        "comment": '',
                        "startDate": null,
                        "endDate": null
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
                        "comment": '',
                        "startDate": null,
                        "endDate": null
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
                        "comment": '',
                        "startDate": null,
                        "endDate": null
                    }
                ]
            });
        } else if (createFolderDto.procedureType == 'Succession de biens mobiliers') {
            step = new Step({
                steps: [
                    {
                        "stepNum": '1',
                        "status":
                            createFolderDto.requiredFiles.customerCNI &&
                                createFolderDto.requiredFiles.birthCertificate ? 'Terminé' : 'En cours',
                        "action": 'Fourniture des pièces',
                        "documents": {
                            "customerCNI": {
                                "name": "CNI du client",
                                "path": createFolderDto.requiredFiles.customerCNI ? createFolderDto.requiredFiles.customerCNI : '',
                                "filled": createFolderDto.requiredFiles.customerCNI ? true : false,
                                "editBy": ''
                            },
                            "birthCertificate": {
                                "name": "Extrait d'acte de naissance",
                                "path": createFolderDto.requiredFiles.birthCertificate ? createFolderDto.requiredFiles.birthCertificate : '',
                                "filled": createFolderDto.requiredFiles.birthCertificate ? true : false,
                                "editBy": ''
                            }
                        },
                        "comment": '',
                        "startDate": new Date(),
                        "endDate":
                            createFolderDto.requiredFiles.customerCNI &&
                                createFolderDto.requiredFiles.birthCertificate ? new Date() : null
                    },
                    {
                        "stepNum": '2',
                        "status":
                            createFolderDto.requiredFiles.customerCNI &&
                                createFolderDto.requiredFiles.birthCertificate ? 'En cours' : 'Non débuté',
                        "action": 'Demande auprès de la banque',
                        "documents": {
                            "deedOfSale": {
                                "name": "Acte de vente",
                                "path": '',
                                "filled": false,
                                "editBy": ''
                            }
                        },
                        "comment": '',
                        "startDate": null,
                        "endDate": null
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
                        "comment": '',
                        "startDate": null,
                        "endDate": null
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
                        "comment": '',
                        "startDate": null,
                        "endDate": null
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
                        "comment": '',
                        "startDate": null,
                        "endDate": null
                    },
                    {
                        "stepNum": '6',
                        "status": 'Non débuté',
                        "action": 'Livrables',
                        "documents": {
                            "statusOfRepayments ": {
                                "name": "État des reversements",
                                "path": '',
                                "filled": false,
                                "editBy": ''
                            }
                        },
                        "comment": '',
                        "startDate": null,
                        "endDate": null
                    }
                ]
            });
        } else if (createFolderDto.procedureType == 'Succession de biens immobiliers') {
            step = new Step({
                steps: [
                    {
                        "stepNum": '1',
                        "status":
                            createFolderDto.requiredFiles.cniOfRightsHolders &&
                                createFolderDto.requiredFiles.cniOfTheDonor &&
                                createFolderDto.requiredFiles.birthCertificateOfTheRightsHolders ? 'Terminé' : 'En cours',
                        "action": 'Fourniture des pièces',
                        "documents": {
                            "cniOfRightsHolders": {
                                "name": "CNI du client",
                                "path": createFolderDto.requiredFiles.cniOfRightsHolders ? createFolderDto.requiredFiles.cniOfRightsHolders : '',
                                "filled": createFolderDto.requiredFiles.cniOfRightsHolders ? true : false,
                                "editBy": ''
                            },
                            "cniOfTheDonor": {
                                "name": "CNI du donateur",
                                "path": createFolderDto.requiredFiles.cniOfTheDonor ? createFolderDto.requiredFiles.cniOfTheDonor : '',
                                "filled": createFolderDto.requiredFiles.cniOfTheDonor ? true : false,
                                "editBy": ''
                            },
                            "birthCertificateOfTheRightsHolders": {
                                "name": "Extrait d'acte de naissance",
                                "path": createFolderDto.requiredFiles.birthCertificateOfTheRightsHolders ? createFolderDto.requiredFiles.birthCertificateOfTheRightsHolders : '',
                                "filled": createFolderDto.requiredFiles.birthCertificateOfTheRightsHolders ? true : false,
                                "editBy": ''
                            }
                        },
                        "comment": '',
                        "startDate": new Date(),
                        "endDate":
                            createFolderDto.requiredFiles.cniOfRightsHolders &&
                                createFolderDto.requiredFiles.cniOfTheDonor &&
                                createFolderDto.requiredFiles.birthCertificateOfTheRightsHolders ? new Date() : null
                    },
                    {
                        "stepNum": '2',
                        "status":
                            createFolderDto.requiredFiles.cniOfRightsHolders &&
                                createFolderDto.requiredFiles.cniOfTheDonor &&
                                createFolderDto.requiredFiles.birthCertificateOfTheRightsHolders ? 'En cours' : 'Non débuté',
                        "action": 'Règlement des frais',
                        "documents": {
                            "paymentOfFees": {
                                "name": "Règlement des frais",
                                "path": '',
                                "filled": false,
                                "editBy": ''
                            }
                        },
                        "comment": '',
                        "startDate": null,
                        "endDate": null
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
                        "comment": '',
                        "startDate": null,
                        "endDate": null
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
                        "comment": '',
                        "startDate": null,
                        "endDate": null
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
                        "comment": '',
                        "startDate": null,
                        "endDate": null
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
                        "comment": '',
                        "startDate": null,
                        "endDate": null
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
                        "comment": '',
                        "startDate": null,
                        "endDate": null
                    }
                ]
            });
        }

        console.log("STEP : ", step);

        const folder = new Folder({
            ...createFolderDto
        });

        folder.step = step;
        folder.customer = customer;
        folder.seller = seller;
        folder.assignedTo = assignedTo;

        let count = 0;
        let countDoc = 0;

        for (const elem of step.steps) {
            for (const docValue of Object.values(elem.documents)) {
                if (docValue["filled"]) {
                    count++;
                }
                countDoc++;
            }
        }


        folder.progression = count / countDoc

        await this.entityManager.save(folder);
    }

    async findAll() {
        return await this.folderRepository.find({ relations: ['customer', 'step', 'assignedTo'] });
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
