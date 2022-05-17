import React from "react";
import images from "../../constants/images";
import { motion } from "framer-motion";
const SubHeading = ({ title }) => (
  <motion.div
    initial={{ opacity: 0, y: "-15" }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    viewport={{ once: true }}
    style={{ marginBottom: "1rem" }}
  >
    <p className="p__cormorant">{title}</p>
    <img src={images.spoon} alt="spoon" className="spoon__img" />
  </motion.div>
);

export default SubHeading;
