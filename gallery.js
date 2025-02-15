import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Gallery.css";

const Gallery = ({ rollNumber }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/images?rollNumber=${rollNumber}`)
      .then((response) => {
        setImages(response.data);
      })
      .catch((error) => console.error("Error fetching images:", error));
  }, [rollNumber]);

  return (
    <div className="gallery-container">
      <h2>Gallery for Roll Number: {rollNumber}</h2>
      <div className="image-grid">
        {images.map((image, index) => (
          <div className="image-card" key={index}>
            <img src={image.url} alt="User Upload" />
            <a href={image.url} download className="download-btn">
              ⬇ Download
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
