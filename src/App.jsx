import { useState } from 'react';
import './App.css';
import Modal2 from './modal2/modal2.jsx';

function App() {

  const [ isOpen, setIsOpen ] = useState(false);

  function toggleModal() {
    console.log("isOPen is now:", isOpen);
    setIsOpen(!isOpen);

  }

  return (
    <>
      <h1>Modal Practice</h1>
      <button className="btn-modal" onClick={() => toggleModal()}>Open Modal</button>
      <Modal2 isOpen={isOpen} onClose={toggleModal}/>
    </>
  );
}

export default App;
