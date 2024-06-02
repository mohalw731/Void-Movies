import React, { useState,useRef } from 'react'
import useLogout from '../Hooks/useLogout'
import Loader from '../components/Loader'
import Nav from '../components/Nav'
import useUserDeatils from '../Hooks/useUserDeatils'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../App.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';



function MovieHome() {
  const { noUserData } = useUserDeatils()

  const { data, isLoading } = useQuery({
    queryKey: ['popularMovies'],
    queryFn: async () => await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=04bf768048c1a3faae7a9805b4bb26a6&language=en-US&page=1')
  })

  const popularMovie = data?.data?.results


  if (isLoading || noUserData || !popularMovie) {
    return <Loader />
  }

  return (
    <div className='row'>
    
        <main className="movie-home">
          <Nav />
          <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {
          popularMovie.map(data => 
            <SwiperSlide key={data?.id}>
          <div className="movie-banner" >
            <img src={`https://image.tmdb.org/t/p/original/${data?.backdrop_path}`} alt="" />
            <div className="overlay" />
            <div className="movie-banner__info">
              <h1>{data?.title}</h1>
            </div>
          </div>
          </SwiperSlide>
          )
        }
          </Swiper>
        </main>
    </div>
  )
}

export default MovieHome
