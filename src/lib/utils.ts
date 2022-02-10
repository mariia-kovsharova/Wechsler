export const isNil = (value: unknown): value is null => {
    return value === null || typeof value === 'undefined';
};

export const formatClassNames = (names: { [key: string]: boolean }): string => Object.entries(names)
    .filter(([, value]) => !!value)
    .map(([key]) => key)
    .join(' ');

export const isNumber = (value: unknown): value is number => typeof value === 'number';

export const isString = (value: unknown): value is string => typeof value === 'string';

export const isNumericString = (value: unknown): value is string => isString(value) && /^\d+$/.test(value);

export const getCurrentDate = (): Date => new Date(Date.now());

export const coerceToNumber = (value: unknown): number | null => {
    if (isNumber(value)) {
        return value;
    }

    if (isNumericString(value)) {
        return Number.parseInt(value, 10);
    }

    return null;
};

export const nameOf = <T>(prop: Extract<keyof T, string>): string => prop;

export const buildSubtestTranslateKey = (name: string): string => `subtest.${name}`;