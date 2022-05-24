import { useRef } from "react";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";
import { motion } from "framer-motion";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import MyImage from "../../components/MyImage";

import "./Gallery.css";

const galleryImages = [
  images.gallery01,
  images.gallery02,
  images.gallery03,
  images.gallery04,
];

const container = {
  init: {},
  show: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const galleryAni = {
  init: {
    x: "-20",
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const Gallery = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="app__gallery flex__center">
      <motion.div
        className="app__gallery-content"
        variants={container}
        initial="init"
        whileInView="show"
        viewport={{ once: true }}
      >
        <SubHeading title="Instagram" />
        <motion.h1 className="headtext__cormorant" variants={galleryAni}>
          Photo Gallery
        </motion.h1>
        <motion.p
          className="p__opensans"
          style={{ color: "#AAA", marginTop: "2rem" }}
          variants={galleryAni}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod id
          architecto facere autem ad, ab eius blanditiis ducimus nostrum veniam
          fugit consequuntur vero eveniet harum doloribus cupiditate praesentium
          aperiam sunt.
        </motion.p>
        <motion.button
          className="custom__button"
          type="button"
          variants={galleryAni}
        >
          View More
        </motion.button>
      </motion.div>

      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {galleryImages.map((img, index) => (
            <div
              className="app__gallery-images_card flex__center"
              key={`gallery_images-${index}`}
            >
              <MyImage image={{ src: img, alt: "img" }} />

              <BsInstagram
                className="gallery__image-icon"
                color="#fff"
                fontSize={36}
              />
            </div>
          ))}
        </div>

        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            onClick={() => scroll("left")}
          />

          <BsArrowRightShort
            className="gallery__arrow-icon"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
