import React from 'react'
import { useParams } from "react-router-dom"
import slides from "../mock.json"
import "../App.css"
import { Link } from 'react-router-dom'
const List = ({ }) => {
  const { id } = useParams();
  const items = slides.filter(slide => (
    slide.genres.some(tag => tag.name = { id })
  ))
  return (
    <div className='listPage'>
      <div className='listContainer'>
        <div className='listcontainer2'>
          {items.map((item, index) => {
            return index < 2 ?
              (
                <div className='listitem2'>
                  <div className='listname2'>{item.name}</div>
                  <Link to={"/" + item.name}>
                    <img className='listimage2' src={item.background_image} alt={item.name}></img>
                  </Link>
                </div>
              ) : null
          })}
        </div>
        <div className='listcontainer3'>
          {items.map((item, index) => {
            return index >= 2 && index < 5 ?
              (
                <div className='listitem3'>
                  <div className='listname3'>{item.name}</div>
                  <Link to={"/"}>
                    <img className='listimage3' src={item.background_image} alt={item.name}></img>
                  </Link>
                </div>
              ) : null
          })}
        </div>
        <div className='listcontainer4'>
          {items.map((item, index) => {
            return index >= 5 ?
              (
                <div className='listitem4'>
                  <div className='listname4'>{item.name}</div>
                  <Link to={"/"}>
                    <img className='listimage4' src={item.background_image} alt={item.name}></img>
                  </Link>
                </div>
              ) : null
          })}
        </div>
      </div>
    </div>
  )
}

export default List
