import { motion } from 'framer-motion';
import Link from 'next/link';

type CardProjectProps = {
    name: string;
    stargazers_count: number;
    html_url: string;
    index: number;
};

export const CardProject: React.FC<CardProjectProps> = ({
    name,
    stargazers_count,
    html_url,
    index,
}) => {
    return (
        <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 0.95, cursor: 'pointer' }}
            className="flex flex-col items-center justify-center gap-3 py-5 bg-cyan-100 rounded-md transition-all ease-in-out delay-100"
        >
            <h1 className="text-lg font-bold text-custom-purple">
                Projeto: {index}
            </h1>
            <h1 className="text-lg font-bold text-custom-purple">
                Nome: {name}
            </h1>
            <h1 className="text-lg font-bold text-custom-purple">
                Favoritos: {stargazers_count}
            </h1>
            <Link
                href={html_url}
                target="_blank"
                className="text-lg font-bold text-custom-purple underline decoration-solid hover:text-cyan-600 transition-all ease-in-out delay-100"
            >
                Link para o Projeto
            </Link>
        </motion.div>
    );
};
