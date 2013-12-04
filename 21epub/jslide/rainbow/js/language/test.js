
    /**
     * Generic language patterns
     *
     * @author Craig Campbell
     * @version 1.0.7
     */
    Rainbow.extend([
        {
            'matches': {
                1: {
                    'name': 'keyword.operator',
                    'pattern': /\=/g
                },
                2: {
                    'name': 'string',
                    'matches': {
                        'name': 'constant.character.escape',
                        'pattern': /\\('|"){1}/g
                    }
                }
            },
            'pattern': /(\(|\s|\[|\=)(('|")([^\\\1]|\\.)*?(\3))/gm
        },
        {
            'name': 'comment',
            'pattern': /\/\*[\s\S]*?\*\/|(\/\/|\#)[\s\S]*?$/gm
        },
        {
            'name': 'constant.numeric',
            'pattern': /\b(\d+(\.\d+)?(e(\+|\-)?\d+)?(f|d)?|0x[\da-f]+)\b/gi
        },
        {
            'name': 'constant',
            'pattern': /\b[A-Z0-9_]{2,}\b/g
        },
        {
            'matches': {
                1: 'keyword'
            },
            'pattern': /\b(and|array|as|bool(ean)?|c(atch|har|lass|onst)|d(ef|elete|o(uble)?)|e(cho|lse(if)?|xit|xtends|xcept)|f(inally|loat|or(each)?|unction)|global|if|import|int(eger)?|long|new|object|or|pr(int|ivate|otected)|public|return|self|st(ring|ruct|atic)|switch|th(en|is|row)|try|(un)?signed|var|void|while)(?=\(|\b)/gi
        },
        {
            'name': 'constant.language',
            'pattern': /true|false|null/g
        },
        {
            'name': 'keyword.operator',
            'pattern': /\+|\!|\-|&(gt|lt|amp);|\||\*|\=/g
        },
        {
            'matches': {
                1: 'function.call'
            },
            'pattern': /(\w+?)(?=\()/g
        },
        {
            'matches': {
                1: 'storage.function',
                2: 'entity.name.function'
            },
            'pattern': /(function)\s(.*?)(?=\()/g
        }
    ]);

    /**
     * Javascript patterns
     *
     * @author Craig Campbell
     * @version 1.0.6
     */
    Rainbow.extend('javascript', [

        /**
         * matches $. or $(
         */
        {
            'name': 'selector',
            'pattern': /(\s|^)\$(?=\.|\()/g
        },
        {
            'name': 'support',
            'pattern': /\b(window|document)\b/g
        },
        {
            'matches': {
                1: 'support.property'
            },
            'pattern': /\.(length|node(Name|Value))\b/g
        },
        {
            'matches': {
                1: 'support.function'
            },
            'pattern': /(setTimeout|setInterval)(?=\()/g

        },
        {
            'matches': {
                1: 'support.method'
            },
            'pattern': /\.(getAttribute|push|getElementById|getElementsByClassName|log|setTimeout|setInterval)(?=\()/g
        },
        {
            'matches': {
                1: 'support.tag.script',
                2: [
                    {
                        'name': 'string',
                        'pattern': /('|")(.*?)(\1)/g
                    },
                    {
                        'name': 'entity.tag.script',
                        'pattern': /(\w+)/g
                    }
                ],
                3: 'support.tag.script'
            },
            'pattern': /(&lt;\/?)(script.*?)(&gt;)/g
        },

        /**
         * matches any escaped characters inside of a js regex pattern
         *
         * @see https://github.com/ccampbell/rainbow/issues/22
         *
         * this was causing single line comments to fail so it now makes sure
         * the opening / is not directly followed by a *
         *
         * @todo check that there is valid regex in match group 1
         */
        {
            'name': 'string.regexp',
            'matches': {
                1: 'string.regexp.open',
                2: {
                    'name': 'constant.regexp.escape',
                    'pattern': /\\(.){1}/g
                },
                3: 'string.regexp.close',
                4: 'string.regexp.modifier'
            },
            'pattern': /(\/)(?!\*)(.+)(\/)([igm]{0,3})/g
        },

        /**
         * matches runtime function declarations
         */
        {
            'matches': {
                1: 'storage',
                3: 'entity.function'
            },
            'pattern': /(var)?(\s|^)(.*)(?=\s?=\s?function\()/g
        },

        /**
         * matches any function call in the style functionName: function()
         */
        {
            'name': 'entity.function',
            'pattern': /(\w+)(?=:\s{0,}function)/g
        }
    ]);

