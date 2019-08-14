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
    tplVar: {
        '#zplc': '\u1060-\u1063\u1065-\u1069\u106C\u106D\u1070-\u107C\u1085\u1093'
    },
    phases: [
        {
            description: 'Overlapped characters normalization phase',
            when: {
                fixOverlappedChars: true
            },
            tplSeq: {
                '#olx': [
                    ['\u102B', '\u102B', 6],
                    ['\u1032', '\u1032', 3],
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
                    from: '(#olx)+',
                    to: '#olx',
                    minLength: 2,
                    quickTests: [['#olx', 0], ['#olx', 1]]
                }
            ]
        },
        {
            description: 'Single form normalization phase',
            tplSeq: {
                '#94Or95x': [
                    ['\u1094', '\u1037', 1],
                    ['\u1095', '\u1037', 1]
                ],
                '#7eTo84x': [
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
                // 'ြ'
                {
                    from: '#7eTo84x',
                    to: '#7eTo84x',
                    minLength: 1,
                    quickTests: [['#7eTo84x', 0]]
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
                    from: '#94Or95x',
                    to: '#94Or95x',
                    minLength: 1,
                    quickTests: [['#94Or95x', 0]]
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
            description: 'Order normalization phase - 1',
            tplSeq: {
                '#px': [
                    ['\u1060', '\u1060', 4],
                    ['\u1065', '\u1065', 5],
                    ['\u106C', '\u106C', 2],
                    ['\u1070', '\u1070', 13],
                    ['\u1085', '\u1085', 1],
                    ['\u1093', '\u1093', 1]
                ],
            },
            rules: [
                // #px
                // ...............
                // #px + $1
                {
                    from: '([\u102D\u102E\u1032-\u1034\u1036-\u103A\u103C\u103D\u1064\u108B-\u108E])#px',
                    to: '#px$1',
                    minLength: 2,
                    quickTests: [['#px', 1]]
                },

                // Reverse
                // ...............
                // 'ွ' + 'ှ'
                {
                    from: '\u103D\u103C',
                    to: '\u103C\u103D',
                    minLength: 2,
                    quickTests: [['\u103D', 0], ['\u103C', 1]]
                },

                  // 'ွ' + 'ျ' သို့ (TODO:)
                  {
                    from: '\u103A\u103C',
                    to: '\u103C\u103A',
                    minLength: 2,
                    quickTests: [['\u103A', 0], ['\u103C', 1]]
                },

                // 'ှ' + 'ျ' သို့ (TODO:)
                {
                    from: '\u103A\u103D',
                    to: '\u103D\u103A',
                    minLength: 2,
                    quickTests: [['\u103A', 0], ['\u103D', 1]]
                },

                // 'ှ' + '့'
                {
                    from: '\u1037\u103D',
                    to: '\u103D\u1037',
                    minLength: 2,
                    quickTests: [['\u1037', 0], ['\u103D', 1]]
                },

                // [ု  ူ] + '့'
                {
                    from: '\u1037([\u102F\u1030])',
                    to: '$1\u1037',
                    minLength: 2,
                    quickTests: [['\u1037', 0]]
                },

                // 'ှ' + [ု  ူ]
                {
                    from: '([\u102F\u1030])\u103D',
                    to: '\u103D$1',
                    minLength: 2,
                    quickTests: [['\u103D', 1]]
                },

                // [ု  ူ] + 'ဲ'
                {
                    from: '\u1032([\u102F\u1030])',
                    to: '$1\u1032',
                    minLength: 2,
                    quickTests: [['\u1032', 0]]
                },

                // [ု  ူ] + 'ံ'
                {
                    from: '\u1036([\u102F\u1030])',
                    to: '$1\u1036',
                    minLength: 2,
                    quickTests: [['\u1036', 0]]
                }

                // #kx
                // ...............
            ]
        },
        {
            description: 'Order normalization phase - 2',
            tplSeq: {
                '#kx': [
                    ['\u108B', '\u108B', 1],
                    ['\u108C', '\u108C', 1],
                    ['\u108D', '\u108D', 1],
                    ['\u1064', '\u1064', 1]
                ]
            },
            rules: [
                // #kx
                // ...............
                // #kx - 'ျ', 'ွ', 'ှ'
                {
                    from: '#kx\u103C\u103D\u103A',
                    to: '\u103C\u103D\u103A#kx',
                    minLength: 4,
                    quickTests: [['#kx', 0], ['\u103C', 1], ['\u103D', 2], ['\u103A', 3]]
                },
                {
                    from: '#kx\u103A\u103C\u103D',
                    to: '\u103C\u103D\u103A#kx',
                    minLength: 4,
                    quickTests: [['#kx', 0], ['\u103A', 1], ['\u103C', 2], ['\u103D', 3]]
                },
                {
                    from: '\u103C\u103D#kx\u103A',
                    to: '\u103C\u103D\u103A#kx',
                    minLength: 4,
                    quickTests: [['\u103C', 0], ['\u103D', 1], ['#kx', 2], ['\u103A', 3]]
                },

                // #kx - 'ျ', 'ွ'
                {
                    from: '#kx\u103C\u103A',
                    to: '\u103C\u103A#kx',
                    minLength: 3,
                    quickTests: [['#kx', 0], ['\u103C', 1], ['\u103A', 2]]
                },
                {
                    from: '#kx\u103A\u103C',
                    to: '\u103C\u103A#kx',
                    minLength: 3,
                    quickTests: [['#kx', 0], ['\u103A', 1], ['\u103C', 2]]
                },
                {
                    from: '\u103C#kx\u103A',
                    to: '\u103C\u103A#kx',
                    minLength: 3,
                    quickTests: [['\u103C', 0], ['#kx', 1], ['\u103A', 2]]
                },

                // #kx - 'ျ', 'ှ'
                {
                    from: '#kx\u103D\u103A',
                    to: '\u103D\u103A#kx',
                    minLength: 3,
                    quickTests: [['#kx', 0], ['\u103D', 1], ['\u103A', 2]]
                },
                {
                    from: '#kx\u103A\u103D',
                    to: '\u103D\u103A#kx',
                    minLength: 3,
                    quickTests: [['#kx', 0], ['\u103A', 1], ['\u103D', 2]]
                },
                {
                    from: '\u103D#kx\u103A',
                    to: '\u103D\u103A#kx',
                    minLength: 3,
                    quickTests: [['\u103D', 0], ['#kx', 1], ['\u103A', 2]]
                },

                // #kx - 'ွ', 'ှ'
                {
                    from: '#kx\u103C\u103D',
                    to: '\u103C\u103D#kx',
                    minLength: 3,
                    quickTests: [['#kx', 0], ['\u103C', 1], ['\u103D', 2]]
                },

                // #kx - 'ှ', '့'
                {
                    from: '\u1037#kx\u103D',
                    to: '\u103D#kx\u1037',
                    minLength: 3,
                    quickTests: [['\u1037', 0], ['#kx', 1], ['\u103D', 2]]
                },
                {
                    from: '#kx\u103D\u1037',
                    to: '\u103D#kx\u1037',
                    minLength: 3,
                    quickTests: [['#kx', 0], ['\u103D', 1], ['\u1037', 2]]
                },
                {
                    from: '#kx\u1037\u103D',
                    to: '\u103D#kx\u1037',
                    minLength: 3,
                    quickTests: [['#kx', 0], ['\u1037', 1], ['\u103D', 2]]
                },
                {
                    from: '\u103D\u1037#kx',
                    to: '\u103D#kx\u1037',
                    minLength: 3,
                    quickTests: [['\u103D', 0], ['\u1037', 1], ['#kx', 2]]
                },
                {
                    from: '\u1037\u103D#kx',
                    to: '\u103D#kx\u1037',
                    minLength: 3,
                    quickTests: [['\u1037', 0], ['\u103D', 1], ['#kx', 2]]
                },

                // #kx - [ု  ူ], '့'
                {
                    from: '#kx\u1037([\u102F\u1030])',
                    to: '#kx$1\u1037',
                    minLength: 3,
                    quickTests: [['#kx', 0], ['\u1037', 1]]
                },
                {
                    from: '([\u102F\u1030])\u1037#kx',
                    to: '#kx$1\u1037',
                    minLength: 3,
                    quickTests: [['\u1037', 1], ['#kx', 2]]
                },
                {
                    from: '\u1037([\u102F\u1030])#kx',
                    to: '#kx$1\u1037',
                    minLength: 3,
                    quickTests: [['\u1037', 0], ['#kx', 2]]
                },
                {
                    from: '([\u102F\u1030])#kx\u1037',
                    to: '#kx$1\u1037',
                    minLength: 3,
                    quickTests: [['#kx', 1], ['\u1037', 2]]
                },

                // #kx - 'ှ', [ု  ူ]
                {
                    from: '#kx([\u102F\u1030])\u103D',
                    to: '\u103D#kx$1',
                    minLength: 3,
                    quickTests: [['#kx', 0], ['\u103D', 2]]
                },
                {
                    from: '#kx\u103D([\u102F\u1030])',
                    to: '\u103D#kx$1',
                    minLength: 3,
                    quickTests: [['#kx', 0], ['\u103D', 1]]
                },
                {
                    from: '\u103D([\u102F\u1030])#kx',
                    to: '\u103D#kx$1',
                    minLength: 3,
                    quickTests: [['\u103D', 0], ['#kx', 2]]
                },
                {
                    from: '([\u102F\u1030])\u103D#kx',
                    to: '\u103D#kx$1',
                    minLength: 3,
                    quickTests: [['\u103D', 1], ['#kx', 2]]
                },

                // #kx - 'ွ'
                {
                    from: '#kx\u103C',
                    to: '\u103C#kx',
                    minLength: 2,
                    quickTests: [['#kx', 0], ['\u103C', 1]]
                },

                // #kx - 'ှ'
                {
                    from: '#kx\u103D',
                    to: '\u103D#kx',
                    minLength: 2,
                    quickTests: [['#kx', 0], ['\u103D', 1]]
                },

                // #kx - '့'
                {
                    from: '\u1037#kx',
                    to: '#kx\u1037',
                    minLength: 2,
                    quickTests: [['\u1037', 0], ['#kx', 1]]
                },

                // #kx - [ု  ူ]
                {
                    from: '([\u102F\u1030])#kx',
                    to: '#kx$1',
                    minLength: 2,
                    quickTests: [['#kx', 1]]
                },

                // #kx - 'ျ'
                {
                    from: '#kx\u103A',
                    to: '\u103A#kx',
                    minLength: 2,
                    quickTests: [['#kx', 0], ['\u103A', 1]]
                },

                // #kx - \u1096
                {
                    from: '#kx\u1096',
                    to: '\u1096#kx',
                    minLength: 2,
                    quickTests: [['#kx', 0], ['\u1096', 1]]
                },

                // #kx - [#zplc]
                {
                    from: '#kx([#zplc])',
                    to: '$1#kx',
                    minLength: 2,
                    quickTests: [['#kx', 0]]
                },

                // ...............
                // 'ျ', 'ွ', 'ှ'
                {
                    from: '\u103A\u103C\u103D',
                    to: '\u103C\u103D\u103A',
                    minLength: 3,
                    quickTests: [['\u103A', 0], ['\u103C', 1], ['\u103D', 2]]
                },

                // '်', [ု  ူ], '့'
                {
                    from: '\u1037([\u102F\u1030])\u1039',
                    to: '$1\u1037\u1039',
                    minLength: 3,
                    quickTests: [['\u1037', 0], ['\u1039', 2]]
                },
                {
                    from: '\u1039\u1037([\u102F\u1030])',
                    to: '$1\u1037\u1039',
                    minLength: 3,
                    quickTests: [['\u1039', 0], ['\u1037', 1]]
                },
                {
                    from: '\u1039([\u102F\u1030])\u1037',
                    to: '$1\u1037\u1039',
                    minLength: 3,
                    quickTests: [['\u1039', 0], ['\u1037', 2]]
                },
                {
                    from: '([\u102F\u1030])\u1039\u1037',
                    to: '$1\u1037\u1039',
                    minLength: 3,
                    quickTests: [['\u1039', 1], ['\u1037', 2]]
                },
                {
                    from: '\u1037\u1039([\u102F\u1030])',
                    to: '$1\u1037\u1039',
                    minLength: 3,
                    quickTests: [['\u1037', 0], ['\u1039', 1]]
                },
            ]
        },
        {
            description: 'Core Zawgyi to Unicode conversion phase',
            tplVar: {
                // Note '\u103F' is Unicode
                '#zc': '\u1000-\u1021\u1023-\u1027\u1029\u102A\u103F\u1040-\u1049',
                '#zpc': '\u106E\u106F\u1091\u1092\u1097',
            },
            tplSeq: {
                '#kx': [
                    ['\u108B', '\u102D', 1],
                    ['\u108C', '\u102E', 1],
                    ['\u108D', '\u1036', 1],
                    ['\u1064', '', 1]
                ],
                '#px': [
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
                        from: '#px',
                        to: '#px',
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
                    from: '\u1031\u103B([#zc])\u1096#kx',
                    to: '\u1004\u103A\u1039$1\u1039\u1010\u103C\u103D\u1031#kx',
                    minLength: 5,
                    quickTests: [['\u1031', 0], ['\u103B', 1], ['\u1096', 3], ['#kx', 4]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 3 }
                },

                // Pasin
                {
                    from: '\u1031\u103B([#zc])([#zplc])#kx',
                    to: '\u1004\u103A\u1039$1\u1039$2\u103C\u1031#kx',
                    minLength: 5,
                    quickTests: [['\u1031', 0], ['\u103B', 1], ['#kx', 4]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 3, gpx: 5 }
                },

                // Pasin (Single)
                {
                    from: '\u1031\u103B([#zpc])#kx',
                    to: '\u1004\u103A\u1039$1\u103C\u1031#kx',
                    minLength: 4,
                    quickTests: [['\u1031', 0], ['\u103B', 1], ['#kx', 3]],
                    postRulesRef: 'ppz2u',
                    postRulesStart: { gc1: 3 }
                },

                // 'ွှ'
                {
                    from: '\u1031\u103B([#zc])\u103C\u103D#kx',
                    to: '\u1004\u103A\u1039$1\u103C\u103D\u103E\u1031#kx',
                    minLength: 6,
                    quickTests: [['\u1031', 0], ['\u103B', 1], ['\u103C', 3], ['\u103D', 4], ['#kx', 5]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 3 }
                },

                // 'ှ'
                {
                    from: '\u1031\u103B([#zc])\u103D#kx',
                    to: '\u1004\u103A\u1039$1\u103C\u103E\u1031#kx',
                    minLength: 5,
                    quickTests: [['\u1031', 0], ['\u103B', 1], ['\u103D', 3], ['#kx', 4]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 3 }
                },

                 // 'ွ'
                 {
                    from: '\u1031\u103B([#zc])\u103C#kx',
                    to: '\u1004\u103A\u1039$1\u103C\u103D\u1031#kx',
                    minLength: 5,
                    quickTests: [['\u1031', 0], ['\u103B', 1], ['\u103C', 3], ['#kx', 4]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 3 }
                },

                // #
                {
                    from: '\u1031\u103B([#zc])#kx',
                    to: '\u1004\u103A\u1039$1\u103C\u1031#kx',
                    minLength: 4,
                    quickTests: [['\u1031', 0], ['\u103B', 1], ['#kx', 3]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 3 }
                },

                // 'ေ'
                // ...............
                //
                // \u1096 (Pasin)
                {
                    from: '\u1031([#zc])\u1096#kx',
                    to: '\u1004\u103A\u1039$1\u1039\u1010\u103D\u1031#kx',
                    minLength: 4,
                    quickTests: [['\u1031', 0], ['\u1096', 2], ['#kx', 3]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 3 }
                },

                // 'ျ' (Pasin)
                {
                    from: '\u1031([#zc])([#zplc])\u103A#kx',
                    to: '\u1004\u103A\u1039$1\u1039$2\u103B\u1031#kx',
                    minLength: 5,
                    quickTests: [['\u1031', 0], ['\u103A', 3], ['#kx', 4]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 3, gpx: 5 }
                },

                // 'ျ' (Pasin - Single)
                {
                    from: '\u1031([#zpc])\u103A#kx',
                    to: '\u1004\u103A\u1039$1\u103B\u1031#kx',
                    minLength: 4,
                    quickTests: [['\u1031', 0], ['\u103A', 2], ['#kx', 3]],
                    postRulesRef: 'ppz2u',
                    postRulesStart: { gc1: 3 }
                },

                // Pasin
                {
                    from: '\u1031([#zc])([#zplc])#kx',
                    to: '\u1004\u103A\u1039$1\u1039$2\u1031#kx',
                    minLength: 4,
                    quickTests: [['\u1031', 0], ['#kx', 3]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 3, gpx: 5 }
                },

                // Pasin (Single)
                {
                    from: '\u1031([#zpc])#kx',
                    to: '\u1004\u103A\u1039$1\u1031#kx',
                    minLength: 3,
                    quickTests: [['\u1031', 0], ['#kx', 2]],
                    postRulesRef: 'ppz2u',
                    postRulesStart: { gc1: 3 }
                },

                // 'ွှ' + 'ျ'
                {
                    from: '\u1031([#zc])\u103C\u103D\u103A#kx',
                    to: '\u1004\u103A\u1039$1\u103B\u103D\u103E\u1031#kx',
                    minLength: 6,
                    quickTests: [['\u1031', 0], ['\u103C', 2], ['\u103D', 3], ['\u103A', 4], ['#kx', 5]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 3 }
                },

                // 'ှ' + 'ျ'
                {
                    from: '\u1031([#zc])\u103D\u103A#kx',
                    to: '\u1004\u103A\u1039$1\u103B\u103E\u1031#kx',
                    minLength: 5,
                    quickTests: [['\u1031', 0], ['\u103D', 2], ['\u103A', 3], ['#kx', 4]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 3 }
                },

                // 'ွ' + 'ျ'
                {
                    from: '\u1031([#zc])\u103C\u103A#kx',
                    to: '\u1004\u103A\u1039$1\u103B\u103D\u1031#kx',
                    minLength: 5,
                    quickTests: [['\u1031', 0], ['\u103C', 2], ['\u103A', 3], ['#kx', 4]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 3 }
                },

                // 'ျ'
                {
                    from: '\u1031([#zc])\u103A#kx',
                    to: '\u1004\u103A\u1039$1\u103B\u1031#kx',
                    minLength: 4,
                    quickTests: [['\u1031', 0], ['\u103A', 2], ['#kx', 3]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 3 }
                },

                // 'ွှ'
                {
                    from: '\u1031([#zc])\u103C\u103D#kx',
                    to: '\u1004\u103A\u1039$1\u103D\u103E\u1031#kx',
                    minLength: 5,
                    quickTests: [['\u1031', 0], ['\u103C', 2], ['\u103D', 3], ['#kx', 4]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 3 }
                },

                // 'ှ'
                {
                    from: '\u1031([#zc])\u103D#kx',
                    to: '\u1004\u103A\u1039$1\u103E\u1031#kx',
                    minLength: 4,
                    quickTests: [['\u1031', 0], ['\u103D', 2], ['#kx', 3]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 3 }
                },

                // 'ွ'
                {
                    from: '\u1031([#zc])\u103C#kx',
                    to: '\u1004\u103A\u1039$1\u103D\u1031#kx',
                    minLength: 4,
                    quickTests: [['\u1031', 0], ['\u103C', 2], ['#kx', 3]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 3 }
                },

                // #
                {
                    from: '\u1031([#zc])#kx',
                    to: '\u1004\u103A\u1039$1\u1031#kx',
                    minLength: 3,
                    quickTests: [['\u1031', 0], ['#kx', 2]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 3 }
                },

                // 'ြ'
                // ...............
                //
                // \u1096 (Pasin)
                {
                    from: '\u103B([#zc])\u1096#kx',
                    to: '\u1004\u103A\u1039$1\u1039\u1010\u103C\u103D#kx',
                    minLength: 4,
                    quickTests: [['\u103B', 0], ['\u1096', 2], ['#kx', 3]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 3 }
                },

                // Pasin
                {
                    from: '\u103B([#zc])([#zplc])#kx',
                    to: '\u1004\u103A\u1039$1\u1039$2\u103C#kx',
                    minLength: 4,
                    quickTests: [['\u103B', 0], ['#kx', 3]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 3, gpx: 5 }
                },

                // Pasin (Single)
                {
                    from: '\u103B([#zpc])#kx',
                    to: '\u1004\u103A\u1039$1\u103C#kx',
                    minLength: 3,
                    quickTests: [['\u103B', 0], ['#kx', 2]],
                    postRulesRef: 'ppz2u',
                    postRulesStart: { gc1: 3 }
                },

                // 'ွှ'
                {
                    from: '\u103B([#zc])\u103C\u103D#kx',
                    to: '\u1004\u103A\u1039$1\u103C\u103D\u103E#kx',
                    minLength: 5,
                    quickTests: [['\u103B', 0], ['\u103C', 2], ['\u103D', 3], ['#kx', 4]],
                    postRulesRef: 'ppz2u',
                    postRulesStart: { gc1: 3 }
                },

                // 'ှ'
                {
                    from: '\u103B([#zc])\u103D#kx',
                    to: '\u1004\u103A\u1039$1\u103C\u103E#kx',
                    minLength: 4,
                    quickTests: [['\u103B', 0], ['\u103D', 2], ['#kx', 3]],
                    postRulesRef: 'ppz2u',
                    postRulesStart: { gc1: 3 }
                },

                // 'ွ'
                {
                    from: '\u103B([#zc])\u103C#kx',
                    to: '\u1004\u103A\u1039$1\u103C\u103D#kx',
                    minLength: 4,
                    quickTests: [['\u103B', 0], ['\u103C', 2], ['#kx', 3]],
                    postRulesRef: 'ppz2u',
                    postRulesStart: { gc1: 3 }
                },

                // #
                {
                    from: '\u103B([#zc])#kx',
                    to: '\u1004\u103A\u1039$1\u103C#kx',
                    minLength: 3,
                    quickTests: [['\u103B', 0], ['#kx', 2]],
                    postRulesRef: 'ppz2u',
                    postRulesStart: { gc1: 3 }
                },

                // [ွှ  ွ  ှ]
                // ...............
                //
                // 'ွှ' + 'ျ'
                {
                    from: '([#zc])\u103C\u103D\u103A#kx',
                    to: '\u1004\u103A\u1039$1\u103B\u103D\u103E#kx',
                    minLength: 5,
                    quickTests: [['\u103C', 1], ['\u103D', 2], ['\u103A', 3], ['#kx', 4]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 3 }
                },

                // 'ွှ'
                {
                    from: '([#zc])\u103C\u103D#kx',
                    to: '\u1004\u103A\u1039$1\u103D\u103E#kx',
                    minLength: 4,
                    quickTests: [['\u103C', 1], ['\u103D', 2], ['#kx', 3]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 3 }
                },

                // 'ှ' + 'ျ'
                {
                    from: '([#zc])\u103D\u103A#kx',
                    to: '\u1004\u103A\u1039$1\u103B\u103E#kx',
                    minLength: 4,
                    quickTests: [['\u103D', 1], ['\u103A', 2], ['#kx', 3]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 3 }
                },

                // 'ှ'
                {
                    from: '([#zc])\u103D#kx',
                    to: '\u1004\u103A\u1039$1\u103E#kx',
                    minLength: 3,
                    quickTests: [['\u103D', 1], ['#kx', 2]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 3 }
                },

                // 'ွ' + 'ျ'
                {
                    from: '([#zc])\u103C\u103A#kx',
                    to: '\u1004\u103A\u1039$1\u103B\u103D#kx',
                    minLength: 4,
                    quickTests: [['\u103C', 1], ['\u103A', 2], ['#kx', 3]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 3 }
                },

                // 'ွ' + \u1096 (Pasin)
                {
                    from: '([#zc])\u1096#kx',
                    to: '\u1004\u103A\u1039$1\u1039\u1010\u103D#kx',
                    minLength: 3,
                    quickTests: [['\u1096', 1], ['#kx', 2]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 3 }
                },

                // 'ွ'
                {
                    from: '([#zc])\u103C#kx',
                    to: '\u1004\u103A\u1039$1\u103D#kx',
                    minLength: 3,
                    quickTests: [['\u103C', 1], ['#kx', 2]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 3 }
                },

                // 'ျ'
                // ...............
                //
                // Pasin
                {
                    from: '([#zc])([#zplc])\u103A#kx',
                    to: '\u1004\u103A\u1039$1\u1039$2\u103B#kx',
                    minLength: 4,
                    quickTests: [['\u103A', 2], ['#kx', 3]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 3, gpx: 5 }
                },

                // Pasin (Single)
                {
                    from: '([#zpc])\u103A#kx',
                    to: '\u1004\u103A\u1039$1\u103B#kx',
                    minLength: 3,
                    quickTests: [['\u103A', 1], ['#kx', 2]],
                    postRulesRef: 'ppz2u',
                    postRulesStart: { gc1: 3 }
                },

                // #
                {
                    from: '([#zc])\u103A#kx',
                    to: '\u1004\u103A\u1039$1\u103B#kx',
                    minLength: 3,
                    quickTests: [['\u103A', 1], ['#kx', 2]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 3 }
                },

                // #
                // ...............
                //
                // Pasin
                {
                    from: '([#zc])([#zplc])#kx',
                    to: '\u1004\u103A\u1039$1\u1039$2#kx',
                    minLength: 3,
                    quickTests: [['#kx', 2]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 3, gpx: 5 }
                },

                // Pasin (Single)
                {
                    from: '([#zpc])#kx',
                    to: '\u1004\u103A\u1039$1#kx',
                    minLength: 2,
                    quickTests: [['#kx', 1]],
                    postRulesRef: 'ppz2u',
                    postRulesStart: { gc1: 3 }
                },

                // #zc
                {
                    from: '([#zc])#kx',
                    to: '\u1004\u103A\u1039$1#kx',
                    minLength: 2,
                    quickTests: [['#kx', 1]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 3}
                },

                // #kx
                {
                    from: '#kx',
                    to: '\u1004\u103A\u1039#kx',
                    minLength: 1,
                    quickTests: [['#kx', 0]]
                },

                // Pasin
                // ------------------------------------------------------------------------------------------
                // 'ေ' + 'ြ'
                // ...............
                //
                // \u1096
                {
                    from: '\u1031\u103B([#zc])\u1096',
                    to: '$1\u1039\u1010\u103C\u103D\u1031',
                    minLength: 4,
                    quickTests: [['\u1031', 0], ['\u103B', 1], ['\u1096', 3]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 0 }
                },

                // ([#zc])([#zplc])
                {
                    from: '\u1031\u103B([#zc])([#zplc])',
                    to: '$1\u1039$2\u103C\u1031',
                    minLength: 4,
                    quickTests: [['\u1031', 0], ['\u103B', 1]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 0, gpx: 2 }
                },

                // ([#zpc])
                {
                    from: '\u1031\u103B([#zpc])',
                    to: '$1\u103C\u1031',
                    minLength: 3,
                    quickTests: [['\u1031', 0], ['\u103B', 1]],
                    postRulesRef: 'ppz2u',
                    postRulesStart: { gc1: 0 }
                },

                // 'ေ'
                // ...............
                //
                // \u1096
                {
                    from: '\u1031([#zc])\u1096',
                    to: '$1\u1039\u1010\u103D\u1031',
                    minLength: 3,
                    quickTests: [['\u1031', 0], ['\u1096', 2]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 0 }
                },

                // 'ျ' - ([#zc])([#zplc])
                {
                    from: '\u1031([#zc])([#zplc])\u103A',
                    to: '$1\u1039$2\u103B\u1031',
                    minLength: 4,
                    quickTests: [['\u1031', 0], ['\u103A', 3]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 0, gpx: 2 }
                },

                // 'ျ' - ([#zpc])
                {
                    from: '\u1031([#zpc])\u103A',
                    to: '$1\u103B\u1031',
                    minLength: 3,
                    quickTests: [['\u1031', 0], ['\u103A', 2]],
                    postRulesRef: 'ppz2u',
                    postRulesStart: { gc1: 0 }
                },

                // ([#zc])([#zplc])
                {
                    from: '\u1031([#zc])([#zplc])',
                    to: '$1\u1039$2\u1031',
                    minLength: 3,
                    quickTests: [['\u1031', 0]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 0, gpx: 2 }
                },

                // ([#zpc])
                {
                    from: '\u1031([#zpc])',
                    to: '$1\u1031',
                    minLength: 2,
                    quickTests: [['\u1031', 0]],
                    postRulesRef: 'ppz2u',
                    postRulesStart: { gc1: 0 }
                },

                // 'ြ'
                // ...............
                //
                // \u1096
                {
                    from: '\u103B([#zc])\u1096',
                    to: '$1\u1039\u1010\u103C\u103D',
                    minLength: 3,
                    quickTests: [['\u103B', 0], ['\u1096', 2]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 0 }
                },

                // ([#zc])([#zplc])
                {
                    from: '\u103B([#zc])([#zplc])',
                    to: '$1\u1039$2\u103C',
                    minLength: 3,
                    quickTests: [['\u103B', 0]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 0, gpx: 2 }
                },

                // ([#zpc])
                {
                    from: '\u103B([#zpc])',
                    to: '$1\u103C',
                    minLength: 2,
                    quickTests: [['\u103B', 0]],
                    postRulesRef: 'ppz2u',
                    postRulesStart: { gc1: 0 }
                },

                // 'ွ'
                // ...............
                // \u1096
                {
                    from: '([#zc])\u1096',
                    to: '$1\u1039\u1010\u103D',
                    minLength: 2,
                    quickTests: [['\u1096', 1]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 0 }
                },

                // 'ျ'
                // ...............
                //
                // ([#zc])([#zplc])
                {
                    from: '([#zc])([#zplc])\u103A',
                    to: '$1\u1039$2\u103B',
                    minLength: 3,
                    quickTests: [['\u103A', 2]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 0, gpx: 2 }
                },

                // ([#zpc])
                {
                    from: '([#zpc])\u103A',
                    to: '$1\u103B',
                    minLength: 2,
                    quickTests: [['\u103A', 1]],
                    postRulesRef: 'ppz2u',
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

                // 'ေ' + 'ြ'
                // ------------------------------------------------------------------------------------------
                // 'ွှ'

                // 'ှ'

                // 'ွ'

                // #

                // 'ေ'
                // ------------------------------------------------------------------------------------------
                // 'ွှ' + 'ျ'

                // 'ှ' + 'ျ'

                // 'ွ' + 'ျ'

                // 'ျ'

                // 'ွှ'

                // 'ှ'

                // 'ွ'

                // #

                // 'ြ'
                // ------------------------------------------------------------------------------------------
                // 'ွှ'

                // 'ှ'

                // 'ွ'

                // #

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

                // [ွှ  ွ  ှ]
                // ------------------------------------------------------------------------------------------
                // 'ွှ' + 'ျ'

                // 'ွှ'

                // 'ှ' + 'ျ'

                // 'ှ'

                // 'ွ' + 'ျ'

                // 'ွ'

                // 'ျ'
                // ------------------------------------------------------------------------------------------
                // #

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
                    from: '\u1025\u1037\u1039',
                    to: '\u1009\u103A\u1037',
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

                // Others
                // // ------------------------------------------------------------------------------------------
                {
                    from: '\u103C',
                    to: '\u103D'
                },
                {
                    from: '\u103D',
                    to: '\u103E'
                },
                {
                    from: '\u1039',
                    to: '\u103A'
                },

            ]
        }
    ]
};
