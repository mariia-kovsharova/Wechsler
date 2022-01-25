export const isNil = (value: unknown): value is null => {
    return value === null || typeof value === 'undefined';
};

export const formatClassNames = (names: { [key: string]: boolean }): string => Object.entries(names)
    .filter(([, value]) => !!value)
    .map(([key]) => key)
    .join(' ');

export const isNumber = (value: unknown): value is number => typeof value === 'number';

export const isString = (value: unknown): value is string => typeof value === 'string';

export const isNumericString = (str: string): boolean => /^\d*$/.test(str);

export const getCurrentDate = (): Date => new Date(Date.now());