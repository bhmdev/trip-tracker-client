import React from 'react'
import { Link } from 'react-router-dom'

const TripForm = ({ trip, handleSubmit, handleChange, cancelPath }) => (
  <form onSubmit={handleSubmit}>
    <label>Country</label>
    <input
      placeholder="This is the country you want to travel to"
      value={trip.country}
      name="country"
      onChange={handleChange}
    />

    <label>City</label>
    <input
      placeholder="This is the city you want to travel to"
      value={trip.city}
      name="city"
      onChange={handleChange}
    />

    <label>Date of Trip</label>
    <input
      type="date"
      placeholder="YYYY-MM-DD"
      value={trip.date}
      name="date"
      onChange={handleChange}
    />

    <label>Description</label>
    <input
      placeholder="This is the Description of your upcoming trip"
      value={trip.description}
      name="description"
      onChange={handleChange}
    />

    <button type="submit">Submit</button>
    <Link to={cancelPath}>
      <button>Cancel</button>
    </Link>
  </form>
)

export default TripForm
