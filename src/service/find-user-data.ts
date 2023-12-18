'use server';
import { User } from '@/dto/user';
import api from './api';

interface FindUserData {
    (): Promise<User>;
}

export const findUserData: FindUserData = async () => {
    try {
        const response = await api
            .get('/users/brunossales')
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                throw new Error(error);
            });
        return response as User;
    } catch (error) {
        throw new Error('Error on find user data');
    }
};
