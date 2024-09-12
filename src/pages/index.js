import Head from "next/head";
import Link from "next/link";
import { Inter, Dancing_Script } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Box, Typography } from "@mui/material";
import images from "/imageList.json";
import feedbackList from "/commentsList.json";
import FeedbackContainer from "../../public/components/FeedbackContainer/FeedbackContainer";

const inter = Inter({ subsets: ["latin"] });
const dancingScript = Dancing_Script({
  weights: [400, 700],
  subsets: ["latin"],
});

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
      <main className={`${styles.main} ${inter.className}`}>
        <Box className={styles.layout}>
          <Box className={styles.pageContainer}>
            <Typography
              className={`${styles.mainLogotype} ${dancingScript.className}`}
            >
              Iliyan Nachev
            </Typography>
            <Typography className={`${styles.slogan} ${inter.className}`}>
              LOGO & BRAND DESIGN | TYPE DESIGN | ICON DESIGN
            </Typography>
            <Box className={styles.contentContainer}>
              {images.map((image) => (
                <Link key={image.id} href={`/${image.slug}`}>
                  <Box
                    sx={{
                      backgroundImage: `url(${image.coverImage})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundColor: "white",
                      width: "20rem",
                      height: "15rem",
                      cursor: "pointer",
                    }}
                  />
                </Link>
              ))}
            </Box>
          </Box>
          <FeedbackContainer feedbackList={feedbackList} />
        </Box>
      </main>
    </>
  );
}
