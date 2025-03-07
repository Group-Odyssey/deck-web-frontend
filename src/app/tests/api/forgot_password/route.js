// mock api route
export async function POST (req) {
    try {
        const { email } = await req.json(); // Parse request body

        if (!email) {
            return new Response(JSON.stringify({ message: "Email is required" }), {
                status: 400,
                headers: { "Content-Type": "application/json" }
            });
        }

        // Simulate sending a password reset email (Replace with actual logic)
        console.log(`Sending password reset email to: ${email}`);

        return new Response(JSON.stringify({ message: "Password reset email sent" }), {
            status: 200,
            headers: { "Content-Type": "application/json" }
        });

    } catch (error) {
        return new Response(JSON.stringify({ message: "Server error", error: error.message }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }
}