export class CreateFolderDto {
    folderNum: string;
    procedureType: string;
    requiredFiles: any;
    progression: number;
    status: string;
    endDate: Date | null;
    customerId: number;
    sellerId: number;
}
