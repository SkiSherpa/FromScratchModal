import { useState } from 'react';
import './App.css';
import Modal2 from './modal2/modal2.jsx';

function App({}) {

  const [ isOpen, setIsOpen ] = useState(false);

  const bodyText = "This is the test body, I don't think that useState is needed as we don't update this text for this excersice"

  function toggleModal() {
    console.log("isOPen is now:", isOpen);
    setIsOpen(!isOpen);

  }

  return (
    <>
      <h1>Modal Practice</h1>
      <button className="btn-modal" onClick={() => toggleModal()}>Open Modal</button>
      {/* Can pass in the title or any content as props */}
      <Modal2 title="Modal 2, using notes" body={bodyText} isOpen={isOpen} onClose={toggleModal}/>
    </>
  );
}

export default App;
