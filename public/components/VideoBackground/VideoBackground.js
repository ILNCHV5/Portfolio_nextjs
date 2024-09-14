import React, { useRef, useEffect } from "react";
import { Box } from "@mui/material";
import styles from "./VideoBackground.module.css";

function VideoBackground() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7;
    }
  }, []);

  return (
    <Box className={styles.videoBackground}>
      <Box className={styles.overlay} />
      <video ref={videoRef} autoPlay loop muted playsInline>
        <source src="/images/video/bgvideo.mp4" type="video/mp4" />
      </video>
    </Box>
  );
}

export default VideoBackground;
