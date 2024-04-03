'use client'
import SearchBar from '@components/atoms/SearchBar'
import { satellite } from '@services/satellite'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

interface APIGithub {
  id: number
  login: string
  avatar_url: string
  [key: string]: any
}

export default function SearchUsers() {
  const [search, setSearch] = useState<string>('')

  const { isPending, error, data } = useQuery({
    queryKey: ['githubSearch', {search}],
    queryFn: () =>
      satellite.get('https://api.github.com/search/users?q=' + search, {
        headers: {
          // Authorization: "BEARERBearer SOMECHARTHEN->a9OA"
        }
      })
        .then(res => {
          console.log("RESPONSE SEARCH USER :", res.data)
          return res.data
        })
        .catch(err => {
          console.log("RESPONSE SEARCH USER ERROR :", err)
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
    <div className='flex-1'>
      <SearchBar onSubmit={onSubmit}/>
      
      <div className='mt-4 px-4'>
        {isPending && <h1>Loading...</h1>}
        {error && <h1>Error</h1>}
        
        {data?.items.map((user: APIGithub) => (
          <Link href={`/user/${user.login}`} key={user.id} className='w-full bg-white rounded-xl p-4 my-2 flex flex-row'>
            <Image src={user.avatar_url} alt={user.login} width={100} height={100} 
            className='rounded-xl'/>

            <p className='ml-4 text-lg'>{user.login}</p>
          </Link>
        ))}

      </div>
    </div>
  )
}
