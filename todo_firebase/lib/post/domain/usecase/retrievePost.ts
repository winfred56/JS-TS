import {Post, PostClass} from "../entities/post";
import {StringParams, Usecase} from "../../../../shared/usecase/usecase";
import {PostRepository} from "../repository/postRepository";
import {Either} from "../../../../shared/utils/either";
import {Failure} from "../../../../shared/error/failure";


export class RetrievePost implements Usecase<PostClass, StringParams<string>> {
    constructor(private readonly repository: PostRepository) {}

    async call(params: StringParams<string>): Promise<Either<PostClass, Failure>> {
        return await this.repository.retrievePost(params.value);
    }
}

