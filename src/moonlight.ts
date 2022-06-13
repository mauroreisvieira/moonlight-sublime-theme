import { options } from '@meetio/scheme-generator';

import { IScheme } from './types';

const { ui } = options;

export const scheme: IScheme = {
    name: 'Moonlight',
    author: 'Mauro Reis Vieira <mauroreisvieira@gmail.com>',
    colors: {
        cursor: '#67d2ff',
        foreground: '#bfcdf4',
        background: '#212339',
        comments: '#7e8eda',
        base: {
            blue: '#70B0FF',
            brown: '#c17e70',
            teal: '#34d3fb',
            cyan: '#b4f9f8',
            green: '#c3e88d',
            orange: '#ff966c',
            pink: '#fca7ea',
            purple: '#c099ff',
            red: '#ff757f',
            yellow: '#FFDB8E',
        },
        deprecated: '#ffc777a1',
        invalid: '#d46c6c66',
        diffAdded: '#c7f59b60',
        diffModified: '#70b0ff60',
        diffDeleted: '#FF537060',
    },
    ui: {
        ...ui,
        ...{
            accent: 'var(blue)',
            caret: '#70b0ff',
            line_highlight: '#2a2e48',
            line_diff_width: '5',
            gutter_foreground: '#5b6395',
            gutter_foreground_highlight: '#9da5d7',
            guide: '#4E557970',
            active_guide: '#4E5579',
            misspelling: '#82aaff',
            background: 'var(background)',
        },
    },
    rules: [
        {
            name: '[INI] - Color for Entity',
            scope: [
                'source.ini entity',
                'meta.embedded.block.ini',
                'source.ini',
            ],
            settings: { foreground: 'var(red)' },
        },
        {
            name: '[INI] - Color for Keyword',
            scope: ['source.ini keyword', 'keyword.other.definition.ini'],
            settings: { foreground: 'var(purple)' },
        },
        {
            name: '[INI] - Color for Value',
            scope: [
                'source.ini meta.declaration.ini meta.value.ini string.name.value.ini',
            ],
            settings: { foreground: 'var(green)' },
        },
        {
            name: '[Markdown] Punctuation inside inline raw',
            scope: [
                'text.html.markdown meta.block-level.markdown meta.table.markdown-gfm markup.raw.inline.markdown punctuation.definition.raw.end.markdown',
                'text.html.markdown meta.block-level.markdown meta.table.markdown-gfm markup.raw.inline.markdown punctuation.definition.raw.begin.markdown',
            ],
            settings: { foreground: 'color(var(cyan) alpha(0.8))' },
        },
        {
            name: '[Markdown] - Color for Punctuation — Heading, `Code` and fenced ```code blocks```, **Bold**, _Italic_',
            scope: [
                'punctuation.definition.raw.begin.markdown',
                'punctuation.definition.raw.end.markdown',
                'punctuation.definition.raw.code-fence.begin.markdown',
                'punctuation.definition.raw.code-fence.end.markdown',
                'punctuation.definition.heading.begin.markdown',
                'punctuation.definition.bold.begin.markdown',
                'punctuation.definition.bold.end.markdown',
                'punctuation.definition.italic.begin.markdown',
                'punctuation.definition.italic.end.markdown',
            ],
            settings: {
                foreground: 'color(var(background) blend(var(foreground) 75%))',
            },
        },
        {
            name: '[SublimeLinter] Error',
            scope: ['sublimelinter.mark.error'],
            settings: { foreground: 'var(invalid)' },
        },
        {
            name: '[SublimeLinter] Gutter mark',
            scope: ['sublimelinter.gutter-mark'],
            settings: { foreground: 'var(blue)' },
        },
        {
            name: '[Vue] Function Parameter',
            scope: [
                'text.html.vue source.js.embedded.html source.js meta.export.js meta.object-literal.js meta.object-literal.js meta.function.declaration.js meta.binding.name.js variable.parameter.function.js',
            ],
            settings: { foreground: 'var(pink)' },
        },
        {
            name: '[Vue] Object',
            scope: [
                'text.html.vue source.js.embedded.html source.js meta.export.js meta.object-literal.js meta.object-literal.key.js',
            ],
            settings: { foreground: 'var(purple)' },
        },
        {
            name: '[Vue] Object Value',
            scope: [
                'text.html.vue source.js.embedded.html source.js meta.export.js meta.object-literal.js meta.function.js meta.block.js meta.object-literal.js meta.object-literal.js meta.object-literal.key.js',
            ],
            settings: { foreground: 'var(brown)' },
        },
        {
            name: 'COMMENTS - Single and multi-line comments should use, respectively',
            scope: ['comment', 'comment.line', 'comment.block'],
            settings: { foreground: 'var(comments)', font_style: 'italic' },
        },
        {
            name: 'COMMENTS - Multi-line comments used as documentation, such as Javadoc or PhpDo',
            scope: ['comment.block.documentation'],
            settings: { foreground: 'var(comments)', font_style: 'italic' },
        },
        {
            name: 'COMMENTS - Symbols that delineate a comment, e.g. // or /*',
            scope: ['punctuation.definition.comment'],
            settings: { foreground: 'var(comments)', font_style: 'italic' },
        },
        {
            name: 'COMMENTS - Special syntax that denote a section of code',
            scope: ['meta.toc-list'],
            settings: { foreground: 'var(comments)', font_style: 'italic' },
        },
        {
            name: 'CONSTANT - Numeric literals, including integers, floats, etc...',
            scope: [
                'constant.numeric',
                'constant.numeric.integer',
                'constant.numeric.integer.binary',
                'constant.numeric.integer.octal',
                'constant.numeric.integer.decimal',
                'constant.numeric.integer.hexadecimal',
                'constant.numeric.integer.other',
                'constant.numeric.float',
                'constant.numeric.float.binary',
                'constant.numeric.float.octal',
                'constant.numeric.float.decimal',
                'constant.numeric.float.hexadecimal',
                'constant.numeric.float.other',
                'constant.numeric.complex',
                'constant.numeric.complex.real',
                'constant.numeric.complex.imaginary',
            ],
            settings: { foreground: 'var(orange)' },
        },
        {
            name: 'CONSTANT - Constants that are built into the language, such as booleans and null values',
            scope: ['constant.language'],
            settings: { foreground: 'var(cyan)' },
        },
        {
            name: 'CONSTANT - Character escapes in strings',
            scope: ['constant.character.escape'],
            settings: { foreground: 'var(yellow)' },
        },
        {
            name: 'CONSTANT - Formatting placeholders, such as those used for sprintf(), e.g. %s',
            scope: ['constant.other.placeholder'],
            settings: { foreground: 'var(yellow)' },
        },
        {
            name: 'CONSTANT - Other language-specific constant values',
            scope: ['constant.other'],
            settings: { foreground: 'var(cyan)' },
        },
        {
            name: 'CONSTANT - Other language-specific constant values',
            scope: ['constant.other.color'],
            settings: { foreground: 'var(pink)' },
        },
        {
            name: 'Message Error',
            scope: ['message.error'],
            settings: { background: 'var(red)' },
        },
        {
            name: 'DIFF - Deleted',
            scope: ['diff.deleted'],
            settings: { background: 'color(var(diffDeleted) alpha(0.20))' },
        },
        {
            name: 'DIFF - Deleted Char',
            scope: ['diff.deleted.char'],
            settings: { background: 'color(var(diffDeleted) alpha(0.20))' },
        },
        {
            name: 'DIFF - Inserted',
            scope: ['diff.inserted'],
            settings: { background: 'color(var(diffAdded) alpha(0.20))' },
        },
        {
            name: 'DIFF - Inserted Char',
            scope: ['diff.inserted.char'],
            settings: { background: 'color(var(diffAdded) alpha(0.20))' },
        },
        {
            name: 'ENTITY - The names of data structures',
            scope: [
                'entity.name.class',
                'entity.name.struct',
                'entity.name.enum',
                'entity.name.union',
                'entity.name.trait',
                'entity.name.interface',
                'entity.name.impl',
                'entity.name.type',
            ],
            settings: { foreground: 'var(yellow)' },
        },
        {
            name: 'ENTITY - Forward-decl variants of the above are used in languages such as C and C++.',
            scope: ['entity.name.class.forward-decl'],
            settings: { foreground: 'var(yellow)' },
        },
        {
            name: 'ENTITY - Class, interface and trait names listed as an inherited class or implemented interface/trait',
            scope: ['entity.other.inherited-class'],
            settings: { foreground: 'var(orange)' },
        },
        {
            name: 'ENTITY - Function names receive one of the following scopes',
            scope: [
                'entity.name.function',
                'entity.name.function.constructor',
                'entity.name.function.destructor',
            ],
            settings: { foreground: 'var(blue)', font_style: 'glow' },
        },
        {
            name: 'ENTITY - Namespaces, packages and modules use the following scope',
            scope: ['entity.name.namespace'],
            settings: { foreground: 'var(yellow)' },
        },
        {
            name: 'ENTITY - This scope is often included in the symbol list and index',
            scope: ['entity.name.constant'],
            settings: { foreground: 'var(orange)' },
        },
        {
            name: 'ENTITY - Labels for goto-like constructs',
            scope: ['entity.name.label'],
            settings: { foreground: 'var(cyan)' },
        },
        {
            name: 'ENTITY - Heading names in markup languages, such as Markdown and Textile',
            scope: ['entity.name.section'],
            settings: { foreground: 'var(purple)' },
        },
        {
            name: 'ENTITY - HTML and XML tags',
            scope: ['entity.name.tag'],
            settings: { foreground: 'var(red)' },
        },
        {
            name: 'ENTITY - HTML, CSS and XML',
            scope: ['entity.other.attribute-name'],
            settings: { foreground: 'var(yellow)' },
        },
        {
            name: 'INVALID - Elements that are illegal in a specific context',
            scope: ['invalid.illegal'],
            settings: { foreground: 'var(invalid)' },
        },
        {
            name: 'INVALID - Deprecated elements',
            scope: ['invalid.deprecated'],
            settings: { foreground: 'var(deprecated)' },
        },
        {
            name: 'KEYWORD- Control keywords examples include if, try, end and while. Some syntaxes prefer to mark if and else with the conditional variant.',
            scope: [
                'keyword.control',
                'keyword.control.conditional',
                'keyword.control.import',
            ],
            settings: { foreground: 'var(cyan)' },
        },
        {
            name: 'KEYWORD - Keywords that contain punctuation, such as the @ symbol in CSS',
            scope: ['punctuation.definition.keyword'],
            settings: { foreground: 'var(cyan)' },
        },
        {
            name: 'KEYWORD - All remaining non-operator keywords fall under the other',
            scope: ['keyword.other'],
            settings: { foreground: 'var(orange)' },
        },
        {
            name: 'KEYWORD - Operators are typically symbols, so the term keyword can seem somewhat contradictory.',
            scope: [
                'keyword.operator',
                'keyword.operator.arithmetic',
                'keyword.operator.bitwise',
                'keyword.operator.logical',
            ],
            settings: { foreground: 'var(cyan)' },
        },
        {
            name: 'KEYWORD - When the operator is a word, such as and, or or not, the following variant is used',
            scope: ['keyword.operator.word'],
            settings: { foreground: 'var(cyan)' },
        },
        {
            name: 'KEYWORD - Operator comparison and assignment ',
            scope: [
                'keyword.operator.assignment',
                'keyword.operator.comparison',
            ],
            settings: { foreground: 'var(cyan)' },
        },
        {
            name: 'MARKUP - Section headings',
            scope: ['markup.heading'],
            settings: { foreground: 'var(cyan)' },
        },
        {
            name: 'MARKUP - Lists',
            scope: ['markup.list.unnumbered', 'markup.list.numbered'],
            settings: { foreground: 'var(cyan)' },
        },
        {
            name: 'MARKUP - Bold',
            scope: ['markup.bold'],
            settings: { font_style: 'bold', foreground: 'var(red)' },
        },
        {
            name: 'MARKUP - Italic',
            scope: ['markup.italic'],
            settings: { font_style: 'italic', foreground: 'var(red)' },
        },
        {
            name: 'MARKUP - Underline',
            scope: ['markup.underline'],
            settings: { font_style: 'underline', foreground: 'var(purple)' },
        },
        {
            name: 'MARKUP - Underline Link',
            scope: ['markup.underline.link'],
            settings: {
                font_style: 'italic underline',
                foreground: 'var(red)',
            },
        },
        {
            name: 'MARKUP - Deleted',
            scope: ['markup.deleted'],
            settings: { foreground: 'var(red)' },
        },
        {
            name: 'MARKUP - Inserted',
            scope: ['markup.inserted'],
            settings: { foreground: 'var(green)' },
        },
        {
            name: 'MARKUP - Changed',
            scope: ['markup.changed'],
            settings: { foreground: 'var(orange)' },
        },
        {
            name: 'MARKUP - Blockquotes and other quote styles',
            scope: ['markup.quote'],
            settings: { font_style: 'italic', foreground: 'var(cyan)' },
        },
        {
            name: 'MARKUP - Inline and block literal quoting',
            scope: ['markup.raw.inline', 'markup.raw.block'],
            settings: { background: 'color(var(blue) alpha(0.05))' },
        },
        {
            name: 'MARKUP - Inline and block literal quoting',
            scope: [
                'meta.code-fence.definition.begin.text.markdown-gfm',
                'meta.code-fence.definition.end.text.markdown-gfm',
                'markup.raw.code-fence.markdown-gfm',
            ],
            settings: { background: 'color(var(blue) alpha(0.05))' },
        },
        {
            name: 'MARKUP - Other markup, including constructs such as footnotes and tables',
            scope: ['markup.other'],
            settings: { foreground: 'var(yellow)' },
        },
        {
            name: 'MARKUP - Blockquote definition',
            scope: ['punctuation.definition.blockquote'],
            settings: { foreground: 'var(pink)' },
        },
        {
            name: 'MARKUP - Blockquote definition',
            scope: ['meta.link.inline.description'],
            settings: { foreground: 'var(green)' },
        },
        {
            name: 'META - HTML and XML tags, including punctuation, names and attributes',
            scope: ['meta.tag'],
            settings: { foreground: 'var(foreground)' },
        },
        {
            name: 'META - The complete contents of data structures',
            scope: [
                'meta.class',
                'meta.struct',
                'meta.enum',
                'meta.union',
                'meta.trait',
                'meta.interface',
                'meta.impl',
                'meta.type',
            ],
            settings: { foreground: 'var(purple)' },
        },
        {
            name: 'META - The entire scope of a function',
            scope: [
                'meta.function',
                'meta.function.parameters',
                'meta.function.return-type',
            ],
            settings: { foreground: 'var(purple)' },
        },
        {
            name: 'META - The entirety of a namespace',
            scope: ['meta.namespace'],
            settings: { foreground: 'var(blue)' },
        },
        {
            name: 'META - Preprocessor statements in language such as C',
            scope: ['meta.preprocessor'],
            settings: { foreground: 'var(cyan)' },
        },
        {
            name: 'META - Annotations, attributes and decorator statements that are used to modify the behavior or implementation of a class, method or function',
            scope: [
                'meta.annotation',
                'meta.annotation.identifier',
                'meta.annotation.parameters',
                'punctuation.definition.annotation',
            ],
            settings: { foreground: 'var(green)' },
        },
        {
            name: 'META - Complete identifiers, including namespace names',
            scope: ['meta.path'],
            settings: { foreground: 'var(cyan)' },
        },
        {
            name: 'META - Function names, including the full path, and all parameters',
            scope: ['meta.function-call'],
            settings: { foreground: 'var(yellow)', font_style: 'glow' },
        },
        {
            name: 'Meta - Mapping Key',
            scope: ['meta.mapping.key'],
            settings: { foreground: 'var(blue)' },
        },
        {
            name: 'META - Sections of code delineated by curly braces',
            scope: [
                'meta.block',
                'punctuation.section.block.begin',
                'punctuation.section.block.end',
                'meta.braces',
                'punctuation.section.braces.begin',
                'punctuation.section.braces.end',
            ],
            settings: { foreground: 'var(cyan)' },
        },
        {
            name: 'META - Sections of code delineated by round braces',
            scope: ['meta.brace.round'],
            settings: { foreground: 'var(orange)' },
        },
        {
            name: 'META - Sections of code delineated by parentheses',
            scope: [
                'meta.group',
                'punctuation.section.group.begin',
                'punctuation.section.group.end',
                'meta.parens',
                'punctuation.section.parens.begin',
                'punctuation.section.parens.end',
            ],
            settings: { foreground: 'var(cyan)' },
        },
        {
            name: 'META - Sections of code delineated by square brackets',
            scope: [
                'meta.brackets',
                'punctuation.section.brackets.begin',
                'punctuation.section.brackets.end',
                'meta.array.literal',
                'meta.brace.square',
            ],
            settings: { foreground: 'var(cyan)' },
        },
        {
            name: 'META - Generic data type constructs',
            scope: [
                'meta.generic',
                'punctuation.definition.generic.begin',
                'punctuation.definition.generic.end',
            ],
            settings: { foreground: 'var(cyan)' },
        },
        {
            name: 'META - Paragraphs in markup',
            scope: ['meta.paragraph'],
            settings: { foreground: 'var(foreground)' },
        },
        {
            name: 'META - Object',
            scope: ['meta.objectliteral', 'meta.object.member'],
            settings: { foreground: 'var(blue)' },
        },
        {
            name: 'META - Object',
            scope: ['meta.field.declaration'],
            settings: { foreground: 'var(blue)' },
        },
        {
            name: 'META - Diff Header',
            scope: ['meta.diff, meta.diff.header'],
            settings: { foreground: 'var(pink)' },
        },
        {
            name: 'PUNCTUATION - Separators such as commas',
            scope: ['punctuation.separator'],
            settings: { foreground: 'var(cyan)' },
        },
        {
            name: 'PUNCTUATION - Semicolons or other statement terminators',
            scope: ['punctuation.terminator'],
            settings: { foreground: 'var(cyan)' },
        },
        {
            name: 'PUNCTUATION - Parameters eg: ()',
            scope: [
                'punctuation.definition.group.begin',
                'punctuation.definition.group.end',
                'punctuation.section.inheritance.begin',
                'punctuation.section.inheritance.end',
                'punctuation.section.arguments.begin',
                'punctuation.section.arguments.end',
                'punctuation.definition.parameters.begin',
                'punctuation.definition.parameters.end',
                'punctuation.definition.block',
                'punctuation.definition.metadata.begin',
                'punctuation.definition.metadata.end',
                'meta.group.braces.round.function.arguments',
            ],
            settings: { foreground: 'var(cyan)' },
        },
        {
            name: 'PUNCTUATION - Embedded eg: {}',
            scope: [
                'punctuation.section.embedded.begin',
                'punctuation.section.embedded.end',
                'meta.interpolation punctuation.section.interpolation.begin',
                'meta.interpolation punctuation.section.interpolation.end',
            ],
            settings: { foreground: 'var(cyan)' },
        },
        {
            name: 'PUNCTUATION - Parameters eg: <>',
            scope: [
                'punctuation.definition.tag.begin',
                'punctuation.definition.tag.end',
                'punctuation.definition.reference.email.end.git',
                'punctuation.definition.reference.email.begin.git',
            ],
            settings: { foreground: 'var(cyan)' },
        },
        {
            name: 'PUNCTUATION - Parameters eg: []',
            scope: [
                'punctuation.section.sequence.begin',
                'punctuation.section.sequence.end',
                'punctuation.definition.link.begin',
                'punctuation.definition.link.end',
                'punctuation.definition.image.begin',
                'punctuation.definition.image.end',
            ],
            settings: { foreground: 'var(cyan)' },
        },
        {
            name: 'PUNCTUATION - Line-continuation characters, such as in Python and R',
            scope: ['punctuation.separator.continuation'],
            settings: { foreground: 'var(cyan)' },
        },
        {
            name: 'PUNCTUATION - Member access, scope resolution, or similar constructs',
            scope: ['punctuation.accessor'],
            settings: { foreground: 'var(cyan)' },
        },
        {
            name: 'PUNCTUATION - Property list, such CSS in HTML',
            scope: ['punctuation.section.property-list'],
            settings: { foreground: 'var(cyan)' },
        },
        {
            name: 'PUNCTUATION - Section mapping, such as JSON, eg: "{}"',
            scope: [
                'punctuation.section.mapping.begin',
                'punctuation.section.mapping.end',
            ],
            settings: { foreground: 'var(cyan)' },
        },
        {
            name: 'SOURCE - A language-specific variant of the following scope is typically applied to the entirety of a source code file',
            scope: ['source'],
            settings: { foreground: 'var(green)' },
        },
        {
            name: 'STORAGE - Types should use the following scope. Examples include int, bool and char',
            scope: ['storage.type'],
            settings: { foreground: 'var(purple)' },
        },
        {
            name: 'STORAGE - Keywords that affect the storage of a variable, function or data structure should use the following scope. Examples include static, inline, const, public and private',
            scope: ['storage.modifier'],
            settings: { foreground: 'var(purple)' },
        },
        {
            name: 'STORAGE - Keywords for functions or methods',
            scope: ['storage.type.function keyword.declaration.function'],
            settings: { foreground: 'var(pink)' },
        },
        {
            name: 'STORAGE - Keywords for classes, structs, interfaces',
            scope: [
                'storage.type.class keyword.declaration.class',
                'storage.type.struct keyword.declaration.struct',
                'storage.type.enum keyword.declaration.enum',
                'storage.type.union keyword.declaration.union',
                'storage.type.trait keyword.declaration.trait',
                'storage.type.interface keyword.declaration.interface',
                'storage.type.impl keyword.declaration.impl',
                'storage.type keyword.declaration.type',
            ],
            settings: { foreground: 'var(purple)' },
        },
        {
            name: 'STRING - Basic strings use the one',
            scope: [
                'string.quoted.single',
                'string.quoted.double',
                'string.quoted.triple',
            ],
            settings: { foreground: 'var(green)' },
        },
        {
            name: 'STRING - Strings that used unconventional quotes, such as < and > with C imports',
            scope: ['string.quoted.other'],
            settings: { foreground: 'var(cyan)' },
        },
        {
            name: 'STRING - The entirety of a string, along with all punctuation, prefixes, suffixes and interpolations',
            scope: ['meta.string'],
            settings: { foreground: 'var(cyan)' },
        },
        {
            name: 'STRING - Punctuation at the beginning and end of strings',
            scope: [
                'punctuation.definition.string.begin',
                'punctuation.definition.string.end',
            ],
            settings: { foreground: 'var(cyan)' },
        },
        {
            name: 'STRING - Unquoted strings, such as in Shell and Batch File',
            scope: ['string.unquoted'],
            settings: { foreground: 'var(yellow)' },
        },
        {
            name: 'STRING - Regular expression literal',
            scope: ['string.regexp'],
            settings: { foreground: 'var(yellow)' },
        },
        {
            name: 'STRING - When a string contain interpolated code',
            scope: ['meta.interpolation'],
            settings: { foreground: 'var(yellow)' },
        },
        {
            name: 'STRING - The punctuation for an interpolated expression',
            scope: [
                'punctuation.section.interpolation.begin',
                'punctuation.section.interpolation.end',
            ],
            settings: { foreground: 'var(yellow)' },
        },
        {
            name: 'STRING - Between the punctuation, the interpolated expression',
            scope: ['source.language-suffix.embedded'],
            settings: { foreground: 'var(yellow)' },
        },
        {
            name: 'SUPPORT - Elements provided by a base frameworks',
            scope: ['support.constant', 'support.function', 'support.module'],
            settings: { foreground: 'var(pink)' },
        },
        {
            name: 'SUPPORT - While also used for base frameworks, many syntaxes apply these to scopes unrecognized classes and types, effectively scoping all user constructs.',
            scope: [
                'support.type',
                'support.class',
                'support.variable.property',
            ],
            settings: { foreground: 'var(foreground)' },
        },
        {
            name: 'SUPPORT - Class Component',
            scope: ['support.class.component'],
            settings: { foreground: 'var(purple)' },
        },
        {
            name: 'SUPPORT - Type Primitive',
            scope: ['support.type.primitive'],
            settings: { foreground: 'var(yellow)' },
        },
        {
            name: 'TEXT - HTML',
            scope: ['text.html'],
            settings: { foreground: 'var(foreground)' },
        },
        {
            name: 'TEXT - XML',
            scope: ['text.xml'],
            settings: { foreground: 'var(foreground)' },
        },
        {
            name: 'VARIABLE - Declaration',
            scope: ['variable.declaration', 'variable.other'],
            settings: { foreground: 'var(brown)' },
        },
        {
            name: 'VARIABLE - A generic variable',
            scope: ['variable.other.readwrite'],
            settings: { foreground: 'var(foreground)' },
        },
        {
            name: 'VARIABLE - Symbols that are part of the variable name',
            scope: ['punctuation.definition.variable'],
            settings: { foreground: 'var(cyan)' },
        },
        {
            name: 'VARIABLE - Immutable variables',
            scope: ['variable.other.constant'],
            settings: { foreground: 'var(red)' },
        },
        {
            name: 'VARIABLE - Reserved variable names that are specified by the language, such as this, self, super',
            scope: ['variable.language'],
            settings: { foreground: 'var(red)' },
        },
        {
            name: 'VARIABLE - Parameters to a function or methods',
            scope: ['variable.parameter'],
            settings: { foreground: 'var(red)' },
        },
        {
            name: 'VARIABLE - Fields, properties, members and attributes of a class',
            scope: ['variable.other.member'],
            settings: { foreground: 'var(yellow)' },
        },
        {
            name: 'VARIABLE - Function and method name',
            scope: ['variable.function'],
            settings: { foreground: 'var(blue)', font_style: 'glow' },
        },
        {
            name: 'VARIABLE - The final label in an identifier that is part of an annotation',
            scope: ['variable.annotation'],
            settings: { foreground: 'var(yellow)' },
        },
        {
            name: 'CSS - Attribute name ID',
            scope: ['entity.other.attribute-name.id'],
            settings: { foreground: 'var(orange)' },
        },
        {
            name: 'CSS - Attribute name Class',
            scope: ['entity.other.attribute-name.class'],
            settings: { foreground: 'var(yellow)' },
        },
        {
            name: 'CSS - Pseudo class',
            scope: ['entity.other.pseudo-class'],
            settings: { foreground: 'var(purple)' },
        },
        {
            name: 'CSS - Pseudo element',
            scope: ['entity.other.pseudo-element'],
            settings: { foreground: 'var(purple)' },
        },
        {
            name: 'HTML - Attribute name ID',
            scope: [
                'meta.attribute-with-value.id. entity.other.attribute-name.id',
            ],
            settings: { foreground: 'var(purple)' },
        },
        {
            name: 'HTML - Attribute name ID',
            scope: [
                'meta.attribute-with-value.id. string.quoted.double. meta.toc-list.id.',
            ],
            settings: { foreground: 'var(green)', font_style: 'normal' },
        },
        {
            name: 'GIT - Text',
            scope: [
                'text.git.commit meta.subject.git.commit markup.heading.subject.git.commit',
            ],
            settings: { foreground: 'var(foreground)' },
        },
        {
            name: 'GIT - Author username',
            scope: [
                'text.git.commit meta.reference.username.git entity.name.reference.username.git',
            ],
            settings: { font_style: 'italic', foreground: 'var(cyan)' },
        },
        {
            name: 'GIT - Author email',
            scope: ['text.git.commit entity.name.reference.email.git'],
            settings: { font_style: 'italic', foreground: 'var(blue)' },
        },
        {
            name: 'GIT - Comment Timestamp',
            scope: [
                'text.git.commit comment.line.git.commit constant.language.timestamp.git.commit',
            ],
            settings: { foreground: 'var(yellow)' },
        },
        {
            name: 'GIT - Reference number',
            scope: [
                'text.git.commit meta.reference.issue.git constant.other.reference.issue.git',
            ],
            settings: { font_style: 'bold', foreground: 'var(purple)' },
        },
        {
            name: 'GIT - Hash number',
            scope: [
                'text.git.commit meta.message.git.commit constant.other.hash.git.commit',
            ],
            settings: { font_style: 'bold', foreground: 'var(green)' },
        },
        {
            name: 'GIT - Resolved issue',
            scope: ['text.git.commit keyword.other.resolved-issue.git'],
            settings: { foreground: 'var(red)' },
        },
        {
            name: 'JS - Console, "console"',
            scope: ['support.type.object.console', 'support.class.console'],
            settings: { foreground: 'var(yellow)' },
        },
        {
            name: 'JS - Console, "log"',
            scope: ['support.function.console'],
            settings: { foreground: 'var(blue)' },
        },
        {
            name: 'JS - Other property',
            scope: ['source.js variable.other.property.js'],
            settings: { foreground: 'var(blue)' },
        },
        {
            name: 'JSON - Key ',
            scope: ['meta.mapping.key.json string.quoted.double.json'],
            settings: { foreground: 'var(purple)' },
        },
        {
            name: 'JSON - Mapping Level 1',
            scope: [
                'source.json meta.mapping.value.json meta.mapping.key.json string.quoted.double.json',
            ],
            settings: { foreground: 'var(yellow)' },
        },
        {
            name: 'JSON - Mapping Level 2',
            scope: [
                'source.json meta.mapping.value.json meta.mapping.value.json meta.mapping.key.json string.quoted.double.json',
            ],
            settings: { foreground: 'var(orange)' },
        },
        {
            name: 'JSX - Meta',
            scope: ['meta.jsx.js'],
            settings: { foreground: 'var(foreground)' },
        },
        {
            name: 'JSX - String Quoted',
            scope: ['string.quoted.jsx'],
            settings: { foreground: 'var(green)' },
        },
        {
            name: 'PYTHON - Keyword declaration function',
            scope: ['source.python keyword.declaration.function.python'],
            settings: { foreground: 'var(purple)' },
        },
        {
            name: 'PYTHON - Function magic',
            scope: ['source.python support.function.magic.python'],
            settings: { foreground: 'var(blue)' },
        },
        {
            name: 'PYTHON - Function',
            scope: [
                'source.python meta.function.python',
                'source.python meta.qualified-name.python support.type.python',
            ],
            settings: { foreground: 'var(blue)' },
        },
        {
            name: 'PYTHON - Qualified name',
            scope: ['source.python meta.qualified-name.python'],
            settings: { foreground: 'var(foreground)' },
        },
        {
            name: 'PYTHON - Generic name',
            scope: [
                'source.python variable.function.python meta.generic-name.python',
            ],
            settings: { foreground: 'var(blue)' },
        },
        {
            name: 'VUE - Console, "console"',
            scope: ['text.html.vue meta.property.object'],
            settings: { foreground: 'var(foreground)' },
        },
        {
            name: 'YAML - Key',
            scope: ['entity.name.tag.yaml'],
            settings: { foreground: 'var(red)' },
        },
        {
            name: 'YAML - String',
            scope: ['source.yaml string.unquoted'],
            settings: { foreground: 'var(green)' },
        },
    ],
};
