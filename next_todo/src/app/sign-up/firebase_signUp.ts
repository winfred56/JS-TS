import firebase_app from "./../../firebase/config";
import {createUserWithEmailAndPassword, getAuth} from "firebase/auth"


const auth = getAuth(firebase_app);

export default async function SignUpLogic(email: string, password: string) {
    let result, error
    try {
        result = await createUserWithEmailAndPassword(auth, email, password);
    } catch (e) {
        let error = e;
    }

    return {result, error};
}