import { useLocation } from "react-router-dom";

function DealDetails() {

  const location = useLocation();
  const deal = location.state;

  if (!deal) {
    return (
      <div className="text-white text-center mt-20">
        Deal not found
      </div>
    );
  }

  return (
    <div className="text-white p-10">

      <img
        src={deal.image}
        alt="business"
        className="w-full max-w-3xl mx-auto h-96 object-cover rounded-2xl mb-10"
      />

      <div className="max-w-3xl mx-auto">

        <h1 className="text-5xl font-bold text-green-400 mb-4">
          {deal.businessName}
        </h1>

        <p className="text-xl text-gray-300 mb-3">
          📍 {deal.location}
        </p>

        <p className="text-xl text-yellow-400 mb-3">
          ⭐ {deal.rating}
        </p>

        <p className="text-3xl text-green-400 font-bold mb-5">
          🔥 {deal.discount}% OFF
        </p>

        <p className="text-gray-300 text-lg mb-5">
          {deal.offerTitle}
        </p>

      </div>

    </div>
  );
}
<div className="text-center p-4 bg-gray-900 mt-10">

  <p>
    © 2026 LocalDeals | Developed using MERN Stack
  </p>

</div>

export default DealDetails;