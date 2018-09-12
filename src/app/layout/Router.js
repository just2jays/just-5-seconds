import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Game from '../../pages/Game'
import About from '../../pages/About'

const Router = () => (
  <Switch>
    <Route exact path='/' component={Game}/>
    <Route path='/about' component={About}/>
  </Switch>
)

export default Router