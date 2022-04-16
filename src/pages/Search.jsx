import React from "react";
import { useSelector } from "react-redux";
export default function Search() {
  const image = useSelector((state) => state.visitor.image);
  const changeToFile = () => {
    dataUrlToFile(image, "Test").then((file) => {
      console.log(file);
    });
  };
  async function dataUrlToFile(dataUrl, fileName) {
    const res = await fetch(dataUrl);
    const blob = await res.blob();
    return new File([blob], fileName, { type: "image/png" });
  }
  return (
    <div>
      <h1>Search</h1>
      <img src={image} alt="jsj" />
      <button type="button" onClick={changeToFile}>
        get File
      </button>
    </div>
  );
}
