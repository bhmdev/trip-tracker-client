import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'

const Trips = props => {
  const [trips, setTrips] = useState([])

  useEffect(() => {
    axios({
      url: `${apiUrl}/trips`,
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${props.user.token}`
      }
    })
      .then(res => setTrips(res.data.trips))
      .catch()
  }, [])

  const tripsJsx = trips.map(trip => (
    <li key={trip._id}>
      <Link to={`/trips/${trip._id}`}>{trip.country}</Link>
    </li>
  ))

  return (
    <div>
      <h4>Trips</h4>
      <ul>
        {tripsJsx}
      </ul>
    </div>
  )
}

export default Trips
