import { GraphQLClient } from "graphql-request";
import {
    IAuthService,
    IGetSignature,
    ILoginUser,
    IRegisterUser,
} from "./auth.service.interface";
import {
    GetSignatureQuery,
    LoginUserQuery,
    RegisterUserQuery,
} from "./graphql";

class AuthService implements IAuthService {
    private static instance: AuthService;
    private client = new GraphQLClient(
        process.env.NEXT_PUBLIC_HASURA_ENDPOINT ?? ""
    );
    public static get Instance(): AuthService {
        return this.instance || (this.instance = new this());
    }
    // Signature
    public async getSignature(args: IGetSignature.IInput) {
        const {
            getSignature: { signature },
        } = await this.client.request<
            GetSignatureQuery.IResponse,
            GetSignatureQuery.IVariable
        >(GetSignatureQuery.Document, args);

        return signature;
    }
    // Login (AccessToken & RefreshToken)
    public async loginUser(args: ILoginUser.IInput) {
        const {
            loginUser: { accessToken, refreshToken },
        } = await this.client.request<
            LoginUserQuery.IResponse,
            LoginUserQuery.IVariable
        >(LoginUserQuery.Document, args);

        return { accessToken, refreshToken };
    }
    // Register
    public async registerUser(args: IRegisterUser.IInput) {
        const {
            registerUser: { accessToken, refreshToken },
        } = await this.client.request<
            RegisterUserQuery.IResponse,
            RegisterUserQuery.IVariable
        >(RegisterUserQuery.Document, args);

        return { accessToken, refreshToken };
    }
}

export default AuthService.Instance;