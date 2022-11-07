import { IFileService } from '@ports';
import { FileContent, FileName, FileType } from '@types';

const BLOB_TYPE = 'application/json';

export const useFileService = (): IFileService => {
    const exportFile = (name: FileName, content: FileContent, type: FileType = BLOB_TYPE): void => {
        const blob = new Blob([content], { type });
        const href = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = href;
        link.download = `${name}.json`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return { exportFile };
};