import { exportUseCase } from '../domain/use-cases/ExportUseCase';
import { useMetadataStorage, usePeriodStorage, useStudentStorage } from '../repository/storageAdapter';
import { useDateTransformService } from './dateTransformAdapter';
import { useFileService } from './fileAdapter';
import { useNotificationService } from './notificationAdapter';
import { useSerializationService } from './serializationAdapter';

export function useExportFile() {
    const metadataStorage = useMetadataStorage();
    const studentStorage = useStudentStorage();
    const periodStorage = usePeriodStorage();
    const fileService = useFileService();
    const notificationService = useNotificationService();
    const serializationService = useSerializationService();
    const dateTransformService = useDateTransformService();

    const exportFile = (): void =>
        exportUseCase({
            metadataStorage, studentStorage,
            periodStorage, fileService,
            notificationService, serializationService,
            dateTransformService,
        });

    return { exportFile };
}