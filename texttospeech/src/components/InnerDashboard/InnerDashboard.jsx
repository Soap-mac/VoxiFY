import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faColumns, faEllipsisVertical, faFilePdf, faList, faUpload } from '@fortawesome/free-solid-svg-icons';
import { windowlistner } from "../LandingPage/WindowListener";
import { useRef } from "react";
import { color } from "framer-motion";
import '../Header/header.css'

function InnerDashboard() {

    const inputFile = useRef(null)

    const [show, setshow] = useState(false)
    const [showss, setshowss] = useState(false)
    const [file, setfile] = useState(null)
    const [pdf, setpdf] = useState(false)
    const [dots, setdots] = useState(false)
    const [deletess, setdeletes] = useState(false)



    const closing = () => {
        setshow(!show)
    }

    const closings = () => {
        setshowss(!showss)
    }

    const [position, setposition] = useState({ x: 0, y: 0 });

    windowlistner('pointermove', (e) => {
        setposition({ x: e.clientX, y: e.clientY })
    })

    const upload_file = (event) => {
        inputFile.current.click();
    }

    const handlefile = (event) => {
        const file = event.target.files[0];
        console.log(file)
        if (file) {
            setfile(file)
            setdots(!dots)
            setpdf(file.type === 'application/pdf')
        }
    }

    const deletes = () => {
        setdeletes(!deletess)
        document.getElementById('alls').style.filter = 'blur(5px)'
    }

    const cancell = () => {
        setdeletes(!deletess)
        document.getElementById('alls').style.filter = 'none'
    }

    const cancal = () => {
        window.location.reload()
    }


    return (
        <div style={styles.Inner}>
            <div className="cursor" style={{
                ...styles.cursor,
                transform: `translate(${position.x}px, ${position.y}px)`
            }}></div>
            <div id="alls" style={styles.innner}>
                {/* Sources Section */}
                <div className="sources" style={{
                    ...styles.sources,
                    width: show ? "5%" : "40%",
                }}>
                    <div style={styles.sourcesHeader}>
                        <div style={styles.sourcesandslide}>
                            <p style={{
                                ...styles.title,
                                display: show ? 'none' : 'flex',
                            }}>Sources</p>
                            <p style={styles.line}></p>
                            <FontAwesomeIcon onClick={closing} icon={faList} style={{
                                ...styles.icon,
                                display: show ? 'flex' : 'flex',
                                justifyContent: show ? 'center' : 'space-between',
                                alignItems: show ? 'center' : 'center',
                            }} />
                        </div>
                        <button style={{
                            ...styles.addButton,
                            display: show ? 'none' : 'flex'
                        }} onClick={upload_file} >+ Add Source</button>
                        <input type="file" ref={inputFile} onChange={handlefile} style={{ ...styles.design, }}></input>
                        <div className="pdfs">
                            <div className="ppdfs">
                                <FontAwesomeIcon icon={faFilePdf} onChange={handlefile} className="iison" style={{
                                    display: pdf ? 'flex' : 'none'
                                }} />
                                {file && <p className="para" style={styles.para}>{file.name}</p>}
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faEllipsisVertical} onChange={handlefile} onClick={deletes} className="iisons" style={{
                                    display: dots ? 'flex' : 'none'
                                }} />

                            </div>
                        </div>
                    </div>
                </div>

                {/* Chat Section */}
                <div className="chat" style={{
                    ...styles.chat,
                    width: show ? "90%" : "60%",
                    width: showss ? "90%" : "60%",// Adjust chat width dynamically
                }}>
                    <div style={styles.chatHeader}>
                        <p style={styles.title}>Chat</p>
                    </div>
                    <div style={{
                        ...styles.uploadsources,
                    }}>
                        <FontAwesomeIcon icon={faUpload} style={styles.icon} />
                        <p style={styles.quote}>Upload your first source to kickstart your journey!</p>
                        <button style={styles.uploadButton}>Upload your sources</button>
                        <p style={styles.quote}>Coming soon!!!</p>
                    </div>
                </div>


                {/* Audio Section */}
                <div className="sources" style={{
                    ...styles.sourcess,
                    width: showss ? "5%" : "40%",
                }}>
                    <div style={styles.sourcesHeaderr}>
                        <div style={{
                            ...styles.sourcesandslidee,
                        }}>
                            <p style={{
                                ...styles.titlee,
                                display: showss ? 'none' : 'flex',
                            }}>Studio</p>
                            <FontAwesomeIcon onClick={closings} icon={faList} style={{
                                ...styles.icon,
                                display: showss ? 'flex' : 'flex',
                                justifyContent: showss ? 'center' : 'space-between',
                                alignItems: showss ? 'center' : 'center',
                            }} />
                        </div>
                    </div>
                </div>
            </div>
            {
                deletess &&
                (
                    <div className="deletedialog">
                        <p className="delte_name">Delete {file.name}</p>
                        <div className="dialogbtn">
                            <button className="cancel" onClick={cancell}>Cancel</button>
                            <button className="cancel" onClick={cancal}>Delete</button>
                        </div>
                    </div>
                )}
        </div>
    );
}

