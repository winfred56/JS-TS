import {Post, PostClass} from "../../domain/entities/post";
import {db} from "../../../../firebaseConfig";
import {setDoc, doc, collection, addDoc} from "firebase/firestore";
import "firebase/firestore";




export abstract class PostRemoteDatabase{
    /// Creates a new post in the database {Firestore}
    abstract createPost(post:Post): Promise<Post>
}


export class PostRemoteDatabaseImpl extends PostRemoteDatabase{
    async createPost(post: Post): Promise<Post> {
        try {
            // Convert PostClass to plain object
            const postData = (post as PostClass).toJson();


            // Add a new document with an automatically generated id.
            const collectionRef = collection(db, "posts");

            const docRef = await addDoc(collectionRef, postData);

            // Include the document ID in the data to be stored in the database
            const dataWithID = { ...postData, id: docRef.id };

            // Update the document with the included ID
            await setDoc(docRef, dataWithID);

            // Return the original Post object with the Firestore document ID
            return { ...post, id: docRef.id };

        } catch (error) {
            console.error("Error creating post in Firestore:", error);
            throw error; // Rethrow the error for the caller to handle
        }
    }

}