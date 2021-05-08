import React from 'react'

import { render, screen } from '@testing-library/react'

import Project from './Project'

const mockProject = {
  github: 'https://github.com/malinowskil123/jeepthings',
  title: 'jeepthings',
  text:
    "A web app for Jeep lovers and rebuilders to trade, sell, and buy auto parts. Contains a fully working CRUD operations. Users have the ability to filter parts by a keyword and sort them by price. Jeepthings integrates google maps api to show a part's location on a map. Users also receive welcome and update emails as well as emails from other users regarding the parts they posted.",
  stack: [
    'react(Hooks) / redux',
    'node / express',
    'postgres',
    'sass',
    'bootstrap',
  ],
}

test('Router routes to home view by default', () => {
  render(<Project project={mockProject} />)
  expect(screen.getByTestId('jeepthings'))
})
