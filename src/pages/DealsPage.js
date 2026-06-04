import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function DealsPage() {

  const [deals, setDeals] = useState([]);
  const [filteredDeals, setFilteredDeals] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {

    fetch("https://local-shop-directory-backend.onrender.com/api/business/best-deals")

      .then((res) => res.json())

      .then((data) => {

        setDeals(data);

        setFilteredDeals(data);

        setLoading(false);

      })

      .catch((err) => {

        console.log(err);

        setLoading(false);

      });

  }, []);

  // SEARCH FUNCTION
  const handleSearch = (e) => {

    const value = e.target.value;

    setSearch(value);

    const filtered = deals.filter((deal) =>

      deal.businessName
        ?.toLowerCase()
        .includes(value.toLowerCase()) ||

      deal.category
        ?.toLowerCase()
        .includes(value.toLowerCase()) ||

      deal.location
        ?.toLowerCase()
        .includes(value.toLowerCase())

    );

    setFilteredDeals(filtered);
  };

  if (loading) {

    return (

      <div className="h-screen flex items-center justify-center text-green-400 text-4xl animate-pulse">

        Loading Deals...

      </div>

    );
  }

  return (

    <div className="p-6 min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">

      <h1 className="text-5xl font-bold text-green-400 text-center mb-8">
        Best Deals 🔥
      </h1>

      {/* SEARCH BAR */}
      <div className="flex justify-center mb-10">

        <input
          type="text"
          placeholder="Search by name, category, location..."
          value={search}
          onChange={handleSearch}
          className="
            w-[500px]
            p-4
            rounded-2xl
            bg-gray-900
            border
            border-green-500
            text-white
            outline-none
            shadow-lg
          "
        />

      </div>

      {/* DEALS GRID */}
      <div className="grid md:grid-cols-3 gap-6">

        {filteredDeals.map((deal, index) => (

          <div
            key={index}
            onClick={() =>
              navigate("/deal", { state: deal })
            }
            className="
              bg-white/10
              backdrop-blur-lg
              p-4
              rounded-2xl
              shadow-lg
              border
              border-white/20
              hover:scale-105
              hover:shadow-green-500/30
              transition
              duration-300
              cursor-pointer
            "
          >

            {/* IMAGE */}
            <img
              src={deal.image}
              alt="business"
              className="w-full h-40 object-cover rounded-xl mb-4"
            />

            {/* NAME */}
            <h2 className="text-2xl font-bold mb-2">
              {deal.businessName}
            </h2>

            {/* LOCATION */}
            <p className="text-gray-300 mb-2">
              📍 {deal.location}
            </p>

            {/* CATEGORY */}
            <p className="text-blue-400 mb-2">
              {deal.category}
            </p>

            {/* RATING */}
            <p className="text-yellow-400 mb-2">
              ⭐ {deal.rating}
            </p>

            {/* DISCOUNT */}
            <p className="text-green-400 text-2xl font-bold">
              🔥 {deal.discount}% OFF
            </p>

            {/* OFFER */}
            <p className="text-gray-300 mt-2">
              {deal.offerTitle}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default DealsPage;