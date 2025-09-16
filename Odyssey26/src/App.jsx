import React from 'react';

function App() {
  return (
    // Main container uses the light yellow/cream background
    // and centers content.
    <main className="flex flex-col items-center justify-start min-h-screen bg-yellow-100 text-center p-4">

      {/* Top section with dark red background, similar to your image's header */}
      <div className="w-full bg-red-800 text-white py-12 px-4 shadow-lg">
        <h1 className="text-5xl font-extrabold mb-3 tracking-tight text-yellow-300">
          Odyssey 2026 is Coming Soon!
        </h1>
        <p className="text-xl text-yellow-100 mb-8 max-w-2xl mx-auto">
          Our new website is currently under development. We're working hard to bring you an amazing experience for our next event.
        </p>
      </div>

      {/* Content section with the light yellow/cream background */}
      <div className="w-full max-w-4xl bg-yellow-100 py-12 px-4">
        <p className="text-2xl font-semibold text-red-800 mb-6">
          In the meantime, feel free to explore our past edition:
        </p>
        <div>
          <a
            href="/Odyssey24"
            className="inline-block px-8 py-4 bg-red-700 text-yellow-100 font-bold text-xl rounded-lg shadow-xl hover:bg-red-600 transition-colors duration-300 transform hover:scale-105"
          >
            Visit Odyssey 2024
          </a>
        </div>
      </div>

      {/* Optional: Footer or more decorative elements could go here */}

    </main>
  );
}

export default App;