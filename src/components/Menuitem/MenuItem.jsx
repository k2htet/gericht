import React from "react";
import { motion } from "framer-motion";
import "./MenuItem.css";

const MenuItem = ({ title, price, tags, variants }) => (
  <motion.div className="app__menuitem" variants={variants}>
    <div className="app__menuitem-head">
      <div className="app__menuitem-name">
        <p className="p__cormorant" style={{ color: "#DCCA87" }}>
          {title}
        </p>
      </div>

      <div className="app__menuitem-dash" />

      <div className="app__menuitem-price">
        <p className="p__cormorant">{price}</p>
      </div>
    </div>

    <div className="app__menuitem-sub">
      <p className="p__opensans" style={{ color: "#AAA" }}>
        {tags}
      </p>
    </div>
  </motion.div>
);

export default MenuItem;
