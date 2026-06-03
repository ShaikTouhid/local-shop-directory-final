import { useNavigate } from "react-router-dom";

function HomePage() {

  const navigate = useNavigate();

  return (

    <div className="h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white flex flex-col justify-center items-center">

      <h1 className="text-6xl font-bold text-green-400 mb-4">
        LocalDeals
      </h1>

      <p className="text-gray-400 mb-10 text-xl">
        Discover Best Deals Near You 🔥
      </p>

      <div className="flex gap-4">

        <button
          onClick={() => navigate("/login")}
          className="bg-blue-500 px-6 py-3 rounded-xl hover:scale-105 transition"
        >
          User Login
        </button>

        <button
          onClick={() => navigate("/login")}
          className="bg-green-500 px-6 py-3 rounded-xl hover:scale-105 transition"
        >
          Admin Login
        </button>

        <button
          onClick={() => navigate("/deals")}
          className="bg-gray-700 px-6 py-3 rounded-xl hover:scale-105 transition"
        >
          Continue as Guest
        </button>

      </div>

    </div>
  );
}

export default HomePage;