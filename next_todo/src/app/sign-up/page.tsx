"use client"

import Image from "next/image";
import botr from "./../../../public/botr_logoW.png";
import {FormEvent, useState} from "react";
import SignUpLogic from "@/app/sign-up/firebase_signUp";
import { useRouter } from 'next/navigation'

export default function  SignUp(){
    let [email, setEmail]= useState("")
    let [password, setPassword]= useState("")
    let [isLoading, setLoading] = useState(true)
    const router= useRouter()

    const onsubmitController = async (event: FormEvent ) => {
        console.log(`clicked`)
        event.preventDefault()
        setLoading(prevState => !prevState);
        console.log(`email is ${email} and password is ${password}`)
        const { result, error } = await SignUpLogic(email, password);
        if(error) {
            return error;
        }
        else {
            return router.push("/")
        }
    }
    return <div className="grid grid-cols-2 text-black">
        <div className="flex items-center justify-center min-w-[60%] min-h-screen bg-gradient-to-b from-[#744FB5] to-[#36205D]">
            <div className="pb-20">
                <Image className="" width={301} src={botr} alt="botr loo" />
                <p className="font-light font-sans text-white" >Built on the rock! - Lorem Ipsum dolor sit.</p>
            </div>
        </div>
        <div className="flex flex-col items-start justify-center">
            <h2 className="text-black text-2xl text-left">Hello!</h2>
            <p className="text-left">Sign Up to Get Started</p>
            <div className="">
                <form className="" onSubmit={onsubmitController}>
                    <input type="email" onChange={(event) => setEmail(prevState => event.target.value)} value={email} placeholder="you@example.com" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500" name="email"/>
                    <input type="password" onChange={(event)=> setPassword(prevState => event.target.value)} value={password} placeholder="Password" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500" name="password"/>
                    <button className="mt-10" type="submit">
                        {isLoading ? <span>Creating Account</span> : <span>Create Account</span>}
                    </button>
                </form>
            </div>
        </div>
    </div>
}