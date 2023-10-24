import { useState } from 'react';
import { Modal } from 'react-modal';

// Are people defining there own Modal code, or is there a library that I can pull from?
export default function DialogModal() {
    const [ isOpen, setIsOpen ] = useState(false);
    const Modal = ({ isOpen, onClose }) => {

    }
    let handleClick = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
        <button onClick={() => handleClick()}>OPEN DIALOG MODAL</button>
        <Modal
            isOpen={isOpen}
            onClose={() => handleClick()}
            title="Modal Title"
            body="Modal Body"
        >
            <button onClose={() => handleClick()}>CLOSE</button>
        </Modal>

        </>
    )

}
