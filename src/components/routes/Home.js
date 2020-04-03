import React from 'react'
import Logo from '../../globe2.png'
import styled from 'styled-components'

const Styled = styled.div`
  text-align: center;

`

const Home = () => (
  <Styled>
    <div>
      <h4>Welcome to Trip Tracker!</h4>
      <h6>This is where you can schedule a trip around the globe</h6>
    </div>
    <img src={Logo} alt="A Globe" />
  </Styled>
)

export default Home
