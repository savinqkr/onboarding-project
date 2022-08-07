// import PATH from "@constants/path";
// import { loggedInState } from "@recoil/loggedInState";
// import { useRouter } from "next/router";
// import { useEffect } from "react";
// import { useRecoilValue } from "recoil";

// export default function usePageGuard() {
//     const isLoggedIn = useRecoilValue(loggedInState);
//     const router = useRouter();

//     useEffect(() => {
//         if (router.pathname === PATH.MAIN && !isLoggedIn) {
//             alert("로그인 해주세요.");
//             router.push(PATH.HOME);
//         }
//     }, [isLoggedIn]);
// }