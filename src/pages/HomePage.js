import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="text-white">

      {/* 🔥 HERO SECTION */}
      <div className="text-center py-24 px-6">

        <h1 className="text-7xl font-extrabold text-green-400 mb-6">
          LocalDeals
        </h1>

        <p className="text-2xl text-gray-300 mb-8">
          Discover Deals Around You 🔥
        </p>

        <p className="max-w-2xl mx-auto text-gray-400 text-lg mb-10">
          Find exciting discounts from restaurants, malls,
          entertainment places, parks, cafes and many more —
          all in one platform.
        </p>

        <div className="flex justify-center gap-6">

          <Link
            to="/deals"
            className="bg-green-500 px-8 py-4 rounded-xl text-lg hover:scale-105 transition"
          >
            Explore Deals
          </Link>

          <Link
            to="/about"
            className="border border-green-400 px-8 py-4 rounded-xl text-lg hover:bg-green-400 hover:text-black transition"
          >
            Learn More
          </Link>

        </div>

      </div>

      {/* 🔥 FEATURES SECTION */}
      <div className="grid md:grid-cols-3 gap-8 px-10 pb-20">

        <div className="bg-white/10 p-8 rounded-2xl text-center backdrop-blur-lg">
          <h2 className="text-3xl mb-4">🔥</h2>
          <h3 className="text-2xl font-bold mb-3">
            Best Offers
          </h3>

          <p className="text-gray-400">
            Discover top discounts and exclusive deals near you.
          </p>
        </div>

        <div className="bg-white/10 p-8 rounded-2xl text-center backdrop-blur-lg">
          <h2 className="text-3xl mb-4">📍</h2>

          <h3 className="text-2xl font-bold mb-3">
            Nearby Locations
          </h3>

          <p className="text-gray-400">
            Find restaurants, malls and entertainment places easily.
          </p>
        </div>

        <div className="bg-white/10 p-8 rounded-2xl text-center backdrop-blur-lg">
          <h2 className="text-3xl mb-4">⚡</h2>

          <h3 className="text-2xl font-bold mb-3">
            Fast & Simple
          </h3>

          <p className="text-gray-400">
            Clean interface with easy search and filtering system.
          </p>
        </div>

      </div>

    </div>
  );
}
<div className="text-center p-4 bg-gray-900 mt-10">

  <p>
    © 2026 LocalDeals | Developed using MERN Stack
  </p>

</div>

export default HomePage;