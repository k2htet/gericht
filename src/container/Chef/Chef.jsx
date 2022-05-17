import { images } from "../../constants";
import { SubHeading } from "../../components";
import { motion } from "framer-motion";
import "./Chef.css";

const chef = {
  init: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};
const chefContent = {
  init: {
    opacity: 0,
    y: "-20",
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const Chef = () => (
  <div className="app__wrapper app__bg section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <motion.img
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        src={images.chef}
        alt="chef"
      />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <motion.h1
        className="headtext__cormorant
      "
        variants={chefContent}
        whileInView="show"
        initial="init"
        viewport={{ once: true }}
      >
        What We Bellieve in
      </motion.h1>

      <motion.div
        className="app__chef-content"
        variants={chef}
        whileInView="show"
        initial="init"
        viewport={{ once: true }}
      >
        <motion.div className="app__chef-content_quote" variants={chefContent}>
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
        </motion.div>

        <motion.p className="p__opensans" variants={chefContent}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
          ratione! Vel cum pariatur obcaecati repudiandae itaque voluptatibus
          facere magni fuga corrupti assumenda laboriosam sed voluptas
          repellendus quisquam debitis, at corporis!
        </motion.p>

        <motion.div className="app__chef-sign" variants={chefContent}>
          <p>Kelvin Luo</p>
          <p className="p__opensans">Chef & Founder</p>
          <img src={images.sign} alt="sign" />
        </motion.div>
      </motion.div>
    </div>
  </div>
);

export default Chef;
