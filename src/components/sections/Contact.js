import React, { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Pagetitle from "../elements/Pagetitle";
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [state, handleSubmit] = useForm("xzboplyq");

  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    if (!formdata.name) {
      setError(true);
      setMessage("Name is required");
    } else if (!formdata.email) {
      setError(true);
      setMessage("Email is required");
    } else if (!formdata.subject) {
      setError(true);
      setMessage("Subject is required");
    } else if (!formdata.message) {
      setError(true);
      setMessage("Message is required");
    } else {
      handleSubmit(event);
      setError(false);
      setMessage("Your message has been sent!");
    }
  };

  const handleChange = (event) => {
    setFormdata({
      ...formdata,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const handleAlerts = () => {
    if (error && message) {
      return <div className="alert alert-danger mt-4">{message}</div>;
    } else if (!error && message) {
      return <div className="alert alert-success mt-4">{message}</div>;
    } else {
      return null;
    }
  };

  return (
    <section id="contact">
      <div className="container" id="contactContainer">
        <Pagetitle title="Contact Me" />

        <div className="row">
          <div className="contactContainer">
            <div className="contact-info">
              <ScrollAnimation
                animateIn="fadeInUp"
                animateOut="fadeInOut"
                animateOnce={true}
              >
                <h3>Let's talk about anything!</h3>
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="fadeInUp"
                animateOut="fadeInOut"
                animateOnce={true}
              >
                <div className="contactInfoLine">
                  <span className="icon icon-envelope-letter"></span>
                  <p className="contactInfoData">jackpercival7@gmail.com</p>
                </div>
                <div className="contactInfoLine">
                  <span className="icon icon-phone"></span>
                  <p className="contactInfoData">(949) 244 - 7034</p>
                </div>
                <div className="contactInfoLine">
                  <span className="icon icon-location-pin"></span>
                  <p className="contactInfoData">Davis, CA</p>
                </div>
                <ul id="contactInfoLinks" className="social-icons light list-inline mb-0 mt-4">
                  <li className="list-inline-item">
                    <a href="https://www.linkedin.com/in/jackpercival7/" target="_blank">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://github.com/JackPercival" target="_blank">
                      <i className="fab fa-github"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://angel.co/u/jackpercival" target="_blank">
                      <i className="fab fa-angellist"></i>
                    </a>
                  </li>
                </ul>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
