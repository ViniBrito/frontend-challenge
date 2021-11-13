import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import Home from './'

describe('Aparência', () => {
  test('Renderização do botão', () => {
    const history = createMemoryHistory()
    const tree = render(
      <Router history={history}>
        <Home />
      </Router>,
    )
    expect(tree.getByText('Buscar artista')).toBeInDocument
  })
  test('Renderização do título', () => {
    const history = createMemoryHistory()
    const tree = render(
      <Router history={history}>
        <Home />
      </Router>,
    )
    expect(tree.getAllByRole('heading').length).toBe(1)
  })
})

describe('Funcionalidade', () => {
  test('Clicando no botão', () => {
    const history = createMemoryHistory()
    const tree = render(
      <Router history={history}>
        <Home />
      </Router>,
    )
    fireEvent.click(tree.getByText('Buscar artista'))
    expect(history.location.pathname).toBe('/search')
  })
})
