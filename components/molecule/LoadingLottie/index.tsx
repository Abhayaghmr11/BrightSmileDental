"use client";

import React from "react";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

import LoadingAnimation from "@/public/assets/animations/Loading.json";

const LoadingLottie = () => {
  return <Lottie style={{ height: 110 }} animationData={LoadingAnimation} />;
};

export default LoadingLottie;
