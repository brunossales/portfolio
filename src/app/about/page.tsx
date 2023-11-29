"use client"

import Image from 'next/image'
import nextImagePng from '../../../public/next.png'
import reactImagePng from '../../../public/react.png'
import androidImagePng from '../../../public/android.png'
import { useFindUserDataHook } from '@/hooks/find-user-data.hook'
import { User } from 'lucide-react'
import { useMemo } from 'react'

export default function About() {
    const { data: dataUser } = useFindUserDataHook()

    const avatarUrl = useMemo(() => {
        return dataUser?.avatar_url
    }, [dataUser])

    return (
        <div className='flex flex-col items-start p-10 gap-5 w-2/3'>
            <div className='flex items-center justify-center gap-3'>
                <h1 className='text-4xl font-bold text-custom-purple text-cyan-200'>SOBRE MIM</h1>
                {avatarUrl ? (<img src={avatarUrl} alt="Bruno Sales" width={50} height={50} className='rounded-full' />) : (<User color='white' size={50} />)}
            </div>
            <h2 className='text-2xl font-bold text-custom-purple text-purple-200'>Me considero uma pessoa sociável.</h2>
            <h3 className='text-2xl font-bold text-custom-purple text-purple-100'>
                Amo trabalhar com tecnologia, não tenho tecnologia específica, sempre estou aberto para novos desafios.
                Mas meus maiores foco de conhecimento e gosto são em React Native e Next.JS, junto com o React.
            </h3>

            <div className="flex w-full items-center gap-5 pt-5">
                <div className='min-h-[50px] w-fit bg-white p-2 rounded-md flex items-center'>
                    <Image src={nextImagePng} alt="Bruno Sales" width={30} height={30} />
                </div>
                <div className='min-h-[50px] w-fit bg-white p-2 rounded-md flex items-center'>
                    <Image src={reactImagePng} alt="Bruno Sales" width={30} height={30} />
                </div>
                <div className='min-h-[50px] w-fit bg-white p-2 rounded-md flex items-center'>
                    <Image src={androidImagePng} alt="Bruno Sales" width={30} height={30} />
                </div>
            </div>
        </div>
    )
};