'use client'
import React from 'react'
import ICONS from '@assets/icons'
import ListMenu from '@components/atoms/ListMenu';
import BottomMenu from '@components/moleculs/BottomMenu';
import { usePathname } from 'next/navigation';
import { dataMenu } from '@utils/data/dataMenu';
import Link from 'next/link';

export default function Menu() {
  const pathname = usePathname()

  return (
    <div className={`${pathname === "/login" ? "hidden" : "md:mr-60"}`}>
      {/* WEB MENU */}
      <ul className="bg-white h-screen px-3 py-6 w-60 fixed max-md:hidden">
        {/* Profile */}
        <li className="mb-10 m-2 p-3">
          <div className="justify-between flex flex-row items-center w-fit">
            <Link href={"/user"} className="bg-[#789461] w-fit mr-3 p-1 rounded-full justify-between flex flex-row items-center">
              <ICONS.IconUser />
            </Link>
            <p className="text-[#404040]">Biko Maryono</p>
          </div>
        </li>

        {/* Menu items  */}
        {dataMenu.map((item, index) => (
          <ListMenu key={index} index={index} item={item} pathname= {pathname}/>
        ))}

        {/* Logout */}
        <li className="absolute bottom-0 mb-10">
            <div className="flex flex-row justify-between items-center w-48">
                <Link href="/login" className="bg-[#789461] rounded-lg flex flex-row justify-between items-center p-2">
                    <ICONS.IconLogout className="mr-2" />
                    <p className="text-white">Logout</p>
                </Link>
                <button>
                    <ICONS.IconMoon />
                </button>
            </div>
        </li>
      </ul>

      {/* MOBILE MENU */}
      <ul className="md:hidden fixed bottom-0 w-screen bg-white px-2 py-4 grid grid-cols-5">
        {dataMenu.map((item, index) => (
          <BottomMenu key={index} item={item} index={index} pathname={pathname} />
        ))}
      </ul>

    </div>
  )
}
