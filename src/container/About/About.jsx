import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./About.scss";
import { urlFor } from "../../client";
import axios from "axios";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://qubaawzt.api.sanity.io/v2022-04-04/data/query/production?query=*%5B_type%20%3D%3D%20%22abouts%22%5D%0A"
      )
      .then((res) => setAbouts(res.data.result))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h2 className="head-text">
        I Know That <span>Good Dev</span>
        <br /> Means <span>Good Business</span>
      </h2>
      <div className="app__profile">
        {abouts.map((about) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + about._id}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default About;
