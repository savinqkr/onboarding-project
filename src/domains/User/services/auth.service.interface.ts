import {
    GetSignatureQuery,
    LoginUserQuery,
    RegisterUserQuery,
} from "./graphql";

export namespace IGetSignature {
    export interface IInput extends GetSignatureQuery.IVariable {}
}
export namespace ILoginUser {
    export interface IInput extends LoginUserQuery.IVariable {}
}
export namespace IRegisterUser {
    export interface IInput extends RegisterUserQuery.IVariable {}
}
export interface IAuthService {
    getSignature(args: IGetSignature.IInput): Promise<string>;
    loginUser(
        args: ILoginUser.IInput
    ): Promise<{ accessToken: string; refreshToken: string }>;
    registerUser(
        args: IRegisterUser.IInput
    ): Promise<{ accessToken: string; refreshToken: string }>;
}
