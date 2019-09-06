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
            skip: {
                fixOverlappedChars: false
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
            skip: {
                convertSingleForm: false
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
            description: 'Fix extra space normalization phase',
            skip: {
                fixExtraSpace: false
            },
            tplVar: {
                '#s': ' \u00A0\u1680\u2000-\u200D\u202F\u205F\u2060\u3000\uFEFF',
                '#c1': '\u1000-\u1021\u1023-\u1027\u1029\u102A\u103F\u1040\u1044\u106A\u106B\u106E\u106F\u1086\u108F-\u1092\u1097',
                '#ac': '\u102B-\u1030\u1032-\u1034\u1036-\u103A\u103C\u103D\u105A\u1060-\u1069\u106C\u106D\u1070-\u107D\u1085\u1087-\u108E\u1093-\u1096'
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
                prs: [
                    {
                        from: '[#s]+',
                        to: ''
                    }
                ]
            },
            rules: [
                {
                    from: '\u1031[@sx]+\u103B[#s]*([#c1])[#s]*([#ac])*(([#s]*[#ac])*)',
                    to: '\u1031@sx\u103B$1$2$3',
                    minLength: 4,
                    quickTests: [['\u1031', 0], ['@sx', 1]],
                    postRulesRef: 'prs',
                    postRulesStrategy: 'whileMatch'
                },
                {
                    from: '\u1031\u103B[@sx]+([#c1])[#s]*([#ac])*(([#s]*[#ac])*)',
                    to: '\u1031\u103B@sx$1$2$3',
                    minLength: 4,
                    quickTests: [['\u1031', 0], ['\u103B', 1], ['@sx', 2]],
                    postRulesRef: 'prs',
                    postRulesStrategy: 'whileMatch'
                },
                 {
                    from: '\u1031[@sx]+([#c1])[#s]*([#ac])*(([#s]*[#ac])*)',
                    to: '\u1031@sx$1$2$3',
                    minLength: 3,
                    quickTests: [['\u1031', 0], ['@sx', 1]],
                    postRulesRef: 'prs',
                    postRulesStrategy: 'whileMatch'
                },
                {
                    from: '\u103B[@sx]+([#c1])[#s]*([#ac])*(([#s]*[#ac])*)',
                    to: '\u103B@sx$1$2$3',
                    minLength: 3,
                    quickTests: [['\u103B', 0], ['@sx', 1]],
                    postRulesRef: 'prs',
                    postRulesStrategy: 'whileMatch'
                },
                {
                    from: '([#c1])[@sx]+([#ac])(([#s]*[#ac])*)',
                    to: '$1@sx$2$3',
                    minLength: 3,
                    quickTests: [['@sx', 1]],
                    postRulesRef: 'prs',
                    postRulesStrategy: 'whileMatch'
                },
                {
                    from: '([#c1])([#ac])[@sx]+([#ac])(([#s]*[#ac])*)',
                    to: '$1$2@sx$3$4',
                    minLength: 4,
                    quickTests: [['@sx', 2]],
                    postRulesRef: 'prs',
                    postRulesStrategy: 'whileMatch'
                },
                {
                    from: '([#c1])([#ac])([#ac])[@sx]+([#ac])(([#s]*[#ac])*)',
                    to: '$1$2$3@sx$4$5',
                    minLength: 5,
                    quickTests: [['@sx', 3]],
                    postRulesRef: 'prs',
                    postRulesStrategy: 'whileMatch'
                },
                {
                    from: '([#c1])([#ac])([#ac])([#ac])[@sx]+([#ac])(([#s]*[#ac])*)',
                    to: '$1$2$3$4@sx$5$6',
                    minLength: 6,
                    quickTests: [['@sx', 4]],
                    postRulesRef: 'prs',
                    postRulesStrategy: 'whileMatch'
                },
                {
                    from: '([#c1])([#ac])([#ac])([#ac])([#ac])[@sx]+([#ac])(([#s]*[#ac])*)',
                    to: '$1$2$3$4$5@sx$6$7',
                    minLength: 7,
                    quickTests: [['@sx', 5]],
                    postRulesRef: 'prs',
                    postRulesStrategy: 'whileMatch'
                },
                {
                    from: '([#c1])([#ac])([#ac])([#ac])([#ac])([#ac])[@sx]+([#ac])(([#s]*[#ac])*)',
                    to: '$1$2$3$4$5$6@sx$7$8',
                    minLength: 8,
                    quickTests: [['@sx', 6]],
                    postRulesRef: 'prs',
                    postRulesStrategy: 'whileMatch'
                }
            ]
        },
        {
            description: 'Order normalization phase',
            skip: {
                sortOrder: false
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
                '#37r': '#2bOr2cr\u102B\u102C',
                '#r': '#37r\u1037-\u1039'
            },
            tplSeq: {
                '@ox': [
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
                    // '့'
                    // ...............
                    // '်' + '့'
                    {
                        from: '(\u1037)(\u1039)',
                        to: '$2$1',
                        skip: {
                            preferU1037U103a: true
                        },
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
                        from: '([\u1032\u1036])([#32Or36r\u1039])',
                        to: '$2$1'
                    },

                    // [ု  ူ]
                    // ...............
                    {
                        from: '([\u102F\u1030])([#2fOr30r\u1039])',
                        to: '$2$1'
                    },

                    // [ိ  ီ]
                    // ...............
                    {
                        from: '([\u102D\u102E])([#2dOr2er\u1039])',
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
                        from: '(\u103C)([#3cr\u1039])',
                        to: '$2$1'
                    },

                    // 'ျ'
                    // ...............
                    {
                        from: '(\u103A)([#3ar])',
                        to: '$2$1'
                    },

                    // '်'
                    // ...............
                    // '့' + '်'
                    {
                        from: '(\u1039)(\u1037)',
                        to: '$2$1',
                        when: {
                            preferU1037U103a: true
                        },
                        orGroup: 'g3739'
                    },

                    {
                        from: '(\u1039)([#3ar\u1064\u108B-\u108D\u103D\u102B\u102C\u103A])',
                        to: '$2$1'
                    }
                ]
            },
            rules: [
                {
                    from: '@ox([#r]+)',
                    to: '@ox$1',
                    minLength: 2,
                    quickTests: [['@ox', 0]],
                    postRulesRef: 'po',
                    postRulesStrategy: 'whileMatch'
                }
            ]
        },
        {
            description: 'Core Zawgyi to Unicode conversion phase',
            skip: {
                convertZg2Uni: false
            },
            tplVar: {
                '#zc': '\u1000-\u1021\u1023-\u1027\u1029\u102A\u103F\u1040-\u1049',
                '#zplc': '\u1060-\u1063\u1065-\u1069\u106C\u106D\u1070-\u107C\u1085\u1093',
                '#zpc': '\u106E\u106F\u1091\u1092\u1097'
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
                '@ppx': [
                    ['\u106E', '\u100D\u1039\u100D', 1],
                    ['\u106F', '\u100D\u1039\u100E', 1],
                    ['\u1091', '\u100F\u1039\u100D', 1],
                    ['\u1092', '\u100B\u1039\u100C', 1],
                    ['\u1097', '\u100B\u1039\u100B', 1]
                ],
                '@oz2ux': [
                    ['\u1039', '\u103A', 1],
                    ['\u103A', '\u103B', 1],
                    ['\u103B', '\u103C', 1],
                    ['\u103C', '\u103D', 1],
                    ['\u103D', '\u103E', 1]
                ]
            },
            postRulesDef: {
                pz2u: [
                    {
                        from: '\u1040',
                        to: '\u101D',
                        start: -1,
                        orGroup: 'gc1',
                        skip: {
                            fixU101d: false
                        }
                    },
                    {
                        from: '\u1025([\u102C\u1039\u103A])',
                        to: '\u1009$1',
                        start: -1,
                        orGroup: 'gc1',
                        skip: {
                            fixU1009And1025: false
                        }
                    },

                    {
                        from: '@px',
                        to: '@px',
                        start: -1,
                        orGroup: 'gpx'
                    }
                ],
                ppz2u: [
                    {
                        from: '@ppx',
                        to: '@ppx',
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
                // \u1096 (ပါဌ်ဆင့်)
                {
                    from: '\u1031\u103B([#zc])\u1096@kx',
                    to: '\u1004\u103A\u1039$1\u1039\u1010\u103C\u103D\u1031@kx',
                    minLength: 5,
                    quickTests: [['\u1031', 0], ['\u103B', 1], ['\u1096', 3], ['@kx', 4]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 3 }
                },

                // ပါဌ်ဆင့်
                {
                    from: '\u1031\u103B([#zc])([#zplc])@kx',
                    to: '\u1004\u103A\u1039$1\u1039$2\u103C\u1031@kx',
                    minLength: 5,
                    quickTests: [['\u1031', 0], ['\u103B', 1], ['@kx', 4]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 3, gpx: 5 }
                },

                // ပါဌ်ဆင့် (Single)
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
                // \u1096 (ပါဌ်ဆင့်)
                {
                    from: '\u1031([#zc])\u1096@kx',
                    to: '\u1004\u103A\u1039$1\u1039\u1010\u103D\u1031@kx',
                    minLength: 4,
                    quickTests: [['\u1031', 0], ['\u1096', 2], ['@kx', 3]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 3 }
                },

                // 'ျ' (ပါဌ်ဆင့်)
                {
                    from: '\u1031([#zc])([#zplc])\u103A@kx',
                    to: '\u1004\u103A\u1039$1\u1039$2\u103B\u1031@kx',
                    minLength: 5,
                    quickTests: [['\u1031', 0], ['\u103A', 3], ['@kx', 4]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 3, gpx: 5 }
                },

                // 'ျ' (ပါဌ်ဆင့် - Single)
                {
                    from: '\u1031([#zpc])\u103A@kx',
                    to: '\u1004\u103A\u1039$1\u103B\u1031@kx',
                    minLength: 4,
                    quickTests: [['\u1031', 0], ['\u103A', 2], ['@kx', 3]],
                    postRulesRef: 'ppz2u',
                    postRulesStart: { gc1: 3 }
                },

                // ပါဌ်ဆင့်
                {
                    from: '\u1031([#zc])([#zplc])@kx',
                    to: '\u1004\u103A\u1039$1\u1039$2\u1031@kx',
                    minLength: 4,
                    quickTests: [['\u1031', 0], ['@kx', 3]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 3, gpx: 5 }
                },

                // ပါဌ်ဆင့် (Single)
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
                // \u1096 (ပါဌ်ဆင့်)
                {
                    from: '\u103B([#zc])\u1096@kx',
                    to: '\u1004\u103A\u1039$1\u1039\u1010\u103C\u103D@kx',
                    minLength: 4,
                    quickTests: [['\u103B', 0], ['\u1096', 2], ['@kx', 3]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 3 }
                },

                // ပါဌ်ဆင့်
                {
                    from: '\u103B([#zc])([#zplc])@kx',
                    to: '\u1004\u103A\u1039$1\u1039$2\u103C@kx',
                    minLength: 4,
                    quickTests: [['\u103B', 0], ['@kx', 3]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 3, gpx: 5 }
                },

                // ပါဌ်ဆင့် (Single)
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

                // 'ွ' (ပါဌ်ဆင့် \u1096)
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
                // ပါဌ်ဆင့်
                {
                    from: '([#zc])([#zplc])\u103A@kx',
                    to: '\u1004\u103A\u1039$1\u1039$2\u103B@kx',
                    minLength: 4,
                    quickTests: [['\u103A', 2], ['@kx', 3]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 3, gpx: 5 }
                },

                // ပါဌ်ဆင့် (Single)
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
                // ပါဌ်ဆင့်
                {
                    from: '([#zc])([#zplc])@kx',
                    to: '\u1004\u103A\u1039$1\u1039$2@kx',
                    minLength: 3,
                    quickTests: [['@kx', 2]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 3, gpx: 5 }
                },

                // ပါဌ်ဆင့် (Single)
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
                // ပါဌ်ဆင့် (\u1096)
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
                // ပါဌ်ဆင့်
                {
                    from: '\u1031\u103B([#zc])([#zplc])',
                    to: '$1\u1039$2\u103C\u1031',
                    minLength: 4,
                    quickTests: [['\u1031', 0], ['\u103B', 1]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 0, gpx: 2 }
                },

                // ပါဌ်ဆင့် (Single)
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
                // ပါဌ်ဆင့် (\u1096)
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
                // ပါဌ်ဆင့်
                {
                    from: '\u1031([#zc])([#zplc])\u103A',
                    to: '$1\u1039$2\u103B\u1031',
                    minLength: 4,
                    quickTests: [['\u1031', 0], ['\u103A', 3]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 0, gpx: 2 }
                },

                // ပါဌ်ဆင့် (Single)
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
                // ပါဌ်ဆင့်
                {
                    from: '\u1031([#zc])([#zplc])',
                    to: '$1\u1039$2\u1031',
                    minLength: 3,
                    quickTests: [['\u1031', 0]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 0, gpx: 2 }
                },

                // ပါဌ်ဆင့် (Single)
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
                // ပါဌ်ဆင့် (\u1096)
                {
                    from: '\u103B([#zc])\u1096',
                    to: '$1\u1039\u1010\u103C\u103D',
                    minLength: 3,
                    quickTests: [['\u103B', 0], ['\u1096', 2]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 0 }
                },

                // ပါဌ်ဆင့်
                {
                    from: '\u103B([#zc])([#zplc])',
                    to: '$1\u1039$2\u103C',
                    minLength: 3,
                    quickTests: [['\u103B', 0]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 0, gpx: 2 }
                },

                // ပါဌ်ဆင့် (Single)
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

                // ပါဌ်ဆင့်
                // ------------------------------------------------------------------------------------------
                // ([#zc]) + \u1096
                {
                    from: '([#zc])\u1096',
                    to: '$1\u1039\u1010\u103D',
                    minLength: 2,
                    quickTests: [['\u1096', 1]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 0 }
                },

                // ([#zc]) + @px
                {
                    from: '([#zc])@px',
                    to: '$1\u1039@px',
                    minLength: 2,
                    quickTests: [['@px', 1]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 0 }
                },

                // @ppx
                {
                    from: '@ppx',
                    to: '@ppx',
                    minLength: 1,
                    quickTests: [['@ppx', 0]]
                },

                // \u1096
                {
                    from: '\u1096',
                    to: '\u1039\u1010\u103D',
                    minLength: 1,
                    quickTests: [['\u1096', 0]]
                },

                // @px
                {
                    from: '@px',
                    to: '\u1039@px',
                    minLength: 1,
                    quickTests: [['@px', 0]]
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
                    quickTests: [['\u1040', 0], ['\u1004', 1], ['\u1039', 2], ['\u1038', 3]],
                    skip: {
                        fixU101d: false
                    }
                },

                // [ဉ  ဥ]
                // ------------------------------------------------------------------------------------------
                // 'ဥုံ'
                {
                    from: '\u1009(\u102F\u1036)',
                    to: '\u1025$1',
                    minLength: 3,
                    quickTests: [['\u1009', 0], ['\u102F', 1], ['\u1036', 2]],
                    skip: {
                        fixU1009And1025: false
                    }
                },

                // 'ဉာ'
                {
                    from: '\u1025\u102C',
                    to: '\u1009\u102C',
                    minLength: 2,
                    quickTests: [['\u1025', 0], ['\u102C', 1]],
                    skip: {
                        fixU1009And1025: false
                    }
                },

                // 'ဉှ'
                {
                    from: '\u1025\u103D',
                    to: '\u1009\u103E',
                    minLength: 2,
                    quickTests: [['\u1025', 0], ['\u103D', 1]],
                    skip: {
                        fixU1009And1025: false
                    }
                },

                // 'ဉ့်'
                {
                    from: '\u1025\u1037\u1039',
                    to: '\u1009\u1037\u103A',
                    minLength: 3,
                    quickTests: [['\u1025', 0], ['\u1037', 1], ['\u1039', 2]],
                    when: {
                        preferU1037U103a: true
                    },
                    skip: {
                        fixU1009And1025: false
                    }
                },
                {
                    from: '\u1025\u1039\u1037',
                    to: '\u1009\u103A\u1037',
                    minLength: 3,
                    quickTests: [['\u1025', 0], ['\u1039', 1], ['\u1037', 2]],
                    skip: {
                        preferU1037U103a: true,
                        fixU1009And1025: false
                    }
                },

                // 'ဉ်'
                {
                    from: '\u1025\u1039',
                    to: '\u1009\u103A',
                    minLength: 2,
                    quickTests: [['\u1025', 0], ['\u1039', 1]],
                    skip: {
                        fixU1009And1025: false
                    }
                },

                // 'ဉတ်'
                {
                    from: '\u1025\u1010\u1039',
                    to: '\u1009\u1010\u103A',
                    minLength: 3,
                    quickTests: [['\u1025', 0], ['\u1010', 1], ['\u1039', 2]],
                    skip: {
                        fixU1009And1025: false
                    }
                },

                // 'ဝ'
                // ------------------------------------------------------------------------------------------
                {
                    from: '\u1040',
                    to: '\u101D',
                    minLength: 2,
                    quickTests: [['\u1040', 0]],
                    right: '[\u102B\u102C\u102E-\u1030\u1032\u1036\u1037\u1039\u103A\u103C\u103D\u104D]',
                    skip: {
                        fixU101d: false
                    }
                },
                {
                    from: '\u1040',
                    to: '\u101D',
                    minLength: 3,
                    quickTests: [['\u1040', 0]],
                    right: '\u102D[\u102B\u102C\u102F\u1030\u1032\u1036\u1037\u1038\u1039\u103A\u103C\u103D\u104D]',
                    skip: {
                        fixU101d: false
                    }
                },
                {
                    from: '\u1040',
                    to: '\u101D',
                    minLength: 3,
                    quickTests: [['\u1040', 0]],
                    hasLeft: false,
                    right: '\u1038[^\u1040-\u1049]',
                    skip: {
                        fixU101d: false
                    }
                },
                {
                    from: '\u1040',
                    to: '\u101D',
                    minLength: 3,
                    quickTests: [['\u1040', 0]],
                    left: '[^\u1040-\u1049]',
                    right: '\u1038[^\u1040-\u1049]',
                    skip: {
                        fixU101d: false
                    }
                },
                {
                    from: '\u1040',
                    to: '\u101D',
                    minLength: 2,
                    quickTests: [['\u1040', 0]],
                    hasLeft: false,
                    right: '\u102D',
                    skip: {
                        fixU101d: false
                    }
                },
                {
                    from: '\u1040',
                    to: '\u101D',
                    minLength: 2,
                    quickTests: [['\u1040', 0]],
                    left: '[^\u1040-\u1049]',
                    right: '\u102D',
                    skip: {
                        fixU101d: false
                    }
                },
                {
                    from: '\u1040',
                    to: '\u101D',
                    minLength: 2,
                    quickTests: [['\u1040', 0]],
                    hasLeft: false,
                    right: '[\u1000-\u1021\u1023-\u1027\u1029\u102A\u103F\u104A-\u104F]',
                    skip: {
                        fixU101d: false
                    }
                },
                {
                    from: '\u1040',
                    to: '\u101D',
                    minLength: 2,
                    quickTests: [['\u1040', 0]],
                    left: '[^\u1040-\u1049]',
                    right: '[\u1000-\u1021\u1023-\u1027\u1029\u102A\u103F\u104A-\u104F]',
                    skip: {
                        fixU101d: false
                    }
                },

                // Order resorting
                // ------------------------------------------------------------------------------------------
                // ' ျ' + 'ာ' + '် + 'း'
                {
                    from: '([#zc])\u103A\u102C\u1039\u1038',
                    to: '$1\u103A\u103B\u102C\u1038',
                    minLength: 5,
                    quickTests: [['\u103A', 1], ['\u102C', 2], ['\u1039', 3], ['\u1038', 4]],
                    left: '[\u102B-\u102D\u102F\u103D\u103E]'
                },

                // ' ျ' + 'ာ' + '်
                {
                    from: '([#zc])\u103A\u102C\u1039',
                    to: '$1\u103A\u103B\u102C',
                    minLength: 4,
                    quickTests: [['\u103A', 1], ['\u102C', 2], ['\u1039', 3]],
                    left: '[\u1000-\u1021\u103F][\u1031]?[\u102B-\u102D\u102F\u103D\u103E]'
                },

                // Others
                // ------------------------------------------------------------------------------------------
                {
                    from: '@oz2ux',
                    to: '@oz2ux',
                    quickTests: [['@oz2ux', 0]]
                }
            ]
        }
    ]
};
