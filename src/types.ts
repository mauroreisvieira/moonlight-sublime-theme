import { IColors, IRules } from '@meetio/scheme-generator';

export interface IScheme {
    name: string;
    author: string;
    variables: { teal: string } & IColors;
    customRules: IRules[];
}
