export namespace Header {
    export interface IProps {}
    export interface IVProps {
        goToLogin: () => void;
        userLogout: () => void;
        haveNoToken: boolean;
        userNickname?: Object;
    }
}
