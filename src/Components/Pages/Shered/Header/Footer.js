import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <div
        className="footer mt-3"
        style={{ marginLeft: "auto", marginRight: "auto" }}
      >
        <div>
          <div className="header-body">
            <div className="own-site">
              <p style={{ marginTop: "15px" }}>
                আমাদের ওয়েবসাইট : <a href="https://www.lc247.live">LC247.LIVE</a>
              </p>
            </div>
            <div className="own-site mt-2">
              <p style={{ marginTop: "15px" }}>
                আমাদের এজেন্টলিস্ট: <a href="https://www.lc247.info">LC247.INFO</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
