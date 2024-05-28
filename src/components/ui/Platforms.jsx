import React from 'react'
import companys from '../../assets/platforms.svg'

function Platforms() {
    return (
        <div className='platforms'>
            <div className="row">
                <p>Movies and shows from 50+ platforms </p>
                <img src={companys} alt="" />
            </div>
        </div>
    )
}

export default Platforms
