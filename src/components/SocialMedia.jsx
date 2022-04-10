import React from "react";
import { BsLinkedin, BsInstagram, BsGithub, BsTelegram } from "react-icons/bs";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a
        href="https://www.linkedin.com/in/hadi-bakhshi-aa203221b"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
    </div>
    <div>
      <a
        href="https://github.com/Hadi-bakhshi"
        target="_blank"
        rel="noreferrer"
      >
        <BsGithub />
      </a>
    </div>
    <div>
      <a href="https://t.me/haamim27" target="_blank" rel="noreferrer">
        <BsTelegram />
      </a>
    </div>
    <div>
      <a
        href="https://www.instagram.com/hadi_bakhshi27/"
        target="_blank"
        rel="noreferrer"
      >
        <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;
