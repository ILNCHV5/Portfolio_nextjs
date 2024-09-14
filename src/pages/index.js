import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/Home.module.css";
import { Box, Typography } from "@mui/material";
import images from "/imageList.json";
import feedbackList from "/commentsList.json";
import FeedbackContainer from "../../public/components/FeedbackContainer/FeedbackContainer";
import Header from "../../public/components/Header/Header";
import Footer from "../../public/components/Footer/Footer";
import VideoBackground from "../../public/components/VideoBackground/VideoBackground";

export default function Home() {
  return (
    <>
      <Head>
        <title>I. Nachev design portfolio</title>
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
            <Typography className={styles.mainLogotype}>
              Iliyan Nachev
            </Typography>
            <Typography className={styles.slogan}>
              BRAND DESIGN | TYPE DESIGN | WEB DESIGN
            </Typography>
            <Box className={styles.contentContainer}>
              {images.map((image) => (
                <Link key={image.id} href={`/${image.slug}`} alt={image.slug}>
                  <Box
                    className={styles.item}
                    sx={{
                      backgroundImage: `url(${image.coverImage})`,
                      width: { xs: "100vw", sm: "50vw", md: "33vw" },
                      height: { xs: "66vw", sm: "33vw", md: "21vw" },
                    }}
                  />
                </Link>
              ))}
            </Box>
          </Box>
          <FeedbackContainer feedbackList={feedbackList} />
        </Box>
        <Footer />
        <VideoBackground />
      </main>
    </>
  );
}
