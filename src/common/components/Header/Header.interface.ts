export namespace Header {
    export interface IProps {}
    export interface IVProps {
        userLogout: () => void;
        refreshToken: () => void;
        haveNoToken: boolean;
        userNickname?: Object;
        sessionTime?: any;
    }
}
