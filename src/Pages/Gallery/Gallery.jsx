import React, { useEffect, useState } from "react";
import axios from "axios";
import ImageList from '@mui/material/ImageList';
import ImageListItem from "@mui/material/ImageListItem";

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
        <ImageList variant="masonry" cols={4} gap={8}>
            {console.log(photo)}
            <div><h1>Gallery</h1></div>
            {/* // <img src={photo}></img> */}
            {photo.map((pic) => {
                return (
                        <img src={pic.urls.small} />
                )
            })}
            </ImageList>   
    )
}

export default Collections;
