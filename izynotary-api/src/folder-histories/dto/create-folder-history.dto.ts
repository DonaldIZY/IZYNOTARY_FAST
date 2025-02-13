export class CreateFolderHistoryDto {
    actionType: string;
    madeBy: string;
    madeAt: Date;
    folderNumber: string;
    oldValue: any;
    newValue: any;
}
