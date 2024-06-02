import React from 'react'

function OptionSelect({ switchSelected, selected }) {
    return (
        <div className="select-wrapper">
            <button
                className="btn"
                onClick={() => switchSelected('tv')}
                style={selected === 'tv' ? { backgroundColor: 'blue' } : {}}>
                TV Shows
            </button>
            
            <button className="btn"
                onClick={() => switchSelected('movie')}
                style={selected === 'movie' ? { backgroundColor: 'blue' } : {}}>Movies
            </button>
        </div>
    )
}

export default OptionSelect
