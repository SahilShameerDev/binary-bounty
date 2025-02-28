import React from 'react'
import { useNavigate } from 'react-router-dom';

function MiddleStory() {
    const styles = {
        body: {
            fontFamily: 'Arial, sans-serif',
            color: 'limegreen',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            textAlign: 'center',
            flexDirection: 'column',
            margin: 0
        },
        container: {
            maxWidth: '600px',
            padding: '20px',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '10px',
            boxShadow: '0 0 15px rgba(255, 255, 255, 0.2)',
            marginTop: '20px'
        },
        highlight: {
            color: '#ff5733',
            fontWeight: 'bold'
        },
        title: {
            color: 'limegreen'
        },
        button: {
            backgroundColor: 'limegreen',
            border: 'none',
            padding: '10px 20px',
            fontSize: '16px',
            fontWeight: 'bold',
            color: '#000',
            borderRadius: '5px',
            cursor: 'pointer',
            marginTop: '20px',
            transition: 'background-color 0.3s'
        },
        buttonHover: {
            backgroundColor: 'green'
        }
    };
    const navigate=useNavigate()
    function handlesubmit(){
        navigate("/console-decode-t5")
    }

    return (
        <div style={styles.body}>
            <h1 style={styles.title}>WELCOME TO THE GRID</h1>
            <div style={styles.container}>
                <p>I stepped through the gate. The voice echoed:</p>
                <p style={styles.highlight}>“Your brain was tested. Now, your mind’s core will be pushed beyond limits.”</p>
                <p>Numbers floated before me, shifting rapidly. A timer counted down—30 seconds. My mind raced. <span style={styles.highlight}>5… 4… 3…</span>—I solved it just in time.</p>
                <p>The world trembled. The next task hit me—not just logic, but a force pressing against my thoughts, resisting me.</p>
                <p>This wasn’t just a test. It was a <span style={styles.highlight}>battle.</span></p>
                <p>And the difficulty was only <span style={styles.highlight}>going to rise.</span></p>
            </div>
            <button 
                    style={styles.button} 
                    onMouseOver={(e) => e.target.style.backgroundColor = styles.buttonHover.backgroundColor}
                    onMouseOut={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}
                    onClick={()=>{handlesubmit()}}
                >
                    Next Task
                </button>
        </div>
    );
}

export default MiddleStory