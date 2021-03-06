import React, { useEffect, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import messages from '../AutoDismissAlert/messages'

const Trip = props => {
  const [trip, setTrip] = useState(null)
  const [deleted, setDeleted] = useState(false)
  // Call this callback once after the first render, this only occurs once
  // because our dependency array is empty, so our dependencies never change
  // similar to componentDidMount
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
  useEffect(() => {
    // This will only run when the compnent will unmount
    // because the dependency array is empty
    return () => {
    }
  }, [])
  useEffect(() => {
    // The cleanup function is called when
    // 1. the component is about to unmount
    // 2. before the 2nd and following renders
    return () => {
    }
  })
  const destroy = () => {
    axios({
      url: `${apiUrl}/trips/${props.match.params.id}`,
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${props.user.token}`
      }
    })
      .then(() => setDeleted(true))
      .then(() => props.msgAlert({
        heading: 'Delete Success',
        message: messages.deleteSuccess,
        variant: 'delete'
      }))
      .catch()
  }

  if (!trip) {
    return <p>Loading test...</p>
  }
  if (deleted) {
    return <Redirect to={
      { pathname: '/trips' }
    }/>
  }
  if (trip.owner === props.user._id) {
    return (
      <div>
        <h4>Where are you going?</h4>
        <p>Date of trip: {trip.date}</p>
        <p>Country: {trip.country}</p>
        <p>City: {trip.city}</p>
        <p>Description: {trip.description}</p>
        <button onClick={destroy}>Delete Trip</button>
        <Link to={`/trips/${props.match.params.id}/edit`}>
          <button>Edit</button>
        </Link>
        <Link to="/trips">Back to all trips</Link>
      </div>
    )
  }
  return (
    <div>
      <h4>Where are you going?</h4>
      <p>Date of trip: {trip.date}</p>
      <p>Country: {trip.country}</p>
      <p>City: {trip.city}</p>
      <p>Description: {trip.description}</p>
      <Link to="/trips">Back to all trips</Link>
    </div>
  )
}

export default Trip
