import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PlusIcon } from '@radix-ui/react-icons';
import { Link } from 'react-router-dom';


function Carousel({ popularMovie, title }) {

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
                breakpoint: 850, // new breakpoint
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 700, // new breakpoint
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
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

    return (
        <div className="carusel">
            <h2>{title}</h2>
            <Slider {...settings}>
                {popularMovie.map(data => (

                    <div className="card" key={data?.id}>
                        {/* <Link to={`/details/${data?.id}`}> */}
                            <img src={`https://image.tmdb.org/t/p/original/${data?.poster_path}`} alt="" />
                            <div className="card-hover_info">
                                <h2>{data?.title || data?.original_name}</h2>
                                <button className="AddTo-list_btn">
                                    <PlusIcon />
                                </button>
                            </div>
                        {/* </Link> */}
                    </div>

                ))}
            </Slider>
        </div>
    )
}

export default Carousel
