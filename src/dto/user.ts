import { Expose, Transform } from "class-transformer";

@Expose()
export class User {

    @Transform(({ value }) => value || '')
    avatar_url: string = '';

    @Transform(({ value }) => value || '')
    url: string = '';

    @Transform(({ value }) => value || 'Sem Nome')
    name: string = '';

    @Transform(({ value }) => value || 'Sem Empresa')
    company: string = '';

}