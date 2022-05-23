import { IFileService } from '../domain/ports';
import { FileContent, FileName, FileType } from '../domain/types';

const BLOB_TYPE = 'application/json';

export const useFileService = (): IFileService => {
    const exportFile = (name: FileName, content: FileContent, type: FileType = BLOB_TYPE): void => {
        const blob = new Blob([content], { type });
        const href = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = href;
        // TODO: to dispatcher
        link.download = `${name}.json`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return { exportFile };
};