import React from 'react';

function App() {
  return (
    // Main container to center content on the page
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white text-center p-4">
      
      {/* Main Heading */}
      <h1 className="text-5xl font-extrabold mb-3 tracking-tight">
        Odyssey 2026 is Coming Soon!
      </h1>
      
      {/* Subheading */}
      <p className="text-lg text-gray-400 mb-8 max-w-xl">
        Our new website is currently under development. We're working hard to bring you an amazing experience for our next event.
      </p>
      
      {/* Links to past websites */}
      <div className="space-y-4">
        <p className="text-md font-semibold text-gray-300">
          In the meantime, feel free to explore our past edition:
        </p>
        <div>
          <a 
            href="/Odyssey24" 
            className="inline-block px-6 py-3 bg-gray-700 text-white font-bold rounded-lg shadow-md hover:bg-gray-600 transition-colors duration-300"
          >
            Visit Odyssey 2024
          </a>
        </div>
      </div>

    </main>
  );
}

export default App;