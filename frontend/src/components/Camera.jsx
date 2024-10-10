import React, { useState } from "react";

const CameraCapture = () => {
  const [selectedDrawing, setSelectedDrawing] = useState(null);

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-900 px-12">
      <div className="w-full max-w-6xl p-8 bg-blue-800 bg-opacity-90 rounded-lg shadow-lg flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
        {/* Camera preview section */}
        <div className="flex-[3] flex items-center justify-center bg-blue-700 rounded-lg p-4">
          <div className="w-full h-[40rem] lg:h-[35rem] bg-gray-400 flex items-center justify-center text-gray-200">
            Camera
          </div>
        </div>

        {/* Controls and image selection */}
        <div className="flex-[1] flex flex-col justify-center items-center space-y-6">
          <div className="flex flex-col items-center justify-center space-y-4">
            <button className="w-full bg-green-500 text-white py-3 px-6 rounded-lg shadow hover:bg-green-600">
              Capture drawing
            </button>

            <button className="w-full bg-red-500 text-white py-3 px-6 rounded-lg shadow hover:bg-red-600">
              Retake
            </button>

            <button className="w-full bg-purple-500 text-white py-3 px-6 rounded-lg shadow hover:bg-purple-600">
              Generate Art
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CameraCapture;
