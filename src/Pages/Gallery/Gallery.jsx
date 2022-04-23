import React, { useEffect, useState } from "react";
import axios from "axios";

import "./Gallery.css"

const collection = axios.create({
    baseURL: "https://api.unsplash.com/photos",
    params: {
        page: 3,
        per_page: 100,
    },
    headers: {
        "Authorization": "Client-ID -yyQ7Y9Pqa3Q7woGoqzC-eh4Ktc0tp64qBDTMdx-Tdw"
    }

})

const Collections = () => {
    const [photo, setPhoto] = useState([])
    useEffect(() => {
        async function getPhoto() {
            const response = await collection.get("/");
            setPhoto(response.data)
            console.log(response)
        }
        getPhoto();
    }, [])
    return (
        <div className="Gallery">
            {console.log(photo)}
            <h1>Collection</h1>
            {/* // <img src={photo}></img> */}
            {photo.map((pic) => {
                return (
                        <img src={pic.urls.small} />
                )
            })}
        </div>
    )
}

export default Collections;
