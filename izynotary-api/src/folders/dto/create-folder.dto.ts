export class CreateFolderDto {
    folderNum: string;
    procedureType: string;
    requiredFiles: any;
    progression: number;
    status: string;
    assignedToId: number;
    endDate: Date | null;
    customerId: number;
    sellerId: number;
}
