import { ISerializationService, ISerializeParams } from '../domain/ports';
import { instanceToPlain } from 'class-transformer';

export const useSerializationService = (): ISerializationService => {
    const serialize = (params: ISerializeParams): string => {
        return JSON.stringify(instanceToPlain(params));
    };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const deserialize = (_data: string): void => {
        return;
    };

    return { serialize, deserialize };
};