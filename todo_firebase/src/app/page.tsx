'use client'
import {Container, createContainer} from "../../lib/post/postInjection";
import {Post, PostClass} from "../../lib/post/domain/entities/post";
import React, {FormEvent, useState} from "react";

// Assuming createContainer returns a singleton instance
const container: Container = createContainer();

const Home: React.FC = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const createPostMethod = () => {
        if(title === '' || description === ''){
            return alert('You cannot make a post with an empty field')
        }
        else {
            const postInstance: Post = new PostClass(
                '',
                title,
                description,
                new Date()
            );
            container.postManager.createPostImplementation(postInstance).then(r => console.log(r));
        }
    };

    const onsubmitController = async (event: FormEvent)=> {
        setTitle("")
        setDescription("")
        event.preventDefault()
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <p className="">Todo</p>
            <form onSubmit={onsubmitController} className="">
                <input className="text-black" onChange={(event)=>setTitle(event.target.value)} type="text" placeholder="Post Title"/>
                <input className="text-black" onChange={(event)=>setDescription(event.target.value)} type="text" placeholder="Post Description"/>
            </form>
            <button
                type="submit"
                onClick={() => createPostMethod()}
                className="px-16 py-8 bg-blue-400"
            >
                Test Firebase
            </button>
        </main>
    );
};

export default Home;

