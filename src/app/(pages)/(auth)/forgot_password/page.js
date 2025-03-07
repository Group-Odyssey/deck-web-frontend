'use client'
import Image from 'next/image';
import { useState } from 'react';

export default function ForgotPassword () {
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState("");
    
    const handleForgotPassword = async (e) => {
        e.preventDefault()
        setLoading(true)
        try{
            const response = await fetch("/tests/api/forgot_password", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email})
            })
            
            const data = await response.json();
      
            if (!response.ok) {
              throw new Error(data.message || "Sending email failed");
            }
      
            console.log("Sent to Email!", data);
            // Store user session (if needed)
        } catch (error) {
            console.log(error.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="bg-[#DEDEDE] h-screen flex justify-center items-center">
            <div className="flex w-[600px] h-[375px] bg-white shadow-2xl rounded-xl flex-col justify-baseline items-center">
                <div className='mt-4 flex justify-center items-center'>
                    <Image src="/deck_assets/Deck-Branding7.png" width={'50'} height={'50'} alt=""/>
                    <p className="ml-1 fraiche text-2xl text-[#12454C]">Deck</p>
                </div>
                <p className="fraiche text-5xl text-[#191919]">Forgot Password?</p>
                <p className="text-center text-xs mt-4 px-8 text-[#9F9F9F]">
                    Enter your email address below, and we'll send you a link to reset your password. Follow the instructions in the email to regain access to your account.
                </p>
                <form onSubmit={handleForgotPassword} className='flex flex-col w-full py-8 px-12'>
                    <label htmlFor="email" className="mt-2 text-[#191919] text-start">Email</label>
                    <input name="email" type="text" className="p-1 border text-black rounded-lg" value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <div className='flex justify-center items-center'>
                        <button type="submit" className="mt-4 mb-2 px-6 py-2 rounded-full bg-[#12454C] text-white fraiche w-fit" disabled={loading}>{loading ? "Sending to email..." : "Send to email"}</button>
                    </div>
                </form>
            </div>
        </div>
    );
}