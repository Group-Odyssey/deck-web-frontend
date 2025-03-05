'use client'
import Image from 'next/image'
import NavLink from './NavLink'
import { useState } from 'react';
import { FcGoogle } from "react-icons/fc";

export default function AuthForm ({isSignUp, toggleForm}) {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => { //TODO: Backend part
        e.preventDefault()
        setLoading(true);
        try {
            const response = await fetch("", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ email, password }),
            });
      
            const data = await response.json();
      
            if (!response.ok) {
              throw new Error(data.message || "Login failed");
            }
      
            console.log("Login successful", data);
            // Store user session (if needed)
          } catch (error) {
            console.log(error.message);
          } finally {
            setLoading(false);
          }
    }

    return (
        <form onSubmit={handleSubmit} className={`w-1/2 h-full flex flex-col bg-white p-4 text-[#9F9F9F] ${
            isLogin ? "translate-x-0" : "translate-x-full"
          }`}>
            <div className='flex justify-start items-center'>
                <Image src="/deck_assets/Deck-Branding7.png" width={'40'} height={'40'} alt=""/>
                <p className="ml-1 fraiche text-xl text-[#12454C]">Deck</p>
            </div>
            <p className="fraiche text-xl font-bold text-[#191919]">{isSignUp ? "Sign Up" : "Log In"}</p>

            <label htmlFor="email" className="mt-2 text-[#191919]">Email</label>
            <input name="email" type="text" className="p-1 border text-black rounded-lg" value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password" className="mt-2 text-[#191919]">Password</label>
            <input name="password" type="password" className="p-1 border text-black rounded-lg" value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            {isSignUp && <label htmlFor="confirm_pass" className="mt-2 text-[#191919]">Confirm Password</label>}
            {isSignUp && <input name="confirm_pass" type="password" className="p-1 border rounded-lg" />}
            {!isSignUp && <NavLink text="Forgot password?" href="/forgot_password" extra="mb-2 text-xs text-end"/>}

            <button type="submit" className="mt-4 mb-2 px-6 py-2 rounded-full bg-[#12454C] text-white fraiche" disabled={loading}>{isSignUp ? loading ? "Signing up..." : "Sign up" : loading ? "Signing in..." : "Sign in"}</button>

            <div className="flex items-center my-2">
                <hr className="flex-grow border-gray-300" />
                <span className="mx-2 text-gray-500 text-sm">Or continue with</span>
                <hr className="flex-grow border-gray-300" />
            </div>

            <button className="w-full flex items-center justify-center border py-2 rounded-lg shadow-md">
                <FcGoogle className='mr-2'/>
                Sign in with Google
            </button>

            <p className="text-center text-sm mt-3">
                {isSignUp ? "Already have an account?" : "Don't have an account?"}  <a href="#" className="text-[#191919] font-bold" onClick={toggleForm}>{isSignUp ? "Log In" : "Sign Up"}</a>
            </p>
            {isSignUp ? <p className="text-center text-xs mt-4">
              By proceeding you acknowledge that you have read, understood and agree to our <a className='font-bold underline' href="/terms_services">Terms</a> and <a className='font-bold underline' href="/privacy_policy">Policy</a>.
            </p> : ""}
        </form>
    );
}