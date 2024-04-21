import { useState } from "react"
import Modal from "./modal";

export default function ModalTest(){
    const [showModalPopup,setShowModalPopup]=useState(false);

    function handalPopupToggel(){
        setShowModalPopup(!showModalPopup)
    }

    return <div>
        <button onClick={handalPopupToggel}>Open Pop Up</button>
        {
            showModalPopup  && <Modal/>
        }
    </div>
}