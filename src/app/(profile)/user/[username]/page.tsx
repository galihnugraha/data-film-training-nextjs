import { satellite } from '@services/satellite'
import Image from 'next/image'
import React from 'react'

type UsernameType = {
  params: {
    username: string
  }
}

export const generateMetadata = ({
  params: {username}
}: UsernameType) => {
  return {title: `User ${username}`}
}

const getGithubUser = async (username: string) => {
  return satellite.get("https://api.github.com/users/" + username, {
    headers: {
      // Authorization: "BEARERBearer SOMECHARTHEN->a9OA"
    }
  })
    .then(res => {
      console.log("RESPONSE USER :", res.data)
      return res.data
    })
    .catch(err => console.log("RESPONSE USER ERROR :", err))
}

export default async function User({params: {username}}: Readonly<UsernameType>) {

  const githubUser = await getGithubUser(username)

  return (
    <div className="flex min-h-screen justify-center items-center">
      <div className='border bg-white rounded-2xl p-5'>
        <h1 className='text-3xl'>user detail : {username}</h1>
        
        <div className='border-t-2'>
          <Image src={githubUser?.avatar_url} alt={githubUser?.name} width={200} height={200} />
          <p>Name : {githubUser?.name}</p>
          <p>Bio : {githubUser?.bio}</p>
          <p>Email : {githubUser?.email}</p>
          <p>Location : {githubUser?.location}</p>
        </div>
      </div>
    </div>
  )
}