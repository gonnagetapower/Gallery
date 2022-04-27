import React from 'react';
import "./Modal.css"

const Modal = (props) => {
    return (
        <div className={props.active ? "modal active" : "modal"} >
            <div className={props.active ?
                "modal__content active" : "modal__content"}
                onClick={e => e.stopPropagation()}>
                <div className='modal__deactivate' onClick={() => props.setActive(false)}></div>
                <div className='modal__item'>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Modal;