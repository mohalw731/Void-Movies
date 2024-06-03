import Loader from '../components/Loader'
import Nav from '../components/Nav'
import useUserDeatils from '../Hooks/useUserDeatils'
import useFetchPopular from '../Hooks/useFetchPopular'
import { useState } from 'react';
import OptionSelect from '../components/OptionSelect';
import BannerSwiper from '../components/BannerSwiper';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function MovieHome() {

  var settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          lazyLoad: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2
        }
      }
    ]
  };

  const [selected, setSelected] = useState('movie')
  const { noUserData } = useUserDeatils()
  const { isLoading, popularMovie } = useFetchPopular({ selected })

  if (isLoading || noUserData || !popularMovie) {
    return <Loader />
  }

  const switchSelected = (newSelected) => {
    setSelected(newSelected)
  }


  return (
    <div className='row'>
      <main className="movie-home">
        <Nav />
        <BannerSwiper
          popularMovie={popularMovie} />
        <OptionSelect
          switchSelected={switchSelected}
          selected={selected}
          popularMovie={popularMovie} />

          <div className="carusel">
            <h2>Popular movies</h2>
          <Slider {...settings}>
            {popularMovie.map(data => (
              <div className="card" key={data.id}>
                <img src={`https://image.tmdb.org/t/p/original/${data?.poster_path}`} alt="" />
              </div>
            ))}
            </Slider>
          </div>
      </main>
    </div>
  )
}

export default MovieHome
