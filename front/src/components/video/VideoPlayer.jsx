import React from "react";

const VideoPlayer = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-11/12 lg:w-3/4 xl:w-1/2 rounded-lg overflow-hidden shadow-2xl shadow-blue-500/50">
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/58eFKSi_iiA?autoplay=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div >
    </div>
  );
};

export default VideoPlayer;