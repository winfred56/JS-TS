export abstract class Equatable {
    abstract equals(other: Equatable): boolean;

    protected static checkEquality(props1: any[], props2: any[]): boolean {
        if (props1.length !== props2.length) {
            return false;
        }

        for (let i = 0; i < props1.length; i++) {
            if (props1[i] !== props2[i]) {
                return false;
            }
        }

        return true;
    }
}
