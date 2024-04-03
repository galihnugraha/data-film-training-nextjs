'use client'
import React, { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { satellite } from "@services/satellite"
import Image from "next/image"
import ICONS from "@assets/icons"
import Link from "next/link"
import { APIThemoviedb } from "@interfaces/apiTheMoviedb"

export default function Home() {
  const [search, setSearch] = useState<string>('')

  const { isPending, error, data } = useQuery({
    queryKey: ['themoviedbSearch', {search}],
    queryFn: () =>
      satellite.get('https://api.themoviedb.org/3/search/movie?query=' + search, {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`
        }
      })
        .then(res => {
          console.log("RESPONSE SEARCH MOVIE :", res.data)
          return res.data.results
        })
        .catch(err => {
          console.log("RESPONSE SEARCH MOVIE ERROR :", err)
          return err
        }),
    enabled: !!search
  })

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const submitValue = event.currentTarget[0] as HTMLInputElement
    console.log(submitValue.value)
    setSearch(submitValue.value)
  }

  return (
    <div className="min-h-screen grow p-6">
      <div className="flex w-full justify-between text-[#757575]">
        <p>Home</p>
        <p className="font-bold">Berijalan Member of Astra</p>
      </div>

      <div className="mt-8 h-[363px] w-full rounded-lg bg-white px-5 py-6">
        <div className="h-full w-full rounded-lg bg-[#F5F5F5]"></div>
      </div>

      {/* search movie */}
      <form onSubmit={onSubmit} className='flex items-center w-full mt-10 px-6 py-3'>
        <input type="text" placeholder='Search Movie' className='rounded-xl px-7 py-2 flex-1'/>
        <button type='submit' className='bg-[#BFF4FD] px-7 py-2 ml-4 rounded-xl'><ICONS.IconSearch/></button>
      </form>

      <div className="mt-7 h-fit w-full rounded-lg bg-white p-7">
        <div className="grid grid-cols-3 gap-10">
          {error && <h1>Error</h1>}
          {isPending ? (
            <>
              <div className="h-80 rounded-lg bg-[#F5F5F5] p-5"></div>
              <div className="h-80 rounded-lg bg-[#F5F5F5] p-5"></div>
              <div className="h-80 rounded-lg bg-[#F5F5F5] p-5"></div>
            </>
            ) : ''
          }
          

          {data?.map((movie: APIThemoviedb) => (
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
