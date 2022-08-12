export namespace IBoardItem {
    export interface IProps {
        key: string;
        no: number;
        title: string;
        author: string;
        createdAt: string;
        updatedAt: string;
    }
    export interface IVProps extends IProps {}
}
