import React from 'react';

import './Photo.css'

const Photo = (props) => {
    return (
        <>
            <img class="item__photo" onClick={() => {
                props.setModalActive(true)
                props.setModalData(props.data.urls.regular)
                props.setModalDescription(props.data.user.social)
                }} src={props.photoUrl} />
        </>
    )
}

export default Photo;