import loginWithEmail from "@/lib/firebase/auth"

export async function POST(req) {
    try {
        const { isSignUp, email, password } = await req.json();
        
        if (isSignUp){ // sign up process
            
        } else { // login process
            let sameCreds = false;
            if(email === "test" && password === "test") sameCreds = true;
            const res = sameCreds;
            if(res == true){
                return new Response(JSON.stringify({ message: "Login success" }), {
                    status: 200,
                    headers: { "Content-Type": "application/json" }
                });
            } else {
                return new Response(JSON.stringify({ message: "Wrong credentials"}), {
                    status: 400,
                    headers: { "Content-Type": "application/json" }
                });
            }
        }

    } catch (error) {
        return new Response(JSON.stringify({ message: "Server error", error: error.message }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }
}