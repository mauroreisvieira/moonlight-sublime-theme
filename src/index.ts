import { generateScheme } from '@meetio/scheme-generator';

import { scheme as MoonlightI } from './moonlight';

[MoonlightI].map(({ name, author, colors, ui, rules }) => {
    generateScheme({
        name,
        author,
        settings: {
        colors,
        ui,
        rules,
    },
        output: {
            filename: name,
        }
    });
});
