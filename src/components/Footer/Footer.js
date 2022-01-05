import React from "react";

import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__column">
        <div>
          <p className="footer__link">FAQ</p>
          <p className="footer__link">Investor Relations</p>
          <p className="footer__link">Ways to Watch</p>
          <p className="footer__link">Corporate Information</p>
          <p className="footer__link">Only on Netflix</p>
        </div>
        <div>
          <p className="footer__link">Help Center</p>
          <p className="footer__link">Jobs</p>
          <p className="footer__link">Terms of Use</p>
          <p className="footer__link">Contact Us</p>
        </div>
        <div>
          <p className="footer__link">Account</p>
          <p className="footer__link">Redeem Gift Cards</p>
          <p className="footer__link">Privacy</p>
          <p className="footer__link">Speed Test</p>
        </div>
        <div>
          <p className="footer__link">Media Center</p>
          <p className="footer__link">Buy Gift Cards</p>
          <p className="footer__link">Cookie Preferences</p>
          <p className="footer__link">Legal Notices</p>
        </div>
      </div>

      <div className="footer__row">
        <p>Copyrights: Netflix</p>
        <p>
          API from{" "}
          <a className="footer__link-api" href="https://www.themoviedb.org/">
            The Movie DB
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
