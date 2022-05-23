import { isNil } from '../../../lib/utils';
import { IPeriodSubtests, ISubtest, SubtestName } from '../../types';

export abstract class Subtest implements ISubtest {
    protected readonly values: ReadonlyArray<number>;

    private _rawPoints: number | null;

    public name!: SubtestName;

    private normal: number;

    constructor(
        name: keyof IPeriodSubtests,
        values: ReadonlyArray<number>,
        normalPointValue: number,
        rawPoints: number | null,
    ) {
        this.name = name as SubtestName;
        this.values = values;
        this.normal = normalPointValue;
        this._rawPoints = rawPoints;
    }

    public abstract update(points: number | null): ISubtest;

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
