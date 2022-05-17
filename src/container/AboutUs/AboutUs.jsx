import images from "../../constants/images";
import { motion } from "framer-motion";
import "./AboutUs.css";

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G" />
    </div>

    <div className="app__aboutus-content flex__center">
      <motion.div
        className="app__aboutus-content_about"
        initial={{ x: "-70" }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="spoon" className="spoon__img" />
        <p className="p__opensans">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
          dolorem sapiente quidem fugit inventore corrupti maiores ex
          praesentium, dolores quas blanditiis velit laboriosam eius porro, in
          esse! Molestias, reprehenderit laboriosam.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </motion.div>

      <motion.div
        className="app__aboutus-content_knife flex__center"
        initial={{ y: 100 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <img src={images.knife} alt="knife" />
      </motion.div>

      <motion.div
        className="app__aboutus-content_history"
        initial={{ x: 70 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="spoon" className="spoon__img" />
        <p className="p__opensans">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
          dolorem sapiente quidem fugit inventore corrupti maiores ex
          praesentium, dolores quas blanditiis velit laboriosam eius porro, in
          esse! Molestias, reprehenderit laboriosam.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </motion.div>
    </div>
  </div>
);

export default AboutUs;
