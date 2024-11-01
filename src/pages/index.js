import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { Box, Typography } from "@mui/material";
import images from "/imageList.json";
import feedbackList from "/commentsList.json";
import FeedbackContainer from "../../public/components/FeedbackContainer/FeedbackContainer";
import Header from "../../public/components/Header/Header";
import Footer from "../../public/components/Footer/Footer";
import VideoBackground from "../../public/components/VideoBackground/VideoBackground";
import Gallery from "../../public/components/Gallery/Gallery";

export default function Home() {
  return (
    <>
      <Head>
        <title>I. Nachev Design Portfolio</title>
        <meta name="description" content="Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
      </Head>
      <main className={styles.main}>
        <Box className={styles.layout}>
          <Box className={styles.pageContainer}>
            <Header />
            <Typography
              className={styles.mainLogotype}
              sx={{ fontSize: { xs: "3.5rem", sm: "5rem", md: "7rem" } }}
            >
              Iliyan Nachev
            </Typography>
            <Box
              className={styles.sloganContainer}
              sx={{
                "& > .MuiTypography-root": {
                  fontSize: { xs: "0.7rem", sm: "0.9rem", md: "1.1rem" },
                },
                columnGap: { xs: "0.7rem", md: "1.5rem", lg: "2.5rem" },
              }}
            >
              <Typography className={styles.sloganText}>
                BRAND DESIGN
              </Typography>
              <Typography className={styles.sloganText}>TYPE DESIGN</Typography>
              <Typography className={styles.sloganText}>WEB DESIGN</Typography>
            </Box>
            <Gallery images={images} />
          </Box>
          <FeedbackContainer feedbackList={feedbackList} />
        </Box>
        <Footer />
        <VideoBackground />
      </main>
    </>
  );
}
