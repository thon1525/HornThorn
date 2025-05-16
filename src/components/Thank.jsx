import React from 'react';

const Thank = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center transform transition-all duration-500 hover:scale-105">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Thank You!</h1>
        <p className="text-lg text-gray-600 mb-6">
          We truly appreciate your support and trust in us. You're amazing!
        </p>
        <svg
          className="w-16 h-16 mx-auto text-blue-500 mb-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <a
          href="/"
          className="inline-block bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition-colors"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default Thank;