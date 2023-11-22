// context/AuthContext.tsx
import React, { createContext, useContext, useEffect, useState } from 'react';
// import { auth } from './../../firebaseConfig'; // Assuming you have a firebase configuration file
import { auth } from "firebase/auth";


interface AuthContextType {
    user: auth.user | null;
    loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{}> = ({ children }) => {
    const [user, setUser] = useState<auth.user | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user: auth.user | null) => {
            setUser(user);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);


    return (
        <AuthContext.Provider value={{ user, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
