import { useState } from "react";
import Modal from "./modal";
import "./modal.css";

export default function ModalTest() {
  const [showModalPopup, setShowModalPopup] = useState(false);

  function handalPopupToggel() {
    setShowModalPopup(!showModalPopup);
  }
  function onClose() {
    setShowModalPopup(false);
  }

  return (
    <div>
      <button onClick={handalPopupToggel}>Open Pop Up</button>
      {showModalPopup && (
        <Modal
          id={"custom-id"}
          header={<h1>Custome Header</h1>}
          onClose={onClose}
          body={<div>Customise body</div>}
          footer={<h1>Customized Footer</h1>}
        />
      )}
    </div>
  );
}
