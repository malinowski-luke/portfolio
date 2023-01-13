import { render, screen } from '@testing-library/react'
import codeText from './components/CodeEditor/text'
import App from './App'

describe('<App/> component tests', () => {
  describe('CodeEditor', () => {
    test('renders with the correct text', () => {
      render(<App />)

      const codeEditorFileName = screen.getByText('index.js')
      expect(codeEditorFileName).toBeInTheDocument()

      setTimeout(() => {
        const codeEditorText = screen.getByText(codeText)
        expect(codeEditorText).toBeInTheDocument()
      }, 1000)
    })
  })

  describe('Links', () => {
    test('renders links with correct href values', () => {
      render(<App />)

      const githubLink = screen.getByText('Github')
      const linkedinLink = screen.getByText('Linkedin')

      expect(githubLink).toBeInTheDocument()
      expect(githubLink.href).toBe('https://github.com/malinowskil123')

      expect(linkedinLink).toBeInTheDocument()
      expect(linkedinLink.href).toBe('https://www.linkedin.com/in/luke-malinowski-50328/')
    })
  })
})
