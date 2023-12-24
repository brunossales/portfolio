import { Repository } from '@/dto/repository';
import { findRepos } from '@/service/find-projects';
import { plainToInstance } from 'class-transformer';
import { useQuery } from 'react-query';

export const useFindProjectsDataHook = () => {
    const { data, isLoading } = useQuery({
        queryKey: ['find-repos'],
        staleTime: 1000 * 60 * 1, // 1 minutes,
        queryFn: async () => {
            const response = await findRepos();
            return plainToInstance(
                Repository, 
                response.sort(
                    (a, b) => { 
                        return new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
                    })
                );
        },
    });
    return {
        data,
        isLoading,
    };
};
