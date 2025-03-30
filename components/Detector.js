"use client";
import React, { useEffect, useRef } from "react";
import Webcam from "react-webcam";
import { load as cocoSsdLoad } from "@tensorflow-models/coco-ssd";
import * as tf from "@tensorflow/tfjs";
import renderPredictions from "@/utils/render-predictions";
let detectInterval;

const Detector = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const runCoco = async () => {
    setIsLoading(true);
    const net = await cocoSsdLoad();
    setIsLoading(false);
    detectInterval = setInterval(() => {
        runObjectDetection(net);
    }, 10);
  };

  async function runObjectDetection(net) {
    if (
      canvasRef.current &&
      webcamRef.current !== null &&
      webcamRef.current.video?.readyState === 4
    ) {
        canvasRef.current.height = webcamRef.current.video.videoHeight;   
        canvasRef.current.width = webcamRef.current.video.videoWidth;
        
        const detectedObjects = await net.detect(webcamRef.current.video,undefined, 0.6);
        const ctx = canvasRef.current.getContext("2d");
        renderPredictions(detectedObjects, ctx);
    }
  }
  const showmyVideo = () => {
    if (
      webcamRef.current !== null &&
      webcamRef.current.video?.readyState === 4
    ) {
      const myVideoHeight = webcamRef.current.video.videoHeight;
      const myVideoWidth = webcamRef.current.video.videoWidth;

      webcamRef.current.video.height = myVideoHeight;
      webcamRef.current.video.width = myVideoWidth;
    }
  };
  useEffect(() => {
    runCoco();
    showmyVideo();
  }, []);
  return (
    <>
      <div className="mt-8">
        {isLoading ? (
          <div className="gradient-text">Detector activating...</div>
        ) : (
          <div className="relative flex justify-center items-center gradient p-1.5 rounded-md">
            <Webcam
              ref={webcamRef}
              className="rounded-md w-full lg:h-[720px]"
              muted
            />
            <canvas
              ref={canvasRef}
              className="absolute top-0 left-0 z-99999 w-full lg:h-[720px]"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Detector;
