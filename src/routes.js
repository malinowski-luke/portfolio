import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
// views
import Home from './views/Home/Home'
import Self from './views/Self/Self'
import Skills from './views/Skills/Skills'
import Work from './views/Work/Work'
import Project from './views/Project/Project'
import NotFound from './views/NotFound/NotFound'

export default (
  <Switch>
    <Route exact path='/home' component={Home} />
    <Route path='/self' component={Self} />
    <Route path='/skills' component={Skills} />
    <Route path='/work/:project' component={Project} />
    <Route path='/work' component={Work} />
    <Route path='/not-found' component={NotFound} />
    <Redirect exact from='/' to='/home' />
    <Redirect from='/' to='/not-found' />
  </Switch>
)
