import React, { useCallback } from 'react'

import './Search.css'

const Search = (props) => {
    return (
        <div className='search'>
            <label>Search the photo:</label>
            <input 
            className='search__field' 
            onChange={props.changeHanlder}
            />
        </div>
    )
}

export default Search;