'use client'
import ICONS from '@assets/icons'
import React from 'react'

interface SearchBarProps extends React.HTMLProps<HTMLFormElement> {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

export default function SearchBar({
  onSubmit, ...props
}: Readonly<SearchBarProps>) {
  return (
    <form onSubmit={onSubmit} className='flex items-center w-full mt-10 px-6 py-3' {...props}>
      <input type="text" placeholder='Search user' className='rounded-xl px-7 py-2 flex-1'/>
      <button type='submit' className='bg-[#BFF4FD] px-7 py-2 ml-4 rounded-xl'><ICONS.IconSearch/></button>
    </form>
  )
}
