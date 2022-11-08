import { ISerializationService, ISerializeParams, SerializeParams } from '@ports';
import { instanceToPlain, plainToClass } from 'class-transformer';

export const useSerializationService = (): ISerializationService => {
    const serialize = (params: ISerializeParams): string => {
        return JSON.stringify(instanceToPlain(params));
    };

    const deserialize = (json: string): ISerializeParams => {
        const result = JSON.parse(json) as string;
        return plainToClass(SerializeParams, result);
    };

    return { serialize, deserialize };
};