export namespace IBoardBox {
    export interface IProps {
        boardData:
            | {
                  id: string;
                  title: string;
                  content: string;
                  author: { nickname: string };
                  createdAt: string;
                  updatedAt: string;
              }[]
            | undefined;
    }
    export interface IVProps extends IProps {}
}
