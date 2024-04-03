import React from 'react'
import { satellite } from '@services/satellite'
import Image from 'next/image'
import { APIThemoviedb } from '@interfaces/apiTheMoviedb'
import Link from 'next/link'

export const metadata = {
    title: 'Popular'
}

const getPopularMovie = async () => {
  return satellite.get("https://api.themoviedb.org/3/movie/popular", {
    headers: {
      Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OGRhZjlmYjA4ZGYzMmY0OTk4YjFiZDgwNThiYmQ4MCIsInN1YiI6IjY1ZTIwZDY3YTgwNjczMDE2MWE5NzExMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pT4ozTB36Fo245mZZ_GnoBlKTqlZVWuAMTpgZyQeccE"
    }
  })
    .then(res => {
      console.log("RESPONSE PUPOULAR MOVIE :", res.data)
      return res.data.results
    })
    .catch(err => console.log("RESPONSE PUPOULAR MOVIE ERROR :", err))
}

export default async function Popular() {
  
  const popular = await getPopularMovie()

  return (
    <div className="min-h-screen grow p-6">
      <div className="h-[80px] w-full rounded-lg bg-white px-5 py-6 justify-center items-center">
          <h3 className='text-center text-3xl'>Popular Movies</h3>
      </div>

      <div className="mt-7 h-fit w-full rounded-lg bg-white p-7">
        <div className="grid grid-cols-3 gap-10">
          {popular?.map((movie: APIThemoviedb) => (
            <Link key={movie.id} href={'/movie/' + movie.id} className="h-80 rounded-lg bg-[#F5F5F5] p-5">
              <Image src={"https://image.tmdb.org/t/p/original" + movie.poster_path} alt={movie.original_title} width={100} height={100} />
              <h3 className="mt-3 font-bold">{movie.original_title}</h3>
              <p className="mt-3">{movie.release_date}</p>
              <p className="mt-3">Popularity : {movie.popularity}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>

  )
}
