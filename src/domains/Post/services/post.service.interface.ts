import { GetPostQuery, CreatePostQuery, DeletePostQuery } from "./graphql";

export namespace IGetPost {
    export interface IInput extends GetPostQuery.IVariable {}
}
export namespace ICreatePost {
    export interface IInput extends CreatePostQuery.IVariable {}
}
export namespace IDeletePost {
    export interface IInput extends DeletePostQuery.IVariable {}
}

export interface IPostService {
    // getPost (Anonymous)
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
    // createPost
    createPost(object: ICreatePost.IInput): Promise<{ id: string }>;
    // deletePost
    deletePost(id: IDeletePost.IInput): Promise<{ id: string } | undefined>;
}
