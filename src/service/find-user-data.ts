'use server';
import api from './api';

export interface User {
    avatar_url: string;
    url: string;
    name: string;
    company: string;
}

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
        return response;
    } catch (error) {
        throw new Error('Error on find user data');
    }
};
