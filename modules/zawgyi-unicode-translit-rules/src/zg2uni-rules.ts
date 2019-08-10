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
    // TODO: Add `when` option to phase?
    phases: [
        {
            description: 'Preprocess normalization phase',
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
                {
                    // description: "'ြ' သို့",
                    from: '#7eTo84x',
                    to: '#7eTo84x',
                    minLength: 1,
                    quickTests: [['#7eTo84x', 0]]
                },
                {
                    // description: "'န' သို့",
                    from: '\u108F',
                    to: '\u1014',
                    minLength: 1,
                    quickTests: [['\u108F', 0]]
                },
                {
                    // description: "'ရ' သို့",
                    from: '\u1090',
                    to: '\u101B',
                    minLength: 1,
                    quickTests: [['\u1090', 0]]
                },
                {
                    // description: "'ဉ' သို့",
                    from: '\u106A',
                    to: '\u1009',
                    minLength: 1,
                    quickTests: [['\u106A', 0]]
                },
                {
                    // description: "'ည' မှ",
                    from: '\u106B',
                    to: '\u100A',
                    minLength: 1,
                    quickTests: [['\u106B', 0]]
                },
                {
                    // description: "Unicode 'ဿ' သို့",
                    from: '\u1086',
                    to: '\u103F',
                    minLength: 1,
                    quickTests: [['\u1086', 0]]
                },
                {
                    // description: "'ျ' သို့",
                    from: '\u107D',
                    to: '\u103A',
                    minLength: 1,
                    quickTests: [['\u107D', 0]],
                },
                {
                    // description: "'ွ' + 'ှ' သို့",
                    from: '\u108A',
                    to: '\u103C\u103D',
                    minLength: 1,
                    quickTests: [['\u108A', 0]],
                },
                {
                    // description: "'ှ' သို့",
                    from: '\u1087',
                    to: '\u103D',
                    minLength: 1,
                    quickTests: [['\u1087', 0]],
                },
                {
                    // description: "'ှ' + 'ု' သို့",
                    from: '\u1088',
                    to: '\u103D\u102F',
                    minLength: 1,
                    quickTests: [['\u1088', 0]],
                },
                {
                    // description: "'ှ' + 'ူ' သို့",
                    from: '\u1089',
                    to: '\u103D\u1030',
                    minLength: 1,
                    quickTests: [['\u1089', 0]],
                },
                {
                    // description: "'ု' သို့",
                    from: '\u1033',
                    to: '\u103D\u102F',
                    minLength: 1,
                    quickTests: [['\u1033', 0]],
                },
                {
                    // description: "'ူ' သို့",
                    from: '\u1034',
                    to: '\u103D\u1030',
                    minLength: 1,
                    quickTests: [['\u1034', 0]],
                },
                {
                    // description: "'့' သို့",
                    from: '#94Or95x',
                    to: '#94Or95x',
                    minLength: 1,
                    quickTests: [['#94Or95x', 0]]
                }
            ]
        },
        {
            description: 'Overlapped words normalization phase',
            tplSeq: {
                '#olx': [
                    ['\u102B', '\u102B', 10],
                    ['\u1036', '\u1036', 8],
                    ['\u105A', '\u105A', 1],
                    ['\u1060', '\u1060', 10],
                    ['\u106C', '\u106C', 2],
                    ['\u1070', '\u1070', 22],
                    ['\u1087', '\u1087', 8],
                    ['\u1093', '\u1093', 4],
                ]
            },
            rules: [
                {
                    from: '(#olx)+',
                    to: '#olx',
                    minLength: 2,
                    quickTests: [['#olx', 0], ['#olx', 1]],
                    when: {
                        'fix-overlapped-words': true
                    }
                }
            ]
        },
        {
            description: 'Order normalization phase',
            rules: [
                {
                    // TODO:
                    from: '([\u108B-\u108D])([\u103A\u107D])',
                    to: '$2$1',
                    minLength: 2
                },
                {
                    // TODO:
                    from: '([\u108B-\u108D])([\u1060-\u1063\u1065-\u1069\u106C\u106D\u1070-\u107C\u1085\u1093])',
                    to: '$2$1',
                    minLength: 2
                }
            ]
        },
        {
            tplVar: {
                '#zc': '\u1000-\u1021\u1025\u1027\u103F\u1040-\u1049',
                '#zplc': '\u1060-\u1063\u1065-\u1069\u106C\u106D\u1070-\u107C\u1085\u1093',
                '#zpc': '\u106E\u106F\u1091\u1092\u1097',
            },
            tplSeq: {
                '#kx': [
                    ['\u108B', '\u102D', 1],
                    ['\u108C', '\u102E', 1],
                    ['\u108D', '\u1036', 1]
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
                // (zg: \u108B-\u108D) -> \u102D, \u102E, \u1036
                // ------------------------------------------------------------------------------------------
                // Pasin
                // ...............
                // 'ေ' + 'ြ' + \u1096
                {
                    from: '\u1031\u103B([#zc])\u1096#kx',
                    to: '\u1004\u103A\u1039$1\u1039\u1010\u103C\u103D\u1031#kx',
                    minLength: 5,
                    quickTests: [['\u1031', 0], ['\u103B', 1], ['\u1096', 3], ['#kx', 4]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 3 }
                },

                // 'ေ' + \u1096
                {
                    from: '\u1031([#zc])\u1096#kx',
                    to: '\u1004\u103A\u1039$1\u1039\u1010\u103D\u1031#kx',
                    minLength: 4,
                    quickTests: [['\u1031', 0], ['\u1096', 2], ['#kx', 3]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 3 }
                },

                // 'ေ' + 'ြ'
                {
                    from: '\u1031\u103B([#zc])([#zplc])#kx',
                    to: '\u1004\u103A\u1039$1\u1039$2\u103C\u1031#kx',
                    minLength: 5,
                    quickTests: [['\u1031', 0], ['\u103B', 1], ['#kx', 4]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 3, gpx: 5 }
                },
                {
                    from: '\u1031\u103B([#zpc])#kx',
                    to: '\u1004\u103A\u1039$1\u103C\u1031#kx',
                    minLength: 4,
                    quickTests: [['\u1031', 0], ['\u103B', 1], ['#kx', 3]],
                    postRulesRef: 'ppz2u',
                    postRulesStart: { gc1: 3 }
                },

                // 'ေ' + 'ျ'
                {
                    from: '\u1031([#zc])([#zplc])\u103A#kx',
                    to: '\u1004\u103A\u1039$1\u1039$2\u103B\u1031#kx',
                    minLength: 5,
                    quickTests: [['\u1031', 0], ['\u103A', 3], ['#kx', 4]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 3, gpx: 5 }
                },
                {
                    from: '\u1031([#zpc])\u103A#kx',
                    to: '\u1004\u103A\u1039$1\u103B\u1031#kx',
                    minLength: 4,
                    quickTests: [['\u1031', 0], ['\u103A', 2], ['#kx', 3]],
                    postRulesRef: 'ppz2u',
                    postRulesStart: { gc1: 3 }
                },

                // 'ေ'
                {
                    from: '\u1031([#zc])([#zplc])#kx',
                    to: '\u1004\u103A\u1039$1\u1039$2\u1031#kx',
                    minLength: 4,
                    quickTests: [['\u1031', 0], ['#kx', 3]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 3, gpx: 5 }
                },
                {
                    from: '\u1031([#zpc])#kx',
                    to: '\u1004\u103A\u1039$1\u1031#kx',
                    minLength: 3,
                    quickTests: [['\u1031', 0], ['#kx', 2]],
                    postRulesRef: 'ppz2u',
                    postRulesStart: { gc1: 3 }
                },

                // 'ြ' + \u1096
                {
                    from: '\u103B([#zc])\u1096#kx',
                    to: '\u1004\u103A\u1039$1\u1039\u1010\u103C\u103D#kx',
                    minLength: 4,
                    quickTests: [['\u103B', 0], ['\u1096', 2], ['#kx', 3]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 3 }
                },

                // \u1096
                {
                    from: '([#zc])\u1096#kx',
                    to: '\u1004\u103A\u1039$1\u1039\u1010\u103D#kx',
                    minLength: 3,
                    quickTests: [['\u1096', 1], ['#kx', 2]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 3 }
                },

                // 'ြ'
                {
                    from: '\u103B([#zc])([#zplc])#kx',
                    to: '\u1004\u103A\u1039$1\u1039$2\u103C#kx',
                    minLength: 4,
                    quickTests: [['\u103B', 0], ['#kx', 3]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 3, gpx: 5 }
                },
                {
                    from: '\u103B([#zpc])#kx',
                    to: '\u1004\u103A\u1039$1\u103C#kx',
                    minLength: 3,
                    quickTests: [['\u103B', 0], ['#kx', 2]],
                    postRulesRef: 'ppz2u',
                    postRulesStart: { gc1: 3 }
                },

                // 'ျ'
                {
                    from: '([#zc])([#zplc])\u103A#kx',
                    to: '\u1004\u103A\u1039$1\u1039$2\u103B#kx',
                    minLength: 4,
                    quickTests: [['\u103A', 2], ['#kx', 3]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 3, gpx: 5 }
                },
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
                    from: '([#zc])([#zplc])#kx',
                    to: '\u1004\u103A\u1039$1\u1039$2#kx',
                    minLength: 3,
                    quickTests: [['#kx', 2]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 3, gpx: 5 }
                },
                {
                    from: '([#zpc])#kx',
                    to: '\u1004\u103A\u1039$1#kx',
                    minLength: 2,
                    quickTests: [['#kx', 1]],
                    postRulesRef: 'ppz2u',
                    postRulesStart: { gc1: 3 }
                },
            ]
        }
    ]
};
