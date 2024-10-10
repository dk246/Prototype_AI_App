import React, { useState } from "react";

const AiAnimation = () => {
  const [selectedStyle, setSelectedStyle] = useState(null);

  return (
    <div
      className="min-h-screen flex items-center justify-center px-12"
      style={{ backgroundColor: "#323050" }}
    >
      <div
        className="w-full max-w-5xl p-8 bg-opacity-90 rounded-lg shadow-lg flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8"
        style={{ backgroundColor: "#A7DDF2" }}
      >
        {/* AI animation preview section */}
        <div
          className="flex-1 flex items-center justify-center rounded-lg p-4"
          style={{ backgroundColor: "#2D61A6" }}
        >
          <div className="w-[35rem] h-96 lg:h-[35rem] bg-gray-400 flex items-center justify-center text-gray-200">
            AI Animation
          </div>
        </div>

        {/* Controls and animation style selection */}
        <div className="flex-[2] flex flex-col justify-between">
          <div className="text-gray-200 text-center mb-6">
            Select Animation Style
          </div>
          <div className="grid grid-cols-3 gap-4 mb-8">
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

          <div className="flex items-center justify-center space-x-4">
            <button className="w-40 h-12 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 flex items-center justify-center">
              Generate
            </button>
            <button className="w-40 h-12 bg-purple-500 text-white rounded-lg shadow hover:bg-purple-600 flex items-center justify-center">
              Go
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiAnimation;
