import { GraphQLClient } from "graphql-request";
import {
    IGetBoard,
    IGetAllBoard,
    IBoardService,
} from "./board.service.interface";
import { GetBoardQuery, GetAllBoardQuery } from "./graphql";

class BoardService implements IBoardService {
    private static instance: BoardService;
    private client = new GraphQLClient(
        process.env.NEXT_PUBLIC_HASURA_ENDPOINT ?? ""
    );
    public static get Instance(): BoardService {
        return this.instance || (this.instance = new this());
    }

    /**
     * getBoard
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
    public async getBoard(args: IGetBoard.IInput) {
        const { board } = await this.client.request<
            GetBoardQuery.IResponse,
            GetBoardQuery.IVariable
        >(GetBoardQuery.Document, args);

        return board;
    }
    /**
     * getAllBoard
     * @param  
     * @returns -- board : Array<{
        id: string;
    }>
     */
    public async getAllBoard() {
        const { board } = await this.client.request<
            GetAllBoardQuery.IResponse,
            GetAllBoardQuery.IVariable
        >(GetAllBoardQuery.Document);

        return board;
    }
}

export default BoardService.Instance;
