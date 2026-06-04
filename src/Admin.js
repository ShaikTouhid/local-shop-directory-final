import { useEffect, useState } from "react";

function Admin({ onLogout }) {
  const [form, setForm] = useState({
    name: "",
    category: "",
    location: "",
    contact: "",
    rating: ""
  });

  const [businesses, setBusinesses] = useState([]);
  const [selectedId, setSelectedId] = useState("");

  const [offer, setOffer] = useState({
    title: "",
    discount: "",
    validTill: ""
  });

  // 🔥 Fetch businesses
  useEffect(() => {
    fetch("https://local-shop-directory-backend.onrender.com/api/business")
      .then(res => res.json())
      .then(data => setBusinesses(data));
  }, []);

  // 🔥 Handle business input
 const handleAdminLogin = () => {

  localStorage.setItem("role", "admin");

  navigate("/admin");
};
  // 🔥 Add business
  const handleSubmit = async () => {
    await fetch("http://localhost:5000/api/business/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    });

    alert("Business Added ✅");
  };

  // 🔥 Handle offer input
  const handleOfferChange = (e) => {
    setOffer({ ...offer, [e.target.name]: e.target.value });
  };

  // 🔥 Add offer
  const handleAddOffer = async () => {
    if (!selectedId) {
      alert("Select business first ❗");
      return;
    }

    await fetch(`https://local-shop-directory-backend.onrender.com/api/business/${selectedId}/add-offer`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(offer)
    });

    alert("Offer Added 🔥");
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">

      {/* 🔴 LOGOUT */}
      <button
        onClick={onLogout}
        className="mb-6 bg-red-500 px-4 py-2 rounded"
      >
        Logout
      </button>

      <h1 className="text-3xl text-center mb-8">Admin Panel</h1>

      <div className="grid md:grid-cols-2 gap-8">

        {/* 🏪 ADD BUSINESS */}
        <div className="bg-gray-900 p-6 rounded-xl shadow-lg">
          <h2 className="text-xl mb-4">Add Business</h2>

          <div className="flex flex-col gap-3">
            <input name="name" placeholder="Name" onChange={handleChange} className="p-2 bg-gray-800 rounded"/>
            <input name="category" placeholder="Category" onChange={handleChange} className="p-2 bg-gray-800 rounded"/>
            <input name="location" placeholder="Location" onChange={handleChange} className="p-2 bg-gray-800 rounded"/>
            <input name="contact" placeholder="Contact" onChange={handleChange} className="p-2 bg-gray-800 rounded"/>
            <input name="rating" placeholder="Rating" onChange={handleChange} className="p-2 bg-gray-800 rounded"/>
          <input 
  name="image" 
  placeholder="Image URL" 
  onChange={handleChange} 
  className="p-2 bg-gray-800 rounded"
/>
          </div>

          <button onClick={handleSubmit} className="mt-4 w-full bg-green-500 p-2 rounded">
            Add Business
          </button>
        </div>

        {/* 🔥 ADD OFFER */}
        <div className="bg-gray-900 p-6 rounded-xl shadow-lg">
          <h2 className="text-xl mb-4">Add Offer</h2>

          <div className="flex flex-col gap-3">
            <select
              className="p-2 bg-gray-800 rounded"
              onChange={(e) => setSelectedId(e.target.value)}
            >
              <option value="">Select Business</option>
              {businesses.map((b) => (
                <option key={b._id} value={b._id}>
                  {b.name}
                </option>
              ))}
            </select>

            <input name="title" placeholder="Offer Title" onChange={handleOfferChange} className="p-2 bg-gray-800 rounded"/>
            <input name="discount" placeholder="Discount %" onChange={handleOfferChange} className="p-2 bg-gray-800 rounded"/>
            <input type="date" name="validTill" onChange={handleOfferChange} className="p-2 bg-gray-800 rounded"/>
          </div>

          <button onClick={handleAddOffer} className="mt-4 w-full bg-green-500 p-2 rounded">
            Add Offer
          </button>
        </div>

      </div>
    </div>
  );
}

export default Admin;