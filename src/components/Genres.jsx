import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useState } from 'react'
import Card from './ui/Card'

function Genres({ selected }) {
        const [selectedGenre, setSelectedGenre] = useState('')

    function getGenres() {
        const { data } = useQuery({
            queryKey: ['genres', selected],
            queryFn: async () => await axios.get(`https://api.themoviedb.org/3/genre/${selected}/list?api_key=04bf768048c1a3faae7a9805b4bb26a6&language=en-US`)
        })

        const genres = data?.data?.genres
        return { genres }
    }


    function getGenresResults() {
        const { data } = useQuery({
            queryKey: ['genresResult', selected, selectedGenre],
            queryFn: async () => await axios.get(`https://api.themoviedb.org/3/discover/${selected}?api_key=04bf768048c1a3faae7a9805b4bb26a6&with_genres=${selectedGenre}&language=en-US&sort_by=popularity.desc`)
        })

        const genresResults = data?.data?.results
        return { genresResults }
    }

    const { genres } = getGenres()
    const { genresResults } = getGenresResults()

    const handleChange = (event) => {
        setSelectedGenre(event.target.value)
    }
    console.log(genresResults)

    return (
        <>
        <div className='genres-container'>
            <select onChange={handleChange} value={selectedGenre}>
                <option value=''>Select a genre</option>
                {genres?.map(data =>
                    <option
                        key={data.id}
                        value={data.id}>
                        {data.name}
                    </option>
                )}
            </select>
        </div>

        {selectedGenre && genresResults && (
          <div className="searched-movies__container">
           {
             genresResults.map(data =>
                <Card key={data.id} data={data} />)
           }
          </div>
        )}
    </>
    )
}

export default Genres
