import { getAuth, signInAnonymously } from "firebase/auth";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { userAtom } from "../recoil/user";

const Auth = () => {
    const setUser = useSetRecoilState(userAtom);
    useEffect(() => {
        const auth = getAuth();
        signInAnonymously(auth)
            .then((credential) => {
                console.log(credential);
                setUser(credential.user.uid);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error(error, errorCode, errorMessage);
            });
    }, [setUser]);
    return null;
};

export default Auth;
