import { Failure } from '../../../../shared/error/failure';
import { Post, PostClass } from '../entities/post';
import { PostRepository } from '../repository/postRepository';
import { Equatable } from '../../../../shared/utils/equatable';
import {Either} from "../../../../shared/utils/either";
import {Usecase} from "../../../../shared/usecase/usecase";

export class CreatePostParams extends Equatable {
    constructor(public post: Post) {
        super();
    }

    get props(): any[] {
        return [this.post];
    }

    equals(other: Equatable): boolean {
        if (other instanceof CreatePostParams) {
            return Equatable.checkEquality(this.props, other.props);
        }
        return false;
    }
}

export class CreatePost implements Usecase<PostClass, CreatePostParams> {
    constructor(private readonly repository: PostRepository) {}

    async call(params: CreatePostParams): Promise<Either<PostClass, Failure>> {
        return await this.repository.createPost(params.post);
    }
}
