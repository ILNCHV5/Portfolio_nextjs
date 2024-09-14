import React from "react";
import { Typography } from "@mui/material";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <Typography className={styles.notice}>
      Iliyan Nachev ©2024. All rights reserved.
    </Typography>
  );
}

export default Footer;
