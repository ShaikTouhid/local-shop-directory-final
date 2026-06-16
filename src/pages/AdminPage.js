import { useState } from "react";

function AdminPage() {

  const [businessName, setBusinessName] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [discount, setDiscount] = useState("");
  const [offerTitle, setOfferTitle] = useState("");
  const [rating, setRating] = useState("");
  const [image, setImage] = useState("");
  const [phone, setPhone] = useState("");

  const addBusiness = async () => {

const businessData = {
  name: businessName,
  location,
  category,
  phone,
  rating: rating || 4.8,
  image: image || "https://picsum.photos/800/600",

  offers: [
    {
      title: offerTitle,
      discount,
      validTill: "2026-12-31"
    }
  ]
};

    try {

      const response = await fetch(
        "https://local-shop-directory-backend.onrender.com/api/business/add",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify(businessData)
        }
      );

      const data = await response.json();

      alert("Business Added Successfully ✅");

      console.log(data);

    } catch (err) {

      console.log(err);

      alert("Error Adding Business ❌");

    }
  };

  return (

    <div className="min-h-screen bg-black text-white p-10">

      <h1 className="text-5xl font-bold text-green-400 mb-10">
        Admin Dashboard
      </h1>

      <div className="bg-white/10 p-8 rounded-2xl w-[500px]">

        <input
          type="text"
          placeholder="Business Name"
          className="w-full p-3 mb-4 rounded bg-gray-800"
          onChange={(e) => setBusinessName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Location"
          className="w-full p-3 mb-4 rounded bg-gray-800"
          onChange={(e) => setLocation(e.target.value)}
        />

        <input
          type="text"
          placeholder="Category"
          className="w-full p-3 mb-4 rounded bg-gray-800"
          onChange={(e) => setCategory(e.target.value)}
        />

        <input
          type="number"
          placeholder="Discount %"
          className="w-full p-3 mb-4 rounded bg-gray-800"
          onChange={(e) => setDiscount(e.target.value)}
        />

        <input
          type="text"
          placeholder="Offer Title"
          className="w-full p-3 mb-4 rounded bg-gray-800"
          onChange={(e) => setOfferTitle(e.target.value)}
        />

        <input
          type="number"
          placeholder="Rating"
          className="w-full p-3 mb-4 rounded bg-gray-800"
          onChange={(e) => setRating(e.target.value)}
        />

        <input
          type="text"
          placeholder="Image URL"
          className="w-full p-3 mb-6 rounded bg-gray-800"
          onChange={(e) => setImage(e.target.value)}
        />

      <input
  type="text"
  placeholder="Phone Number"
  className="w-full p-3 mb-4 rounded bg-gray-800"
  onChange={(e) => setPhone(e.target.value)}
/>

        <button
          onClick={addBusiness}
          className="bg-green-500 px-6 py-3 rounded-xl w-full"
        >
          Add Business
        </button>

      </div>

    </div>
  );
}

export default AdminPage;