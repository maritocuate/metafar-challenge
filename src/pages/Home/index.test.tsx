import { render, waitFor } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom'

import Home from '.'

test('should render StocksTable', async () => {
  
  const { getByText, queryByText, getByRole } = render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>,
  )

  expect(getByText('Loading...')).toBeInTheDocument()

  await waitFor(() => {
    expect(getByRole('table')).toBeInTheDocument()
  }, { timeout: 3000 })

  expect(queryByText('Loading...')).not.toBeInTheDocument()
})
