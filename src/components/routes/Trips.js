import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import Layout from '../shared/Layout'

const Trips = props => {
  const [trips, setTrips] = useState([])

  useEffect(() => {
    axios(`${apiUrl}/trips`)
      .then(res => setTrips(res.data.trip))
      .catch(console.error)
  }, [])

  const tripLinks = trips.map(trip => (
    <li key={trip.id}>
      <Link to={`/trips/${trip.id}`}>{trip.country}</Link>
    </li>
  ))

  return (
    <Layout>
      <h4>Trips test!</h4>
      <ul>
        {tripLinks}
      </ul>
    </Layout>
  )
}

export default Trips
