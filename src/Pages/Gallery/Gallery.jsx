import React, { useEffect, useState } from "react";
import axios from "axios";
import { Masonry } from "@mui/lab";
import InfiniteScroll from "react-infinite-scroll-component";

import "./Gallery.css"
import { containerClasses } from "@mui/material";


const collection = axios.create({
    baseURL: "https://api.unsplash.com/photos",
    params: {
        page: 1,
        per_page: 10,
    },
    headers: {
        "Authorization": "Client-ID -yyQ7Y9Pqa3Q7woGoqzC-eh4Ktc0tp64qBDTMdx-Tdw"
    }

})



const Collections = () => {
    const [photo, setPhoto] = useState([])
    const [page, updatePage] = useState(1)
    useEffect(() => {
        async function getPhoto() {
            const response = await collection.get("/");
            setPhoto(response.data)
        }
        getPhoto();
    }, [])
    async function fetchMorePhoto() {
        const response = await collection.get(`/?page=${page}`);
        updatePage(page + 1)
        setPhoto(photo.concat(response.data))
        console.log('success')
    }
    
    return (
        <InfiniteScroll
            dataLength={photo.length}
            next={fetchMorePhoto}
            hasMore={true}
            loader={<h4>Loading...</h4>}
        >
            <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }} spacing={2}>
                {photo.map((index) => (

                    <img src={index.urls.small} />

                ))}
            </Masonry>
        </InfiniteScroll>
    )
}

export default Collections;
