import React from 'react';
import './modal2.css';

// Use the "title", so the title is dynamic,
// but is determined by the parent component
export default function Modal2 ({isOpen, onClose, title, body}) {
    return (
        isOpen && (
                <div className="overlay">
                    <div className="modal">
                        <h2>{title}</h2>
                        <p>{body}</p>
                        <button onClick={onClose}>
                            CLOSE MODAL
                        </button>
                    </div>
                </div>
            )
    )
}
