import React, { useEffect, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import Layout from '../../shared/Layout'

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
      .catch(console.error)
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
      .catch(console.error)
  }
  if (!trip) {
    return <p>Loading test...</p>
  }
  if (deleted) {
    return <Redirect to={
      { pathname: '/', state: { msg: 'Trip succesfully deleted!' } }
    } />
  }
  if (trip.owner === props.user._id) {
    return (
      <Layout>
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
      </Layout>
    )
  }
  return (
    <Layout>
      <h4>Where are you going?</h4>
      <p>Date of trip: {trip.date}</p>
      <p>Country: {trip.country}</p>
      <p>City: {trip.city}</p>
      <p>Description: {trip.description}</p>
      <Link to="/trips">Back to all trips</Link>
    </Layout>
  )
}

export default Trip
