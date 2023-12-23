import { Text } from '@/components/atoms/Text';
import { motion } from 'framer-motion';
import { StarIcon } from 'lucide-react';

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
            onClick={() => window.open(html_url, '_blank')}
            whileHover={{
                scale: 0.95,
                cursor: 'pointer',
                opacity: 0.8,
                transition: { duration: 0.2 },
            }}
            className="flex flex-col h-[180px] relative w-full! bg-white justify-between gap-3 py-8 px-5 rounded-md transition-all ease-in-out delay-100 bg-next-gif bg-contain bg-no-repeat bg-center"
        >
            <Text
                size="lg"
                forceBold
                className="text-purple-800 top-1 left-3 absolute"
                text={index.toString().padStart(2, '0')}
            />

            <div className="absolute right-3 top-2 flex">
                {Array.from({ length: stargazers_count }).map((_, i) => (
                    <StarIcon fill="#fff000" key={i} />
                ))}
            </div>

            <Text
                size="lg"
                forceBold
                className="text-purple-800 bottom-0 absolute left-1/2 text-center text-ellipsis overflow-hidden transform -translate-x-1/2 w-4/5 md:whitespace-nowrap"
                text={name}
            />
        </motion.div>
    );
};
