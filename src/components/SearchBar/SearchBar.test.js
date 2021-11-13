import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import SearchBar from './'

describe('Aparência', () => {
  test('Renderização do input', () => {
    const { getByTestId } = render(<SearchBar />)
    expect(getByTestId('label')).toBeInDocument
  })
  test('Renderização do botão', () => {
    const { getByText } = render(<SearchBar />)
    expect(getByText('Pesquisar')).toBeInDocument
  })
})

describe('Funcionalidade', () => {
  test('Clicando no botão', () => {
    const tester = jest.fn()
    const { getByTestId } = render(<SearchBar onClick={tester} />)
    fireEvent.click(getByTestId('button'))
    expect(tester).toHaveBeenCalled
  })
  test('Preenchendo o input', () => {
    const tester = jest.fn()
    const { getByTestId } = render(<SearchBar onClick={tester} />)
    fireEvent.change(getByTestId('label'), {
      target: {
        value: 'Mic',
      },
    })
    expect(tester).toHaveBeenCalledTimes(0)
    fireEvent.change(getByTestId('label'), {
      target: {
        value: 'Michael Jackson',
      },
    })
    expect(tester).toHaveBeenCalledTimes(1)
    fireEvent.change(getByTestId('label'), {
      target: {
        value: 'Mich',
      },
    })
    expect(tester).toHaveBeenCalledTimes(2)
  })
})
