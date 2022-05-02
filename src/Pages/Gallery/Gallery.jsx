import React, { useEffect, useState } from "react";
import { Masonry } from "@mui/lab";
import InfiniteScroll from "react-infinite-scroll-component";

import Photo from './components/Photo/Photo'

import "./Gallery.css"

import Modal from "../../Components/Modal/Modal.jsx";
import Search from "./components/Search/Search";
import Loader from "../../Components/Loader/Loader";

import useDebounce from "../../hooks/useDebounce";
import API from './../../api/api.js'



const Collections = () => {
    const [modalActive, setModalActive] = useState(false)
    const [photo, setPhoto] = useState([])
    const [page, setPage] = useState(1)

    const [modalData, setModalData] = useState([]);
    const [modalDescription, setModalDescription] = useState([])

    const [searchInput, setSearchInput] = useState('')
    const [searchPhoto, setSearchPhoto] = useState([])

    const debouncedSearchTerm = useDebounce(searchInput, 1500);

    const [loading, setLoading] = useState(false)

    const [error, setError] = useState(null)

    function initialFetch() {
        API.get(`/photos?page=${page}`).
            then((response) => {
                setPhoto([...photo, ...response.data])
                setPage(page + 1)
                console.log(response.data)
            }).catch(error => {
                setError(error)
            })
    }

    const searchFetch = () => {
        API.get(`/search/photos?page=${page}&query=${searchInput}`)
            .then((response) => {
                setSearchPhoto(searchPhoto.concat(response.data.results))
                setPage(page + 1)
            }).catch(error => {
                setError(error)
            })
    }


    useEffect(() => {
        initialFetch()
    }, [])
    useEffect(() => {
        searchFetch(debouncedSearchTerm)
    }, [debouncedSearchTerm])

    if (error) return `Error: ${error.message}`
    return (
        <div class="app__wrapper">
            <Search setSearchInput={setSearchInput}
                setSearchPhoto={setSearchPhoto} />
            {/* <Loader active={loading} setLoading={setLoading}/> */}
            <InfiniteScroll
                dataLength={!searchInput ? photo.length : searchPhoto.length}
                next={!debouncedSearchTerm ? initialFetch : searchFetch}
                hasMore={true}
                loader={<h4>Loading...</h4>}
            >
                <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }} spacing={1}>
                    {searchInput.length >= 1 ? (
                        searchPhoto.map((index) => (
                            <Photo modalActive={modalActive}
                                setModalActive={setModalActive}
                                photoUrl={index.urls.small}
                                data={index}
                                setModalData={setModalData}
                                setModalDescription={setModalDescription}
                                key={index.id}
                            />
                        ))
                    ) : (
                        photo.map((index) => (
                            <Photo modalActive={modalActive}
                                setModalActive={setModalActive}
                                photoUrl={index.urls.small}
                                data={index}
                                setModalData={setModalData}
                                setModalDescription={setModalDescription}
                                key={index.id}
                            />
                        )))}
                </Masonry>
            </InfiniteScroll>
            <Modal active={modalActive} setActive={setModalActive} >
                <img src={modalData} />
                <h1>inst: {modalDescription.instagram_username ? modalDescription.instagram_username : "empty"}</h1>
                <h1>site: {modalDescription.portfolio_url ? modalDescription.portfolio_url : "empty"}</h1>
                <h1>twitter: {modalDescription.twitter_username ? modalDescription.twitter_username : "empty"}</h1>
            </Modal>
        </div>
    )
}

export default Collections;



// useEffect(() => {
//     collection.get(`/photos?page=${page}
//     &page=${page + 1}
//     &page=${page + 2}
//     &page=${page + 3}
//     &page=${page + 4}`).
//         then((response) => {
//             setPhoto(response.data)
//             updatePage(page + 4)
//             console.log(response.data)
//         }).catch(error => {
//             setError(error)
//         })
// }, [])

// useEffect(() => {
//     collection.get(`/search/photos?page=${page}&query=${searchInput}`).
//         then((response) => {
//             setSearchPhoto(response.data.results)
//             console.log(response.data)
//             updatePage(page)
//         }).catch(error => {
//             setError(error)
//         })
// }, [searchInput])



    // async function fetchMorePhoto() {
    // setLoading(true)
    // const response = await collection.get(`/photos?page=${page + 5}`)
    // updatePage(page + 1)
    // setPhoto(photo.concat(response.data))
    // updatePage(page + 1)
    // setLoading(false)
    // const response1 = await collection.get(`/search/photos?page=${page}&query=${searchInput}`)
    // if (response1) {
    //     updatePage(page + 1)
    //     console.log(response1)
    //     setSearchPhoto(searchPhoto.concat(response1.data.results))
    // }
    // }
