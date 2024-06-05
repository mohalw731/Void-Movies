import Loader from '../components/Loader'
import Nav from '../components/Nav'
import useUserDeatils from '../Hooks/useUserDeatils'
import useFetchPopular from '../Hooks/useFetchPopular'
import { useState } from 'react';
import OptionSelect from '../components/OptionSelect';
import BannerSwiper from '../components/BannerSwiper';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';


function MovieHome() {

  const [selected, setSelected] = useState('movie')
  const { noUserData } = useUserDeatils()
  const { isLoading, popularMovie,  } = useFetchPopular({ selected })

  if (isLoading || noUserData || !popularMovie) {
    return <Loader />
  }

  const switchSelected = (newSelected) => {
    setSelected(newSelected)
  }


  return (
    <div className='row-movie'>
      <main className="movie-home">
        <Nav className='row-movie'/>
        <BannerSwiper
          popularMovie={popularMovie} />
        <OptionSelect
          switchSelected={switchSelected}
          selected={selected}
          popularMovie={popularMovie} />
          
        <Carousel
          popularMovie={popularMovie}
          title={`Popular ${selected === 'movie' ? 'Movies' : 'TV Shows'}`} 
          type='popular'/>

        <Carousel
          popularMovie={popularMovie}
          title={`Trending ${selected === 'movie' ? 'Movies' : 'TV Shows'}`} 
          type='trending'/>

        <Carousel
          popularMovie={popularMovie}
          title={`Upcoming ${selected === 'movie' ? 'Movies' : 'TV Shows'}`} 
          type='upcoming'
          />

      </main>
    </div>
  )
}

export default MovieHome
