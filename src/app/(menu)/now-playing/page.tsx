import React from 'react'
import { satellite } from '@services/satellite'
import Image from 'next/image'
import { APIThemoviedb } from '@interfaces/apiTheMoviedb'
import Link from 'next/link'

export const metadata = {
    title: 'Now Playing'
}

const getNowPlayingMovie = async () => {
  return satellite.get("https://api.themoviedb.org/3/movie/now_playing", {
    headers: {
      Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OGRhZjlmYjA4ZGYzMmY0OTk4YjFiZDgwNThiYmQ4MCIsInN1YiI6IjY1ZTIwZDY3YTgwNjczMDE2MWE5NzExMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pT4ozTB36Fo245mZZ_GnoBlKTqlZVWuAMTpgZyQeccE"
    }
  })
    .then(res => {
      console.log("RESPONSE NOW PLAYING MOVIE :", res.data)
      return res.data
    })
    .catch(err => console.log("RESPONSE NOW PLAYING MOVIE ERROR :", err))
}

export default async function NowPlaying() {
  
  const nowPlaying = await getNowPlayingMovie()

  return (
    <div className="min-h-screen grow p-6">
      <div className="h-[110px] w-full rounded-lg bg-white px-5 py-6 justify-center items-center">
          <h3 className='text-center text-3xl'>Now Playing Movie</h3>
          <p className='text-center'>{nowPlaying.dates.minimum} until {nowPlaying.dates.maximum}</p>
      </div>

      <div className="mt-7 h-fit w-full rounded-lg bg-white p-7">
        <div className="grid grid-cols-3 gap-10">
          {nowPlaying?.results.map((movie: APIThemoviedb) => (
            <Link key={movie.id} href={'/movie/' + movie.id} className="h-80 rounded-lg bg-[#F5F5F5] p-5">
              <Image src={"https://image.tmdb.org/t/p/original" + movie.poster_path} alt={movie.original_title} width={100} height={100} />
              <h3 className="mt-3 font-bold">{movie.original_title}</h3>
              <p className="mt-3">{movie.release_date}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>

  )
}
