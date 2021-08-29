import React from 'react'
import { Switch, Route, Redirect, useParams } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import useAllProjects from './hooks/useAllProjects'

// views
import Home from './pages/Home/Home'
import Self from './pages/Self/Self'
import Stack from './pages/Stack/Stack'
import Work from './pages/Work/Work'
import Project from './pages/Project/Project'
import NotFound from './pages/NotFound/NotFound'

export const history = createBrowserHistory()

history.listen((location, action) => {
  window.scrollTo(0, 0)
})

export default (
  <Switch>
    <Route exact path='/home' component={Home} />
    <Route path='/self' component={Self} />
    <Route path='/stack' component={Stack} />
    <Route
      path='/work/:project'
      component={(props) => {
        const allProjects = useAllProjects()
        const { project: projectTitle } = useParams()

        const projectItem = allProjects.find(
          (project) => project.title === projectTitle
        )

        return projectItem ? (
          <Project {...props} project={projectItem} />
        ) : (
          <Redirect from='*' to='/not-found' />
        )
      }}
    />
    <Route path='/work' component={Work} />
    <Route path='/not-found' component={NotFound} />
    <Redirect exact from='/' to='/home' />
    <Redirect from='*' to='/not-found' />
  </Switch>
)
