import React from "react";
import Link from "next/link";
import { Box, Typography } from "@mui/material";
import styles from "./Header.module.css";

function Header() {
  return (
    <Box className={styles.section}>
      <Link href={"/"}>
        <Typography className={styles.linkText}>Portfolio</Typography>
      </Link>
      <Link href={"/contacts"}>
        <Typography className={styles.linkText}>Contacts</Typography>
      </Link>
    </Box>
  );
}

export default Header;
