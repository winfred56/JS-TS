"use client"
import Link from "next/link";
import {FormEvent, useState} from "react";

export default function Login(){
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let [isLoading,  setIsLoading] = useState(false)
    let [message, setMessage] = useState("");
    const onsubmitController = async (event: FormEvent)=> {
        setMessage("")
        setIsLoading(true)
        event.preventDefault()
        setIsLoading(false)
        console.log(`Email: ${email} password: ${password}`)
    }
    return(
        <main className="font-sans text-black">
            <div className="flex flex-col items-center justify-center">
                <div className="w-1/2">
                    <h2 className="text-black text-2xl text-left">Hello Again!</h2>
                    <p className="text-left">Login to Continue</p>
                    <div className="">
                        <form className="" onSubmit={onsubmitController}>
                            <input type="email" onChange={(event) => setEmail(event.target.value)} value={email} placeholder="you@example.com" className="mt-5 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500" name="email"/>
                            <input type="password" onChange={(event)=> setPassword(event.target.value)} value={password} placeholder="Password" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500" name="password"/>
                            <p className="text-red-500">{message}</p>
                            <button className="w-full bg-[#36205D] text-white py-2 px-4 mt-10 rounded-lg" type="submit">
                                {isLoading ? <span>Loading...</span> : <span>Login</span>}
                            </button>
                        </form>
                    </div>
                </div>
                <p className="absolute text-sm bottom-5">Dont have an Account? <span className="text-sky-600"><Link href="/">Sign Up</Link></span></p>
            </div>
        </main>
    )
}