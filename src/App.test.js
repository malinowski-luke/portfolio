import { render, screen, within } from '@testing-library/react'
import codeText from './utils/text'
import App from './App'

import links from './components/Dock/links'

describe('<App/> component tests', () => {
  describe('Desktop', () => {
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
        const soundcloudLink = within(dockContainer).getByTestId('soundcloud-link')
        const mailLink = within(dockContainer).getByTestId('mail-link')
        const trashLink = within(dockContainer).getByTestId('trash-link')

        expect(githubLink).toBeInTheDocument()
        expect(githubLink.href).toBe(links.github)

        expect(linkedinLink).toBeInTheDocument()
        expect(linkedinLink.href).toBe(links.linkedin)

        expect(soundcloudLink).toBeInTheDocument()
        expect(soundcloudLink.href).toBe(links.soundcloud)

        expect(mailLink).toBeInTheDocument()
        expect(mailLink.href).toBe(links.mail)

        expect(trashLink).toBeInTheDocument()
        expect(trashLink.href).toBe(links.trash)
      })
    })
  })
})
