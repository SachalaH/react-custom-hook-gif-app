import React, { useState } from "react";
import { useGif } from "../useGif";

export const Tag = () => {
  const [tag, setTag] = useState("dogs");
  const { gifSrc, fetchGif } = useGif(tag);

  return (
    <div className="container">
      <h1>Random {tag} GIF</h1>
      <img src={gifSrc} alt="Random GIF" />
      <input type="text" value={tag} onChange={(e) => setTag(e.target.value)} />
      <button onClick={() => fetchGif(tag)}>CLICK FOR NEW GIF!</button>
    </div>
  );
};
