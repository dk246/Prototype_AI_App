import React, { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ArtPreview = () => {
  const location = useLocation();
  const { capturedImage } = location.state || { capturedImage: null }; // Get the captured image from state
  const [selectedStyle, setSelectedStyle] = useState(null);
  const [generatedImage, setGeneratedImage] = useState(null);
  const [generatingImage, setGeneratingImage] = useState(false);

  // Function to generate AI image
  const handleGenerateImage = async () => {
    setGeneratingImage(true);

    try {
      // Convert the captured image to blob
      const response = await fetch(capturedImage);
      const blob = await response.blob();

      const formData = new FormData();
      formData.append("image_file", blob);

      // Optionally, add selected style to the request if necessary
      if (selectedStyle) {
        formData.append("style_id", selectedStyle); // Adjust this according to your API spec
      }

      // Send request to Clipdrop API for AI image generation
      const result = await axios.post(
        "https://clipdrop-api.co/reimagine/v1/reimagine", // Adjust the endpoint if necessary
        formData,
        {
          headers: {
            "x-api-key":
              "e019ba1e1d80d9d9a2c101b6fb33ac2fd9b30a49d1d679156960533fd43123cffcd38db6653b783fc8fc0eb136d971ca",
          },
          responseType: "arraybuffer", // Ensure binary data is returned
        }
      );

      // Convert binary data to base64
      const blobData = new Blob([result.data]);
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64GeneratedImage = reader.result;
        setGeneratedImage(base64GeneratedImage); // Set the generated AI image
        toast.success("Image generated successfully!");
      };
      reader.readAsDataURL(blobData);
    } catch (error) {
      console.error("Error generating AI image:", error);
      toast.error("Failed to generate image. Please try again.");
    } finally {
      setGeneratingImage(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-12"
      style={{ backgroundColor: "#323050" }}
    >
      <div
        className="w-full max-w-6xl p-8 bg-opacity-90 rounded-lg shadow-lg flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8"
        style={{ backgroundColor: "#A7DDF2" }}
      >
        {/* Art preview section */}
        <div
          className="flex-1 flex items-center justify-center rounded-lg p-4"
          style={{ backgroundColor: "#2D61A6" }}
        >
          <div className="w-[35rem] h-96 lg:h-[35rem] bg-gray-400 flex items-center justify-center text-gray-200">
            {generatedImage ? (
              <img
                src={generatedImage}
                alt="Generated"
                className="w-full h-auto"
              />
            ) : capturedImage ? (
              <img
                src={capturedImage}
                alt="Captured"
                className="w-full h-auto"
              />
            ) : (
              <span>No image captured</span>
            )}
            {generatingImage && (
              <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 bg-gray-700">
                <ClipLoader size={50} color={"#ffffff"} />
              </div>
            )}
          </div>
        </div>

        {/* Art styles selection */}
        <div className="flex-[0.75] flex flex-col justify-between">
          <div className="text-black-500 text-center mb-6">
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
            <button
              onClick={handleGenerateImage}
              className={`w-full bg-purple-500 text-white py-3 rounded-lg shadow hover:bg-purple-600 ${
                generatingImage ? "cursor-not-allowed opacity-50" : ""
              }`}
              disabled={generatingImage}
            >
              {generatingImage ? "Generating..." : "Generate"}
            </button>
            <button className="w-full bg-blue-500 text-white py-3 rounded-lg shadow hover:bg-blue-600">
              Next
            </button>
            <button
              onClick={() => (window.location.href = "/")}
              className="w-full bg-yellow-500 text-white py-3 rounded-lg shadow hover:bg-yellow-600"
            >
              Back
            </button>
          </div>
        </div>
      </div>
      {/* Toast notifications */}
      <ToastContainer position="top-center" autoClose={5000} hideProgressBar />
    </div>
  );
};

export default ArtPreview;
