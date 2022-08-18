import React from "react";
import logo from "../../component/images/logo_cropped.png";
import "./index.css";
import background from "../../component/images/header-about-us.png";

export const About = () => {
  return (
    <>
      <div className="about">
        <div className="top-about">
          <div className="top-about-title">
            <img src={background} alt="Alnareza Wedding Organizer" class="bg-image" />
            <div className="bg-img-title">
              <img
                src={logo}
                alt="Alnareza Wedding Organizer"
                width={400}
                height={214}
                className="logo-image"
              />
              <h1> OUR VISION AND MISSION</h1>
            </div>
          </div>
        </div>
        <div className="bottom-about">
          <div className="vision-wrap">
            <h1>VISION</h1>
            <div className="visionTitle">
              <p>
                Menjadi penyedia jasa wedding organizer terpercaya
                serta menjadi yang terbaik dalam
                memberikan jasa penyelenggaraan pernikahan
              </p>
            </div>
          </div>
          <div className="mission-wrap">
            <h1>MISSION</h1>
            <div className="missionTitle">
              <p>
                Menjadi mitra profesional dengan memberikan pelayanan yang optimal 
                
              </p>
              <p>
                Memberikan pelayanan secara kekeluargaan kepada konsumen
                
              </p>
              <p>
                Membantu klien untuk mewujudkan acara yang lancar melalui masa persiapan yang sistematis dan menyenangkan
                
              </p>
            </div>
          </div>
        </div>
        <div className="ourteam-wrapper">
          <h1></h1>
          <ul>
            <li></li>
            <li>
              
              
            </li>
            <li>
              
            </li>
            <li>
              
            </li>
            <li>
              
              
            </li>
            <li>
              
              
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
