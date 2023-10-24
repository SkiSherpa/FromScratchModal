import React from 'react';
import './modal2.css';

export default function Modal2 ({isOpen, onClose}) {
    return (
        isOpen && (
                <div className="overlay">
                    <div className="modal">
                        <h2>Modal title</h2>
                        <p>body, body, body</p>
                        <button onClick={onClose}>
                            CLOSE MODAL
                        </button>
                    </div>
                </div>
            )
    )
}
