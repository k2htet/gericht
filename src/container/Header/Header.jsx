import React from "react";
import { SubHeading } from "../../components";
import images from "../../constants/images";
import { motion } from "framer-motion";
import MyImage from "../../components/MyImage";
import "./Header.css";
const header = {
  init: {
    opacity: 1,
  },
  animateStart: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};
const headerInfo = {
  init: {
    y: "-15",
    opacity: 0,
  },
  animateStart: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};
const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <motion.div
      className="app__wrapper_info"
      variants={header}
      initial="init"
      whileInView="animateStart"
      viewport={{ once: true }}
    >
      <SubHeading title="Chase the new flavour" />
      <motion.h1 className="app__header-h1" variants={headerInfo}>
        The Key to Fine Dining
      </motion.h1>
      <motion.p
        className="p__opensans"
        style={{ margin: "2rem 0" }}
        variants={headerInfo}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit laborum
        hic sint dolorem, quo suscipit laboriosam, assumenda explicabo expedita
        fugit reiciendis vitae cum porro consequatur illum nihil ut
        exercitationem numquam!
      </motion.p>
      <button className="custom__button" type="button">
        Explore Menu
      </button>
    </motion.div>

    <motion.div
      className="app__wrapper_img"
      initial={{ scale: 0.8 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {/* <img src={images.welcome} alt="header img" /> */}
      <MyImage image={{ src: images.welcome, alt: "header img" }} />
    </motion.div>
  </div>
);

export default Header;
