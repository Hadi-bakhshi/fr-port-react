import React from "react";
import { motion } from "framer-motion";
import "./About.scss";
import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";

const abouts = [
  {
    id: 1,
    title: "Front-end Developer",
    description:
      "I am a well informed front-end developer who is passionate about creating beautiful and functional user interfaces.",
    imgUrl: images.about04,
  },
  {
    id: 2,
    title: "React Developer",
    description:
      "As a ReactJS developer, I have implemented a wide range of applications and websites using React.",
    imgUrl: images.reactBlack,
  },
  {
    id: 3,
    title: "UI/UX",
    description:
      "I'm Familiar with the latest UI/UX trends and practices, I can create a user-friendly and engaging user experience.",
    imgUrl: images.about02,
  },
];

const About = () => {
  return (
    <>
      <h2 className="head-text">
        I Know That <span>Good Dev</span>
        <br /> Means <span>Good Business</span>
      </h2>
      <div className="app__profiles">
        {abouts.map((about) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + about.id}
          >
            <img src={about.imgUrl} alt={about.title} />
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

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
