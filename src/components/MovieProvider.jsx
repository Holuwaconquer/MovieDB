import React, { useState } from 'react'
import axios from 'axios'
import { MovieContext } from '../MovieContext'

const MovieProvider = ({ children }) => {
    const api_url = import.meta.env.VITE_API_URL
    const api_key = import.meta.env.VITE_API_KEY

    const [allMovies, setallMovies] = useState([])

    const fetchMovies = async () => {
        try{
            const response = await axios.get(`${api_url}?api_key=${api_key}&page=2`);
            // console.log(response.data);
            // console.log(response.data.total_pages);
            // console.log(response.data.page);
            
            for(let i = 1; i <= response.data.total_pages; i++){
                const response = await axios.get(`${api_url}?api_key=${api_key}&page=${i}`);
                // console.log(response.data);
                setallMovies(prevMovies => [...prevMovies, ...response.data.results])
                console.log(allMovies);
            }

        }catch(error){
            console.log(error);
        }
    }

    fetchMovies()

  return (
    <MovieContext.Provider value={{ allMovies }}>
        {children}
    </MovieContext.Provider>
  )
}

export default MovieProvider