import React from "react";
import { Box, Typography } from "@mui/material";
import styles from "./Feedback.module.css";
import feedback from "commentsList.json";

function Feedback(comment, signature) {
  return (
    <Box classname={styles.container}>
      <Typography className={styles.comment}>{`"${signature}"`}</Typography>
      <Typography className={styles.signature}>{comment}</Typography>
    </Box>
  );
}

export default Feedback;
