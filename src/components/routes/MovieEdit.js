import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import MovieForm from '../shared/MovieForm'
import Layout from '../shared/Layout'
const MovieEdit = props => {
  const [movie, setMovie] = useState({ title: '', director: '', year: '' })
  const [updatedMovie, setUpdatedMovie] = useState(false)
  useEffect(() => {
    axios(`${apiUrl}/movies/${props.match.params.id}`)
      .then(res => setMovie(res.data.movie))
      .catch(console.error)
  }, [])
  const handleChange = event => {
    const updatedField = { [event.target.name]: event.target.value }
    const editedMovie = Object.assign({ ...movie }, updatedField)
    // React doesn't like mutating objects/storing its data without using this.setState
    // destructuring the movie, making a copy of the object to update it with the modified field
    setMovie(editedMovie)
  }
  const handleSubmit = event => {
    event.preventDefault()
    axios({
      url: `${apiUrl}/movies/${props.match.params.id}`,
      method: 'PATCH',
      data: { movie: movie }
    })
      .then(() => setUpdatedMovie(true))
      .catch(console.error)
  }
  if (updatedMovie) {
    return <Redirect to={`/movies/${props.match.params.id}`} />
  }
  return (
    <Layout>
      <MovieForm
        movie={movie}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        cancelPath={`/movies/${props.match.params.id}`}
      />
    </Layout>
  )
}
export default MovieEdit
