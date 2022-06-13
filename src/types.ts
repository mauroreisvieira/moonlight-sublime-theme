import { SchemeSetting } from '@meetio/scheme-generator';

export interface IScheme extends Omit<SchemeSetting, 'colors'> {
    name: string;
    author: string;
    colors: {
        base: {
            teal: string;
        }
    } & SchemeSetting['colors']
}
