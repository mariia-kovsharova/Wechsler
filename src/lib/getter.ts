/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
// eslint-disable-next-line @typescript-eslint/ban-types
export function Getter<T extends Object>(target: T, propertyName: string) {
    Object.defineProperty(target, propertyName, {
        get: function () { return this['_' + propertyName]; },
        set: function (value: unknown) { this['_' + propertyName] = value; },
        enumerable: true,
        configurable: false,
        writable: false,
    });
}