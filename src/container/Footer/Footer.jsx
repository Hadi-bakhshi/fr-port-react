import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Footer.scss";
const Footer = () => {
  const formRef = useRef();

  const [isFormSubmited, setIsFormSubmited] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_5cjdf8u",
        "template_unexszo",
        formRef.current,
        "user_9ir6ozwsVzCX4cJPK5zqv"
      )
      .then(
        (result) => {
          console.log(result.text);
          setLoading(false);
          setIsFormSubmited(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:hadibakhshi277@gmail.com" className="p-text">
            Hadibakhshi277@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel:+989301377887" className="p-text">
            09301377887
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.cv} alt="mobile" />
          <a
            href="https://drive.google.com/uc?export=download&id=14R-VWN_jwKikzvK361U7Le28ve7h_rJ7"
            className="p-text"
            download
          >
            Download My CV
          </a>
        </div>
      </div>

      {!isFormSubmited ? (
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="app__footer-form app__flex"
        >
          <div className="app__flex">
            <input
              className="p-text"
              name="user_name"
              type="text"
              placeholder="Your Name"
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              name="user_email"
              type="email"
              placeholder="Your Email"
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              id=""
              name="message"
            />
          </div>
          <button type="submit" className="p-text">
            {loading ? "Sending" : "Send Message"}
          </button>
        </form>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch.</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
