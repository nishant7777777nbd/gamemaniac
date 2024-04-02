import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { Autoplay, Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/swiper-bundle.min.css";
import { useState } from "react";
import { Route, Routes, Link } from 'react-router-dom'


export default function Carousel({ slides }) {
  SwiperCore.use([Autoplay])
  return (
    <div className="carouselcontainer">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1000: {
            slidesPerView: 3,
          }
        }}
        // onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {slides.slice(0,9).map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div
              className="sliderbox"
            >
              <div className="withouthover">
                <img
                  className="sliderimg"
                  src={slide.background_image}
                  alt={slide.name}
                ></img>
                <div className="titleslider">{slide.name}</div>
                {
                  <div className="genre">
                    {slide.genres.map((genre) => (
                      <h4 className="genrename">{genre.name}</h4>
                    ))}
                  </div>
                }
                <h4 className="ratingslider">
                  &#11088;
                  <span className="ratingslider">
                    {" "}
                    ({slide.rating}/{slide.rating_top})
                  </span>
                </h4>
              </div>
              <div className="withover">
                <div className="hovertitle">{slide.name}</div>
                <div className="innerswiper">
                  <Swiper
                    modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
                    autoplay={{
                      delay: 1500,
                      disableOnInteraction: false,
                    }}
                    spaceBetween={0}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    // onSlideChange={}
                    onSwiper={(swiper) => console.log(swiper)}
                  >
                    {slide.short_screenshots.map((ss) => (
                      <SwiperSlide key={ss.id}>
                        <img
                          className="hoverimages"
                          src={ss.image}
                          alt={ss.id}
                        ></img>
                      </SwiperSlide>

                    ))}
                  </Swiper>
                </div>
                <div className="releasedate">
                  It was released on {slide.released} and recieved Top 10 Game of the Year award.<br></br>Last Updated on {slide.updated}. It has got a metacritic
                  score of {slide.metacritic}
                  <br></br>
                  <h4 className="platformname">Available on&nbsp;
                    {slide.platforms.map((item) => (
                      <span key={item.platform.id} className="platformname">{item.platform.name}&#44;&nbsp;</span>
                    ))}
                  </h4>
                </div>
                <Link to={"/" + index} className="showmore">Show more..</Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
