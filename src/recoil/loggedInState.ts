import { selector } from "recoil";
import { idState } from "./idAtom";

export const loggedInState = selector<boolean>({
    key: "loggedInState",
    get: ({ get }) => {
        const id = get(idState);

        if (id === "") return false;
        return true;
    },
});
