import React from "react";
import { logo } from "../../assets";
import { footerLinks, socialMedia } from "../../constants";
import "./footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container footer__container">
        <div className="footer-logo">
          <img src={logo} alt="" />
          <p className="text-light">
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        <div className="footer-links-box">
          {footerLinks.map((footerLink) => (
            <div key={footerLink.id} className="footer-links">
              <p className="footer-heading">{footerLink.title}</p>
              {footerLink.links.map((link, index) => (
                <a
                  key={link.name}
                  href={link.link}
                  className="text-light footer-links"
                >
                  {link.name}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="container footer__container copyright">
        <div>
          <p className="text-light">
            Copyright &#169; 2021 YoHoBank. All Rights Reserved.
          </p>
        </div>
        <div className="footer__social-media">
          {socialMedia.map((sm) => (
            <a key={sm.id} href={sm.link}>
              <img src={sm.icon} alt="" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
