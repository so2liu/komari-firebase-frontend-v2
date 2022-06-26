import { atom } from "recoil";

export const userAtom = atom<string | null>({
    key: "userAtom",
    default: null,
});
