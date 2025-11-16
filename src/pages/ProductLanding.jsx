import React from 'react';

const ProductLanding = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="text-center py-6 bg-white shadow">
        <h1 className="text-4xl font-bold">SmartCity X1</h1>
      </header>

      {/* Product Image */}
      <section className="flex justify-center py-6">
        <img
          src="https://images.unsplash.com/photo-1602524201344-3b2e6f3f3e4b"
          alt="SmartCity X1"
          className="w-full md:w-1/2 rounded shadow"
        />
      </section>

      {/* Description */}
      <section className="text-center px-4 md:px-20 py-4">
        <p className="text-lg">
          SmartCity X1 is the future of urban living, powered by AI and sustainable technologies.
        </p>
      </section>

      {/* Features */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 md:px-20 py-6">
        <div className="bg-white p-4 rounded shadow">AI-powered traffic control</div>
        <div className="bg-white p-4 rounded shadow">Green energy infrastructure</div>
        <div className="bg-white p-4 rounded shadow">Smart home integration</div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-gray-800 text-white">
        Contact us: contact@smartcity.com
      </footer>
    </div>
  );
};

export default ProductLanding;
