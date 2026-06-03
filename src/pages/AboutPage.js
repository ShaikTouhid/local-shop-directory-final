function AboutPage() {
  return (
    <div className="text-white px-10 py-20">

      <h1 className="text-5xl font-bold text-green-400 mb-8 text-center">
        About LocalDeals
      </h1>

      <div className="max-w-4xl mx-auto">

        <p className="text-lg text-gray-300 leading-8 mb-8">
          LocalDeals is a smart local business discovery platform
          developed using the MERN Stack. The platform helps users
          discover exciting offers, discounts and nearby businesses
          from categories like restaurants, entertainment, shopping,
          cafes and parks.
        </p>

        <p className="text-lg text-gray-300 leading-8 mb-8">
          The system provides dynamic deal management, category
          filtering, business listings and role-based login systems.
          Admins can add businesses and manage offers through the
          admin panel.
        </p>

        {/* 🔥 TECH STACK */}
        <div className="grid md:grid-cols-4 gap-6 mt-12">

          <div className="bg-white/10 p-6 rounded-xl text-center">
            <h2 className="text-2xl font-bold text-green-400">
              React
            </h2>

            <p className="text-gray-400 mt-2">
              Frontend
            </p>
          </div>

          <div className="bg-white/10 p-6 rounded-xl text-center">
            <h2 className="text-2xl font-bold text-green-400">
              Node.js
            </h2>

            <p className="text-gray-400 mt-2">
              Backend
            </p>
          </div>

          <div className="bg-white/10 p-6 rounded-xl text-center">
            <h2 className="text-2xl font-bold text-green-400">
              Express
            </h2>

            <p className="text-gray-400 mt-2">
              API Server
            </p>
          </div>

          <div className="bg-white/10 p-6 rounded-xl text-center">
            <h2 className="text-2xl font-bold text-green-400">
              MongoDB
            </h2>

            <p className="text-gray-400 mt-2">
              Database
            </p>
          </div>

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
export default AboutPage;