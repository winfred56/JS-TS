import { Failure } from '../error/failure';
import { Either } from "../utils/either";
import {Equatable} from "../utils/equatable";

// Blueprint for all usecases in the app, mainly using Either
export abstract class Usecase<Type, Params> {
    // Contract call method
    abstract call(params: Params): Promise<Either<Type, Failure>>;
}


export class NoParams extends Equatable {
    get props(): any[] {
        return [];
    }

    equals(other: Equatable): boolean {
        if (other instanceof NoParams) {
            return Equatable.checkEquality(this.props, other.props);
        }
        return false;
    }
}

export class StringParams<Type> extends Equatable {
    constructor(public value: Type) {
        super();
    }

    get props(): any[] {
        return [this.value];
    }

    equals(other: Equatable): boolean {
        if (other instanceof StringParams) {
            return Equatable.checkEquality(this.props, other.props);
        }
        return false;
    }
}

export class ListStringParams extends Equatable {
    constructor(public values: string[]) {
        super();
    }

    get props(): any[] {
        return [this.values];
    }

    equals(other: Equatable): boolean {
        if (other instanceof ListStringParams) {
            return Equatable.checkEquality(this.props, other.props);
        }
        return false;
    }
}


// Used when usecases don't take any parameters
// export class NoParams extends Equatable {
//     get props(): any[] {
//         return [];
//     }
// }
//
// // Used for token/string value required usecases
// export class StringParams<Type> extends Equatable {
//     // Constructor
//     constructor(public value: Type) {
//         super();
//     }
//
//     get props(): any[] {
//         return [this.value];
//     }
// }
//
// // Used for a list of strings value required usecase
// export class ListStringParams extends Equatable {
//     // Constructor
//     constructor(public values: string[]) {
//         super();
//     }
//
//     get props(): any[] {
//         return [this.values];
//     }
// }