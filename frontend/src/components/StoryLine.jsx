import React, { useState } from "react";

const StorylinePage = () => {
  const [selectedAnimation, setSelectedAnimation] = useState(null);

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-900 px-12">
      <div className="w-full max-w-7xl p-8 bg-blue-800 bg-opacity-90 rounded-lg shadow-lg flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
        {/* Storyline preview section */}
        <div className="flex-1 flex items-center justify-center bg-blue-700 rounded-lg p-4">
          <div className="w-[60rem] h-96 lg:h-[35rem] bg-gray-400 flex items-center justify-center text-gray-200">
            Storyline
          </div>
        </div>

        {/* Controls and animation selection */}
        <div className="w-48 flex flex-col justify-between">
          <div className="text-gray-200 text-center mb-6">All Animations</div>
          <div className="grid grid-cols-2 gap-4 mb-8">
            {[1, 2, 3, 4, 5, 6].map((animation, idx) => (
              <div
                key={idx}
                className={`w-24 h-24 bg-gray-400 cursor-pointer rounded-lg hover:bg-gray-500 ${
                  selectedAnimation === idx ? "border-4 border-green-500" : ""
                }`}
                onClick={() => setSelectedAnimation(idx)}
              />
            ))}
          </div>

          {/* Back Button */}
          <button className="bg-green-500 text-white py-3 rounded-lg shadow hover:bg-gray-600">
            Back
          </button>
          <button className="bg-blue-500 text-white py-3 px-8 rounded-lg shadow hover:bg-blue-600">
            Download
          </button>
          <button className="bg-purple-500 text-white py-3 px-8 rounded-lg shadow hover:bg-purple-600">
            Full Screen
          </button>
        </div>
      </div>
    </div>
  );
};

export default StorylinePage;
