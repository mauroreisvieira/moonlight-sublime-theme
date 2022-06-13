import { generateScheme } from '@meetio/scheme-generator';

import { scheme as MoonlightLegacy } from './moonlight';
import { scheme as MoonlightII } from './moonlight';

[MoonlightLegacy, MoonlightII].map(({ name, author, colors, ui, rules }) => {
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
