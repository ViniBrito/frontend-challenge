import React from 'react'
import { useState } from 'react/cjs/react.development'

import styles from './SearchBar.module.css'

const SearchBar = ({ onClick }) => {
  const [query, setQuery] = useState('')

  const updater = value => {
    setQuery(value)
    if (value.length > 3) {
      onClick(value)
    }
  }
  return (
    <>
      <input
        data-testid="label"
        value={query}
        onChange={event => updater(event.target.value)}
      />
      <button
        data-testid="button"
        type="submit"
        className={styles['alt-button']}
        onClick={() => onClick(query)}
      >
        Pesquisar
      </button>
    </>
  )
}

export default SearchBar
