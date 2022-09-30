import React from 'react'
import SearchForm from './components/SearchForm'
import SearchInfo from './components/SearchInfo'
import './Home.css'

const Home = () => {
  return (
    <div className='home'>
      <SearchForm />
      <SearchInfo />
    </div>
  )
}

export default Home
