import { useState, ReactNode } from "react"

const Modal = ({ useState }) => {
    const [display, setDisplay] = useState(false);

    return (
        <div className="modal">
            <div className="overlay"></div>
                <div className="modal-content">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta, perferendis.;
                </div>
        </div>
    )
}

export default Modal