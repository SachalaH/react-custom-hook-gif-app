import { useState, useEffect } from "react";
import axios from "axios";
require("dotenv").config();

const API_KEY = process.env.REACT_APP_GIFY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

export const useGif = (tag) => {
  const [gifSrc, setGifSrc] = useState("");

  async function fetchGif(tag) {
    const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);
    console.log(data);
    const imgSrc = data.data.images.downsized_large.url;
    setGifSrc(imgSrc);
  }

  useEffect(() => {
    fetchGif(tag);
  }, [tag]);

  return { gifSrc, fetchGif };
};
