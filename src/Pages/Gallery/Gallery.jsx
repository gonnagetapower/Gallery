import React, { useEffect, useState , useCallback } from "react";
import axios from "axios";
import { Masonry } from "@mui/lab";
import InfiniteScroll from "react-infinite-scroll-component";

import Photo from './components/Photo/Photo'

import "./Gallery.css"
import Modal from "../../Components/Modal/Modal.jsx";
import Search from "./components/Search/Search";
import Loader from "../../Components/Loader/Loader";
import useDebounce from "../../hooks/useDebounce";

const collection = axios.create({
    baseURL: "https://api.unsplash.com/",
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
    const [page, setPage] = useState(1)

    const [modalData, setModalData] = useState({});

    const [searchInput, setSearchInput] = useState('')
    const [searchPhoto, setSearchPhoto] = useState([])

    const [loading, setLoading] = useState(false)

    const [error, setError] = useState(null)

    const changeHanlder = useCallback(async (e) => {
        setSearchInput(e.target.value)
    }, [])


    function initialFetch() {
        collection.get(`/photos?page=${page}`).
            then((response) => {
                console.log(`initialFetching: ${response.data}`)
                setPhoto([...photo, ...response.data])
                setPage(page + 1)
            }).catch(error => {
                setError(error)
            })
    }

    const searchFetch = useDebounce(async (searchInput) => {
        collection.get(`/search/photos?page=${page}&query=${searchInput}`)
            .then((response) => {
                console.log(`searchFetching: ${response.data.results}`)
                setSearchPhoto(searchPhoto.concat(response.data.results))
                setPage(page + 1)
            }).catch(error => {
                setError(error)
            })
    }, 5)


    useEffect(() => {
        initialFetch()
    }, [])
    useEffect(() => {
        searchFetch()
    }, [searchInput])

    if (error) return `Error: ${error.message}`
    return (
        <div class="app__wrapper">
            <Search setSearchInput={setSearchInput} 
            changeHanlder={changeHanlder}/>
            {/* <Loader active={loading} setLoading={setLoading}/> */}
            <InfiniteScroll
                dataLength={!searchInput ? photo.length : searchPhoto.length}
                next={!searchInput ? initialFetch : searchFetch}
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
                                 />
                        ))
                    ) : (
                        photo.map((index) => (
                            <Photo modalActive={modalActive}
                                setModalActive={setModalActive}
                                photoUrl={index.urls.small}
                                data={index}
                                setModalData={setModalData} />
                        )))}
                </Masonry>
            </InfiniteScroll>
            <Modal active={modalActive} setActive={setModalActive} >
                <img src={modalData} />
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
