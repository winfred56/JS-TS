import {NoParams, Usecase} from "../../../../shared/usecase/usecase";
import {PostClass} from "../entities/post";
import {PostRepository} from "../repository/postRepository";
import {Either} from "../../../../shared/utils/either";
import {Failure} from "../../../../shared/error/failure";
import {Observable} from "rxjs";

export class ListPosts implements Usecase<Observable<PostClass[]>, NoParams> {
    constructor(private readonly repository: PostRepository) {}

    async call(params: NoParams): Promise<Either<Observable<PostClass[]>, Failure>> {
        return this.repository.listPosts();
    }
}

