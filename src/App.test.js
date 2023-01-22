import { render, screen, within } from '@testing-library/react'
import codeText from './components/CodeEditor/text'
import App from './App'

describe('<App/> component tests', () => {
  describe('CodeEditor', () => {
    test('renders with the correct text', () => {
      render(<App />)

      const codeEditorContainer = screen.getByTestId('code-editor')
      const codeEditorFileName = within(codeEditorContainer).getByText('index.js')
      expect(codeEditorFileName).toBeInTheDocument()

      setTimeout(() => {
        const codeEditorText = within(codeEditorContainer).getByText(codeText)
        expect(codeEditorText).toBeInTheDocument()
      }, 1000)
    })
  })

  describe('Dock', () => {
    test('renders links with correct href values', () => {
      render(<App />)

      const dockContainer = screen.getByTestId('dock')

      const githubLink = within(dockContainer).getByTestId('github-link')
      const linkedinLink = within(dockContainer).getByTestId('linkedin-link')
      const trashLink = within(dockContainer).getByTestId('trash-link')

      expect(githubLink).toBeInTheDocument()
      expect(githubLink.href).toBe('https://github.com/malinowskil123')

      expect(linkedinLink).toBeInTheDocument()
      expect(linkedinLink.href).toBe('https://www.linkedin.com/in/luke-malinowski-50328/')

      expect(trashLink).toBeInTheDocument()
      expect(trashLink.href).toBe('https://www.php.net/')
    })
  })
})
