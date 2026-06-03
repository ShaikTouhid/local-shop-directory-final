import { useNavigate } from "react-router-dom";

function LoginPage() {

  const navigate = useNavigate();

  const handleAdminLogin = () => {

    localStorage.setItem("role", "admin");

    navigate("/admin");
  };

  const handleUserLogin = () => {

    localStorage.setItem("role", "user");

    navigate("/deals");
  };

  return (

    <div className="h-screen flex flex-col justify-center items-center text-white">

      <h1 className="text-5xl font-bold text-green-400 mb-10">
        Login
      </h1>

      <div className="flex gap-6">

        <button
          onClick={handleUserLogin}
          className="bg-blue-500 px-6 py-3 rounded-xl"
        >
          User Login
        </button>

        <button
          onClick={handleAdminLogin}
          className="bg-green-500 px-6 py-3 rounded-xl"
        >
          Admin Login
        </button>

      </div>

    </div>
  );
}

export default LoginPage;