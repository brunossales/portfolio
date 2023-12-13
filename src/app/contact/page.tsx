'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useCallback } from 'react';
import clsx from 'clsx';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const schema = z.object({
    nome: z.string().min(2).max(50),
    email: z.string().email(),
    mensagem: z.string().min(10).max(500),
});

interface FormValues {
    nome: string;
    email: string;
    mensagem: string;
}

export default function Contact() {
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>({
        resolver: zodResolver(schema),
    });

    const onSubmit: SubmitHandler<FormValues> = useCallback(
        (data) => {
            const templateParams = {
                from_name: data.nome,
                message: data.mensagem,
                email: data.email,
            };

            emailjs
                .send(
                    process.env.NEXT_PUBLIC_SETVICE_EMAIL_ID!,
                    process.env.NEXT_PUBLIC_TEMPLATE_ID!,
                    templateParams,
                    process.env.NEXT_PUBLIC_KEY!
                )
                .then(() => {
                    reset();
                    toast.success('Email enviado com sucesso!');
                })
                .catch(() => {
                    toast.error('Erro ao enviar o email!');
                });
        },
        [reset]
    );

    return (
        <div className="w-full flex flex-col items-center justify-center --font-poppins">
            <Toaster />
            <h1 className="text-2xl text-cyan-200 font-bold pt-5">
                ENTRE EM CONTATO COMIGO
            </h1>
            <form
                className="w-full flex flex-col items-center justify-center"
                onSubmit={handleSubmit(onSubmit)}
            >
                <input
                    {...register('nome')}
                    className={clsx(
                        'w-1/2 h-12 rounded-md border-2 border-solid border-cyan-200 mt-5 px-5 outline-none',
                        { 'border-red-500': !!errors?.nome }
                    )}
                    type="text"
                    placeholder="Nome"
                />
                {errors.nome && (
                    <p className="text-red-500">
                        O nome não é valido, digite no minimo 2 caracteres e no máximo 50
                    </p>
                )}

                <input
                    {...register('email')}
                    className={clsx(
                        'w-1/2 h-12 rounded-md border-2 border-solid border-cyan-200 mt-5 px-5 outline-none',
                        { 'border-red-500': !!errors?.email }
                    )}
                    type="text"
                    placeholder="Email"
                />
                {errors.email && (
                    <p className="text-red-500">
                        Por favor, digite um e-email válido
                    </p>
                )}

                <textarea
                    {...register('mensagem')}
                    className={clsx(
                        'w-1/2 h-16 rounded-md border-2 border-solid border-cyan-200 mt-5 px-5 outline-none',
                        { 'border-red-500': !!errors?.mensagem }
                    )}
                    placeholder="Mensagem"
                />
                {errors.mensagem && (
                    <p className="text-red-500">
                        Por favor, digíte no minimo 10 palavras
                    </p>
                )}

                <button
                    type="submit"
                    className="w-1/2 h-14 rounded-md border-2 border-solid border-cyan-200 mt-5 px-5 outline-none bg-cyan-400 text-white font-bold transition-all ease-in-out delay-150 hover:bg-cyan-200"
                >
                    Enviar
                </button>
            </form>
        </div>
    );
}
