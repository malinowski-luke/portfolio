import fs from 'fs'
import path from 'path'
import projects from '../data/projects.json'

export default {
	getAllProjects: (request, response) => {
		response.status(200).send(projects)
	},
	getProject: (request, response) => {
		const projectTitle = request.params.project_title

		const projectData = projects.find((project) => project.title === projectTitle)

		if (!projectData) {
			return response.status(404).send(`Project ${projectTitle} not found.`)
		}

		response.status(200).send(projectData)
	},
	getMyStack: (request, response) => {
		const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1)
		let icons = fs.readdirSync(path.resolve(__dirname + '/../assets/icons'))

		if (icons.length >= 1) {
			icons = icons.map((icon) => {
				let title = icon.replace('.png', '')

				if (title.split(' | ').length > 1) {
					title = title
						.split(' | ')
						.map((word) => capitalize(word))
						.join(' | ')
				} else {
					title = capitalize(title)
				}

				return {
					img: `/assets/icons/${icon}`,
					title,
				}
			})
		}

		response.status(200).send(icons)
	},
}
