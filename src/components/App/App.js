import React, { Component, Fragment } from 'react'
import { Route, withRouter } from 'react-router-dom'

import AuthenticatedRoute from '../AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from '../AutoDismissAlert/AutoDismissAlert'
import Header from '../Header/Header'
import SignUp from '../SignUp/SignUp'
import SignIn from '../SignIn/SignIn'
import SignOut from '../SignOut/SignOut'
import ChangePassword from '../ChangePassword/ChangePassword'

import Trips from './../routes/Trips'
import Trip from './../routes/Trip'
import TripEdit from './../routes/TripEdit'
import TripCreate from './../routes/TripCreate'
import Home from './../routes/Home'

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      msgAlerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  msgAlert = ({ heading, message, variant }) => {
    this.setState({ msgAlerts: [...this.state.msgAlerts, { heading, message, variant }] })
  }

  render () {
    const { msgAlerts, user } = this.state

    return (
      <Fragment>
        <Header user={user} />
        {msgAlerts.map((msgAlert, index) => (
          <AutoDismissAlert
            key={index}
            heading={msgAlert.heading}
            variant={msgAlert.variant}
            message={msgAlert.message}
          />
        ))}
        <main className="container">
          <Route path='/sign-up' render={() => (
            <SignUp msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <Route exact path='/' component={Home} />
          <AuthenticatedRoute exact user={user} path='/sign-out' render={() => (
            <SignOut msgAlert={this.msgAlert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute exact user={user} path='/change-password' render={() => (
            <ChangePassword msgAlert={this.msgAlert} user={user} />
          )} />
          <AuthenticatedRoute exact user={user} path='/trips' render={() => (
            <Trips msgAlert={this.msgAlert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute exact user={user} path='/trips/:id' render={({ match }) => (
            <Trip msgAlert={this.msgAlert} user={user} match={match}/>
          )} />
          <AuthenticatedRoute exact user={user} path='/trips/:id/edit' render={({ match }) => (
            <TripEdit msgAlert={this.msgAlert} clearUser={this.clearUser} user={user} match={match} />
          )} />
          <AuthenticatedRoute exact user={user} path='/create-trip' render={() => (
            <TripCreate msgAlert={this.msgAlert} user={user} />

          )} />
        </main>
      </Fragment>
    )
  }
}

export default withRouter(App)
