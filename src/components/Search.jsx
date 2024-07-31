import React from 'react'
import arrow from '../assets/arrow.png'

function Search() {
  return (
    <label className='search'>
      <input></input>
      <button>
        <img src={arrow} alt='search' />
      </button>
    </label>
  )
}

export default Search
