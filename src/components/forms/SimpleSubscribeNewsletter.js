import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaPinterest } from "react-icons/fa";
import "./Footer.css"; // Optional CSS file for custom styles

const FooterContent = ({ children }) => {
  return <div className="footer_content">{children}</div>;
};

const FooterColumn = ({ children }) => {
  return <div className="footer_column">{children}</div>;
};

const FooterHeading = ({ children }) => {
  return <h3 className="footer_heading">{children}</h3>;
};

const FooterItem = ({ children }) => {
  return <p className="footer_item">{children}</p>;
};

export default function Footer() {
  return (
    <footer className="new_footer_area bg_color">
      <div className="new_footer_top">
        <div className="container">
          <div className="row">
          

            <div className="col-lg-4 col-md-6">
              <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.4s">
                <h3 className="f-title f_600 t_color f_size_18">Head Office</h3>
                <ul className="list-unstyled f_list">
                  <li><a href="#">Poriyalar Nagar, Tiruppalai, Madurai, Tamil Nadu

Email: general@notchindiaprojects.com

Phone: +91 9005900536

Phone: +91 9360950001</a></li>
                 
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.6s">
                <h3 className="f-title f_600 t_color f_size_18">Registered Office</h3>
                <ul className="list-unstyled f_list">
                  <li><a href="#">Poriyalar Nagar, Tiruppalai, Madurai, Tamil Nadu

Email: contracts@notchindiaprojects.com

Phone: +91 9005900536

Phone: +91 9360950001</a></li>
                 
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              {/* <div className="f_widget social-widget pl_70 wow fadeInLeft" data-wow-delay="0.8s"> */}
                <h3 className="f-title f_600 t_color f_size_18">Team Solutions</h3>
                <div className="f_social_icon">
                  <a href="#"><FaFacebook /></a>
                  <a href="#"><FaTwitter /></a>
                  <a href="#"><FaLinkedin /></a>
                  <a href="#"><FaPinterest /></a>
                </div>
              {/* </div> */}
            </div>
          </div>
        </div>


        <div className="footer_bg">
          <div className="footer_bg_one"></div>
          <div className="footer_bg_two"></div>
        </div>
      </div>

      <div className="footer_bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-sm-7">
              <p className="mb-0 f_400">© NotchIndiaProjects., 2024. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
