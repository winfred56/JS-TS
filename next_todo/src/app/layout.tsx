'use client'
import {Inter} from 'next/font/google'
import React, {useEffect, useState} from 'react';
import SignUp from "@/app/sign-up/page";
import {getAuth, onAuthStateChanged, User} from "firebase/auth";
import firebase_app from "@/firebase/config";
import {Metadata} from "next";


const auth = getAuth(firebase_app);
const inter = Inter({subsets: ['latin']})

export default function RootLayout({children}:
{
    children: React.ReactNode;
}) {
    const [user, setUser] = useState<User | null | undefined>(undefined);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
        });

        return () => unsubscribe();
    }, []);

    if (user === undefined) {
        // Loading state while checking authentication status
        return <div>Loading...</div>;
    }

    if (user) {
        return (
            <html lang="en">
            <body className={inter.className}>{children}</body>
            </html>
        );
    }

    // If the user is not authenticated, show the SignUp component
    return <SignUp/>;
}
