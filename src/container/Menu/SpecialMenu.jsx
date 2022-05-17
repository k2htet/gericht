import { images, data } from "../../constants";
import { SubHeading, MenuItem } from "../../components";
import { motion } from "framer-motion";
import "./SpecialMenu.css";

const menu = {
  init: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};
const menuItem = {
  init: {
    opacity: 0,
    y: "-20",
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits you pallate" />
      <motion.h1
        className="headtext__cormorant"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Today Special
      </motion.h1>
    </div>

    <div className="app__specialMenu-menu">
      <motion.div
        className="app__specialMenu-menu_wine flex__center"
        variants={menu}
        initial="init"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.p className="app__specialMenu-menu_heading" variants={menuItem}>
          Wine & Beer
        </motion.p>
        <div className="app__specialMenu-menu_items">
          {data.wines.map((wine, index) => (
            <MenuItem
              variants={menuItem}
              key={wine.title + index}
              title={wine.title}
              price={wine.price}
              tags={wine.tags}
            />
          ))}
        </div>
      </motion.div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu img" />
      </div>

      <motion.div
        className="app__specialMenu-menu_cocktails flex__center"
        variants={menu}
        initial="init"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.p className="app__specialMenu-menu_heading" variants={menuItem}>
          Cocktails
        </motion.p>
        <div className="app__specialMenu-menu_items">
          {data.cocktails.map((cocktail, index) => (
            <MenuItem
              variants={menuItem}
              key={cocktail.title + index}
              title={cocktail.title}
              price={cocktail.price}
              tags={cocktail.tags}
            />
          ))}
        </div>
      </motion.div>
    </div>

    <div style={{ marginTop: "15px" }}>
      <button className="custom__button" type="button">
        View More
      </button>
    </div>
  </div>
);

export default SpecialMenu;
