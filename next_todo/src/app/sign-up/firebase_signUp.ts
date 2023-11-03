import firebase_app from "./../../firebase/config";
import {createUserWithEmailAndPassword, getAuth, UserCredential} from "firebase/auth"


const auth = getAuth(firebase_app);
type Error = {
    message: string;
    name: string;
    code: string;
};

export default async function SignUpLogic(email: string, password: string) {
    let result: UserCredential | null = null;
    let error: Error | null = null;
    try {
        result = await createUserWithEmailAndPassword(auth, email.trim(), password);

    } catch (e:any) {
        error = { message: e.message, name: e.name, code: e.code };
    }

    return {result, error};
}