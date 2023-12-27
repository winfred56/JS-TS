import {PostRepository} from "../../domain/repository/postRepository";
import {Post, PostClass} from "../../domain/entities/post";
import {Either} from "../../../../shared/utils/either";
import {Failure} from "../../../../shared/error/failure";
import {Observable} from "rxjs";
import {PostRemoteDatabase} from "../database/postRemoteDatabase";

export class PostRepositoryImpl implements PostRepository{
    constructor(private readonly postRemoteDatabase: PostRemoteDatabase) {}

    async createPost(post: Post): Promise<Either<PostClass, Failure>> {
        try {
            // Assuming postRemoteDatabase.createPost returns a PostClass
            const createdPost = await this.postRemoteDatabase.createPost(post);
            return { success: true, value: createdPost };
        } catch (error) {
            // Handle errors, assuming the error is a Failure type
            if (error instanceof Failure) {
                return { success: false, value: error };
            } else {
                // Handle other types of errors or rethrow if needed
                console.error("Unexpected error:", error);
                throw new Failure("Unexpected error occurred.");
            }
        }
    }

}