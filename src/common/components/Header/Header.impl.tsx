// import { Header } from "next/dist/lib/load-custom-routes";
import { useRouter } from "next/router";
import { Header } from "./Header.interface";
import VHeader from "./Header.view";

const Header: React.FC<Header.IProps> = () => {
    const router = useRouter();

    const haveToken =
        typeof window !== "undefined" && !localStorage.getItem("tokens");
    // console.log(haveToken);

    const goToLogin = () => {
        router.push("/login");
    };

    // ----------------
    function parseJwt(token: string) {
        var base64Url = token.split(".")[1];
        var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
        var jsonPayload = decodeURIComponent(
            window
                .atob(base64)
                .split("")
                .map(function (c) {
                    return (
                        "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2)
                    );
                })
                .join("")
        );

        return JSON.parse(jsonPayload);
    }
    console.log(
        parseJwt(
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwOGVlMDljNS00YTY5LTRlNjEtOWQyNS1mYzgwYTI1NGNmM2IiLCJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWFsbG93ZWQtcm9sZXMiOlsiYW5vbnltb3VzIiwidXNlciJdLCJ4LWhhc3VyYS1kZWZhdWx0LXJvbGUiOiJ1c2VyIiwieC1oYXN1cmEtdXNlci1pZCI6IjA4ZWUwOWM1LTRhNjktNGU2MS05ZDI1LWZjODBhMjU0Y2YzYiJ9LCJuaWNrbmFtZSI6ImRheTEiLCJhY2NvdW50TmFtZSI6ImRheTFjb2xsMi5wIiwiaWF0IjoxNjU5OTQ0NzQ1LCJleHAiOjE2NTk5NDgzNDV9.P6HpMWK7JXDBQkYcc59o5wvhycPDSn9clEFGsgMAyAA"
        )
    );
    // ----------------

    return <VHeader goToLogin={goToLogin} haveToken={haveToken} />;
};

export default Header;
