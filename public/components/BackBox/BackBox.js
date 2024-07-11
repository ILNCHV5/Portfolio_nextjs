import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import styles from "./BackBox.module.css";
import { useRouter } from "next/router";

function BackBox() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  return (
    <Box
      className={styles.backContainer}
      sx={{ pl: { xs: "5vw", lg: "0vw" } }}
      onClick={handleClick}
    >
      <Image
        className={styles.backIcon}
        src="/images/icons/backicon.svg"
        width={10}
        height={10}
      />
      <Typography className={styles.backButtonType}>MAIN</Typography>
    </Box>
  );
}

export default BackBox;
