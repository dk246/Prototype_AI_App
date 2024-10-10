// App.jsx
import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CameraCapture from "./components/Camera";
import ArtPreview from "./components/ImgGen";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CameraCapture />} />
        <Route path="/ArtPreview" element={<ArtPreview />} />
      </Routes>
    </Router>
  );
};

export default App;
