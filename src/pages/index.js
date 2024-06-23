import Head from "next/head";
import { Inter, Dancing_Script } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Box, Typography } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });
const dancingScript = Dancing_Script({
  weights: [400, 700],
  subsets: ["latin"],
});

const array = [1, 2, 3, 4];

export default function Home() {
  return (
    <>
      <Head>
        <title>I. Nachev design portfolio</title>
        <meta name="description" content="Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
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
            {array.map((item) => (
              <Box
                key={item.id}
                className={styles.itemStyle}
                sx={{
                  minWidth: { xs: "100%", sm: "100%", md: "50%", lg: "33%" },
                }}
              ></Box>
            ))}
          </Box>
        </Box>
      </main>
    </>
  );
}
