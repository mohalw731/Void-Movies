import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PlusIcon } from '@radix-ui/react-icons';
import { Link } from 'react-router-dom';
import useFetchPopular from '../Hooks/useFetchPopular';
import Card from './ui/Card';


function Carousel({ popularMovie, title }) {

    var settings = {
        lazyLoad: true, // Changed to a valid value
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 4,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2500, // Changed to a more practical value
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                    lazyLoad: true
                }
            },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2
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
                  <Card data={data}/>
                ))}
            </Slider>
        </div>
    )
}

export default Carousel
