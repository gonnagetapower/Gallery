import React from 'react';

const Photo = (props) => {
    console.log(props)
    return (
        <>
            <img onClick={() => {
                props.setModalActive(true)
                props.setModalData(props.data.urls.regular)
                }} src={props.photoUrl} />
        </>
    )
}

export default Photo;