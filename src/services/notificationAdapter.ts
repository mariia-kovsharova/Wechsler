import { INotificationService } from '../domain/ports';

export const useNotificationService = (): INotificationService => {
    return {
        // TODO: as temp service
        notify: (message: string) => window.alert(message),
    };
};