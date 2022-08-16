export namespace Header {
    export interface IProps {}
    export interface IVProps {
        haveNoToken: boolean;
        userNickname?: string;
        sessionTime?: string;
        onClickUserLogout: () => void;
        onClickRefreshToken: () => void;
    }
}
