// @ts-ignore
import {
    generateScheme,
    ISchemeSetting,
    IColors,
    IRules,
} from '@meetio/scheme-generator';

// common rules for all schemes
import rules from './schemes/index';

interface IScheme {
    name: string;
    author: string;
    variables: IColors;
    customRules: Array<IRules>; // specific rules for each scheme
}

[
    {
        name: 'Moonlight',
        author: 'Mauro Reis Vieira <mauroreisvieira@gmail.com>',
        variables: {
            cursor: '#67d2ff',
            foreground: '#bfcdf4',
            background: '#212339',
            comments: '#637777',
            blue: '#82aaff',
            brown: '#c17e70',
            cyan: '#50c4fa',
            green: '#c3e88d',
            orange: '#ff966c',
            pink: '#fca7ea',
            purple: '#c099ff',
            red: '#ff757f',
            yellow: '#ffc777',
            invalid: '#d46c6c66',
            diffAdded: '#addb67',
            diffModified: '#e2b93d',
            diffDeleted: '#ef5350',
        },
        customRules: [
            {
                name: 'Keyword Operator.',
                scope: [
                    'keyword.operator.module'
                ],
                settings: {
                    foreground: 'var(cyan)'
                },
            },
            {
                name: '[OVERWRITE] - Function declaration',
                scope: [
                    'meta.function entity.name.function', 'meta.export.default meta.function-call entity.name.function'
                ],
                settings: {
                    font_style: 'glow',
                },
            },
            {
                name: '[OVERWRITE] - Function call',
                scope: [
                    'variable.function'
                ],
                settings: {
                    foreground: 'var(cyan)',
                    font_style: 'glow',
                },
            },
        ],
    },
].map((item: IScheme) => {
    const settings: ISchemeSetting = {
        colors: item.variables,
        rules: [...rules, ...item.customRules],
    };
    generateScheme(item.name, item.author, item.name, settings, 'schemes');
});