const styles = {
    icon: {
        fontSize: '24px',
        marginBottom: '12px',
    },
    design: {
        marginTop: '30px',
        display: 'none'
    },
    quote: {
        fontSize: '20px',
        marginBottom: '12px',
    },
    Inner: {
        backgroundColor: "black",
        minHeight: "100vh",
        color: "white",
        fontFamily: "Arial, sans-serif",
        padding: "30px",
    },
    innner: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: "10px",
    },
    sources: {
        border: "1px solid gray",
        borderRadius: "8px",
        width: "40%",
        textAlign: "left",
        backgroundColor: "#1e1e1e",
        height: "85vh",
        boxShadow: "0 0 20px rgba(181, 174, 174, 0.2)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: '25px'
    },
    sourcess: {
        border: "1px solid gray",
        borderRadius: "8px",
        width: "40%",
        textAlign: "left",
        backgroundColor: "#1e1e1e",
        height: "85vh",
        boxShadow: "0 0 20px rgba(181, 174, 174, 0.2)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: '25px'
    },
    chat: {
        border: "1px solid gray",
        padding: "35px",
        borderRadius: "8px",
        width: "60%",
        textAlign: "center",
        backgroundColor: "#1e1e1e",
        height: "85vh",
        boxShadow: "0 0 20px rgba(181, 174, 174, 0.4)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    },
    sourcesHeader: {
        display: "block",
        alignItems: "center",
        marginBottom: "28px",

    },
    sourcesHeaderr: {
        display: "block",
        alignItems: "center",
        marginBottom: "28px",

    },
    title: {
        fontSize: "22px",
        fontWeight: "bold",
        marginBottom: "5px",
    },
    titlee: {
        fontSize: "22px",
        fontWeight: "bold",
        marginBottom: "5px",
    },
    subtitle: {
        fontSize: "14px",
        color: "gray",
    },
    addButton: {
        padding: "8px 15px",
        backgroundColor: "#c49a00",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        marginTop: '10px',
        width: '100%',
        justifyContent: 'center',
        textAlign: 'center'
    },
    chatHeader: {
        marginBottom: "20px",
        borderBottom: '1px solid white',
        textAlign: 'left'
    },
    chatBody: {
        textAlign: "center",
    },
    chatLogo: {
        fontSize: "14px",
        color: "gray",
        marginBottom: "10px",
    },
    uploadButton: {
        padding: "10px 15px",
        backgroundColor: "#c49a00",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        marginBottom: "15px",
    },
    input: {
        width: "100%",
        padding: "10px",
        border: "1px solid gray",
        borderRadius: "10px",
        backgroundColor: "#2e2e2e",
        color: "white",
        outline: "none",
    },
    sourcesandslide: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '8px',
        borderBottom: "1px solid white", // Add a border here
    },
    sourcesandslidee: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '8px',
        borderBottom: "1px solid white", // Add a border here
    },
    uploadsources: {
        marginBottom: '200px',
        textAlign: 'center',
    },
    cursor: {
        height: '30px',
        width: '30px',
        backgroundColor: "#c49a00",
        borderRadius: '50px',
        position: 'fixed',
        pointerEvents: "none",
        left: -20,
        top: -20,
        zIndex: 9999,
        opacity: '0.5'
    },
};

export default InnerDashboard;
