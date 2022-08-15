import { GraphQLClient } from "graphql-request";
import {
    IGetBoard,
    IBoardService,
    ICreateBoard,
} from "./board.service.interface";
import { GetBoardQuery, CreateBoardQuery } from "./graphql";

class BoardService implements IBoardService {
    private static instance: BoardService;
    private client = new GraphQLClient(
        process.env.NEXT_PUBLIC_HASURA_ENDPOINT ?? ""
    );
    public static get Instance(): BoardService {
        return this.instance || (this.instance = new this());
    }

    /**
     * Get Board
     * @param limit 
     * @returns -- board : Array<{
        id: string;
        title: string;
        content: string;
        author: {
            nickname: string;
        };
        createdAt: string;
        updatedAt: string;
    }>
     */
    public async getBoard(limit: IGetBoard.IInput) {
        const { board } = await this.client.request<
            GetBoardQuery.IResponse,
            GetBoardQuery.IVariable
        >(GetBoardQuery.Document, limit);

        return board;
    }

    /**
     * Create Board
     * @param object -- { title, content, author_id }
     * @returns -- insert_board_one : Promise<{
        id: string;
        title: string;
        content: string;
        createdAt: string;
        author: {
            nickname: string;
        };
        updatedAt: string;
    }>
     */
    public async createBoard(object: ICreateBoard.IInput) {
        const { insert_board_one } = await this.client.request<
            CreateBoardQuery.IResponse,
            CreateBoardQuery.IVariable
        >(CreateBoardQuery.Document, object);

        return insert_board_one;
    }
}

export default BoardService.Instance;
