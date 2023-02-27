import Image from 'next/image';
import React from 'react'

import { FiPhoneCall } from "react-icons/fi";
import majd  from '../media/majd.jpg';

type Props = {}

function Hero({}: Props) {
  return (
    <div className='bg-blue rounded-[3rem] grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2'>
        <div className='grid grid-rows-5 items-center gap-12 p-6 pb-10 xl:p-16 2xl:pr-10 text-center lg:text-left'>
            <h1 className='row-span-3 text-6xl'>Votre sourire est notre priorite</h1>
            <div className='row-span-2 space-y-10'>
                <h2 className='text-slate-600'>Vous aurez toutes les bonnes raisons de venir chez nous.</h2>
                <div className='grid grid-cols-2 items-center text-xs'>
                    <div>
                        <button className='text-white bg-purple rounded-2xl px-8 py-5 lg:px-6 lg:py-3 xl:py-5 2xl:px-12 text-sm'>
                            On Vous Rappelle ?
                        </button>
                    </div>
                    <button className='flex items-center'>
                        <div className='bg-white/30 p-2 w-fit rounded-xl'>
                            <div className='bg-white p-3 w-fit rounded-xl'>
                                <FiPhoneCall className='text-purple text-lg'/>
                            </div>
                        </div>
                        <div className='grid grid-rows-2 text-left gap-2'>
                            <span className='uppercase text-purple'>dental 24h emergency</span>
                            <span>07 74 76 78 32</span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
        
        <div className='bg-hero-image flex rounded-t-2xl lg:rounded-r-[3rem] lg:rounded-l-none bg-top lg:bg-center row-start-1 lg:col-start-2'>
            <div className='self-end bg-slate-100 rounded-2xl p-2 flex text-xs items-center gap-4 pr-20 mb-12 ml-4'>
                <div className='relative w-fit'>
                    <Image src={majd} width={64} height={64} alt="majd" className='rounded-2xl'/>
                    <div className='bg-green-600 rounded-full w-3 h-3 absolute right-0 bottom-0'></div>
                </div>
                <div className='capitalize flex flex-col gap-2'>
                    <span className=''>dr. majd zade</span>
                    <span className='text-slate-500'>consultant</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero