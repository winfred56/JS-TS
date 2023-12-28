import { Post, PostClass } from '../entities/post';
import { Either } from '../../../../shared/utils/either';
import { Observable } from 'rxjs';
import {Failure} from "../../../../shared/error/failure";


export interface PostRepository {
    createPost(post: Post): Promise<Either<PostClass, Failure>>;
    deletePost(postID: string): Promise<Either<void, Failure>>;
    retrievePost(postID: string): Promise<Either<PostClass, Failure>>;
    listPosts(): Promise<Either<Observable<PostClass[]>, Failure>>;
}

export abstract class AbstractPostRepository implements PostRepository {
    abstract createPost(post: Post): Promise<Either<PostClass, Failure>>;
    abstract deletePost(postID: string): Promise<Either<void, Failure>>;
    abstract retrievePost(postID: string): Promise<Either<PostClass, Failure>>;
    abstract listPosts(): Promise<Either<Observable<PostClass[]>, Failure>>;
}
