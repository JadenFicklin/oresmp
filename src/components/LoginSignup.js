import React, { useState, useContext } from 'react';
import {
    getAuth,
    signInWithPopup,
    signOut,
    GoogleAuthProvider
} from 'firebase/auth';
import { FcGoogle } from 'react-icons/fc';
import app from '../firebase';
import { UserContext } from './UserContext';

function LoginSignup() {
    const { user, setUser, userUid, setUserUid } = useContext(UserContext);
    // const [user, setUser] = useState('');
    // const [userUid, setUserUid] = useState('');

    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);

    const handleSignIn = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            setUserUid(user.uid);
            setUser(user);
        } catch (error) {
            console.log(error);
        }
    };

    const handleSignOut = async () => {
        try {
            await signOut(auth);
            console.log('Signed out');
            setUser(null);
        } catch (error) {
            console.log(error, 'error');
        }
    };

    return (
        <div>
            {!user && (
                <button
                    onClick={handleSignIn}
                    className="flex p-3 duration-300 bg-white rounded-md hover:bg-gray-300 group border-2 w-[300px] mx-auto fixed top-[2px] right-[340px] scale-75">
                    <FcGoogle className="w-[24px] h-[24px]" />
                    <p className="mx-6 font-semibold text-gray-500 ">
                        Continue with Google
                    </p>
                </button>
            )}
            {user && (
                <button
                    className="bg-gray-600 text-white px-3 rounded-[4px]  hover:bg-[#3788D8] fixed  top-4 right-[380px] w-[100px]"
                    onClick={handleSignOut}>
                    Log out
                </button>
            )}
        </div>
    );
}

export default LoginSignup;
