import { StarFilledIcon } from '@radix-ui/react-icons'
import React from 'react'

function MovieBanner({data}) {
    return (
        <div className="movie-banner" >
            <img src={`https://image.tmdb.org/t/p/original/${data?.backdrop_path}`} alt="" />
            <div className="overlay" />
            <div className="movie-banner__info">
                <h1>{data?.title || data?.original_name}</h1>
                <div className="banner-reating">
                    <StarFilledIcon className='star' />
                    <p>{`${Math.ceil(data?.vote_average)} / 10`}</p>
                </div>
            </div>
        </div>
    )
}

export default MovieBanner
