import React from "react";
import { Box, Typography, Link, Button } from "@mui/material";
import Head from "next/head";
import Header from "../../public/components/Header/Header";
import Footer from "../../public/components/Footer/Footer";
import VideoBackground from "../../public/components/VideoBackground/VideoBackground";
import WhiteTextField from "../../public/components/WhiteTextField/WhiteTextField";
import styles from "@/styles/Contacts.module.css";

const Contacts = () => {
  return (
    <Box className={styles.container}>
      <Head>
        <title>Contacts - I. Nachev </title>
      </Head>
      <Header />
      <Box className={styles.textBox}>
        <Typography>Get in touch with me:</Typography>
        <Typography sx={{ fontSize: "1.3rem", pt: "1rem" }}>
          nachevart@gmail.com
        </Typography>
        <Typography>
          <Link
            href="https://linkedin.com/in/iliyan-nachev/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "lime", fontSize: "1.3rem" }}
          >
            LinkedIn
          </Link>
        </Typography>
      </Box>
      <Typography className={styles.or}>OR</Typography>
      <Box
        component="form"
        action="https://formspree.io/f/mldrkzev"
        method="POST"
        sx={{
          width: { xs: "90vw", sm: "60vw", md: "50vw", lg: "40vw", xl: "30vw" },
        }}
      >
        <WhiteTextField label="Name" name="name" />
        <WhiteTextField label="Email" name="email" type="email" />
        <WhiteTextField label="Message" name="message" multiline rows={4} />
        <Button type="submit" className={styles.button}>
          Send
        </Button>
      </Box>
      <Footer />
      <VideoBackground />
    </Box>
  );
};

export default Contacts;
