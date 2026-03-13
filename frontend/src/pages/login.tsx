import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      if (response.ok) {
        const token = await response.text();
        localStorage.setItem("token", token);
        router.push("/");
      } else {
        alert("Invalid credentials");
      }
    } catch (err) {
      alert("Server error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded-xl shadow-lg w-96">
        {/* Лого/картинка */}
        <div className="flex justify-center mb-6">
          {process.env.NEXT_PUBLIC_LOGO_URL ? (
            <img 
              src={process.env.NEXT_PUBLIC_LOGO_URL} 
              alt="Logo"
              className="h-16 w-auto object-contain"
            />
          ) : (
            // Placeholder ако няма лого
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-2xl text-blue-600">🚀</span>
            </div>
          )}
        </div>
        
        <h2 className="text-2xl mb-6 text-center font-bold">Welcome</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition">
          Login
        </button>

        <div className="mt-4 text-center">
          No account? <Link href="/register" className="text-blue-500 hover:underline">Register</Link>
        </div>
        <div className="mt-3 text-center text-sm">
          <Link href="/forgot-password" className="text-blue-500 hover:underline">
            Forgot password?
          </Link>
        </div>
        <div className="mt-2 text-center">
          <Link href="/" className="text-gray-600 hover:text-gray-800 text-sm">
            ← Back to Home
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;