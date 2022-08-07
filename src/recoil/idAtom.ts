import { atom } from "recoil";

export const idState = atom<string>({
    key: "idState",
    default: "",
});
