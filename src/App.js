import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import DealsPage from "./pages/DealsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";
import DealDetails from "./pages/DealDetails";
import AdminPage from "./pages/AdminPage";

function App() {
  return (
    <Router>

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">

        {/* NAVBAR */}
        <button
  onClick={() => {
    localStorage.removeItem("role");
    window.location.href = "/";
  }}
  className="bg-red-500 px-4 py-2 rounded-lg"
>
  Logout
</button>
<input
  type="text"
  placeholder="Search..."
  className="px-4 py-2 rounded-lg text-black"
/>
<p className="text-yellow-400">
  {localStorage.getItem("role") === "admin"
    ? "Admin"
    : "User"}
</p>
        <div className="flex justify-between items-center p-4 bg-gray-900 shadow-lg">

          <h1 className="text-2xl font-bold text-green-400">
            LocalDeals
          </h1>

          <div className="flex gap-6">

            <Link to="/">Home</Link>

            <Link to="/deals">Deals</Link>

            <Link to="/about">About</Link>

            <Link to="/contact">Contact</Link>

            <Link to="/login">Login</Link>

          </div>

        </div>

        {/* ROUTES */}
        <Routes>

          <Route path="/" element={<HomePage />} />

          <Route path="/deals" element={<DealsPage />} />

          <Route path="/about" element={<AboutPage />} />

          <Route path="/contact" element={<ContactPage />} />

          <Route path="/login" element={<LoginPage />} />

          <Route path="/deal" element={<DealDetails />} />
          <Route
  path="/admin"
  element={<AdminPage />}
/>

        </Routes>

      </div>

    </Router>
  );
}

export default App;