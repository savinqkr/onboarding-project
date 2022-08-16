import { GraphQLClient } from "graphql-request";
import {
    IAuthService,
    IGetSignature,
    ILoginUser,
    IRegisterUser,
    IRefreshJwt,
} from "./auth.service.interface";
import {
    GetSignatureQuery,
    LoginUserQuery,
    RegisterUserQuery,
    RefreshJwtQuery,
} from "./graphql";

class AuthService implements IAuthService {
    private static instance: AuthService;
    private client = new GraphQLClient(
        process.env.NEXT_PUBLIC_HASURA_ENDPOINT ?? ""
    );
    public static get Instance(): AuthService {
        return this.instance || (this.instance = new this());
    }

    /**
     * Get Signature
     * @param args -- { accountName, privateKey }
     * @returns -- { accessToken, refreshToken }
     */
    public async getSignature(args: IGetSignature.IInput) {
        const {
            getSignature: { signature },
        } = await this.client.request<
            GetSignatureQuery.IResponse,
            GetSignatureQuery.IVariable
        >(GetSignatureQuery.Document, args);

        return signature;
    }

    /**
     * Login User
     * @param args -- { accountName, signature }
     * @returns -- { accessToken, refreshToken }
     */
    public async loginUser(args: ILoginUser.IInput) {
        const { loginUser } = await this.client.request<
            LoginUserQuery.IResponse,
            LoginUserQuery.IVariable
        >(LoginUserQuery.Document, args);

        return loginUser;
    }

    /**
     * Register User
     * @param args -- { accountName, nickname, signature }
     * @returns -- { accessToken, refreshToken }
     */
    public async registerUser(args: IRegisterUser.IInput) {
        const { registerUser } = await this.client.request<
            RegisterUserQuery.IResponse,
            RegisterUserQuery.IVariable
        >(RegisterUserQuery.Document, args);

        return registerUser;
    }

    /**
     * Refresh JWT
     * @param args -- { accountName, refreshToken }
     * @returns -- { accessToken, refreshToken }
     */
    public async refreshJwt(args: IRefreshJwt.IInput) {
        const { refreshJwt } = await this.client.request<
            RefreshJwtQuery.IResponse,
            RefreshJwtQuery.IVariable
        >(RefreshJwtQuery.Document, args, {
            Authorization: `Bearer ${window.localStorage.getItem(
                "accessToken"
            )}`,
        });

        return refreshJwt;
    }
}

export default AuthService.Instance;
