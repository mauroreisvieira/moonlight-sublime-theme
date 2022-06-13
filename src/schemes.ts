import { generateScheme, ISchemeSetting } from '@meetio/scheme-generator';

import { scheme as MoonlightLegacy } from './moonlight';
import { scheme as MoonlightII } from './moonlight';

[MoonlightLegacy, MoonlightII].map(item => {
    const settings: ISchemeSetting = {
        colors: item.variables,
        rules: item.customRules,
    };
    generateScheme(item.name, item.author, item.name, settings, 'schemes');
});
