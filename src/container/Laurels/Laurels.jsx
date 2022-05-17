import { images, data } from "../../constants";
import { SubHeading } from "../../components";
import { motion } from "framer-motion";
import "./Laurels.css";

const container = {
  init: {},
  show: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const awardAni = {
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

const AwardCard = ({ award: { imgUrl, title, subtitle }, awardAni }) => (
  <motion.div className="app__laurels_awards-card" variants={awardAni}>
    <img src={imgUrl} alt="award img" />
    <div className="app__laurels_awards-content">
      <p
        className="p__cormorant"
        style={{ color: "#DCCA87", marginLeft: "0.5rem" }}
      >
        {title}
      </p>
      <p className="p__cormorant" style={{ marginLeft: "0.5rem" }}>
        {subtitle}
      </p>
    </div>
  </motion.div>
);

const Laurels = () => (
  <div className="app__bg app__wrapper section__padding" id="award">
    <motion.div
      className="app__wrapper_info"
      variants={container}
      initial="init"
      whileInView="show"
      viewport={{ once: true }}
    >
      <SubHeading title="Award & Recognition" />

      <motion.h1 className="headtext__cormorant" variants={awardAni}>
        Our Laurels
      </motion.h1>

      <div className="app__laurels_awards">
        {data.awards.map((award) => (
          <AwardCard award={award} key={award.title} awardAni={awardAni} />
        ))}
      </div>
    </motion.div>
    <div className="app__wrapper_img">
      <motion.img
        src={images.laurels}
        alt="laurels"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />
    </div>
  </div>
);

export default Laurels;
