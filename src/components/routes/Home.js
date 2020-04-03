import React from 'react'
import Layout from '../../shared/Layout'
import Logo from '../../globe2.png'

const Home = () => (
  <div>
    <Layout>
      <h4>Welcome to Trip Tracker!</h4>
      <h6>This is where you can schedule a trip around the globe, just click sign Up to begin</h6>
    </Layout>
    <img src={Logo} alt="A Globe" />
  </div>
)

export default Home
