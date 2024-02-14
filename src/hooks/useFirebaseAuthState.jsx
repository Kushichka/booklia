import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const useFirebaseAuthState = () => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, user => {
            setUserData(user);
        });

        return () => unsubscribe();
    }, []);

    return userData;
};
