import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

function useFetchPopular({selected}) {
    const { data, isLoading } = useQuery({
        queryKey: ['popularMovies', selected],
        queryFn: async () => await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=04bf768048c1a3faae7a9805b4bb26a6&language=en-US&page=1&region=US
        `)
      })
    
      const popularMovie = data?.data?.results

      return{data, isLoading, popularMovie}
}

export default useFetchPopular
