import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const MyImage = ({ image }) => (
  <div>
    <LazyLoadImage
      alt={image.alt}
      height="auto"
      src={image.src} // use normal <img> attributes as props
      width="100%"
    />
  </div>
);

export default MyImage;
