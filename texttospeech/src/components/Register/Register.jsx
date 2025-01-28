import React from "react";
import { motion } from "framer-motion";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react'
import { useState } from "react";
import { windowlistner } from "../LandingPage/WindowListener";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import '../Header/header.css'

function Register() {

    const [position, setposition] = useState({ x: 0, y: 0 });

    windowlistner('pointermove', (e) => {
        setposition({ x: e.clientX, y: e.clientY })
    })
    return (
        <motion.div style={styles.login}>
            <div className="cursor" style={{
                ...styles.cursor,
                transform: `translate(${position.x}px, ${position.y}px)`
            }}></div>
            <motion.div style={styles.innerLogin}>
                <motion.div >
                    <p style={styles.heading}>Register</p>
                    <p style={styles.subheading}>Join us today and unlock endless possibilities!</p>
                </motion.div>
                <motion.div>
                    <motion.div style={styles.emailContainer}>
                        <label htmlFor="name" style={styles.label}>Name</label>
                        <input style={styles.input} type="name" id="name" name="name" placeholder="Enter your Name" required></input>
                    </motion.div>
                    <motion.div style={styles.emailContainer}>
                        <label htmlFor="username" style={styles.label}>Username</label>
                        <input style={styles.input} type="username" id="username" name="username" placeholder="Enter your Username" required></input>
                    </motion.div>
                    <motion.div style={styles.emailContainer}>
                        <label htmlFor="email" style={styles.label}>Email</label>
                        <input style={styles.input} type="email" id="email" name="email" placeholder="Enter your Email" required></input>
                    </motion.div>
                    <motion.div style={styles.emailContainer}>
                        <label htmlFor="password" style={styles.label}>Password</label>
                        <input style={styles.input} type="password" id="password" name="password" placeholder="Enter your Password"></input>
                    </motion.div>
                    <motion.div style={styles.emailContainer}>
                        <label htmlFor="confirm_password" style={styles.labels}>Confirm_Password</label>
                        <input style={styles.input} type="confirm_password" id="confirm_password" name="confirm_password" placeholder="Enter your Confirm_Password"></input>
                    </motion.div>
                    <motion.button style={styles.button}
                        whileHover={{
                            scale: 1.04,
                            color: 'black',
                            backgroundColor: 'rgb(173, 167, 167)'
                        }}
                        whileTap={{
                            scale: 1.01,
                        }}
                    >Register</motion.button>
                    <motion.div className="Account" style={styles.accountText} >
                        Already have account?{" "}
                        <motion.a title="No account" href="#register" style={styles.links}>
                            Login!
                        </motion.a>
                    </motion.div>
                    <motion.div style={styles.icons}>
                        <motion.div>
                            <a href="https://www.instagram.com/_abhinv04"><FontAwesomeIcon icon={faInstagram} style={styles.icon} className="iconsss"/></a>
                            <a href="https://x.com/abhinab981"><FontAwesomeIcon icon={faX} style={styles.icon} className="iconsss" /></a>
                            <a href="https://www.linkedin.com/in/abhinab-sharma-220918280/"> <FontAwesomeIcon icon={faLinkedin} style={styles.icon} className="iconsss" /></a>
                            <a href="https://github.com/Abhinab04"><FontAwesomeIcon icon={faGithub} style={styles.icon} className="iconsss" /></a>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

const styles = {
    login: {
        backgroundColor: 'black',
        color: 'rgb(173, 167, 167)',
        minHeight: '100vh',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

    },
    innerLogin: {
        backgroundColor: 'rgb(42, 42, 42)',
        height: '670px',
        width: '35%',
        padding: '30px',
        borderRadius: '18px',
        boxShadow: '4px 4px 10px rgba(181, 174, 174, 0.4)',

    },
    heading: {
        color: '#c49a00',
        fontSize: '38px',
        fontWeight: 'bold',
        marginBottom: '5px',
    },
    subheading: {
        fontSize: '18px',
        marginBottom: '20px',
    },
    inputGroup: {
        marginBottom: '20px',
    },
    label: {
        display: 'block',
        marginRight: '430px',
        fontSize: '16px',
    },
    labels: {
        display: 'block',
        marginRight: '350px',
        fontSize: '16px',
    },
    input: {
        width: '100%',
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid rgb(173, 167, 167)',
        backgroundColor: 'rgb(30, 30, 30)',
        color: 'white',
        border: 'none',
        marginBottom: '8px'
    },
    link: {
        color: 'rgb(173, 167, 167)',
        textDecoration: 'none',
        marginLeft: '270px',
    },
    accountText: {
        marginTop: '20px',
    },
    button: {
        border: '2px solid rgb(173, 167, 167)',
        borderRadius: '10px',
        padding: '5px 15px',
        width: '100%',
        marginTop: '20px'
    },
    links: {
        borderBottom: '2px solid rgb(173, 167, 167)',

    },
    cursor: {
        height: '30px',
        width: '30px',
        backgroundColor: "#c49a00",
        borderRadius: '50px',
        position: 'fixed',
        // transform: `translate(${position.x}px, ${position.y}px)`
        pointerEvents: "none",
        left: -20,
        top: -20,
        // transform: "translate(-50%, -50%)", 
        // transition: "transform 0.1s ease",
        zIndex: 9999,
        opacity: '0.5'
    },
}
export default Register