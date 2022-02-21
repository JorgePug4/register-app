import React, { useRef, useCallback, useState, useEffect } from "react";
import Webcam from "react-webcam";
import { AiFillCamera } from "react-icons/ai";
import { FiRotateCcw } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { setImage } from "../../context/Reducers/visitorSlice";

export default function WebcamCapture() {
  const webcamRef = useRef(null);
  const dispatch = useDispatch();
  const imgSrc = useSelector((state) => state.visitor.image);
  const videoConstraints = {
    facingMode: "user",
  };
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    dispatch(setImage(imageSrc));
  }, [webcamRef, dispatch]);
  const contentCam = useRef(null);
  const reset = () => {
    dispatch(setImage(""));
  };

  return (
    <div className="mt-28">
      {imgSrc === null || imgSrc === "" ? (
        <div>
          <div ref={contentCam} className="px-7">
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              videoConstraints={videoConstraints}
            />
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
            onClick={capture}
          >
            {<AiFillCamera />}
          </button>
        </div>
      ) : (
        <div className="px-7">
          <img src={imgSrc} alt="" />
          <button
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
            onClick={reset}
          >
            <FiRotateCcw />
          </button>
        </div>
      )}
    </div>
  );
}
