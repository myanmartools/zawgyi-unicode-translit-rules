/**
 * @license
 * Copyright DagonMetric. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found under the LICENSE file in the root directory of this source tree.
 */

// tslint:disable: max-line-length

import { TranslitRule } from '@dagonmetric/ng-translit';

export const zg2uniRules: TranslitRule = {
    phases: [
        {
            description: 'Overlapped characters normalization phase',
            when: {
                fixOverlappedChars: true
            },
            tplSeq: {
                '@ox': [
                    ['\u102B', '\u102B', 10],
                    ['\u1036', '\u1036', 8],
                    ['\u105A', '\u105A', 1],
                    ['\u1060', '\u1060', 10],
                    ['\u106C', '\u106C', 2],
                    ['\u1070', '\u1070', 22],
                    ['\u1087', '\u1087', 8],
                    ['\u1093', '\u1093', 4]
                ]
            },
            rules: [
                {
                    from: '@ox+',
                    to: '@ox',
                    minLength: 2,
                    quickTests: [['@ox', 0], ['@ox', 1]]
                }
            ]
        },
        {
            description: 'Single form normalization phase',
            when: {
                singleForm: true
            },
            tplSeq: {
                '@94Or95x': [
                    ['\u1094', '\u1037', 1],
                    ['\u1095', '\u1037', 1]
                ],
                '@7eTo84x': [
                    ['\u107E', '\u103B', 1],
                    ['\u107F', '\u103B', 1],
                    ['\u1080', '\u103B', 1],
                    ['\u1081', '\u103B', 1],
                    ['\u1082', '\u103B', 1],
                    ['\u1083', '\u103B', 1],
                    ['\u1084', '\u103B', 1]
                ]
            },
            rules: [
                // 'ဪ'
                {
                    from: '\u1031\u1029\u102C\u1039',
                    to: '\u103A',
                    minLength: 4,
                    quickTests: [['\u1031', 0], ['\u1029', 1], ['\u102C', 2], ['\u1039', 3]]
                },
                {
                    from: '\u1031\u107E\u101E\u102C\u1039',
                    to: '\u103A',
                    minLength: 5,
                    quickTests: [['\u1031', 0], ['\u107E', 1], ['\u1029', 2], ['\u102C', 3], ['\u1039', 4]]
                },

                // 'ြ'
                {
                    from: '@7eTo84x',
                    to: '@7eTo84x',
                    minLength: 1,
                    quickTests: [['@7eTo84x', 0]]
                },

                // 'ဈ'
                {
                    from: '\u1005\u103A',
                    to: '\u1008',
                    minLength: 2,
                    quickTests: [['\u1005', 0], ['\u103A', 1]]
                },

                // 'ဦ'
                {
                    from: '\u1025\u102E',
                    to: '\u1026',
                    minLength: 2,
                    quickTests: [['\u1025', 0], ['\u102E', 1]]
                },

                // 'ဉ'
                {
                    from: '\u106A',
                    to: '\u1009',
                    minLength: 1,
                    quickTests: [['\u106A', 0]]
                },

                // 'ည'
                {
                    from: '\u106B',
                    to: '\u100A',
                    minLength: 1,
                    quickTests: [['\u106B', 0]]
                },

                // 'န'
                {
                    from: '\u108F',
                    to: '\u1014',
                    minLength: 1,
                    quickTests: [['\u108F', 0]]
                },

                // 'ရ'
                {
                    from: '\u1090',
                    to: '\u101B',
                    minLength: 1,
                    quickTests: [['\u1090', 0]]
                },

                // 'ဿ'
                {
                    // Note: \u103F is Unicode
                    from: '\u1086',
                    to: '\u103F',
                    minLength: 1,
                    quickTests: [['\u1086', 0]]
                },

                // 'ွ' + 'ှ'
                {
                    from: '\u103C\u108A',
                    to: '\u103C\u103D',
                    minLength: 2,
                    quickTests: [['\u103C', 0], ['\u108A', 1]],
                },
                {
                    from: '\u108A',
                    to: '\u103C\u103D',
                    minLength: 1,
                    quickTests: [['\u108A', 0]],
                },

                // 'ှ'
                {
                    from: '\u1087',
                    to: '\u103D',
                    minLength: 1,
                    quickTests: [['\u1087', 0]],
                },

                // 'ျ'
                {
                    from: '\u107D',
                    to: '\u103A',
                    minLength: 1,
                    quickTests: [['\u107D', 0]],
                },

                // 'ီ'
                {
                    from: '\u102D\u102E',
                    to: '\u102E',
                    minLength: 2,
                    quickTests: [['\u102D', 0], ['\u102E', 1]]
                },
                {
                    from: '\u102E\u102D',
                    to: '\u102E',
                    minLength: 2,
                    quickTests: [['\u102E', 0], ['\u102D', 1]]
                },

                // 'ူ'
                {
                    from: '\u102F\u1030',
                    to: '\u1030',
                    minLength: 2,
                    quickTests: [['\u102F', 0], ['\u1030', 1]]
                },
                {
                    from: '\u1033\u1034',
                    to: '\u1030',
                    minLength: 2,
                    quickTests: [['\u1033', 0], ['\u1034', 1]]
                },

                // 'ှ' + 'ု'
                {
                    from: '\u1088',
                    to: '\u103D\u102F',
                    minLength: 1,
                    quickTests: [['\u1088', 0]],
                },

                // 'ှ' + 'ူ'
                {
                    from: '\u1089',
                    to: '\u103D\u1030',
                    minLength: 1,
                    quickTests: [['\u1089', 0]],
                },

                // 'ု'
                {
                    from: '\u1033',
                    to: '\u102F',
                    minLength: 1,
                    quickTests: [['\u1033', 0]],
                },

                // 'ူ'
                {
                    from: '\u1034',
                    to: '\u1030',
                    minLength: 1,
                    quickTests: [['\u1034', 0]],
                },

                // '့'
                {
                    from: '@94Or95x',
                    to: '@94Or95x',
                    minLength: 1,
                    quickTests: [['@94Or95x', 0]]
                },

                // 'ိံ'
                {
                    from: '\u108E',
                    to: '\u102D\u1036',
                    minLength: 1,
                    quickTests: [['\u108E', 0]]
                },

                // 'ါ်'
                {
                    from: '\u105A',
                    to: '\u102B\u1039',
                    minLength: 2,
                    quickTests: [['\u105A', 0]]
                }
            ]
        },
        {
            description: 'Space between accented characters normalization phase',
            when: {
                fixSpaceBetweenAccentedChars: true
            },
            tplVar: {
                '#s': ' \u00A0\u1680\u2000-\u200D\u202F\u205F\u2060\u3000\uFEFF',
                '#ca31Or3b': '\u1000-\u1021\u1023-\u1027\u1029\u102A\u103F\u1040\u106E\u106F\u1091\u1092\u1097',
                '#cbs': '\u1000-\u1021\u1023-\u1027\u1029-\u1034\u1036\u1037\u1039-\u103A\u103C\u103D\u103F\u1040\u1060-\u107D\u1085\u108B-\u108D\u1091-\u1097',
                '#ca': '\u102B-\u1030\u1032-\u1034\u1036-\u103A\u103C\u103D\u1064\u108B-\u108D'
            },
            tplSeq: {
                '@sx': [
                    ['\u0020', '\u0020', 1],
                    ['\u00A0', '\u00A0', 1],
                    ['\u1680', '\u1680', 1],
                    ['\u2000', '\u2000', 14],
                    ['\u202F', '\u202F', 1],
                    ['\u205F', '\u205F', 1],
                    ['\u2060', '\u2060', 1],
                    ['\u3000', '\u3000', 1],
                    ['\uFEFF', '\uFEFF', 1]
                ]
            },
            postRulesDef: {
                psc: [
                    {
                        from: '[#s]+',
                        to: ''
                    }
                ]
            },
            rules: [
                {
                    from: '\u1031[#s]+\u103B[#s]+([#ca31Or3b])',
                    to: '\u1031\u103B$1',
                    minLength: 5,
                    quickTests: [['\u1031', 0]]
                },
                {
                    from: '\u1031[#s]+([#ca31Or3b\u103B])',
                    to: '\u1031$1',
                    minLength: 3,
                    quickTests: [['\u1031', 0]]
                },
                {
                    from: '\u103B[#s]+([#ca31Or3b])',
                    to: '\u103B$1',
                    minLength: 3,
                    quickTests: [['\u103B', 0]]
                },

                {
                    from: '([#cbs])[@sx]+([#ca])(([#s]+[#ca])*)',
                    to: '$1@sx$2$3',
                    minLength: 3,
                    quickTests: [['@sx', 1]],
                    postRulesRef: 'psc',
                    postRulesStrategy: 'whileMatch'
                }
            ]
        },
        {
            description: 'Order normalization phase',
            when: {
                sortOrder: true
            },
            tplVar: {
                '#3ar': '\u1060-\u1063\u1065-\u1069\u106C\u106D\u1070-\u107C\u1085\u1093\u1096',
                '#3cr': '#3ar\u103A',
                '#3dr': '#3cr\u103C',
                '#64And8bTo8dr': '#3dr\u103D',
                '#2dOr2er': '#64And8bTo8dr\u1064\u108B-\u108D',
                '#2fOr30r': '#2dOr2er\u102D\u102E',
                '#32Or36r': '#2fOr30r\u102F\u1030',
                '#2bOr2cr': '#32Or36r\u1032\u1036',
                '#39r': '#2bOr2cr\u102B\u102C',
                '#37r': '#39r',
                '#r': '#37r'
            },
            tplSeq: {
                '@sx': [
                    ['\u102B', '\u102B', 6],
                    ['\u1032', '\u1032', 1],
                    ['\u1036', '\u1036', 1],
                    ['\u1037', '\u1037', 1],
                    ['\u1039', '\u1039', 2],
                    ['\u103C', '\u103C', 2],
                    ['\u1064', '\u1064', 1],
                    ['\u108B', '\u108B', 1],
                    ['\u108C', '\u108C', 1],
                    ['\u108D', '\u108D', 1]
                ]
            },
            postRulesDef: {
                po: [
                    // '်'
                    // ...............
                    // '့' + '်'
                    {
                        from: '(\u1039)(\u1037)',
                        to: '$2$1',
                        when: {
                            prefer3739: true
                        },
                        orGroup: 'g3739'
                    },

                    {
                        from: '(\u1039)([#39r])',
                        to: '$2$1'
                    },

                    // '့'
                    // ...............
                    // '်' + '့'
                    {
                        from: '(\u1037)(\u1039)',
                        to: '$2$1',
                        orGroup: 'g3739'
                    },

                    {
                        from: '(\u1037)([#37r])',
                        to: '$2$1'
                    },

                    // [ါ  ာ]
                    // ...............
                    {
                        from: '(\u102B\u102C)([#2bOr2cr])',
                        to: '$2$1'
                    },

                    // [ဲ  ံ]
                    // ...............
                    {
                        from: '([\u1032\u1036])([#32Or36r])',
                        to: '$2$1'
                    },

                    // [ု  ူ]
                    // ...............
                    {
                        from: '([\u102F\u1030])([#2fOr30r])',
                        to: '$2$1'
                    },

                    // [ိ  ီ]
                    // ...............
                    {
                        from: '([\u102D\u102E])([#2dOr2er])',
                        to: '$2$1'
                    },

                    // [\u1064\u108B-\u108D]
                    // ...............
                    {
                        from: '([\u1064\u108B-\u108D])([#64And8bTo8dr])',
                        to: '$2$1'
                    },

                    // 'ှ'
                    // ...............
                    {
                        from: '(\u103D)([#3dr])',
                        to: '$2$1'
                    },

                    // 'ွ'
                    // ...............
                    {
                        from: '(\u103C)([#3cr])',
                        to: '$2$1'
                    },

                    // 'ျ'
                    // ...............
                    {
                        from: '(\u103A)([#3ar])',
                        to: '$2$1'
                    }
                ]
            },
            rules: [
                // Sort order
                {
                    from: '@sx([#r]+)',
                    to: '@sx$1',
                    minLength: 2,
                    quickTests: [['@sx', 0]],
                    postRulesRef: 'po',
                    postRulesStrategy: 'whileMatch'
                }
            ]
        },
        {
            description: 'Core Zawgyi to Unicode conversion phase',
            when: {
                zg2uni: true
            },
            tplVar: {
                '#zc': '\u1000-\u1021\u1023-\u1027\u1029\u102A\u103F\u1040-\u1049',
                '#zplc': '\u1060-\u1063\u1065-\u1069\u106C\u106D\u1070-\u107C\u1085\u1093',
                '#zpc': '\u106E\u106F\u1091\u1092\u1097',
            },
            tplSeq: {
                '@kx': [
                    ['\u108B', '\u102D', 1],
                    ['\u108C', '\u102E', 1],
                    ['\u108D', '\u1036', 1],
                    ['\u1064', '', 1]
                ],
                '@px': [
                    ['\u1060', '\u1000', 4],
                    ['\u1065', '\u1005', 1],
                    ['\u1066', '\u1006', 1],
                    ['\u1067', '\u1006', 3],
                    ['\u106C', '\u100B', 2],
                    ['\u1070', '\u100F', 1],
                    ['\u1071', '\u1010', 1],
                    ['\u1072', '\u1010', 1],
                    ['\u1073', '\u1011', 1],
                    ['\u1074', '\u1011', 7],
                    ['\u107B', '\u1018', 1],
                    ['\u107C', '\u1019', 1],
                    ['\u1085', '\u101C', 1],
                    ['\u1093', '\u1018', 1]
                ],
            },
            postRulesDef: {
                pz2u: [
                    {
                        from: '\u1040',
                        to: '\u101D',
                        start: -1,
                        orGroup: 'gc1'
                    },
                    {
                        from: '\u1025([\u102C\u1039\u103A])',
                        to: '\u1009$1',
                        start: -1,
                        orGroup: 'gc1'
                    },

                    {
                        from: '@px',
                        to: '@px',
                        start: -1,
                        orGroup: 'gpx'
                    },
                ],
                ppz2u: [
                    {
                        from: '\u106E',
                        to: '\u100D\u1039\u100D',
                        start: -1,
                        orGroup: 'gc1'
                    },
                    {
                        from: '\u106F',
                        to: '\u100D\u1039\u100E',
                        start: -1,
                        orGroup: 'gc1'
                    },
                    {
                        from: '\u1091',
                        to: '\u100F\u1039\u100D',
                        start: -1,
                        orGroup: 'gc1'
                    },
                    {
                        from: '\u1092',
                        to: '\u100B\u1039\u100C',
                        start: -1,
                        orGroup: 'gc1'
                    },
                    {
                        from: '\u1097',
                        to: '\u100B\u1039\u100B',
                        start: -1,
                        orGroup: 'gc1'
                    }
                ]
            },
            rules: [
                // \u108B-\u108D, \u1064
                // ------------------------------------------------------------------------------------------
                // 'ေ' + 'ြ'
                // ...............
                //
                // \u1096 (Pasin)
                {
                    from: '\u1031\u103B([#zc])\u1096@kx',
                    to: '\u1004\u103A\u1039$1\u1039\u1010\u103C\u103D\u1031@kx',
                    minLength: 5,
                    quickTests: [['\u1031', 0], ['\u103B', 1], ['\u1096', 3], ['@kx', 4]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 3 }
                },

                // Pasin
                {
                    from: '\u1031\u103B([#zc])([#zplc])@kx',
                    to: '\u1004\u103A\u1039$1\u1039$2\u103C\u1031@kx',
                    minLength: 5,
                    quickTests: [['\u1031', 0], ['\u103B', 1], ['@kx', 4]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 3, gpx: 5 }
                },

                // Pasin (Single)
                {
                    from: '\u1031\u103B([#zpc])@kx',
                    to: '\u1004\u103A\u1039$1\u103C\u1031@kx',
                    minLength: 4,
                    quickTests: [['\u1031', 0], ['\u103B', 1], ['@kx', 3]],
                    postRulesRef: 'ppz2u',
                    postRulesStart: { gc1: 3 }
                },

                // 'ွှ'
                {
                    from: '\u1031\u103B([#zc])\u103C\u103D@kx',
                    to: '\u1004\u103A\u1039$1\u103C\u103D\u103E\u1031@kx',
                    minLength: 6,
                    quickTests: [['\u1031', 0], ['\u103B', 1], ['\u103C', 3], ['\u103D', 4], ['@kx', 5]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 3 }
                },

                // 'ှ'
                {
                    from: '\u1031\u103B([#zc])\u103D@kx',
                    to: '\u1004\u103A\u1039$1\u103C\u103E\u1031@kx',
                    minLength: 5,
                    quickTests: [['\u1031', 0], ['\u103B', 1], ['\u103D', 3], ['@kx', 4]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 3 }
                },

                // 'ွ'
                {
                    from: '\u1031\u103B([#zc])\u103C@kx',
                    to: '\u1004\u103A\u1039$1\u103C\u103D\u1031@kx',
                    minLength: 5,
                    quickTests: [['\u1031', 0], ['\u103B', 1], ['\u103C', 3], ['@kx', 4]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 3 }
                },

                // #
                {
                    from: '\u1031\u103B([#zc])@kx',
                    to: '\u1004\u103A\u1039$1\u103C\u1031@kx',
                    minLength: 4,
                    quickTests: [['\u1031', 0], ['\u103B', 1], ['@kx', 3]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 3 }
                },

                // 'ေ'
                // ...............
                //
                // \u1096 (Pasin)
                {
                    from: '\u1031([#zc])\u1096@kx',
                    to: '\u1004\u103A\u1039$1\u1039\u1010\u103D\u1031@kx',
                    minLength: 4,
                    quickTests: [['\u1031', 0], ['\u1096', 2], ['@kx', 3]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 3 }
                },

                // 'ျ' (Pasin)
                {
                    from: '\u1031([#zc])([#zplc])\u103A@kx',
                    to: '\u1004\u103A\u1039$1\u1039$2\u103B\u1031@kx',
                    minLength: 5,
                    quickTests: [['\u1031', 0], ['\u103A', 3], ['@kx', 4]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 3, gpx: 5 }
                },

                // 'ျ' (Pasin - Single)
                {
                    from: '\u1031([#zpc])\u103A@kx',
                    to: '\u1004\u103A\u1039$1\u103B\u1031@kx',
                    minLength: 4,
                    quickTests: [['\u1031', 0], ['\u103A', 2], ['@kx', 3]],
                    postRulesRef: 'ppz2u',
                    postRulesStart: { gc1: 3 }
                },

                // Pasin
                {
                    from: '\u1031([#zc])([#zplc])@kx',
                    to: '\u1004\u103A\u1039$1\u1039$2\u1031@kx',
                    minLength: 4,
                    quickTests: [['\u1031', 0], ['@kx', 3]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 3, gpx: 5 }
                },

                // Pasin (Single)
                {
                    from: '\u1031([#zpc])@kx',
                    to: '\u1004\u103A\u1039$1\u1031@kx',
                    minLength: 3,
                    quickTests: [['\u1031', 0], ['@kx', 2]],
                    postRulesRef: 'ppz2u',
                    postRulesStart: { gc1: 3 }
                },

                // 'ျ' + 'ွှ'
                {
                    from: '\u1031([#zc])\u103A\u103C\u103D@kx',
                    to: '\u1004\u103A\u1039$1\u103B\u103D\u103E\u1031@kx',
                    minLength: 6,
                    quickTests: [['\u1031', 0], ['\u103A', 2], ['\u103C', 3], ['\u103D', 4], ['@kx', 5]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 3 }
                },

                // 'ျ' + 'ှ'
                {
                    from: '\u1031([#zc])\u103A\u103D@kx',
                    to: '\u1004\u103A\u1039$1\u103B\u103E\u1031@kx',
                    minLength: 5,
                    quickTests: [['\u1031', 0], ['\u103A', 2], ['\u103D', 3], ['@kx', 4]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 3 }
                },

                // 'ျ' + 'ွ'
                {
                    from: '\u1031([#zc])\u103A\u103C@kx',
                    to: '\u1004\u103A\u1039$1\u103B\u103D\u1031@kx',
                    minLength: 5,
                    quickTests: [['\u1031', 0], ['\u103A', 2], ['\u103C', 3], ['@kx', 4]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 3 }
                },

                // 'ျ'
                {
                    from: '\u1031([#zc])\u103A@kx',
                    to: '\u1004\u103A\u1039$1\u103B\u1031@kx',
                    minLength: 4,
                    quickTests: [['\u1031', 0], ['\u103A', 2], ['@kx', 3]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 3 }
                },

                // 'ွှ'
                {
                    from: '\u1031([#zc])\u103C\u103D@kx',
                    to: '\u1004\u103A\u1039$1\u103D\u103E\u1031@kx',
                    minLength: 5,
                    quickTests: [['\u1031', 0], ['\u103C', 2], ['\u103D', 3], ['@kx', 4]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 3 }
                },

                // 'ှ'
                {
                    from: '\u1031([#zc])\u103D@kx',
                    to: '\u1004\u103A\u1039$1\u103E\u1031@kx',
                    minLength: 4,
                    quickTests: [['\u1031', 0], ['\u103D', 2], ['@kx', 3]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 3 }
                },

                // 'ွ'
                {
                    from: '\u1031([#zc])\u103C@kx',
                    to: '\u1004\u103A\u1039$1\u103D\u1031@kx',
                    minLength: 4,
                    quickTests: [['\u1031', 0], ['\u103C', 2], ['@kx', 3]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 3 }
                },

                // #
                {
                    from: '\u1031([#zc])@kx',
                    to: '\u1004\u103A\u1039$1\u1031@kx',
                    minLength: 3,
                    quickTests: [['\u1031', 0], ['@kx', 2]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 3 }
                },

                // 'ြ'
                // ...............
                //
                // \u1096 (Pasin)
                {
                    from: '\u103B([#zc])\u1096@kx',
                    to: '\u1004\u103A\u1039$1\u1039\u1010\u103C\u103D@kx',
                    minLength: 4,
                    quickTests: [['\u103B', 0], ['\u1096', 2], ['@kx', 3]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 3 }
                },

                // Pasin
                {
                    from: '\u103B([#zc])([#zplc])@kx',
                    to: '\u1004\u103A\u1039$1\u1039$2\u103C@kx',
                    minLength: 4,
                    quickTests: [['\u103B', 0], ['@kx', 3]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 3, gpx: 5 }
                },

                // Pasin (Single)
                {
                    from: '\u103B([#zpc])@kx',
                    to: '\u1004\u103A\u1039$1\u103C@kx',
                    minLength: 3,
                    quickTests: [['\u103B', 0], ['@kx', 2]],
                    postRulesRef: 'ppz2u',
                    postRulesStart: { gc1: 3 }
                },

                // 'ွှ'
                {
                    from: '\u103B([#zc])\u103C\u103D@kx',
                    to: '\u1004\u103A\u1039$1\u103C\u103D\u103E@kx',
                    minLength: 5,
                    quickTests: [['\u103B', 0], ['\u103C', 2], ['\u103D', 3], ['@kx', 4]],
                    postRulesRef: 'ppz2u',
                    postRulesStart: { gc1: 3 }
                },

                // 'ှ'
                {
                    from: '\u103B([#zc])\u103D@kx',
                    to: '\u1004\u103A\u1039$1\u103C\u103E@kx',
                    minLength: 4,
                    quickTests: [['\u103B', 0], ['\u103D', 2], ['@kx', 3]],
                    postRulesRef: 'ppz2u',
                    postRulesStart: { gc1: 3 }
                },

                // 'ွ'
                {
                    from: '\u103B([#zc])\u103C@kx',
                    to: '\u1004\u103A\u1039$1\u103C\u103D@kx',
                    minLength: 4,
                    quickTests: [['\u103B', 0], ['\u103C', 2], ['@kx', 3]],
                    postRulesRef: 'ppz2u',
                    postRulesStart: { gc1: 3 }
                },

                // #
                {
                    from: '\u103B([#zc])@kx',
                    to: '\u1004\u103A\u1039$1\u103C@kx',
                    minLength: 3,
                    quickTests: [['\u103B', 0], ['@kx', 2]],
                    postRulesRef: 'ppz2u',
                    postRulesStart: { gc1: 3 }
                },

                // [ွှ  ွ  ှ]
                // ...............
                //
                // 'ျ' + 'ွှ'
                {
                    from: '([#zc])\u103A\u103C\u103D@kx',
                    to: '\u1004\u103A\u1039$1\u103B\u103D\u103E@kx',
                    minLength: 5,
                    quickTests: [['\u103A', 1], ['\u103C', 2], ['\u103D', 3], ['@kx', 4]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 3 }
                },

                // 'ွှ'
                {
                    from: '([#zc])\u103C\u103D@kx',
                    to: '\u1004\u103A\u1039$1\u103D\u103E@kx',
                    minLength: 4,
                    quickTests: [['\u103C', 1], ['\u103D', 2], ['@kx', 3]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 3 }
                },

                // 'ျ' + 'ှ'
                {
                    from: '([#zc])\u103A\u103D@kx',
                    to: '\u1004\u103A\u1039$1\u103B\u103E@kx',
                    minLength: 4,
                    quickTests: [['\u103A', 1], ['\u103D', 2], ['@kx', 3]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 3 }
                },

                // 'ှ'
                {
                    from: '([#zc])\u103D@kx',
                    to: '\u1004\u103A\u1039$1\u103E@kx',
                    minLength: 3,
                    quickTests: [['\u103D', 1], ['@kx', 2]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 3 }
                },

                // 'ျ' + 'ွ'
                {
                    from: '([#zc])\u103A\u103C@kx',
                    to: '\u1004\u103A\u1039$1\u103B\u103D@kx',
                    minLength: 4,
                    quickTests: [['\u103A', 1], ['\u103C', 2], ['@kx', 3]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 3 }
                },

                // 'ွ' (Pasin \u1096)
                {
                    from: '([#zc])\u1096@kx',
                    to: '\u1004\u103A\u1039$1\u1039\u1010\u103D@kx',
                    minLength: 3,
                    quickTests: [['\u1096', 1], ['@kx', 2]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 3 }
                },

                // 'ွ'
                {
                    from: '([#zc])\u103C@kx',
                    to: '\u1004\u103A\u1039$1\u103D@kx',
                    minLength: 3,
                    quickTests: [['\u103C', 1], ['@kx', 2]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 3 }
                },

                // 'ျ'
                // ...............
                //
                // Pasin
                {
                    from: '([#zc])([#zplc])\u103A@kx',
                    to: '\u1004\u103A\u1039$1\u1039$2\u103B@kx',
                    minLength: 4,
                    quickTests: [['\u103A', 2], ['@kx', 3]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 3, gpx: 5 }
                },

                // Pasin (Single)
                {
                    from: '([#zpc])\u103A@kx',
                    to: '\u1004\u103A\u1039$1\u103B@kx',
                    minLength: 3,
                    quickTests: [['\u103A', 1], ['@kx', 2]],
                    postRulesRef: 'ppz2u',
                    postRulesStart: { gc1: 3 }
                },

                // #
                {
                    from: '([#zc])\u103A@kx',
                    to: '\u1004\u103A\u1039$1\u103B@kx',
                    minLength: 3,
                    quickTests: [['\u103A', 1], ['@kx', 2]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 3 }
                },

                // #
                // ...............
                //
                // Pasin
                {
                    from: '([#zc])([#zplc])@kx',
                    to: '\u1004\u103A\u1039$1\u1039$2@kx',
                    minLength: 3,
                    quickTests: [['@kx', 2]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 3, gpx: 5 }
                },

                // Pasin (Single)
                {
                    from: '([#zpc])@kx',
                    to: '\u1004\u103A\u1039$1@kx',
                    minLength: 2,
                    quickTests: [['@kx', 1]],
                    postRulesRef: 'ppz2u',
                    postRulesStart: { gc1: 3 }
                },

                // #zc
                {
                    from: '([#zc])@kx',
                    to: '\u1004\u103A\u1039$1@kx',
                    minLength: 2,
                    quickTests: [['@kx', 1]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 3 }
                },

                // @kx
                {
                    from: '@kx',
                    to: '\u1004\u103A\u1039@kx',
                    minLength: 1,
                    quickTests: [['@kx', 0]]
                },

                // 'ေ' + 'ြ'
                // ------------------------------------------------------------------------------------------
                // 'ွှ'
                // ...............
                //
                {
                    from: '\u1031\u103B([#zc])\u103C\u103D',
                    to: '$1\u103C\u103D\u103E\u1031',
                    minLength: 5,
                    quickTests: [['\u1031', 0], ['\u103B', 1], ['\u103C', 3], ['\u103D', 4]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 0 }
                },

                // 'ှ'
                // ...............
                //
                {
                    from: '\u1031\u103B([#zc])\u103D',
                    to: '$1\u103C\u103E\u1031',
                    minLength: 4,
                    quickTests: [['\u1031', 0], ['\u103B', 1], ['\u103D', 3]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 0 }
                },

                // 'ွ'
                // ...............
                //
                // Pasin (\u1096)
                {
                    from: '\u1031\u103B([#zc])\u1096',
                    to: '$1\u1039\u1010\u103C\u103D\u1031',
                    minLength: 4,
                    quickTests: [['\u1031', 0], ['\u103B', 1], ['\u1096', 3]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 0 }
                },

                // 'ွ'
                {
                    from: '\u1031\u103B([#zc])\u103C',
                    to: '$1\u103C\u103D\u1031',
                    minLength: 4,
                    quickTests: [['\u1031', 0], ['\u103B', 1], ['\u103C', 3]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 0 }
                },

                // #
                // ...............
                //
                // Pasin
                {
                    from: '\u1031\u103B([#zc])([#zplc])',
                    to: '$1\u1039$2\u103C\u1031',
                    minLength: 4,
                    quickTests: [['\u1031', 0], ['\u103B', 1]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 0, gpx: 2 }
                },

                // Pasin (Single)
                {
                    from: '\u1031\u103B([#zpc])',
                    to: '$1\u103C\u1031',
                    minLength: 3,
                    quickTests: [['\u1031', 0], ['\u103B', 1]],
                    postRulesRef: 'ppz2u',
                    postRulesStart: { gc1: 0 }
                },

                // #
                {
                    from: '\u1031\u103B([#zc])',
                    to: '$1\u103C\u1031',
                    minLength: 3,
                    quickTests: [['\u1031', 0], ['\u103B', 1]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 0 }
                },

                // 'ေ'
                // ------------------------------------------------------------------------------------------
                // 'ျ' + 'ွှ'
                // ...............
                //
                {
                    from: '\u1031([#zc])\u103A\u103C\u103D',
                    to: '$1\u103B\u103D\u103E\u1031',
                    minLength: 5,
                    quickTests: [['\u1031', 0], ['\u103A', 2], ['\u103C', 3], ['\u103D', 4]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 0 }
                },

                // 'ွှ'
                // ...............
                //
                {
                    from: '\u1031([#zc])\u103C\u103D',
                    to: '$1\u103D\u103E\u1031',
                    minLength: 4,
                    quickTests: [['\u1031', 0], ['\u103C', 2], ['\u103D', 3]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 0 }
                },

                // 'ျ' + 'ှ'
                // ...............
                //
                {
                    from: '\u1031([#zc])\u103A\u103D',
                    to: '$1\u103B\u103E\u1031',
                    minLength: 4,
                    quickTests: [['\u1031', 0], ['\u103A', 2], ['\u103D', 3]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 0 }
                },

                // 'ှ'
                // ...............
                //
                {
                    from: '\u1031([#zc])\u103D',
                    to: '$1\u103E\u1031',
                    minLength: 3,
                    quickTests: [['\u1031', 0], ['\u103D', 2]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 0 }
                },

                // 'ျ' + 'ွ'
                // ...............
                //
                {
                    from: '\u1031([#zc])\u103A\u103C',
                    to: '$1\u103B\u103D\u1031',
                    minLength: 4,
                    quickTests: [['\u1031', 0], ['\u103A', 2], ['\u103C', 3]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 0 }
                },

                // 'ွ'
                // ...............
                //
                // Pasin (\u1096)
                {
                    from: '\u1031([#zc])\u1096',
                    to: '$1\u1039\u1010\u103D\u1031',
                    minLength: 3,
                    quickTests: [['\u1031', 0], ['\u1096', 2]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 0 }
                },

                // 'ွ'
                {
                    from: '\u1031([#zc])\u103C',
                    to: '$1\u103D\u1031',
                    minLength: 3,
                    quickTests: [['\u1031', 0], ['\u103C', 2]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 0 }
                },

                // 'ျ'
                // ...............
                //
                // Pasin
                {
                    from: '\u1031([#zc])([#zplc])\u103A',
                    to: '$1\u1039$2\u103B\u1031',
                    minLength: 4,
                    quickTests: [['\u1031', 0], ['\u103A', 3]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 0, gpx: 2 }
                },

                // Pasin (Single)
                {
                    from: '\u1031([#zpc])\u103A',
                    to: '$1\u103B\u1031',
                    minLength: 3,
                    quickTests: [['\u1031', 0], ['\u103A', 2]],
                    postRulesRef: 'ppz2u',
                    postRulesStart: { gc1: 0 }
                },

                // 'ျ'
                {
                    from: '\u1031([#zc])\u103A',
                    to: '$1\u103B\u1031',
                    minLength: 3,
                    quickTests: [['\u1031', 0], ['\u103A', 2]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 0 }
                },

                // #
                // ...............
                //
                // Pasin
                {
                    from: '\u1031([#zc])([#zplc])',
                    to: '$1\u1039$2\u1031',
                    minLength: 3,
                    quickTests: [['\u1031', 0]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 0, gpx: 2 }
                },

                // Pasin (Single)
                {
                    from: '\u1031([#zpc])',
                    to: '$1\u1031',
                    minLength: 2,
                    quickTests: [['\u1031', 0]],
                    postRulesRef: 'ppz2u',
                    postRulesStart: { gc1: 0 }
                },

                // 'ေ'
                {
                    from: '\u1031([#zc])',
                    to: '$1\u1031',
                    minLength: 2,
                    quickTests: [['\u1031', 0]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 0 }
                },

                // 'ြ'
                // ------------------------------------------------------------------------------------------
                // #
                // Pasin (\u1096)
                {
                    from: '\u103B([#zc])\u1096',
                    to: '$1\u1039\u1010\u103C\u103D',
                    minLength: 3,
                    quickTests: [['\u103B', 0], ['\u1096', 2]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 0 }
                },

                // Pasin
                {
                    from: '\u103B([#zc])([#zplc])',
                    to: '$1\u1039$2\u103C',
                    minLength: 3,
                    quickTests: [['\u103B', 0]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 0, gpx: 2 }
                },

                // Pasin (Single)
                {
                    from: '\u103B([#zpc])',
                    to: '$1\u103C',
                    minLength: 2,
                    quickTests: [['\u103B', 0]],
                    postRulesRef: 'ppz2u',
                    postRulesStart: { gc1: 0 }
                },

                // 'ြ'
                {
                    from: '\u103B([#zc])',
                    to: '$1\u103C',
                    minLength: 2,
                    quickTests: [['\u103B', 0]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 0 }
                },

                // Pasin
                // ------------------------------------------------------------------------------------------
                // ([#zc]) + \u1096
                // ...............
                //
                {
                    from: '([#zc])\u1096',
                    to: '$1\u1039\u1010\u103D',
                    minLength: 2,
                    quickTests: [['\u1096', 1]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 0 }
                },

                // #
                // ...............
                //
                // ([#zc])([#zplc])
                {
                    from: '([#zc])([#zplc])',
                    to: '$1\u1039$2',
                    minLength: 2,
                    quickTests: [['', 2]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 0, gpx: 2 }
                },

                // ([#zpc])
                {
                    from: '([#zpc])',
                    to: '$1',
                    minLength: 1,
                    quickTests: [['', 1]],
                    postRulesRef: 'ppz2u',
                    postRulesStart: { gc1: 0 }
                },

                // \u1096
                // ...............
                //
                {
                    from: '\u1096',
                    to: '\u1039\u1010\u103D',
                    minLength: 1,
                    quickTests: [['\u1096', 0]]
                },

                // ([#zplc])
                // ...............
                //
                {
                    from: '([#zplc])',
                    to: '\u1039$1',
                    minLength: 1
                },

                // 'း'
                // ------------------------------------------------------------------------------------------
                // '၎င်း'
                {
                    from: '\u104E',
                    to: '\u104E\u1004\u103A\u1038',
                    minLength: 1,
                    quickTests: [['\u104E', 0]]
                },
                {
                    from: '\u1044\u1004\u1039\u1038',
                    to: '\u104E\u1004\u103A\u1038',
                    minLength: 4,
                    quickTests: [['\u1044', 0], ['\u1004', 1], ['\u1039', 2], ['\u1038', 3]]
                },

                // 'ဝင်း'
                {
                    from: '\u1040\u1004\u1039\u1038',
                    to: '\u101D\u1004\u103A\u1038',
                    minLength: 4,
                    quickTests: [['\u1040', 0], ['\u1004', 1], ['\u1039', 2], ['\u1038', 3]]
                },

                // [ဉ  ဥ]
                // ------------------------------------------------------------------------------------------
                // 'ဥုံ'
                {
                    from: '\u1009(\u102F\u1036)',
                    to: '\u1025$1',
                    minLength: 3,
                    quickTests: [['\u1009', 0], ['\u102F', 1], ['\u1036', 2]]
                },

                // 'ဉာ'
                {
                    from: '\u1025\u102C',
                    to: '\u1009\u102C',
                    minLength: 2,
                    quickTests: [['\u1025', 0], ['\u102C', 1]]
                },
                {
                    from: '\u1025\u102B',
                    to: '\u1009\u102B',
                    minLength: 2,
                    quickTests: [['\u1025', 0], ['\u102B', 1]]
                },

                // 'ဉ့်'
                {
                    from: '\u1025\u1039\u1037',
                    to: '\u1009\u103A\u1037',
                    minLength: 3,
                    quickTests: [['\u1025', 0], ['\u1039', 1], ['\u1037', 2]]
                },
                {
                    from: '\u1025\u1037\u1039',
                    to: '\u1009\u1037\u103A',
                    minLength: 3,
                    quickTests: [['\u1025', 0], ['\u1037', 1], ['\u1039', 2]]
                },

                // 'ဉ်'
                {
                    from: '\u1025\u1039',
                    to: '\u1009\u103A',
                    minLength: 2,
                    quickTests: [['\u1025', 0], ['\u1039', 1]]
                },

                // 'ဉတ်'
                {
                    from: '\u1025\u1010\u1039',
                    to: '\u1009\u1010\u103A',
                    minLength: 3,
                    quickTests: [['\u1025', 0], ['\u1010', 1], ['\u1039', 2]]
                },

                // 'ဉ' + [\u1000-\u1021] + '်'
                {
                    from: '\u1025([\u1000-\u1021\u103F])\u1039',
                    to: '\u1009$1\u103A',
                    minLength: 3,
                    quickTests: [['\u1025', 0], ['\u1039', 2]]
                },

                // 'ဝ' (သုည '၀' မှ ဝလုံး 'ဝ')
                // ------------------------------------------------------------------------------------------
                {
                    description: "သုည '၀' + ' ီ  ု  ူ  ံ  ှ  ျ ...' မှ ဝလုံး 'ဝ' + ... သို့, Note \u102B ... \u103E are Unicode",
                    from: '\u1040([\u102B\u102C\u102E\u102F\u1030\u1032\u1036\u1037\u1039\u103A\u103B\u103D\u103E])',
                    to: '\u101D$1'
                },
                {
                    description: "သုည '၀' + 'ိ' + [ုူှ ...] မှ ဝလုံး 'ဝ' + ... သို့, Note \u102E ... \u103E are Unicode",
                    from: '\u1040(\u102D[\u102E\u102F\u1030\u1036\u1037\u1038\u1039\u103B\u103D\u103E])',
                    to: '\u101D$1'
                },
                {
                    description: "သုည '၀' + 'ိ' + '၍' မှ ဝလုံး 'ဝ' + ... သို့, Note \u102D\u104D are Unicode",
                    from: '\u1040(\u102D\u104D)',
                    to: '\u101D$1'
                },
                {
                    description: "သုည '၀' + [က-အဥဿ] + '်'... မှ ဝလုံး 'ဝ' + ... သို့, Note [\u1000-\u1021\u1025\u103F] \u103A are Unicode",
                    from: '\u1040([\u1000-\u1021\u1025\u103F]\u103A)',
                    to: '\u101D$1'
                },
                {
                    description: "သုည '၀' + [က-အဥဿ] + 'း' + '်'... မှ ဝလုံး 'ဝ' + ... သို့, Note [\u1000-\u1021\u1025\u103F] \u1037\u103A are Unicode",
                    from: '\u1040([\u1000-\u1021\u1025\u103F])(\u1037\u103A)',
                    to: '\u101D$1$2'
                },
                {
                    description: "သုည '၀ပြောသာယာ' မှ ဝလုံး 'ဝပြောသာယာ' သို့, Note \u103C is Unicode",
                    from: '\u1040(\u1031\u103C\u1015\u102C\u101E\u102C\u101A\u102C)',
                    to: '\u101D$1'
                },
                {
                    description: "သုည '၀ရဇိန်' မှ ဝလုံး 'ဝရဇိန်' သို့, Note \u103A is Unicode",
                    from: '\u1040(\u101B\u1007\u102D\u1014\u103A)',
                    to: '\u101D$1'
                },
                {
                    description: "သုည '၀ရီး' မှ ဝလုံး 'ဝရီး' သို့",
                    from: '\u1040(\u101B\u102E\u1038)',
                    to: '\u101D$1'
                },
                {
                    description: "သုည '၀ရန်တာ' မှ ဝလုံး 'ဝရန်တာ' သို့, Note \u103A... is Unicode",
                    from: '\u1040(\u101B\u1014\u103A\u1010\u102C)',
                    to: '\u101D$1'
                },
                {
                    description: "သုည '၀ရုန်းသုန်းကား' မှ ဝလုံး 'ဝရုန်းသုန်းကား' သို့, Note \u102F\u103A... are Unicode",
                    from: '\u1040(\u1090\u102F\u1014\u103A\u1038\u101E\u102F\u1014\u103A\u1038\u1000\u102C\u1038)',
                    to: '\u101D$1'
                },
                {
                    description: "သုည '၀ရမ်းပြေး' မှ ဝလုံး 'ဝရမ်းပြေး' သို့, Note \u103A\u103C... are Unicode",
                    from: '\u1040(\u101B\u1019\u103A\u1038\u1031\u103C\u1015\u1038)',
                    to: '\u101D$1'
                },
                {
                    description: "သုည '၀လုံးအက္ခရာ' မှ ဝလုံး 'ဝလုံးအက္ခရာ' သို့, Note \u1039\u1001... are Unicode",
                    from: '\u1040(\u101C\u1036\u102F\u1038\u1021\u1000\u1039\u1001\u101B\u102C)',
                    to: '\u101D$1'
                },
                {
                    description: "သုည '၀လုံးအက္ခရာ' မှ ဝလုံး 'ဝလုံးအက္ခရာ' သို့, Note \u1039\u1001... are Unicode",
                    from: '\u1040(\u101C\u102F\u1036\u1038\u1021\u1000\u1039\u1001\u101B\u102C)',
                    to: '\u101D$1'
                },
                {
                    description: "သုည '၀ဝတုတ်တုတ်' မှ ဝလုံး 'ဝဝတုတ်တုတ်' သို့, Note \u103A... are Unicode",
                    from: '\u1040\u1040(\u1010\u102F\u1010\u103A\u1010\u102F\u1010\u103A)',
                    to: '\u101D\u101D$1'
                },
                {
                    description: "သုည '၀သန်ကာလ' မှ ဝလုံး 'ဝသန်ကာလ' သို့, Note \u103A... are Unicode",
                    from: '\u1040(\u101E\u1014\u103A\u1000\u102C\u101C)',
                    to: '\u101D$1'
                },
                {
                    description: "သုည '၀သန္တ' မှ ဝလုံး 'ဝသန္တ' သို့, Note\u1014\u1039\u1010... are Unicode",
                    from: '\u1040(\u101E\u1014\u1039\u1010)',
                    to: '\u101D$1'
                },
                {
                    description: "သုည '၀ဟည်းပင်' မှ ဝလုံး 'ဝဟည်းပင်' သို့, Note \u103A... are Unicode",
                    from: '\u1040(\u101F\u100A\u103A\u1038\u1015\u1004\u103A)',
                    to: '\u101D$1'
                },
                {
                    description: "သုည '၀ဆွဲ' မှ ဝလုံး 'ဝဆွဲ' သို့, Note \u103D... are Unicode",
                    from: '\u1040(\u1006\u103D\u1032)',
                    to: '\u101D$1'
                },
                {
                    description: "သုည '၀ိဂြိုဟ်' မှ ဝလုံး 'ဝိြိုဟ်' သို့, Note \u103C\u102F\u103A are Unicode",
                    from: '\u1040(\u102D\u103C\u1002\u102D\u102F\u101F\u103A)',
                    to: '\u101D$1'
                },
                {
                    description: "သုည '၀ိညာဉ်' မှ ဝလုံး 'ဝိညာဉ်' သို့, Note \u1009\u103A are Unicode",
                    from: '\u1040(\u102D\u100A\u102C\u1009\u103A)',
                    to: '\u101D$1'
                },
                {
                    description: "သုည '၀ိဓူရ' မှ ဝလုံး 'ဝိဓူရ' သို့",
                    from: '\u1040(\u102D\u1013\u1030\u101B)',
                    to: '\u101D$1'
                },
                {
                    description: "သုည '၀ိနည်း' မှ ဝလုံး 'ဝိနည်း' သို့, Note \u103A... are Unicode",
                    from: '\u1040(\u102D\u1014\u100A\u103A\u1038)',
                    to: '\u101D$1'
                },
                {
                    description: "သုည '၀ိပါက်လိုက်' မှ ဝလုံး 'ဝိပါက်လိုက်' သို့, Note \u103A... are Unicode",
                    from: '\u1040(\u102D\u1015\u102B\u1000\u103A\u101C\u102D\u102F\u1000\u103A)',
                    to: '\u101D$1'
                },
                {
                    description: "သုည '၀ိပဿနာ' မှ ဝလုံး 'ဝိပဿနာ' သို့, Note \u103F... are Unicode",
                    from: '\u1040(\u102D\u1015\u103F\u1014\u102C)',
                    to: '\u101D$1'
                },
                {
                    description: "သုည '၀ိဘတ်' မှ ဝလုံး 'ဝိဘတ်' သို့, Note \u103A... are Unicode",
                    from: '\u1040(\u102D\u1018\u1010\u103A)',
                    to: '\u101D$1'
                },
                {
                    description: "သုည '၀ိရောဓိ' မှ ဝလုံး 'ဝိရောဓိ' သို့",
                    from: '\u1040(\u102D\u1031\u101B\u102C\u1013\u102D)',
                    to: '\u101D$1'
                },
                {
                    description: "သုည '၀ိသကြုံ' မှ ဝလုံး 'ဝိသကြုံ' သို့, Note \u103C\u102F... are Unicode",
                    from: '\u1040(\u102D\u101E\u103C\u1000\u1036\u102F)',
                    to: '\u101D$1'
                },
                {
                    description: "သုည '၀ိသကြုံ' မှ ဝလုံး 'ဝိသကြုံ' သို့, Note \u103C\u102F... are Unicode",
                    from: '\u1040(\u102D\u101E\u103C\u1000\u102F\u1036)',
                    to: '\u101D$1'
                },
                {
                    description: "သုည '၀ိသမ' မှ ဝလုံး 'ဝိသမ' သို့",
                    from: '\u1040(\u102D\u101E\u1019)',
                    to: '\u101D$1'
                },
                {
                    description: "သုည '၀ိသာခါ' မှ ဝလုံး 'ဝိသာခါ' သို့",
                    from: '\u1040(\u102D\u101E\u102C\u1001\u102B)',
                    to: '\u101D$1'
                },
                {
                    description: "သုည '၀ိသဇ္ဇနီ' မှ ဝလုံး 'ဝိသဇ္ဇနီ' သို့, \u1039\u1007... are Unicode",
                    from: '\u1040(\u102D\u101E\u1007\u1039\u1007\u1014\u102E)',
                    to: '\u101D$1'
                },

                //
                {
                    description: 'ဂဏန်း thousand seperator နှင့် ဒသမ',
                    from: '[\u1040-\u1049]{1,3}([\u002C\u066B\u066C\u2396][\u1040-\u1049]{3})+\u002E[\u1040-\u1049]+'
                },
                {
                    description: "ဂဏန်း thousand seperator + 'ိ'",
                    from: '[\u1040-\u1049]{1,3}([\u002C\u066B\u066C\u2396][\u1040-\u1049]{3})+\u102D'
                },
                {
                    description: 'ဂဏန်း thousand seperator',
                    from: '[\u1040-\u1049]{1,3}([\u002C\u066B\u066C\u2396][\u1040-\u1049]{3})+'
                },
                {
                    description: 'ဂဏန်း နှင့် ဒသမ',
                    from: '[\u1040-\u1049]+\u002E[\u1040-\u1049]+'
                },
                {
                    description: "ဂဏန်း (2 or more) + 'ိ'",
                    from: '[\u1041-\u1049]+[\u1040-\u1049]+\u102D'
                },
                {
                    description: "သုည '၀' + 'ိ' မှ ဝလုံး 'ဝ' + 'ိ' သို့",
                    from: '\u1040\u102D',
                    to: '\u101D\u102D'
                },
                {
                    description: "သုည '၀၀' မှ ဝလုံး 'ဝဝ' သို့",
                    from: '([^\u1040-\u1049])\u1040\u1040([^\u1040-\u1049])',
                    to: '$1\u101D\u101D$2'
                },
                {
                    description: "သုည '၀၀' မှ ဝလုံး 'ဝဝ' သို့",
                    from: '([^\u1040-\u1049])\u1040\u1040$',
                    to: '$1\u101D\u101D'
                },
                {
                    description: "သုည '၀၀' မှ ဝလုံး 'ဝဝ' သို့",
                    from: '\u1040\u1040([^\u1040-\u1049])',
                    to: '\u101D\u101D$1'
                },
                {
                    description: "သုည '၀' + Non digit မှ ဝလုံး 'ဝ' + ... သို့",
                    from: '\u1040([^\u1040-\u1049])',
                    to: '\u101D$1'
                },
                {
                    description: "Non digit + သုည '၀' မှ ... + ဝလုံး 'ဝ' သို့",
                    from: '([^\u1040-\u1049])\u1040$',
                    to: '$1\u101D'
                },

                // Others
                // // ------------------------------------------------------------------------------------------
                {
                    from: '\u1039',
                    to: '\u103A'
                },
                {
                    from: '\u103A',
                    to: '\u103B'
                },
                {
                    from: '\u103B',
                    to: '\u103C'
                },
                {
                    from: '\u103C',
                    to: '\u103D'
                },
                {
                    from: '\u103D',
                    to: '\u103E'
                },
            ]
        }
    ]
};
