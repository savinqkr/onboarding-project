import { GraphQLClient } from "graphql-request";
import {
    IGetPost,
    IPostService,
    ICreatePost,
    IDeletePost,
} from "./post.service.interface";
import { GetPostQuery, CreatePostQuery, DeletePostQuery } from "./graphql";

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
     * @returns postDetails -- board_by_pk : {
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
        const { postDetails } = await this.client.request<
            GetPostQuery.IResponse,
            GetPostQuery.IVariable
        >(GetPostQuery.Document, id);

        return postDetails;
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
            CreatePostQuery.IResponse,
            CreatePostQuery.IVariable
        >(CreatePostQuery.Document, objects, {
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
            DeletePostQuery.IResponse,
            DeletePostQuery.IVariable
        >(DeletePostQuery.Document, id, {
            Authorization:
                typeof window !== "undefined"
                    ? `Bearer ${localStorage.getItem("accessToken")}`
                    : "",
        });

        return deletedPost;
    }
}

export default PostService.Instance;
