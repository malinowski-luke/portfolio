import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { createBrowserHistory } from 'history'

// views
import Home from './views/Home/Home'
import Self from './views/Self/Self'
import Stack from './views/Stack/Stack'
import Work from './views/Work/Work'
import Project from './views/Project/Project'
import NotFound from './views/NotFound/NotFound'

export const history = createBrowserHistory()

history.listen((location, action) => {
  window.scrollTo(0, 0)
})

export default (
  <Switch>
    <Route exact path='/home' component={Home} />
    <Route path='/self' component={Self} />
    <Route path='/stack' component={Stack} />
    <Route path='/work/:project' component={Project} />
    <Route path='/work' component={Work} />
    <Route path='/not-found' component={NotFound} />
    <Redirect exact from='/' to='/home' />
    <Redirect from='*' to='/not-found' />
  </Switch>
)
