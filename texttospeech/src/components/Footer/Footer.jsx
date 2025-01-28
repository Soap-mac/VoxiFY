import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";

function Footer() {
    return (
        <footer style={styles.footer}>
            <div style={styles.contactContainer}>
                <h3 style={styles.heading}>Contact Us</h3>
                <div >
                    <a href="https://www.instagram.com/_abhinv04"><FontAwesomeIcon icon={faInstagram} style={styles.icon} /></a>
                    <a href="https://x.com/abhinab981"><FontAwesomeIcon icon={faX} style={styles.icon} /></a>
                    <a href="https://www.linkedin.com/in/abhinab-sharma-220918280/"> <FontAwesomeIcon icon={faLinkedin} style={styles.icon} /></a>
                    <a href="https://github.com/Abhinab04"><FontAwesomeIcon icon={faGithub} style={styles.icon} /></a>
                </div>
            </div>
            <div style={styles.quoteContainer}>
                <p style={styles.quote}>
                    "The power of words, amplified by innovation, transforms ideas into reality."
                </p>
            </div>
            <div style={styles.copyRight}>
                <p>&copy; 2025 Voicefy. All rights reserved.</p>
            </div>
        </footer>
    );
}

const styles = {
    footer: {
        backgroundColor: "black",
        color: "rgb(173, 167, 167)",
        padding: "40px 20px",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
    },
    contactContainer: {
        marginBottom: "30px",
    },
    heading: {
        fontSize: "38px",
        marginTop: "110px",
        color: "#c49a00",
    },
    quoteContainer: {
        margin: "30px 30px",
    },
    quote: {
        fontStyle: "italic",
        fontSize: "22px",
        lineHeight: "1.45",
        margin: "0 auto",
        maxWidth: "600px",
        color: "rgb(173, 167, 167)",
    },
    copyRight: {
        marginTop: "20px",
        fontSize: "14px",
        color: "rgb(120, 120, 120)",
    },
    icon: {
        fontSize: "32px",
        color: 'rgb(120, 120, 120)',
        margin: '10px'
    }
};

export default Footer;
