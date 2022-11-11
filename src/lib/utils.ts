export const isNil = (value: unknown): value is null => {
    return value === null || typeof value === 'undefined';
};

export const formatClassNames = (names: { [key: string]: boolean }): string =>
    Object.entries(names)
        .filter(([, value]) => !!value)
        .map(([key]) => key)
        .join(' ');

export const isNumber = (value: unknown): value is number =>
    typeof value === 'number';

export const isString = (value: unknown): value is string =>
    typeof value === 'string';

export const isNumericString = (value: unknown): value is string =>
    isString(value) && /^\d+$/.test(value);

export const isPrimitive = (value: unknown): boolean => {
    return (
        value === null ||
        typeof value === 'string' ||
        typeof value === 'boolean' ||
        typeof value === 'number' ||
        typeof value === 'undefined'
    );
};

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

export const buildSubtestTranslateKey = (name: string): string =>
    `subtest.${name}`;

export const deepCopy = <T>(source: T): T => {
    return Array.isArray(source)
        ? source.map((item) => deepCopy(item))
        : source instanceof Date
        ? new Date(source.getTime())
        : source && typeof source === 'object'
        ? Object.getOwnPropertyNames(source).reduce((o, prop) => {
              Object.defineProperty(
                  o,
                  prop,
                  Object.getOwnPropertyDescriptor(source, prop)!,
              );
              o[prop] = deepCopy((source as { [key: string]: any })[prop]);
              return o;
          }, Object.create(Object.getPrototypeOf(source)))
        : (source as T);
};
