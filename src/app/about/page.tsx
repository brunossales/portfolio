'use client';

import Image from 'next/image';
import nextImagePng from '../../../public/next.png';
import reactImagePng from '../../../public/react.png';
import androidImagePng from '../../../public/android.png';
import { useFindUserDataHook } from '@/hooks/find-user-data.hook';
import { User } from 'lucide-react';
import { useMemo } from 'react';
import { Text } from '@/components/atoms/Text';

export default function About() {
    const { data: dataUser } = useFindUserDataHook();

    const avatarUrl = useMemo(() => {
        return dataUser?.avatar_url;
    }, [dataUser]);

    return (
        <div className="flex flex-col items-start p-10 gap-5 w-2/3">
            <div className="flex items-center justify-center gap-3">
                <Text size='4xl' variant='primary' forceBold text='SOBRE MIM' />

                {avatarUrl ? (
                    <Image
                        src={avatarUrl}
                        alt="Bruno Sales picture"
                        width={50}
                        height={50}
                        className="rounded-full"
                    />
                ) : (
                    <User color="white" size={50} />
                )}
            </div>

            <Text variant='secondary' forceBold size='2xl' text='Me considero uma pessoa sociável.' />

            <Text
                variant='tertiary'
                forceBold
                size='2xl'
                text='Amo trabalhar com tecnologia, não tenho tecnologia específica,
                sempre estou aberto para novos desafios. Mas meus maiores foco
                de conhecimento e gosto são em React Native e Next.JS, junto com
                o React.'
            />


            <div className="flex w-full items-center gap-5 pt-5">
                <div className="min-h-[50px] w-fit bg-white p-2 rounded-md flex items-center">
                    <Image
                        src={nextImagePng}
                        alt="Bruno Sales"
                        width={30}
                        height={30}
                    />
                </div>
                <div className="min-h-[50px] w-fit bg-white p-2 rounded-md flex items-center">
                    <Image
                        src={reactImagePng}
                        alt="Bruno Sales"
                        width={30}
                        height={30}
                    />
                </div>
                <div className="min-h-[50px] w-fit bg-white p-2 rounded-md flex items-center">
                    <Image
                        src={androidImagePng}
                        alt="Bruno Sales"
                        width={30}
                        height={30}
                    />
                </div>
            </div>
        </div>
    );
}
