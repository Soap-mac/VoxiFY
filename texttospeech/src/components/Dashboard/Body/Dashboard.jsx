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

    const news=()=>{
       
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
                            color: 'black',
                            backgroundColor: 'rgb(173, 167, 167)'
                        }}
                        whileTap={{
                            scale: 1.01
                        }}
                    >
                        <FontAwesomeIcon icon={faPlus} style={styles.icon} />
                        <button onClick={news}>Create new</button>
                    </motion.div>
                    <motion.div style={styles.row_col}
                        whileHover={{
                            scale: 1.04,
                            color: 'black',
                            backgroundColor: 'rgb(173, 167, 167)'
                        }}
                        whileTap={{
                            scale: 1.01
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
        backgroundColor: 'black',
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
        color: '#c49a00',
        fontSize: "65px",
        fontWeight: '500'
    },
    main: {
        fontSize: '38px',
        marginTop: '15px',
        marginBottom: '15px',
        color: 'rgb(173, 167, 167)',
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
        borderRadius: '15px',
        border: '2px solid rgb(173, 167, 167)',
        padding: '3px 10px'
    },
    icon: {
        marginTop: '5px'
    },
    row_col: {
        display: 'flex',
        gap: "15px",
        marginRight: '50px',
        border: '2px solid rgb(173, 167, 167)',
        padding: '3px 20px',
        borderRadius: '15px',
        position: 'relative',
        cursor: 'pointer'
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

export default Dashboard