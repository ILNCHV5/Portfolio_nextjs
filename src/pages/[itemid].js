import { Box, Typography, Button } from "@mui/material";
import Link from "next/link";
import styles from "@/styles/Item.module.css";
import images from "/imageList.json";
import Head from "next/head";
import Header from "../../public/components/Header/Header";
import Footer from "../../public/components/Footer/Footer";
import VideoBackground from "../../public/components/VideoBackground/VideoBackground";

export async function getStaticPaths() {
  const paths = images.map((image) => ({ params: { itemid: image.slug } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const image = images.find((img) => img.slug === params.itemid);
  return { props: { image } };
}

const ItemPage = ({ image }) => {
  const { coverImage, media, description, title } = image;

  return (
    <Box
      className={styles.container}
      sx={{ maxWidth: { md: "70%", lg: "60%" }, mx: "auto" }}
    >
      <Head>
        <title>{title} - I. Nachev </title>
      </Head>
      <Header />
      <Box
        className={styles.typeContainer}
        sx={{ width: { xs: "90%", md: "80%", lg: "70%" } }}
      >
        <Typography
          className={styles.title}
          sx={{ paddingTop: { xs: "4rem", md: "7rem" } }}
        >
          {title}
        </Typography>
        <Typography className={styles.typography}>{description}</Typography>
      </Box>
      <Box className={styles.imageContainer}>
        <img className={styles.image} src={coverImage} alt="Cover" />
      </Box>
      {media.map((mediaItem) => (
        <Box key={mediaItem.id} className={styles.imageContainer}>
          <img
            className={styles.image}
            src={mediaItem.src}
            alt={mediaItem.id}
            // style={{ maxHeight: 900, margin: 0, padding: 0 }}
          />
        </Box>
      ))}
      <Link href="/" passHref>
        <Button className={styles.button}>Back</Button>
      </Link>
      <Footer />
      <VideoBackground />
    </Box>
  );
};

export default ItemPage;
