import React from 'react'

import './Loader.css'

const Loader = (props) => {
    return (
        <div className={props.active ? "loader active" : "loader"}>
            <h1>Loading...</h1>
        </div>
    )
}

export default Loader;