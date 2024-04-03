import ContainerProvider from '@components/organisms/ContainerProvider';
import Menu from '@components/moleculs/Menu';
import React from 'react'

export default function Container({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='flex flex-row bg-[#F5F5F5] min-h-screen'>
      <ContainerProvider>
        <Menu />
        <div className='flex-1'>
          {children}
        </div>
      </ContainerProvider>
    </div>
  )
}
