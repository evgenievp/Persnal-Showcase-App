import Link from "next/link";
import { useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";

  const sendReset = async (e: any) => {
    e.preventDefault();

    const res = await fetch(`${API_URL}/api/auth/forgot-password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (res.ok) {
      setMessage("Reset link sent to email");
    } else {
      setMessage("User not found");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={sendReset} className="bg-white p-8 rounded shadow w-96">
        <h2 className="text-xl font-bold mb-4">Forgot password</h2>

        <input
          className="w-full border p-2 mb-4"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button className="w-full bg-blue-500 text-white p-2 rounded">
          Send reset link
        </button>

        {message && (
          <div className="mt-4 text-center text-sm">
            {message}
          </div>
        )}

        <div className="mt-2 text-center">
          <Link href="/">Back to Home</Link>
        </div>
      </form>
    </div>
  );
}
