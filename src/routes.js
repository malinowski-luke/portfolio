import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import CodeEditor from './components/CodeEditor/CodeEditor'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Work from './components/Work/Work'
import Project from './components/Work/Project/Project'

const NotFound = () => (
  <div>
    <h1>404 Not Found!</h1>
    <h4>Invalid Address</h4>
  </div>
)

export default (
  <Switch>
    <Route exact path='/home' component={CodeEditor} />
    <Route path='/about' component={About} />
    <Route path='/skills' component={Skills} />
    <Route path='/work' component={Work} />
    <Route path='/project/:index' component={Project} />
    <Route path='/not-found' render={() => <NotFound />} />
    <Redirect exact from='/' to='/home' />
    <Redirect from='/' to='/not-found' />
  </Switch>
)
