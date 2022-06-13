import { IScheme } from './types';

import rules from './schemes/index';

export const scheme: IScheme = {
    name: 'Moonlight',
    author: 'Mauro Reis Vieira <mauroreisvieira@gmail.com>',
    variables: {
        cursor: '#67d2ff',
        foreground: '#bfcdf4',
        background: '#212339',
        comments: '#637777',
        blue: '#82aaff',
        brown: '#c17e70',
        teal: '#34d3fb',
        cyan: '#b4f9f8',
        green: '#c3e88d',
        orange: '#ff966c',
        pink: '#fca7ea',
        purple: '#c099ff',
        red: '#ff757f',
        yellow: '#ffc777',
        deprecated: '#ffc777a1',
        invalid: '#d46c6c66',
        diffAdded: '#addb67',
        diffModified: '#e2b93d',
        diffDeleted: '#ef5350',
    },
    customRules: [
        ...rules,
        ...[
            {
                name: '[OVERWRITE] - Function declaration',
                scope: ['meta.function-call', 'entity.name.function'],
                settings: {
                    font_style: 'glow',
                },
            },
            {
                name: '[OVERWRITE] - Function call',
                scope: ['variable.function'],
                settings: {
                    foreground: 'var(teal)',
                    font_style: 'glow',
                },
            },
        ],
    ],
};
