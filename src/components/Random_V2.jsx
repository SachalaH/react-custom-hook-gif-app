import React from "react";
import { useGif } from "../useGif";

export const Random = () => {
  const { gifSrc, fetchGif } = useGif();

  return (
    <div className="container">
      <h1>Random GIF</h1>
      <img src={gifSrc} alt="Random GIF" />
      <button onClick={fetchGif}>CLICK FOR NEW GIF!</button>
    </div>
  );
};
