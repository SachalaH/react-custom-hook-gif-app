import React, { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = process.env.GIFY_API_KEY || "RdhlWnIzlvUPazYEuRohrJzunmiG4hH3";

export const Tag = () => {
  const [tag, setTag] = useState("dogs");
  const [gifSrc, setGifSrc] = useState("");

  const fetchGif = async (tag) => {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    const { data } = await axios.get(url);
    const imgSrc = data.data.images.downsized_large.url;
    setGifSrc(imgSrc);
  };

  useEffect(() => {
    fetchGif(tag);
  }, []);

  const handleClick = () => {
    fetchGif(tag);
  };

  return (
    <div className="container">
      <h1>Random {tag} GIF</h1>
      <img width="500" src={gifSrc} alt="Random GIF" />
      <input type="text" value={tag} onChange={(e) => setTag(e.target.value)} />
      <button onClick={handleClick}>CLICK FOR NEW GIF!</button>
    </div>
  );
};
