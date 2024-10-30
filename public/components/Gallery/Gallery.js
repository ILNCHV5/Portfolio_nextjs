import React from "react";
import { Box, Link } from "@mui/material";
import styles from "./Gallery.module.css";

const Gallery = ({ images }) => {
  return (
    <Box className={styles.contentContainer}>
      {images.map((image) => (
        <Link key={image.id} href={`/${image.slug}`} alt={image.slug}>
          <Box
            className={styles.item}
            sx={{
              backgroundImage: `url(${image.coverImage})`,
              width: { xs: "100vw", sm: "50vw", md: "calc(100vw / 3)" },
              height: { xs: "66vw", sm: "33vw", md: "21vw" },
            }}
          />
        </Link>
      ))}
    </Box>
  );
};

export default Gallery;
