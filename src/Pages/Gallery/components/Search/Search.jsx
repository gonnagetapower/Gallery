import React from 'react'

import './Search.css'

const Search = (props) => {
    return (
        <div className='search'>
            <label>Search the photo:</label>
            <input 
            className='search__field' 
            onChange={(e) => props.setSearchInput(e.target.value)}
            />
        </div>
    )
}

export default Search;