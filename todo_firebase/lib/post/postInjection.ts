import {PostManager} from "./presentation/manager/postManager";
import {CreatePost} from "./domain/usecase/createPost";
import {PostRepositoryImpl} from "./data/repository/postRepositoryImpl";
import {PostRemoteDatabaseImpl} from "./data/database/postRemoteDatabase";
import {PostRepository} from "./domain/repository/postRepository";

export function createContainer() {
    const postRepository: PostRepository = new PostRepositoryImpl(new PostRemoteDatabaseImpl());
    const createPost: CreatePost = new CreatePost(postRepository);
    const postManager: PostManager = new PostManager(createPost);

    return {
        postRepository,
        createPost,
        postManager,
    };
}

export type Container = ReturnType<typeof createContainer>;