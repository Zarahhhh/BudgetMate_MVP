import React from "react";

const VideoSection = () => {
  return (
    <section id="video">
      <h2>Project Overview</h2>
      <video controls>
        <source
          src="https://drive.google.com/uc?export=download&id=1U3rfa1vqydm-aHSPMcGMPsoDK5UAfbP-"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default VideoSection;

