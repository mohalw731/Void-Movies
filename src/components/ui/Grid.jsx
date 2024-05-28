import React from 'react'
import search from '../../assets/search.gif'
import { ReactTyped } from 'react-typed'

function Grid() {
    return (
        <div className="row">
            <div className='grids'>
                <div className="blue-shadow blue-shadow-grid"></div>
                <SearchgridUI />
                <div className="grid-half__wrapper">
                    <GenregridUI />
                    <SavegridUI />
                </div>
            </div>
        </div>
    )
}

function SearchgridUI() {

    const movieNamesList = ["Harry potter", 'Good girls', 'Stranger things', 'Wonka', 'Spiderman', 'Batman']

    return (
        <div className="search-grid">
            <div className="container">

                <div className="info-grid_text">
                    <h2>
                        Search the latest <br />Movies & Shows
                    </h2>
                    <p>Search for the latest movies <br /> and shows from various <br />platforms.</p>
                </div>
                <div className="search-grid__bar">
                    <p><ReactTyped strings={movieNamesList} typeSpeed={150} loop /></p>

                </div>
                <div className="end"></div>
            </div>
        </div>
    )
}

function GenregridUI() {
    return (
        <div className="search-grid half-grid">

            <div className="info-grid_text">
                <h2>
                    Filter movies & <br />shows by genre.

                </h2>
                <p>Discover the latest movies and <br />shows from every genre.</p>

            </div>
{/* 
            <div className="genres">
                <p className="genre">Crime</p>
                <p className="genre">Drama</p>
                <p className="genre">Fantasy</p>
                <p className="genre">Action</p>
                <p className="genre">Thriller</p>
            </div> */}
        </div>
    )
}

function SavegridUI() {
    return (
        <div className="search-grid half-grid">

            <div className="info-grid_text">
                <h2>
                    Save your <br />
                    movies & shows
                </h2>
                <p>Save your favorite movies and <br />shows to watch anytime.</p>
            </div>
{/* 
<div className="save-grid-ui">
   <span>+</span>
</div> */}

        </div>
    )
}

export default Grid
