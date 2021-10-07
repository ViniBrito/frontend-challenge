import React, { Component } from 'react'

import styles from './SearchBar.module.css'

class SearchBar extends Component {

  state = {}

  componentDidMount() {}

  render() {
    const {
      props: { children },
    } = this

    const { 'alt-button': altButton } = styles

    return (
      <>
        <div>
          <input></input>
          <button className={altButton}>Pesquisar</button>
        </div>
      </>
    )
  }
}

export default SearchBar
