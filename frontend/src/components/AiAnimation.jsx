import React from 'react';

const AiAnimation = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">AI Animation</h1>
      <div className="w-full max-w-md bg-gray-300 p-4 rounded-lg">
        <div className="h-64 bg-gray-200 rounded-lg"></div>
        <h2 className="text-lg font-semibold mt-4">Select Animation Styles</h2>
        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="bg-gray-400 h-20 rounded-lg"></div>
          {/* ... more animation style thumbnails */}
        </div>
      </div>
      <div className="flex mt-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2">Generate</button>
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg">Go</button>
      </div>
    </div>
  )
}

export default AiAnimation
