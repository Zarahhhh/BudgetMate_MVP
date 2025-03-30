import React from "react";
import projectVideo from "../../assets/budgetmate-video.mp4";

const VideoSection = () => {
  return (
    <section id="video">
      <h2>Project Overview</h2>
      <video controls>
        <source src={projectVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default VideoSection;

