import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import TripForm from '../../shared/TripForm'
import messages from '../AutoDismissAlert/messages'

const TripEdit = props => {
  const [trip, setTrip] = useState({ trip: '', date: '', country: '', city: '', description: '' })
  const [updatedTrip, setUpdatedTrip] = useState(false)
  useEffect(() => {
    axios({
      url: `${apiUrl}/trips/${props.match.params.id}`,
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${props.user.token}`
      }
    })
      // Make sure to update this.setState to our hooks setMovie function
      .then(res => setTrip(res.data.trip))
      .catch()
  }, [])

  const handleChange = event => {
    const updatedField = { [event.target.name]: event.target.value }
    const editedTrip = Object.assign({ ...trip }, updatedField)
    // React doesn't like mutating objects/storing its data without using this.setState
    // destructuring the movie, making a copy of the object to update it with the modified field
    setTrip(editedTrip)
  }
  const handleSubmit = event => {
    event.preventDefault()
    axios({
      url: `${apiUrl}/trips/${props.match.params.id}`,
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${props.user.token}`
      },
      data: { trip }
    })
      .then(() => setUpdatedTrip(true))
      .then(() => props.msgAlert({
        heading: 'You have successfully updated your trip',
        message: messages.updateSuccess,
        variant: 'update'
      }))
      .catch()
  }
  if (updatedTrip) {
    return <Redirect to={`/trips/${props.match.params.id}`} />
  }
  return (
    <div>
      <TripForm
        trip={trip}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        cancelPath={`/trips/${props.match.params.id}`}
      />
    </div>
  )
}
export default TripEdit
