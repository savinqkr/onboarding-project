import { GraphQLClient } from "graphql-request";
import { IGetPost, IPostService, ICreatePost } from "./post.service.interface";
import { GetPostQuery, CreatePostQuery } from "./graphql";

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
     * @param id
     * @returns -- board_by_pk : {{
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
        const { board_by_pk } = await this.client.request<
            GetPostQuery.IResponse,
            GetPostQuery.IVariable
        >(GetPostQuery.Document, id);

        return board_by_pk;
    }

    /**
     * createPost
     * @param {author_id, title, content}
     * @returns -- id
     */
    public async createPost(objects: ICreatePost.IInput) {
        const { insert_board_one } = await this.client.request<
            CreatePostQuery.IResponse,
            CreatePostQuery.IVariable
        >(CreatePostQuery.Document, objects, {
            Authorization:
                typeof window !== "undefined"
                    ? `Bearer ${window.localStorage.getItem("accessToken")}`
                    : "",
        });

        return insert_board_one;
    }
}

export default PostService.Instance;
