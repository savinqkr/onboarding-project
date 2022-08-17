export namespace IBoardItem {
    export interface IProps {
        key: string;
        no: number;
        id: string;
        title: string;
        author: string;
        createdAt: string;
        updatedAt: string;
    }
    export interface IVProps extends IProps {
        onClickViewDetails: () => void;
    }
}
