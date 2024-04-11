import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <div>
            <h3>Pages</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="Volunteer">About</a></li>
              <li><a href="Articles">Resources</a></li>
              <li><a href="Contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-sociallinks">
            <h3>Social Links</h3>
            <ul>
              <li><a href="https://www.facebook.com/BrainPeace" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="https://twitter.com/BrainPeaceOrg" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="https://www.instagram.com/BrainPeaceOrg" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div>
          <a href ="https://vesit.ves.ac.in/" target="_blank" rel="noopener noreferrer">Vivekanand Education Society</a>
        </div>
        <div className="footer-disclaimer">
          <a href="https://drive.google.com/file/d/1h2QNPsLKTPbpzr7mX3Ae2GUMiahD2XXI/view?usp=sharing" target="_blank" rel="noopener noreferrer">Disclaimer: This website is for informational purposes only. Consult a professional for specific advice.</a>
        </div>
        <div className="footer-copyright">
          &copy; {currentYear} BrainPeace
        </div>
      </div>
    </footer>
  );
};

export default Footer;
