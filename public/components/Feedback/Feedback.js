import React from "react";
import { Box, Typography } from "@mui/material";
import styles from "./Feedback.module.css";

function Feedback({ comment, signature }) {
  return (
    <Box
      className={styles.container}
      sx={{
        transition: "transform 0.3s ease",
        "&:hover": {
          transform: "scale(1.03)",
        },
      }}
    >
      <Typography className={styles.comment}>{`"${comment}"`}</Typography>
      <Typography className={styles.signature}>{signature}</Typography>
    </Box>
  );
}

export default Feedback;
