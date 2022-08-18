import {
    GetPostQuery,
    CreatePostQuery,
    DeletePostQuery,
    UpdatePostQuery,
} from "./graphql";

export namespace IGetPost {
    export interface IInput extends GetPostQuery.IVariable {}
}
export namespace ICreatePost {
    export interface IInput extends CreatePostQuery.IVariable {}
}
export namespace IDeletePost {
    export interface IInput extends DeletePostQuery.IVariable {}
}
export namespace IUpdatePost {
    export interface IInput extends UpdatePostQuery.IVariable {}
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
    // updatePost
    updatePost(
        pk_colums: IUpdatePost.IInput,
        _set: IUpdatePost.IInput
    ): Promise<{
        id: string;
        title: string;
        content: string;
        author: { nickname: string };
    }>;
}
