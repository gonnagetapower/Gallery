import React, { useEffect, useState } from "react";
import axios from "axios";
import { Masonry } from "@mui/lab";
import InfiniteScroll from "react-infinite-scroll-component";

import "./Gallery.css"

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
    const [error, setError] = useState(null)
    useEffect(() => {
        collection.get(`/?page=${page}`).
            then((response) => {
                setPhoto(response.data)
            }).catch(error => {
                setError(error)
            })
    }, [])
    async function fetchMorePhoto() {
        const response = await collection.get(`/?page=${page + 1}`)
        updatePage(page + 1)
        setPhoto(photo.concat(response.data))
    }
    if (error) return `Error: ${error.message}`
    return (
        <InfiniteScroll
            dataLength={photo.length}
            next={fetchMorePhoto}
            hasMore={true}
            loader={<h4>Loading...</h4>}
        >
            <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }} spacing={1}>
                {photo.map((index) => (

                        <img src={index.urls.small} />

                ))}
            </Masonry>
        </InfiniteScroll>
    )
}

export default Collections;
