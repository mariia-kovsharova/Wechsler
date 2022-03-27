import { isNil } from '../../../lib/utils';
import { IPeriod, SubtestName } from '../../types';

export abstract class Subtest {
    private readonly values: ReadonlyArray<number>;

    private _rawPoints: number | null;

    public name!: SubtestName;

    private normal: number;

    constructor(name: keyof IPeriod, values: ReadonlyArray<number>, normalPointValue: number) {
        this.name = name as SubtestName;
        this.values = values;
        this._rawPoints = null;
        this.normal = normalPointValue;
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

    public get scalePoints(): number | null {
        if (isNil(this.rawPoints)) {
            return null;
        }
        return this.values[this.rawPoints] ?? null;
    }

    public get normalPoints(): number | null {
        if (isNil(this.rawPoints)) {
            return null;
        }
        return this.normal;
    }

    public get isInvalid(): boolean {
        return !isNil(this.rawPoints) && isNil(this.values[this.rawPoints]);
    }

    public get isEmpty(): boolean {
        return this.rawPoints === null;
    }

    public get maxAvaiableValue(): number {
        return this.values.length;
    }
}
