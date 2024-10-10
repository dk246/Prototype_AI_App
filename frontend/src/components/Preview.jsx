// ArtPreview.jsx
import React, { useState } from "react";

const ArtPreview = () => {
  const [selectedStyle, setSelectedStyle] = useState(null);

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-900 px-12">
      <div className="w-full max-w-6xl p-8 bg-blue-800 bg-opacity-90 rounded-lg shadow-lg flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
        {/* Art preview section */}
        <div className="flex-1 flex items-center justify-center bg-gray-400 rounded-lg p-4">
          <div className="w-[35rem] h-96 lg:h-[35rem] bg-gray-400 flex items-center justify-center text-gray-200">
            Art Preview
          </div>
        </div>

        {/* Art styles selection */}
        <div className="flex-[0.75] flex flex-col justify-between">
          <div className="text-gray-200 text-center mb-6">
            Select Art Styles
          </div>
          <div className="grid grid-cols-2 gap-4 mb-8">
            {[1, 2, 3, 4, 5, 6].map((style, idx) => (
              <div
                key={idx}
                className={`w-24 h-24 bg-gray-400 cursor-pointer rounded-lg hover:bg-gray-500 ${
                  selectedStyle === idx ? "border-4 border-green-500" : ""
                }`}
                onClick={() => setSelectedStyle(idx)}
              />
            ))}
          </div>

          {/* Buttons */}
          <div className="flex space-x-4">
            <button className="w-full bg-purple-500 text-white py-3 rounded-lg shadow hover:bg-purple-600">
              Generate
            </button>
            <button className="w-full bg-blue-500 text-white py-3 rounded-lg shadow hover:bg-blue-600">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtPreview;
