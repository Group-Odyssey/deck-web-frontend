'use client'
import { useState } from 'react'
import AuthForm from '@/components/AuthForm'

export default function Login(){
    const [isSignUp, setIsSignUp] = useState(false);
    return (
        <div className="bg-[#DEDEDE] h-screen flex justify-center items-center">
            <div className="relative flex w-[750px] h-[550px] rounded-3xl bg-white shadow-2xl overflow-hidden">
            <div
                    className={`absolute top-0 left-0 w-full h-full transition-transform duration-500 ${
                        isSignUp ? "translate-x-[50%]" : "translate-x-0"
                    }`}
                >
                    <AuthForm isSignUp={isSignUp} toggleForm={() => setIsSignUp(!isSignUp)} />
                </div>
                <div className='w-1/2 bg-[#99F3BD] rounded-l-3xl'></div>
                <div className='w-1/2 bg-[#12454C] rounded-r-3xl'></div>
            </div>
        </div>
    );
}