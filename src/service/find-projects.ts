'use server';
import api from './api';

export interface Repository {
    name: string;
    html_url: string;
    language: string;
    stargazers_count: number;
}

interface FindProjectsData {
    (): Promise<Repository[]>;
}

export const findRepos: FindProjectsData = async () => {
    try {
        const response = await api
            .get('/users/brunossales/repos')
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                throw new Error(error);
            });
        return response as Repository[];
    } catch (error) {
        throw new Error('Error on find user data');
    }
};
