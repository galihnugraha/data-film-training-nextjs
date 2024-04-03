import { satellite } from '@services/satellite'
import Image from 'next/image'
import React from 'react'

type MovieDetailType = {
  params: {
    id: string
  }
}

export const generateMetadata = () => {
  return {title: "Movie Detail"}
}

const getMovieDetail = async (id: string) => {
  return satellite.get("https://api.themoviedb.org/3/movie/" + id, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`
    }
  })
    .then(res => {
      console.log("RESPONSE MOVIE DETAIL :", res.data)
      return res.data
    })
    .catch(err => console.log("RESPONSE MOVIE DETAIL ERROR :", err))
}

export default async function MovieDetail({params: {id}}: Readonly<MovieDetailType>) {

  const movie = await getMovieDetail(id)

  return (
    <div className="flex min-h-screen justify-center items-center">
      <div className='w-3/4 my-10 border bg-white rounded-2xl p-5'>
        <h1 className='text-3xl'>{movie?.original_title}</h1>
        
        <div className='border-t-2'>
          <Image 
            src={"https://image.tmdb.org/t/p/original" + movie?.poster_path} 
            alt={movie?.original_title} 
            width={200} height={200} 
            className='mt-5'
          />
          <p className='mt-5'>Release Date : {movie?.release_date}</p>
          <p>Duration : {movie?.runtime} minutes</p>
          <p>Popularity : {movie?.popularity}</p>
          <p>Overview : {movie?.overview}</p>
          <p className='mt-5'>Rating : {movie?.vote_average}</p>
        </div>
      </div>
    </div>
  )
}