import React from "react";
import pict from "../../component/images/homePic.png";
import { Link } from "react-router-dom";
import "./index.css";

const Home = () => {
  return (
    <>
      <div className="homepage">
        <div className="top-homepage">
          <div className="homePict">
            <img src={pict} className="home-pict" alt="Alnareza Wedding Organizer" />
          </div>
          <div className="greeting">
            <div className="greeting-title">
              <h2>Hello! We are</h2>
              <h2>Alnareza Wedding Organizer</h2>
              <p>
                Kami siap membantu mewujudkan berbagai
                kebutuhan pernikahan anda.
              </p>
              <p>
                
                
                
              </p>
            </div>
            <button className="btn-greeting">
              <Link className="btn-greeting-link" to="about-us">
                About Us
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
