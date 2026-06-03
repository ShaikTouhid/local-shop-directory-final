import { useNavigate } from "react-router-dom";
import { useState } from "react";

function LoginPage() {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {

    if (
      username === "admin" &&
      password === "1234"
    ) {

      alert("Admin Login Success");

      navigate("/deals");

    }

    else if (
      username === "user" &&
      password === "1234"
    ) {

      alert("User Login Success");

      navigate("/deals");

    }

    else {

      alert("Invalid Credentials");

    }
  };

  return (

    <div className="min-h-screen flex justify-center items-center bg-black text-white">

      <div className="bg-gray-900 p-8 rounded-2xl w-96">

        <h1 className="text-4xl text-center text-green-400 mb-6">
          Login
        </h1>

        <input
          type="text"
          placeholder="Username"
          className="w-full p-3 mb-4 rounded bg-gray-800"
          onChange={(e) =>
            setUsername(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 rounded bg-gray-800"
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button
          onClick={handleLogin}
          className="w-full bg-green-500 p-3 rounded"
        >
          Login
        </button>

      </div>

    </div>
  );
}

export default LoginPage;