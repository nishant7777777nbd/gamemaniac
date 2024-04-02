import React from 'react'
import { useParams } from "react-router-dom"
import slides from "../mock.json"
import "../App.css"
import { Link } from 'react-router-dom'
const Taglist = () => {
        const { id } = useParams();
        const tagitems = slides.filter(slide => (
          slide.tags.some(tag => tag.name = { id })
        ))
  return (
    <div className='tagPage'>
      <div className='listContainer'>
        <div className='listcontainer2'>
          {tagitems.map((item, index) => {
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
          {tagitems.map((item, index) => {
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
          {tagitems.map((item, index) => {
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

export default Taglist
