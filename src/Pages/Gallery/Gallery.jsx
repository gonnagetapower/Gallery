import React, { useEffect, useState } from "react";
import axios from "axios";

import "./Gallery.css"
import { Masonry } from "@mui/lab";

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
        }
        getPhoto();
        console.log(photo)
    }, [])
    return (
                <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }} spacing={2}>
                {photo.map((index) => (
  
                    <img src={index.urls.small} />
 
                ))}
              </Masonry>
    )
}

export default Collections;
