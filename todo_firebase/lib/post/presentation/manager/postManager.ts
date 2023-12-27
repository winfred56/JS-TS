import {CreatePost, CreatePostParams} from "../../domain/usecase/createPost";
import {Post} from "../../domain/entities/post";
import {Either} from "../../../../shared/utils/either";
import {Failure} from "../../../../shared/error/failure";

class PostManager {
    constructor(
        private readonly createPost: CreatePost,
    ) {}

    async createPostImplementation(post: Post): Promise<Either<Post, Failure>> {
        return await this.createPost.call(new CreatePostParams(post));
    }

}

export { PostManager };