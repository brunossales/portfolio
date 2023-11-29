import { Linkedin, Github, User } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div className='flex flex-col items-start p-10 gap-5 w-2/3'>
      <h1 className='text-4xl font-bold text-custom-purple text-cyan-200'>BRUNO SALES</h1>
      <h2 className='text-2xl font-bold text-custom-purple text-purple-200'>Desenvolvedor Front End e Mobile.</h2>
      <h3 className='text-2xl font-bold text-custom-purple text-purple-100'>
        Atualmente trabalho com Next.JS para o desenvolvimento do front end, React Query para o cacheamento de
        dados das requests, TailwindCSS para a estilização e JEST para testes unitários e de integração.
      </h3>

      <div className="flex flex-col items-start justify-center gap-5 mt-3">
        <div className="flex gap-2 text-white">
          <User color="cyan" />
          <Link className="underline decoration-solid pt-[3px]" href={'https://brunossales.github.io/social-links/'} target="_blank">Social Links</Link>
        </div>
        <div className="flex gap-2 text-white">
          <Linkedin color="cyan" />
          <Link className="underline decoration-solid pt-[3px]" href={'https://www.linkedin.com/in/bruno-sales-3a5856202/'} target="_blank">LinkedIn</Link>
        </div>
        <div className="flex gap-2 text-white">
          <Github color="cyan" />
          <Link className="underline decoration-solid pt-[3px]" href={'https://github.com/brunossales'} target="_blank">GitHub</Link>
        </div>
      </div>

    </div>
  )
}
