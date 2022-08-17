import { GetPostQuery, CreatePostQuery } from "./graphql";

export namespace IGetPost {
    export interface IInput extends GetPostQuery.IVariable {}
}
export namespace ICreatePost {
    export interface IInput extends CreatePostQuery.IVariable {}
}

export interface IPostService {
    // Anonymous ver.
    getPost(id: IGetPost.IInput): Promise<{
        author: {
            nickname: string;
        };
        id: string;
        title: string;
        content: string;
        createdAt: string;
        updatedAt: string;
    }>;
    createPost(object: ICreatePost.IInput): Promise<{ id: string }>;
}
