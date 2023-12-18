import { User } from '@/dto/user';
import { findUserData } from '@/service/find-user-data';
import { plainToInstance } from 'class-transformer';
import { useQuery } from 'react-query';

export const useFindUserDataHook = () => {
    const { data, isLoading } = useQuery({
        queryKey: ['find-data-user'],
        staleTime: 1000 * 60 * 1, // 1 minutes,
        queryFn: async () => {
            const response = await findUserData();
            return plainToInstance(User, response);
        },
    });
    return {
        data,
        isLoading,
    };
};
