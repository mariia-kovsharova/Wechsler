import { importUseCase } from '../domain/use-cases/ImportUseCase';
import { useMetadataStorage, usePeriodStorage, useStudentStorage } from '../repository/storageAdapter';
import { useConclusionDtoService } from './dto/conclusionDtoService';
import { useDateDtoService } from './dto/dateDtoService';
import { usePeriodDtoService } from './dto/periodDtoService';
import { useStudentDtoService } from './dto/studentDtoService';
import { useNotificationService } from './notificationAdapter';
import { usePeriodDispatchingService } from './periodDispatchingServiceAdapter';
import { useSerializationService } from './serializationAdapter';

export function useImportFile() {
    const metadataStorage = useMetadataStorage();
    const studentStorage = useStudentStorage();
    const periodStorage = usePeriodStorage();
    const notificationService = useNotificationService();
    const serializationService = useSerializationService();
    const studentDtoService = useStudentDtoService();
    const periodDtoService = usePeriodDtoService();
    const dateDtoService = useDateDtoService();
    const conclusionDtoService = useConclusionDtoService();
    const periodDispatchingService = usePeriodDispatchingService();

    const importFile = (fileContent: string): void =>
        importUseCase(fileContent,
            {
                metadataStorage, studentStorage,
                periodStorage, notificationService,
                serializationService, studentDtoService,
                periodDtoService, dateDtoService,
                conclusionDtoService, periodDispatchingService,
            });

    return { importFile };
}