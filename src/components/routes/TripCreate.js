import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import TripForm from '../../shared/TripForm'
import Layout from '../../shared/Layout'
import messages from '../AutoDismissAlert/messages'

const TripCreate = props => {
  const [trip, setTrip] = useState({ trip: '', date: '', country: '', city: '', description: '' })
  const [createdTripId, setCreatedTripId] = useState(null)

  const handleChange = event => {
    setTrip({ ...trip, [event.target.name]: event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault()

    axios({
      url: `${apiUrl}/trips`,
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${props.user.token}`
      },
      data: { trip }
    })
      .then(res => setCreatedTripId(res.data.trip._id))
      .then(() => props.msgAlert({
        heading: 'Create Success',
        message: messages.createSuccess,
        variant: 'create'
      }))
      .catch(() => {
        props.msgAlert({
          heading: 'Create Trip Failed',
          message: messages.createTripFailure,
          variant: 'danger'
        })
      })
  }
  if (createdTripId) {
    return <Redirect to={`/trips/${createdTripId}`} />
  }

  return (
    <Layout>
      <TripForm
        trip={trip}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        cancelPath="/"
      />
    </Layout>
  )
}

export default TripCreate
