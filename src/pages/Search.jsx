import React, { useState } from 'react'
import Nav from '../components/Nav'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Card from '../components/ui/Card'

function Search() {
    const [searchInput, setSearchInput] = useState('')

    const fetchSearch = () => {
        const { data } = useQuery({
            queryKey: ['search', searchInput],
            queryFn: async () => await axios.get(`https://api.themoviedb.org/3/search/multi?api_key=04bf768048c1a3faae7a9805b4bb26a6&language=en-US&query=${searchInput}&page=1&include_adult=false
            `)
        })
        const dataDetails = data?.data?.results
        return { dataDetails }
    }
    const { dataDetails } = fetchSearch()

    return (
        <div className='row-movie'>
            <Nav className='row-movie' none='none' />
            <main className="search-page">
                <div className="search-box">
                    <div className="search">
                        <input type="text" className="search__input" placeholder="Search" onChange={(e) => setSearchInput(e.target.value)} />
                        <button className="search__button" aria-label="Search">
                            <MagnifyingGlassIcon className='search__icon' />
                        </button>
                    </div>
                </div>
                <div className="searched-movies__container">
                   {!dataDetails?.length && <h2 className='no-search'>Type something to search</h2>}
                           {dataDetails?.map(data => {
                                return <Card data={data} className='search-card' />
                            })}
                </div>
            </main>
        </div>
    )
}

export default Search
