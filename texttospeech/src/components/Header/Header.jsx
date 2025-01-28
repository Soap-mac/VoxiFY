import React, { useState } from "react";
import './header.css'

function Header() {
    return (
        <header style={styles.header}>
            <nav style={styles.nav}>
                <div style={styles.saperate}>
                    <div style={styles.name}>
                        <h1>VoxiFY</h1>
                    </div>
                    <div style={styles.naxs}>
                        <a className="line" href="#features" style={styles.navLink}
                        >Overview</a>
                        <a className="line" href="#contact" style={styles.navLink}>Contact</a>
                    </div>
                </div>
            </nav>
        </header>
    );
};

const styles = {
    saperate: {
        display: 'flex',
        justifyContent: 'space-between'

    },
    name: {
        fontFamily: "Arial, sans-serif",
        marginLeft: '200px',
        fontSize: '25px',
        cursor: 'pointer'
    },
    header: {
        textAlign: 'center',
        backgroundColor: 'black',
        color: 'white',
        padding: '10px',
        boxShadow: '0px 4px 10px rgba(0,0,0, 0.3)',
        position: 'sticky',
        top: 0,
        zIndex: 999,
    },
    nav: {
        marginTop: '15px',
    },
    naxs: {
        marginRight: '80px'
    },
    navLink: {
        fontFamily: "Arial, sans-serif",
        color: 'white',
        textDecoration: 'none',
        margin: '0 15px',
        fontSize: '20px',
        cursor: 'pointer',
    },
};


export default Header