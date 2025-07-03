import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { app } from '../firebase';
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../redux/user/userSlice';
import { useNavigate } from 'react-router-dom';

function OAuth() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleGoogleSignIn = async() => {
        // Logic for Google Sign-In
        try {
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app);

            const result = await signInWithPopup(auth, provider);

            const res = await fetch('/api/auth/google', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                name: result.user.displayName,
                email: result.user.email,
                photo: result.user.photoURL,
                }),
            });
            const data = await res.json();
            dispatch(signInSuccess(data));
            navigate('/');
        } catch (error) {
            console.log('could not sign in with google', error);
        }
    };

  return (
    <div className="mt-4">
        <button onClick={handleGoogleSignIn} type='button' className="w-full flex items-center justify-center gap-3 px-4 py-2 bg-slate-100 text-slate-700 border border-gray-300 rounded-md shadow-sm hover:bg-slate-200 transition duration-200">
            <FcGoogle className="text-xl" />
            <span className="font-medium text-sm sm:text-base">Sign in with Google</span>
        </button>
    </div>
  )
}

export default OAuth