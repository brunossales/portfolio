import { Expose, Transform } from 'class-transformer';

@Expose()
export class Repository {
    
    @Transform(({ value }) => value || 'Repositório sem nome')
    name: string = '';

    @Transform(({ value }) => value || '')
    html_url: string = '';

    @Transform(({ value }) => value || 'Sem linguagem definida')
    language: string = '';

    @Transform(({ value }) => value || 0)
    stargazers_count: number = 0;

    @Transform(({ value }) => value || 'Sem descrição')
    description: string = '';

    @Transform(({ value }) => value || '')
    created_at: string = ''
}