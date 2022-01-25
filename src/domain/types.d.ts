export type Brand<T, B extends string> = T & { readonly _brand: B };

export type TestConclusion = Brand<string, 'wexler_test'>;

export type TestDate = Brand<Date, 'wexler_test'>;
