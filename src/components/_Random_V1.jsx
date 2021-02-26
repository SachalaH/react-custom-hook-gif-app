import React, { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = process.env.GIFY_API_KEY || "RdhlWnIzlvUPazYEuRohrJzunmiG4hH3";

export const Random = () => {
  const [gifSrc, setGifSrc] = useState("");

  const fetchGif = async () => {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const { data } = await axios.get(url);
    const imgSrc = data.data.images.downsized_large.url;
    setGifSrc(imgSrc);
  };

  useEffect(() => {
    fetchGif();
  }, []);

  const handleClick = () => {
    fetchGif();
  };

  return (
    <div className="container">
      <h1>Random GIF</h1>
      <img width="500" src={gifSrc} alt="Random GIF" />
      <button onClick={handleClick}>CLICK FOR NEW GIF!</button>
    </div>
  );
};
