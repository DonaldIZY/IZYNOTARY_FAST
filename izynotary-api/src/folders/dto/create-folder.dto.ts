export class CreateFolderDto {
    folderNum: string;
    procedureType: string;
    requiredFiles: any;
    status: string;
    assignedToId: number;
    endDate: Date | null;
    customerId: number;
    sellerId: number;
}
