import React from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;

  ${props =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `};
`

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

    <Button type="submit">Submit</Button>
    <Link to={cancelPath}>
      <Button primary>Cancel</Button>
    </Link>
  </form>
)

export default TripForm
