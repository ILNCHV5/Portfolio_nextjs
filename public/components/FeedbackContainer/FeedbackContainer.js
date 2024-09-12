import React from "react";
import { Box, Typography } from "@mui/material";
import Feedback from "../Feedback/Feedback";
import styles from "./FeedbackContainer.module.css";

function FeedbackContainer({ feedbackList }) {
  return (
    <Box className={styles.sectionContainer}>
      <Typography className={styles.title}>Client testimonials</Typography>
      <Box
        className={styles.commentsContainer}
        sx={{ width: { xs: "90%", md: "80%", lg: "70%" } }}
      >
        {feedbackList.map((listItem) => (
          <Feedback
            key={listItem.id}
            comment={listItem.comment}
            signature={listItem.signature}
          />
        ))}
      </Box>
    </Box>
  );
}

export default FeedbackContainer;
