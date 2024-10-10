import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const CameraCapture = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isCameraActive, setIsCameraActive] = useState(true);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const getUserMedia = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error("Error accessing webcam:", error);
      }
    };

    getUserMedia();

    return () => {
      // Cleanup to stop all tracks if videoRef is valid
      if (videoRef.current && videoRef.current.srcObject) {
        const tracks = videoRef.current.srcObject.getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }, []);

  const handleCapture = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    // Set the canvas dimensions to match the video feed
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;

    // Draw the video frame onto the canvas
    context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
    const imageData = canvas.toDataURL("image/png");
    setSelectedImage(imageData);
    setIsCameraActive(false);
  };

  const handleRetake = () => {
    setSelectedImage(null);
    setIsCameraActive(true);
    const getUserMedia = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error("Error accessing webcam:", error);
      }
    };
    getUserMedia();
  };

  const handleNext = () => {
    if (selectedImage) {
      // Navigate to ArtPreview and pass the captured image as state
      navigate("/ArtPreview", { state: { capturedImage: selectedImage } });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-900 px-12">
      <div className="w-full max-w-6xl p-8 bg-blue-800 bg-opacity-90 rounded-lg shadow-lg flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
        {/* Camera preview section */}
        <div className="flex-1 flex items-center justify-center bg-blue-700 rounded-lg p-4">
          {isCameraActive ? (
            <div>
              <video
                ref={videoRef}
                autoPlay
                className="w-full h-[40rem] lg:h-[35rem]"
              />
              <canvas ref={canvasRef} style={{ display: "none" }} />
            </div>
          ) : (
            <img
              src={selectedImage}
              alt="Captured"
              className="w-full h-auto max-h-[40rem] lg:max-h-[35rem] object-contain"
            />
          )}
        </div>

        {/* Controls and image selection */}
        <div className="flex-[1] flex flex-col justify-center items-center space-y-6">
          <button
            onClick={handleCapture}
            className={`w-full py-3 px-6 rounded-lg shadow ${
              isCameraActive
                ? "bg-green-500 text-white hover:bg-green-600"
                : "bg-gray-500 text-gray-300 cursor-not-allowed"
            }`}
            disabled={!isCameraActive}
          >
            Capture drawing
          </button>

          <button
            onClick={handleRetake}
            className={`w-full py-3 px-6 rounded-lg shadow ${
              isCameraActive
                ? "bg-gray-500 text-gray-300 cursor-not-allowed"
                : "bg-red-500 text-white hover:bg-red-600"
            }`}
            disabled={isCameraActive}
          >
            Retake
          </button>

          <button
            onClick={handleNext}
            className={`w-full py-3 px-6 rounded-lg shadow ${
              isCameraActive
                ? "bg-gray-500 text-gray-300 cursor-not-allowed"
                : "bg-purple-500 text-white hover:bg-purple-600"
            }`}
            disabled={isCameraActive}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default CameraCapture;
