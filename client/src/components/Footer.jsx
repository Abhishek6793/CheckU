import React from "react";
import { FaFacebookF, FaYoutube, FaInstagram, FaHome, FaUserMd, FaCalendarAlt, FaBell, FaUser, FaEnvelope } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer modern-footer">
          <div className="footer-section footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <NavLink to={"/"}>
                  <FaHome className="footer-icon" /> Home
                </NavLink>
              </li>
              <li>
                <NavLink to={"/doctors"}>
                  <FaUserMd className="footer-icon" /> Doctors
                </NavLink>
              </li>
              <li>
                <NavLink to={"/appointments"}>
                  <FaCalendarAlt className="footer-icon" /> Appointments
                </NavLink>
              </li>
              <li>
                <NavLink to={"/notifications"}>
                  <FaBell className="footer-icon" /> Notifications
                </NavLink>
              </li>
              <li>
                <HashLink to={"/#contact"}>
                  <FaEnvelope className="footer-icon" /> Contact Us
                </HashLink>
              </li>
              <li>
                <NavLink to={"/profile"}>
                  <FaUser className="footer-icon" /> Profile
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="footer-section social">
            <h3>Connect with us</h3>
            <ul>
              <li className="facebook">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </a>
              </li>
              <li className="youtube">
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                >
                  <FaYoutube />
                </a>
              </li>
              <li className="instagram">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom modern-footer-bottom">
          <span>
            Made with <span className="footer-heart">♥</span> by{" "}
            <a
              href="https://github.com/Abhishek6793"
              target="_blank"
              rel="noreferrer"
            >
              Abhishek Anand
            </a>
          </span>
          <span>© {new Date().getFullYear()} HealthBooker</span>
        </div>
      </footer>
      <style>{`
        footer {
          width: 100%;
          background: linear-gradient(90deg, #4e54c8, #8f94fb);
          color: #fff;
          padding: 0;
          margin-top: 40px;
          box-shadow: 0 -2px 16px rgba(0,0,0,0.08);
          font-family: 'Segoe UI', Arial, sans-serif;
        }
        .modern-footer {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          padding: 40px 10vw 20px 10vw;
          align-items: flex-start;
        }
        .footer-section h3 {
          font-size: 1.3rem;
          margin-bottom: 18px;
          letter-spacing: 1px;
        }
        .footer-links ul,
        .social ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .footer-links li,
        .social li {
          margin-bottom: 14px;
        }
        .footer-links a,
        .social a {
          color: #fff;
          text-decoration: none;
          font-size: 1.08rem;
          display: flex;
          align-items: center;
          transition: color 0.2s, transform 0.2s;
        }
        .footer-links a:hover,
        .social a:hover {
          color: #ffd700;
          transform: translateX(6px) scale(1.07);
        }
        .footer-icon {
          margin-right: 10px;
          font-size: 1.1em;
        }
        .social ul {
          display: flex;
          gap: 18px;
        }
        .social a {
          font-size: 1.7rem;
          background: rgba(255,255,255,0.08);
          border-radius: 50%;
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s, transform 0.2s;
        }
        .social a:hover {
          background: rgba(255,255,255,0.18);
          transform: scale(1.15) rotate(-6deg);
        }
        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.15);
          padding: 18px 10vw 12px 10vw;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 1rem;
          background: rgba(0,0,0,0.07);
        }
        .footer-heart {
          color: #ff5e5e;
          font-size: 1.1em;
          margin: 0 2px;
          animation: pulse 1.2s infinite alternate;
        }
        @keyframes pulse {
          to {
            transform: scale(1.2);
            opacity: 0.8;
          }
        }
        @media (max-width: 700px) {
          .modern-footer {
            grid-template-columns: 1fr;
            gap: 28px;
            padding: 32px 6vw 16px 6vw;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 8px;
            padding: 14px 6vw 10px 6vw;
            font-size: 0.97rem;
          }
        }
      `}</style>
    </>
  );
};