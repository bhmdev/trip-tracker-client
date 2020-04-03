import React from 'react'
import Layout from '../../shared/Layout'
import Logo from '../../globe2.png'

const Home = () => (
  <div>
    <Layout>
      <h4>Welcome to Trip Tracker!</h4>
    </Layout>
    <img src={Logo} alt="A Globe" />
  </div>
)

export default Home
