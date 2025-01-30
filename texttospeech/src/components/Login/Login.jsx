
import React from "react";
import { motion } from "framer-motion";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react'
import { useState } from "react";
import { windowlistner } from "../LandingPage/WindowListener";
import '../Header/header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Login() {
    const [position, setposition] = useState({ x: 0, y: 0 });

    const navigate=useNavigate();
    const register=()=>{
        navigate('/user/Register')
    }

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
                    <p style={styles.heading}>Login</p>
                    <p style={styles.subheading}>Hi!! Welcome back</p>
                </motion.div>
                <motion.div style={styles.inputContainer}>
                    <motion.div style={styles.emailContainer}>
                        <label htmlFor="email" style={styles.label}>Email</label>
                        <input style={styles.input} type="email" id="email" name="email" placeholder="Enter your Email"></input>
                    </motion.div>
                    <br></br>
                    <motion.div style={styles.emailContainer}>
                        <label htmlFor="password" style={styles.label}>Password</label>
                        <input style={styles.input} type="password" id="password" name="password" placeholder="Enter your Password"></input>
                    </motion.div>
                    <br></br>
                    <motion.a href='#forget-password' style={styles.link}>Forgot Password</motion.a>
                    <motion.button style={styles.button}
                        whileHover={{
                            scale: 1.04,
                            color: 'black',
                            backgroundColor: 'rgb(173, 167, 167)'
                        }}
                        whileTap={{
                            scale: 1.01,
                        }}
                    >Login</motion.button>
                    <motion.div className="Account" style={styles.accountText} >
                        No account yet?{" "}
                        <motion.a title="No account" style={styles.links} onClick={register} >
                            Create your account now
                        </motion.a>
                    </motion.div>
                    <motion.div style={styles.icons}>
                        <motion.div>
                            <a href="https://www.instagram.com/_abhinv04"><FontAwesomeIcon icon={faInstagram} style={styles.icon} className="iconsss" /></a>
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
        height: '520px',
        width: '30%',
        padding: '30px',
        borderRadius: '15px',
        boxShadow: '4px 4px 10px rgba(181, 174, 174, 0.4)',

    },
    heading: {
        color: '#c49a00',
        fontSize: '40px',
        fontWeight: 'bold',
        marginBottom: '10px',
    },
    subheading: {
        fontSize: '28px',
        marginBottom: '20px',
    },
    inputGroup: {
        marginBottom: '20px',
    },
    label: {
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
        border: 'none'
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
    }
}

export default Login;