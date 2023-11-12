import React from "react";

const LoadingSvg = () => {
  return (
    <svg
      version="1.1"
      id="L5"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="fit"
      enable-background="new 0 0 0 0"
      className=" w-[100px]"
      xmlSpace="preserve">
      <circle
        fill="#fff"
        stroke="none"
        cx="18"
        cy="80"
        r="6">
        <animateTransform
          attributeName="transform"
          dur="1s"
          type="translate"
          values="0 15 ; 0 -15; 0 15"
          repeatCount="indefinite"
          begin="0.1"
        />
      </circle>
      <circle
        fill="#fff"
        stroke="none"
        cx="48"
        cy="80"
        r="6">
        <animateTransform
          attributeName="transform"
          dur="1s"
          type="translate"
          values="0 10 ; 0 -10; 0 10"
          repeatCount="indefinite"
          begin="0.2"
        />
      </circle>
      <circle
        fill="#fff"
        stroke="none"
        cx="76"
        cy="80"
        r="6">
        <animateTransform
          attributeName="transform"
          dur="1s"
          type="translate"
          values="0 5 ; 0 -5; 0 5"
          repeatCount="indefinite"
          begin="0.3"
        />
      </circle>
    </svg>
  );
};

export default LoadingSvg;
