import React from "react";
import { motion } from "framer-motion";

import { SubHeading } from "../../components";
import { images } from "../../constants";
const container = {
  init: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const findUs = {
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
const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <motion.h1
        className="headtext__cormorant"
        style={{ marginBottom: "3rem" }}
        variants={findUs}
        initial="init"
        whileInView="show"
        viewport={{ once: true }}
      >
        Find Us
      </motion.h1>
      <motion.div
        className="app__wrapper-content"
        variants={container}
        initial="init"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.p className="p__opensans" variants={findUs}>
          Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G
        </motion.p>
        <motion.p
          className="p__cormorant"
          style={{ color: "#DCCA87", margin: "2rem 0" }}
          variants={findUs}
        >
          Opening Hours
        </motion.p>
        <motion.p className="p__opensans" variants={findUs}>
          Mon - Fri: 10:00 am - 02:00 am
        </motion.p>
        <motion.p className="p__opensans" variants={findUs}>
          Sat - Sun: 10:00 am - 03:00 am
        </motion.p>
      </motion.div>
      <button
        type="button"
        className="custom__button"
        style={{ marginTop: "2rem" }}
      >
        Visit Us
      </button>
    </div>

    <div className="app__wrapper_img">
      <motion.img
        src={images.findus}
        alt="finus_img"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      />
    </div>
  </div>
);

export default FindUs;
