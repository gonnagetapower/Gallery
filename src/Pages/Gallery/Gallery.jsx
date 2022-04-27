import React, { useEffect, useState } from "react";
import axios from "axios";
import { Masonry } from "@mui/lab";
import InfiniteScroll from "react-infinite-scroll-component";

import Photo from './components/Photo/Photo'

import "./Gallery.css"
import Modal from "../../Components/Modal/Modal.jsx";

const collection = axios.create({
    baseURL: "https://api.unsplash.com/photos",
    params: {
        page: 1,
        per_page: 20,
    },
    headers: {
        "Authorization": "Client-ID -yyQ7Y9Pqa3Q7woGoqzC-eh4Ktc0tp64qBDTMdx-Tdw"
    }

})


const Collections = () => {
    const [modalActive, setModalActive] = useState(false)
    const [photo, setPhoto] = useState([])
    const [page, updatePage] = useState(1)
    const [modalData, setModalData] = useState({});
    const [error, setError] = useState(null)
    useEffect(() => {
        collection.get(`/?page=${page}
        &page=${page + 1}
        &page=${page + 2}
        &page=${page + 3}
        &page=${page + 4}`).
            then((response) => {
                setPhoto(response.data)
                updatePage(page + 4)
                console.log(response.data)
            }).catch(error => {
                setError(error)
            })
    }, [])
    async function fetchMorePhoto() {
        const response = await collection.get(`/?page=${page + 5}`)
        updatePage(page + 1)
        setPhoto(photo.concat(response.data))
    }
    if (error) return `Error: ${error.message}`
    return (
        <div class="app__wrapper">
            <InfiniteScroll
                dataLength={photo.length}
                next={fetchMorePhoto}
                hasMore={true}
                loader={<h4>Loading...</h4>}
            >
                <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }} spacing={1}>
                    {photo.map((index) => (
                        <Photo modalActive={modalActive} 
                        setModalActive={setModalActive} 
                        photoUrl={index.urls.small}
                        data={index} 
                        setModalData={setModalData} />
                    ))}
                </Masonry>
            </InfiniteScroll>
            <Modal active={modalActive} setActive={setModalActive} >
            <img src={modalData}/>
            </Modal>
        </div>
    )
}

export default Collections;
