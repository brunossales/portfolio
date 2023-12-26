'use client';

import { Text } from '@/components/atoms/Text';
import emailjs from '@emailjs/browser';
import { zodResolver } from '@hookform/resolvers/zod';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useCallback } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { z } from 'zod';

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
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full flex flex-col items-center justify-center --font-poppins"
        >
            <Toaster />

            <Text
                variant="primary"
                forceBold
                size="2xl"
                text="ENTRE EM CONTATO COMIGO"
                className="pt-5"
            />

            <form
                className="w-full flex flex-col items-center justify-center"
                onSubmit={handleSubmit(onSubmit)}
            >
                <input
                    {...register('nome')}
                    className={clsx(
                        'w-1/2 h-12 rounded-md border-[3px] border-solid border-cyan-200 mt-5 px-5 outline-none focus:border-yellow-200',
                        { 'border-red-500': !!errors?.nome }
                    )}
                    type="text"
                    placeholder="Nome"
                />
                {errors.nome && (
                    <Text
                        variant="error"
                        text=" O nome não é valido, digite no minimo 2 letras e no máximo 50"
                    />
                )}

                <input
                    {...register('email')}
                    className={clsx(
                        'w-1/2 h-12 rounded-md border-2 border-solid border-cyan-200 mt-5 px-5 outline-none focus:border-yellow-200',
                        { 'border-red-500': !!errors?.email }
                    )}
                    type="text"
                    placeholder="Email"
                />
                {errors.email && (
                    <Text
                        variant="error"
                        text="O email não é valido, digite um email valido"
                    />
                )}

                <textarea
                    {...register('mensagem')}
                    className={clsx(
                        'w-1/2 h-16 rounded-md border-2 border-solid border-cyan-200 mt-5 px-5 py-2 outline-none focus:border-yellow-200',
                        { 'border-red-500': !!errors?.mensagem }
                    )}
                    placeholder="Mensagem"
                />
                {errors.mensagem && (
                    <Text
                        variant="error"
                        text="Por favor, digíte no minimo 10 letras"
                    />
                )}

                <button
                    type="submit"
                    className="w-1/2 h-14 rounded-md border-2 border-solid border-cyan-200 mt-5 px-5 outline-none bg-cyan-400 text-white font-bold transition-all ease-in-out delay-150 hover:bg-cyan-200"
                >
                    Enviar
                </button>
            </form>
        </motion.div>
    );
}
