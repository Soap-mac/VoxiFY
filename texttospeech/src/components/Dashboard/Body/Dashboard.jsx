import React, { useState } from "react";
import '../../Header/header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { windowlistner } from "../../LandingPage/WindowListener";
import { motion } from "framer-motion";
import { faBolt, faColumns, faPlus, faTableCellsColumnLock, faTableCellsRowLock } from '@fortawesome/free-solid-svg-icons';

function Dashboard() {

    const [select, setselected] = useState('col')
    const [divs, setdivs] = useState([]);

    const cols = (element) => {
        setselected(element)
    }

    const [position, setposition] = useState({ x: 0, y: 0 });

    windowlistner('pointermove', (e) => {
        setposition({ x: e.clientX, y: e.clientY })
    })

    const news = () => {

    }

    return (
        <div style={styles.maindiv}>
            <div className="cursor" style={{
                ...styles.cursor,
                transform: `translate(${position.x}px, ${position.y}px)`
            }}></div>
            <div style={styles.mains}>
                <div style={styles.title}>
                    <div className="divide">
                        <p style={styles.welcome}>Welcome to </p>
                        <p style={styles.mainTitle}>VoxiFY</p>
                    </div>
                    <p style={styles.main}>My NoteCloud</p>
                </div>
                <motion.div style={styles.buttons}>
                    <motion.div style={styles.set}
                        whileHover={{
                            scale: 1.04,
                            background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4)',
                            boxShadow: '0 10px 20px rgba(78, 205, 196, 0.2)',
                            color: 'white'
                        }}
                        whileTap={{
                            scale: 1.01
                        }}
                    >
                        <FontAwesomeIcon icon={faPlus} style={styles.icon} />
                        <button style={styles.createnew} onClick={news}>Create new</button>
                    </motion.div>
                    <motion.div
                        style={styles.row_col}
                        whileHover={{
                            scale: 1.04,
                            background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4)',
                            boxShadow: '0 10px 20px rgba(78, 205, 196, 0.2)',
                        }}
                        whileTap={{
                            scale: 0.98,
                        }}
                    >
                        <FontAwesomeIcon onClick={() => { cols('col') }} className="col" icon={faTableCellsRowLock} style={select === 'col' ? styles.selectedicons : styles.iconsss} />
                        <div className="divider"></div>
                        <FontAwesomeIcon onClick={() => { cols('row') }} className="row" icon={faTableCellsColumnLock} style={select === 'row' ? styles.selectedicons : styles.iconsss} />
                    </motion.div>
                </motion.div>
            </div>
        </div >
    )
}

const styles = {
    maindiv: {
        backgroundColor: 'rgb(19, 19, 19)',
        padding: "90px",
        fontFamily: "Arial, sans-serif",
        minHeight: '90vh',
    },
    title: {
        borderBottom: '2px solid rgb(173, 167, 167)',
        borderRadius: '3px'
    },
    welcome: {
        fontSize: "65px",
        fontWeight: '500',
        color: 'rgb(173, 167, 167)',
    },
    mainTitle: {
        background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4)', // Gradient background
        WebkitBackgroundClip: 'text', // Background clip for text
        WebkitTextFillColor: 'transparent', // Make text transparent to show the gradient
        display: 'inline-block',
        fontSize: "65px",
        fontWeight: '700'
    },
    main: {
        fontSize: '38px',
        marginTop: '15px',
        marginBottom: '15px',
        color: 'rgb(168, 171, 171)',
        marginLeft: '8px'
    },
    mains: {
        display: 'block',
        padding: '0 100px',
        marginTop: '50px'
    },
    buttons: {
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '20px',
        color: 'rgb(173, 167, 167)',
        marginTop: '8px'
    },
    set: {
        display: 'flex',
        gap: "15px",
        marginLeft: '35px',
        borderRadius: '30px',
        border: '1px solid rgba(78, 205, 196, 0.3)',
        padding: '15px 18px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        boxShadow: '0 0 10px rgba(78, 205, 196, 0.3)',
    },
    icon: {
        marginTop: '5px'
    },
    row_col: {
        display: 'flex',
        gap: '15px',
        marginRight: '50px',
        border: '1px solid rgba(78, 205, 196, 0.3)',
        padding: '10px 20px',
        borderRadius: '50px',
        position: 'relative',
        cursor: 'pointer',
        background: 'rgba(255, 255, 255, 0.05)',
        transition: 'all 0.3s ease',
        boxShadow: '0 0 10px rgba(78, 205, 196, 0.3)',
    },
    row_colHover: {
        background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4)',
        color: 'white',
        transform: 'translateY(-3px)',
        boxShadow: '0 10px 20px rgba(78, 205, 196, 0.2)',
    },
    iconsss: {
        marginTop: '5px',
        fontSize: '23px'
    },
    selectedicons: {
        marginTop: '5px',
        fontSize: '23px',
        cursor: 'pointer',
        color: 'white',
    },
    cursor: {
        transition: "all 0.2s ease",
        height: '60px',
        width: '60px',
        borderRadius: '50%',
        position: 'fixed',
        border: "2px solid rgba(255, 255, 255, 0.8)",
        pointerEvents: "none",
        left: -30,
        top: -30,
        zIndex: 9999,
        mixBlendMode: 'difference'
    },

}

export default Dashboard