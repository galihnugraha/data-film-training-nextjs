import Link from 'next/link';
import React, { useState } from 'react'
import { MenuData } from "@interfaces/menuInterfaces";

export default function ListMenu({
  item, index, pathname
}: Readonly<{
  item: MenuData, index: number, pathname: string
}>) {
  const [isHover, setIsHover] = useState<{[key: string]: boolean}>({
    'Home': false,
    'Popular': false,
    'Now Playing': false,
    'Top Rated': false,
    'Upcoming': false,
  });

  const handleHover = (key: string) => {
    setIsHover({
      'Home': false,
      'Popular': false,
      'Now Playing': false,
      'Top Rated': false,
      'Upcoming': false,
      [key]: true 
    })
  }

  return (
    <Link
      key={index}
      href={item.path}
      onMouseEnter={() => handleHover(item.name)}
      onMouseLeave={() => setIsHover({ ...isHover, [item.name]: false })}
      className={
        `flex min-w-32 my-3 p-1 rounded-md cursor-pointer ${isHover[item.name] || pathname === item.path ? 'bg-[#F8EDFA]' : ''}`
      }
    >
      <li className="flex gap-2 justify-center items-center font-bold">
        <item.icon color={isHover[item.name] || pathname === item.path ? "#789461" : "#404040"} />
        <p className={`ml-3 ${ isHover[item.name] || pathname === item.path ? "text-[#789461]" : "text-[#404040]" }`}>{item.name}</p>
      </li>
    </Link>
  )
}
