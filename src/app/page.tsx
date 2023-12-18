import { Text } from '@/components/atoms/Text';
import { IconLink } from '@/components/molecules/IconLink';
import React from 'react';

export default function Home() {
    return (
        <div className="flex flex-col items-start p-10 gap-5 w-2/3">
            <Text size='4xl' forceBold variant='primary' text='BRUNO SALES' />

            <Text size='2xl' variant='secondary' forceBold text='Desenvolvedor Front End e Mobile' />

            <Text
                size='2xl'
                variant='tertiary'
                forceBold
                text='Atualmente trabalho com Next.JS para o desenvolvimento do front
                end, React Query para o cacheamento de dados das requests,
                TailwindCSS para a estilização e JEST para testes unitários e de
                integração'
            />


            <div className="flex flex-col items-start justify-center gap-5 mt-3">
                {/* Using a composite pattern */}
                <IconLink.Container>
                    <IconLink.Icon icon='user' iconProps={{ color: 'cyan' }} />
                    <IconLink.Link
                        label='Social Links'
                        className='underline decoration-solid pt-[3px] hover:text-cyan-300'
                        href='https://brunossales.github.io/social-links/'
                    />
                </IconLink.Container>

                <IconLink.Container>
                    <IconLink.Icon icon='linkedin' iconProps={{ color: 'cyan' }} />
                    <IconLink.Link
                        label='LinkedIn'
                        className='underline decoration-solid pt-[3px] hover:text-cyan-300'
                        href='https://www.linkedin.com/in/bruno-sales-3a5856202/'
                    />
                </IconLink.Container>


                <IconLink.Container>
                    <IconLink.Icon icon='github' iconProps={{ color: 'cyan' }} />
                    <IconLink.Link
                        label='Github'
                        className='underline decoration-solid pt-[3px] hover:text-cyan-300'
                        href='https://github.com/brunossales'
                    />
                </IconLink.Container>

            </div>
        </div>
    );
}
