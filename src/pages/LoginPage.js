import { useNavigate } from "react-router-dom";
import { useState } from "react";

function LoginPage() {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

  const handleLogin = () => {
  if (email === "admin@gmail.com" && password === "admin123") {
    localStorage.setItem("role", "admin");
    navigate("/admin");
  }

  else if (email === "user@gmail.com" && password === "1234") {
    localStorage.setItem("role", "user");
    navigate("/deals");
  }

  else {
    alert("Invalid Email or Password");
  }
};

 return (
  <div className="h-screen flex flex-col justify-center items-center bg-black text-white">

    <h1 className="text-5xl font-bold text-green-400 mb-10">
      Login
    </h1>

    <div className="bg-white/10 p-8 rounded-2xl w-[350px]">

      <input
        type="email"
        placeholder="Email"
        className="w-full p-3 mb-4 rounded bg-gray-800"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full p-3 mb-4 rounded bg-gray-800"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={handleLogin}
        className="bg-green-500 px-6 py-3 rounded-xl w-full"
      >
        Login
      </button>

    </div>

  </div>
);
  
}

export default LoginPage;