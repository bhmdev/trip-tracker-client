import React from 'react'
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
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
  <div className="row">
    <div className="col-sm-10 col-md-8 mx-auto mt-5">
      <h2>Create A Trip</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="country">
          <Form.Label>Country</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="This is the country you want to travel to"
            value={trip.country}
            name="country"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="city">
          <Form.Label>City</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="This is the city you want to travel to"
            value={trip.city}
            name="city"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="date">
          <Form.Label>Date of Trip</Form.Label>
          <Form.Control
            required
            type="date"
            placeholder="YYYY-MM-DD"
            value={trip.date}
            name="date"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <textarea
            required
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="5"
            maxLength={3000}
            type="text"
            placeholder="This is where you describe the type of mission trip you'll be attending"
            value={trip.description}
            name="description"
            onChange={handleChange}
          />
        </Form.Group>

        <Button type="submit">Submit</Button>
        <Link to={cancelPath}>
          <Button primary>Cancel</Button>
        </Link>
      </Form>
    </div>
  </div>
)

export default TripForm
