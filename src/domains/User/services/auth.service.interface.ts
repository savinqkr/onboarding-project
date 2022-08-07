import { GetSignatureQuery, LoginUserQuery } from "./graphql";

export namespace IGetSignature {
    export interface IInput extends GetSignatureQuery.IVariable {}
}
export namespace ILoginUser {
    export interface IInput extends LoginUserQuery.IVariable {}
}
export interface IAuthService {
    getSignature(args: IGetSignature.IInput): Promise<string>;
    loginUser(
        args: ILoginUser.IInput
    ): Promise<{ accessToken: string; refreshToken: string }>;
    // getAccessToken(args: ILoginUser.IInput): Promise<string>;
    // getRefreshToken(args: ILoginUser.IInput): Promise<string>;
}
