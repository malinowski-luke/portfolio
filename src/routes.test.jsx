import React from 'react'
import { MemoryRouter } from 'react-router-dom'

import { render, screen } from '@testing-library/react'

import routes from './routes'

test('Router routes to home view by default', () => {
  render(<MemoryRouter initialEntries={['/']}>{routes}</MemoryRouter>)
  expect(screen.getByTestId('home'))
})

test('Router render to self view', () => {
  render(<MemoryRouter initialEntries={['/self']}>{routes}</MemoryRouter>)
  expect(screen.getByTestId('self'))
})

test('Router routes to stack view', () => {
  render(<MemoryRouter initialEntries={['/stack']}>{routes}</MemoryRouter>)
  expect(screen.getByTestId('stack'))
})

test('Router routes to work view', () => {
  render(<MemoryRouter initialEntries={['/stack']}>{routes}</MemoryRouter>)
  expect(screen.getByTestId('stack'))
})

test('Router routes to notfound if pathname is invalid', () => {
  render(<MemoryRouter initialEntries={['/hello']}>{routes}</MemoryRouter>)
  expect(screen.getByTestId('notfound'))
})
