import firebase_app from "@/firebase/config";
import {getAuth, signInWithEmailAndPassword, UserCredential, ErrorFn, onAuthStateChanged,} from "firebase/auth";
import {FirebaseError} from "@firebase/util";

const auth = getAuth(firebase_app);

type Error = {
    message: string;
    name: string;
    code: string;
};

export default async function firebase_login(email: string, password: string) {
    let result: UserCredential | null = null;
    let error: Error | null = null;

    try {
        result = await signInWithEmailAndPassword(auth, email, password)

    } catch (e:any) {
        error = { message: e.message, name: e.name, code: e.code };
    }
    return { result, error };
}
