import { StarFilledIcon } from '@radix-ui/react-icons'
import React from 'react'
import { Link } from 'react-router-dom'

function MovieBanner({ data }) {
    return (
        <div className="movie-banner" >
            <Link to={`/details/${data.id}`}>
                <img src={`https://image.tmdb.org/t/p/original/${data?.backdrop_path}`} alt={data?.title || data?.original_name} />
                <div className="overlay" />
                <div className="movie-banner__info">
                    <h1>{data?.title || data?.original_name}</h1>
                    <p>{data?.overview}</p>
                    <div className="banner-reating">
                        <StarFilledIcon className='star' />
                        <p>{`${Math.ceil(data?.vote_average)} / 10`}</p>
                    </div>
                    
                </div>
            </Link>
        </div>
    )
}

export default MovieBanner
