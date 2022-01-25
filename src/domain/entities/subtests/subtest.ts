import { isNil } from '../../../lib/utils';
import { Brand } from '../../types';

export type SubtestName = Brand<string, 'subtest'>;
// export type SubtestType = 'verbal' | 'inverbal';

export abstract class Subtest {
    private readonly values: ReadonlyArray<number>;

    private _rawPoints: number | null;

    // protected readonly type!: SubtestType;

    public name!: SubtestName;

    constructor(name: SubtestName, values: ReadonlyArray<number>) {
        this.name = name;
        this.values = values;
        this._rawPoints = null;
    }

    public set rawPoints(value: number | null) {
        if (!isNil(value)) {
            this._rawPoints = Math.max(value, 0);
        } else {
            this._rawPoints = value;
        }
    }

    public get rawPoints(): number | null {
        return this._rawPoints;
    }

    public getScalePoints(): number | null {
        if (isNil(this.rawPoints)) {
            return null;
        }
        return this.values[this.rawPoints] ?? null;
    }

    // public isVerbal(): boolean {
    //     return this.type === 'verbal';
    // }

    // public isInverbal(): boolean {
    //     return this.type === 'inverbal';
    // }

    public isEmpty(): boolean {
        return this.rawPoints === null;
    }
}
