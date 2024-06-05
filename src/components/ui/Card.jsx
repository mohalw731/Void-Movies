import { PlusIcon } from '@radix-ui/react-icons'
import React from 'react'
import { Link } from 'react-router-dom'

function Card({ data, className }) {

    const defaultPic = 'https://via.placeholder.com/300x450?text=No+Image+Available'; // Fallback image URL
    const pic = data?.poster_path ? `https://image.tmdb.org/t/p/original/${data.poster_path}` : defaultPic;

    return (
        <Link to={`/details/${data?.id}`}>
            <div className={`card ${className}`} key={data?.id}>
                <img src={pic} alt="" />
            </div>
        </Link>
    )
}

export default Card
