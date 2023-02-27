import Image, { StaticImageData } from 'next/image'
import React from 'react'

type Props = {
    name: string,
    desc: string,
    color: string,
    img: StaticImageData,
}

function Card({name, desc, color, img}: Props) {
  return (
    <div className='flex flex-col rounded-3xl border p-3 gap-3 flex-shrink'>
        <div className={`flex p-4 bg-${color} rounded-2xl aspect-square w-full justify-center items-center`}>
            <div className='bg-white/25 p-3 rounded-3xl border-t border-l border-white/50'>
                <div className='bg-white p-4 rounded-2xl w-fit mx-auto'>
                    <Image src={img} alt="icon" width={32} height={32} className="text-purple h-8 w-auto"/>
                </div>
            </div>
        </div>
        <span className='text-lg flex-grow text-center'>{name}</span>
        <span className='text-slate-500 self-center text-center'>{desc}</span>
    </div>
  )
}

export default Card