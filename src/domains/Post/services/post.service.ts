import { GraphQLClient } from "graphql-request";
import {
    IGetPost,
    IPostService,
    ICreatePost,
    IDeletePost,
    IUpdatePost,
} from "./post.service.interface";
import {
    GetPostQuery,
    CreatePostMutation,
    DeletePostMutation,
    UpdatePostMutation,
} from "./graphql";

class PostService implements IPostService {
    private static instance: PostService;
    private client = new GraphQLClient(
        process.env.NEXT_PUBLIC_HASURA_ENDPOINT ?? ""
    );
    public static get Instance(): PostService {
        return this.instance || (this.instance = new this());
    }

    /**
     * getPost
     * @param { id }
     * @returns postDetail -- board_by_pk : {
     *     author: {
     *         nickname: string;
     *     };
     *     id: string;
     *     title: string;
     *     content: string;
     *     createdAt: string;
     *     updatedAt: string;
     * }
     */
    public async getPost(id: IGetPost.IInput) {
        const { postDetail } = await this.client.request<
            GetPostQuery.IResponse,
            GetPostQuery.IVariable
        >(GetPostQuery.Document, id);

        return postDetail;
    }

    /**
     * createPost
     * @param { author_id, title, content }
     * @returns newPost -- insert_board_one {
     *
     * }
     */
    public async createPost(objects: ICreatePost.IInput) {
        const { newPost } = await this.client.request<
            CreatePostMutation.IResponse,
            CreatePostMutation.IVariable
        >(CreatePostMutation.Document, objects, {
            Authorization:
                typeof window !== "undefined"
                    ? `Bearer ${localStorage.getItem("accessToken")}`
                    : "",
        });

        return newPost;
    }

    /**
     * deletePost
     * @param { id }
     * @returns deletedPost -- delete_board_by_pk: {
     * id: string
     * }
     */
    public async deletePost(id: IDeletePost.IInput) {
        const { deletedPost } = await this.client.request<
            DeletePostMutation.IResponse,
            DeletePostMutation.IVariable
        >(DeletePostMutation.Document, id, {
            Authorization:
                typeof window !== "undefined"
                    ? `Bearer ${localStorage.getItem("accessToken")}`
                    : "",
        });

        return deletedPost;
    }

    /**
     * updatePost
     * @param { id, title, content }
     * @returns updatedPost -- update_board_by_pk: {
     * id: string
     * title: string
     * content: string
     * author : {
     * nickname: string}
     * }
     */
    public async updatePost(args: IUpdatePost.IInput) {
        const { updatedPost } = await this.client.request<
            UpdatePostMutation.IResponse,
            UpdatePostMutation.IVariable
        >(UpdatePostMutation.Document, args, {
            Authorization:
                typeof window !== "undefined"
                    ? `Bearer ${localStorage.getItem("accessToken")}`
                    : "",
        });

        return updatedPost;
    }
}

export default PostService.Instance;
