import React from 'react'

import Nav from './Nav'
import Footer from './Footer'
import styled from 'styled-components'

const Styled = styled.div`
  text-align: center;

`

const Layout = props => (
  <Styled>
    <h1>Trip Things</h1>
    <Nav />

    {props.children}

    <Footer />
  </Styled>
)

export default Layout
