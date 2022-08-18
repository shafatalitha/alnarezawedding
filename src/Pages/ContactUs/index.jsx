import React from "react";
import "./index.css";
import header from "../../component/images/header-contactUs.jpg";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export const ContactUs = () => {
  return (
    <div className="contact-us">
      <div className="top-cu">
        <div className="top-left-cu">
          <h1>CONTACT US</h1>
          <h2></h2>
          <div className="socmed-cu">
            <div className="socmed-card-cu">
              <a href="https://www.instagram.com/alnarezagriyapengantin/">
                <FaInstagram style={{ fontSize: "28px" }} />
              </a>
              <a href="https://www.instagram.com/alnarezagriyapengantin/">@alnarezagriyapengantin</a>
            </div>

            <div className="socmed-card-cu">
              <a href="https://wa.me/081311205131">
                <FaWhatsapp style={{ fontSize: "28px" }} />
              </a>
              <a href="https://wa.me/081311205131">Alnareza Wedding Organizer</a>
            </div>
          </div>
        </div>
        <div className="top-right-cu">
          <img src={header} alt="" />
        </div>
      </div>
    </div>
  );
};
