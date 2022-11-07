import { exportUseCase } from '../domain/use-cases/ExportUseCase';
import { useDateTransformService } from './dateTransformAdapter';
import { useConclusionDtoService } from './dto/conclusionDtoService';
import { useDateDtoService } from './dto/dateDtoService';
import { usePeriodDtoService } from './dto/periodDtoService';
import { useStudentDtoService } from './dto/studentDtoService';
import { useFileService } from './fileAdapter';
import { useNotificationService } from './notificationAdapter';
import { useSerializationService } from './serializationAdapter';
import { useMetadataStorage, usePeriodStorage, useStudentStorage } from './storageAdapter';

export function useExportFile() {
    const metadataStorage = useMetadataStorage();
    const studentStorage = useStudentStorage();
    const periodStorage = usePeriodStorage();
    const fileService = useFileService();
    const notificationService = useNotificationService();
    const serializationService = useSerializationService();
    const dateTransformService = useDateTransformService();
    const studentDtoService = useStudentDtoService();
    const periodDtoService = usePeriodDtoService();
    const dateDtoService = useDateDtoService();
    const conclusionDtoService = useConclusionDtoService();

    const exportFile = (): void =>
        exportUseCase({
            metadataStorage, studentStorage,
            periodStorage, fileService,
            notificationService, serializationService,
            dateTransformService, studentDtoService,
            periodDtoService, dateDtoService, conclusionDtoService,
        });

    return { exportFile };
}