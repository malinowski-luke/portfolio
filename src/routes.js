import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
// views
import Home from './views/Home/Home'
import Self from './views/Self/Self'
import Skills from './views/Skills/Skills'
import Work from './views/Work/Work'
import Project from './components/Project/Project'

const NotFound = () => (
  <div className='text-center'>
    <h1>404 Not Found!</h1>
    <h4>Invalid Address</h4>
  </div>
)

export default (
  <Switch>
    <Route exact path='/home' component={Home} />
    <Route path='/self' component={Self} />
    <Route path='/skills' component={Skills} />
    <Route path='/work/:index' component={Project} />
    <Route path='/work' component={Work} />
    <Route path='/not-found' render={(props) => <NotFound {...props} />} />
    <Redirect exact from='/' to='/home' />
    <Redirect from='/' to='/not-found' />
  </Switch>
)
