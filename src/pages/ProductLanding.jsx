import React from 'react';

const ProductLanding = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="text-center py-6 bg-white shadow">
        <h1 className="text-4xl font-bold">FIFA World Cup Ball 2026</h1>
      </header>

      {/* Product Image */}
      <section className="flex justify-center py-6">
        <img
          src="/FB_IMG_1763319499551.jpg"
          alt="FIFA World Cup Ball 2026"
          className="w-full md:w-1/2 rounded shadow"
        />
      </section>

      {/* Description */}
      <section className="text-center px-4 md:px-20 py-4">
        <p className="text-lg">
          The official ball of the FIFA World Cup 2026 combines aerodynamic precision with cutting-edge materials.
          Engineered for elite performance, it delivers unmatched control, speed, and visibility on the pitch.
          Certified to meet the highest FIFA standards, this ball represents the future of football innovation.
        </p>
      </section>

      {/* Features */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 md:px-20 py-6">
        <div className="bg-white p-4 rounded shadow">TRIONDA technology for air pressure distribution</div>
        <div className="bg-white p-4 rounded shadow">FIFA Quality Pro certified for official matches</div>
        <div className="bg-white p-4 rounded shadow">Multi-color design for enhanced visibility</div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-gray-800 text-white">
        Contact us: contact@fifaball2026.com
      </footer>
    </div>
  );
};

export default ProductLanding;
