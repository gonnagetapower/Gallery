import React from 'react';
import "./Modal.css"

const Modal = (props) => {
    return (
        <div className={props.active ? "modal active" : "modal"} onClick={() => props.setActive(false)}>
            <div className='modal__deactivate'></div>
            <div className={props.active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
                {props.children}
            </div>
        </div>
    )
}

export default Modal;