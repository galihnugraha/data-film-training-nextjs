import React from 'react'
import SearchUsers from '@components/moleculs/SearchUsers'

export const metadata = {
  title: 'User'
}

export default function User() {

  return (
    <div className="flex">
      <SearchUsers/>
    </div>
  )
}
