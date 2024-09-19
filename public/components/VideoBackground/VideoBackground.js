import React, { useRef, useEffect, useState } from "react";
import { Box } from "@mui/material";
import styles from "./VideoBackground.module.css";

function VideoBackground() {
  const videoRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7;
    }
  }, []);
  return (
    <Box className={styles.videoBackground}>
      <Box className={styles.overlay} />
      {isMounted && (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          disablePictureInPicture
          style={{ pointerEvents: "none" }}
        >
          <source src="/images/video/bgvideo.mp4" type="video/mp4" />
        </video>
      )}
    </Box>
  );
}

export default VideoBackground;
