import Box from "@mui/material/Box";
import styles from "@/styles/Item.module.css";
import Typography from "@mui/material/Typography";
import images from "/imageList.json";
import { Inter } from "next/font/google";
import BackBox from "../../public/components/BackBox/BackBox";

const inter = Inter({ subsets: ["latin"] });

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
    <Box className={styles.container} sx={{ px: { md: "0%", lg: "20%" } }}>
      <Box sx={{ alignSelf: "flex-start" }}>
        <BackBox />
      </Box>
      <Box
        className={styles.typeContainer}
        sx={{ width: { xs: "90%", md: "80%", lg: "70%" } }}
      >
        <Typography className={`${styles.title} ${inter.className}`}>
          {title}
        </Typography>
        <Typography className={`${styles.typography} ${inter.className}`}>
          {description}
        </Typography>
      </Box>
      <Box>
        <img src={coverImage} alt="Cover" style={{ width: "100%" }} />
      </Box>
      {media.map((mediaItem) => (
        <Box key={mediaItem.id}>
          <img
            src={mediaItem.src}
            alt={`Media ${mediaItem.id}`}
            style={{ width: "100%", margin: 0, padding: 0 }}
          />
        </Box>
      ))}
      <BackBox />
    </Box>
  );
};

export default ItemPage;
