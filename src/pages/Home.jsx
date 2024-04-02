import React from 'react'
import Salespage from '../components/salespage'
import Carousel from '../components/carousel'
import Toprated from '../components/toprated'
import slides from '../mock.json'
import Genrewise from '../components/genrewise'
import Tagwise from '../components/tagwise'
import Classic from '../components/classic'
import Awarded from '../components/awarded'
const Home = () => {
  return (
    <>
        <Salespage />
        <Carousel slides={slides}/>
        <Toprated slides={slides}/>
        <Genrewise slides={slides}/>
        <Tagwise slides={slides}/>
        <Classic slides={slides}/>
        <Awarded slides={slides}/>
    </>
  )
}

export default Home
