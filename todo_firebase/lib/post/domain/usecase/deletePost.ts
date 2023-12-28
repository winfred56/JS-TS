import {StringParams, Usecase} from "../../../../shared/usecase/usecase";
import {PostRepository} from "../repository/postRepository";
import {Either} from "../../../../shared/utils/either";
import {Failure} from "../../../../shared/error/failure";

export class DeletePost implements Usecase<void, StringParams<string>> {
    constructor(private readonly repository: PostRepository) {}

    async call(params: StringParams<string>): Promise<Either<void, Failure>> {
        return await this.repository.deletePost(params.value);
    }
}

