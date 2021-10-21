import React from 'react'

import styles from './SearchBar.module.css'

const SearchBar = ({ onClick }) => {
  const { 'alt-button': altButton } = styles

  const Checker = () => {
    if (document.getElementById('artist').value.length > 3)
      document.getElementById('send').click()
  }
  return (
    <>
      <div>
        <input id="artist" onChange={Checker} />
        <button
          id="send"
          type="submit"
          className={altButton}
          onClick={() => onClick(document.getElementById('artist').value)}
        >
          Pesquisar
        </button>
      </div>
    </>
  )
}

export default SearchBar
