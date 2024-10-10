// CameraCapture.jsx
import React, { useState } from "react";

const CameraCapture = () => {
  const [selectedDrawing, setSelectedDrawing] = useState(null);

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-900 px-12">
      <div className="w-full max-w-6xl p-8 bg-blue-800 bg-opacity-90 rounded-lg shadow-lg flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
        {/* Camera preview section */}
        <div className="flex-1 flex items-center justify-center bg-blue-700 rounded-lg p-4">
          <div className="w-full h-96 lg:h-[35rem] bg-gray-400 flex items-center justify-center text-gray-200">
            Camera
          </div>
        </div>

        {/* Controls and image selection */}
        <div className="flex-[2] flex flex-col justify-between">
          <div className="flex items-center justify-center mb-8">
            <button className="bg-green-500 text-white py-3 px-6 rounded-lg shadow hover:bg-green-600 mr-4">
              Capture drawing
            </button>
            <button className="bg-red-500 text-white py-3 px-6 rounded-lg shadow hover:bg-red-600">
              Retake
            </button>
          </div>

          <div className="text-gray-200 text-center mb-6">
            Select your drawing
          </div>
          <div className="flex justify-center space-x-4 mb-8">
            {[1, 2, 3, 4].map((drawing, idx) => (
              <div
                key={idx}
                className={`w-24 h-24 bg-gray-400 cursor-pointer rounded-lg hover:bg-gray-500 ${
                  selectedDrawing === idx ? "border-4 border-green-500" : ""
                }`}
                onClick={() => setSelectedDrawing(idx)}
              />
            ))}
          </div>

          <button className="w-full bg-purple-500 text-white py-3 rounded-lg shadow hover:bg-purple-600">
            Generate Art
          </button>
        </div>
      </div>
    </div>
  );
};

export default CameraCapture;
