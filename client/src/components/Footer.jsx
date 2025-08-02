import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <span>
          © {new Date().getFullYear()} <strong>CheckU</strong> — Made by{" "}
          <a
            href="https://github.com/Abhishek6793"
            target="_blank"
            rel="noreferrer"
            style={styles.link}
          >
            Abhishek Anand
          </a>
        </span>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#4e54c8",
    color: "#fff",
    padding: "16px 0",
    textAlign: "center",
    fontSize: "0.95rem",
    marginTop: "40px",
  },
  container: {
    width: "90%",
    margin: "0 auto",
  },
  link: {
    color: "#ffd700",
    textDecoration: "none",
  },
};

export default Footer;
