import { importUseCase } from '../domain/use-cases/ImportUseCase';
import { useConclusionDtoService } from './dto/conclusionDtoService';
import { useDateDtoService } from './dto/dateDtoService';
import { usePeriodDtoService } from './dto/periodDtoService';
import { useStudentDtoService } from './dto/studentDtoService';
import { usePeriodDispatchingService } from './periodDispatchingServiceAdapter';
import { useSerializationService } from './serializationAdapter';
import { useMetadataStorage, usePeriodStorage, useStudentStorage } from './storageAdapter';

export function useImportFile() {
    const metadataStorage = useMetadataStorage();
    const studentStorage = useStudentStorage();
    const periodStorage = usePeriodStorage();
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
                periodStorage, serializationService,
                studentDtoService, periodDtoService, dateDtoService,
                conclusionDtoService, periodDispatchingService,
            });

    return { importFile };
}