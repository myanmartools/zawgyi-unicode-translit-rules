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
            description: 'Normalizing overlapped words phase',
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
            description: 'Normalizing order phase',
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
                '#zc': '\u1000-\u1021\u1025\u1027\u1040-\u1049\u106A\u106B\u1086\u108F\u1090',
                '#zplc': '\u1060-\u1063\u1065-\u1069\u106C\u106D\u1070-\u107C\u1085\u1093',
                '#z3bOr7eTo84': '\u103B\u107E-\u1084',
                '#z3aOr7d': '\u103A\u107D'
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
                        // description: "'ဿ' သို့",
                        from: '\u1086',
                        to: '\u103F',
                        start: -1,
                        orGroup: 'gc1'
                    },
                    {
                        // description: "'န' သို့",
                        from: '\u108F',
                        to: '\u1014',
                        start: -1,
                        orGroup: 'gc1'
                    },
                    {
                        // description: "'ရ' သို့",
                        from: '\u1090',
                        to: '\u101B',
                        start: -1,
                        orGroup: 'gc1'
                    },
                    {
                        // description: "'ဉ' သို့",
                        from: '\u106A',
                        to: '\u1009',
                        start: -1,
                        orGroup: 'gc1'
                    },
                    {
                        // description: "'ည' မှ",
                        from: '\u106B',
                        to: '\u100A',
                        start: -1,
                        orGroup: 'gc1'
                    },

                    {
                        // description: "သုည မှ 'ဝ' သို့",
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
                ]
            },
            rules: [
                // (zg: \u108B-\u108D) -> \u102D, \u102E, \u1036
                // ------------------------------------------------------------------------------------------
                // Pasin
                // ...............
                // 'ေ' + 'ြ' + \u1096
                {
                    from: '\u1031[#z3bOr7eTo84]([#zc])\u1096#kx',
                    to: '\u1004\u103A\u1039$1\u1039\u1010\u103C\u103D\u1031#kx',
                    minLength: 5,
                    quickTests: [['\u1031', 0], ['\u1096', 3], ['#kx', 4]],
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
                    from: '\u1031[#z3bOr7eTo84]([#zc])([#zplc])#kx',
                    to: '\u1004\u103A\u1039$1\u1039$2\u103C\u1031#kx',
                    minLength: 5,
                    quickTests: [['\u1031', 0], ['#kx', 4]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 3, gpx: 5 }
                },

                // 'ေ' + 'ျ'
                {
                    from: '\u1031([#zc])([#zplc])[#z3aOr7d]#kx',
                    to: '\u1004\u103A\u1039$1\u1039$2\u103B\u1031#kx',
                    minLength: 5,
                    quickTests: [['\u1031', 0], ['#kx', 4]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 3, gpx: 5 }
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

                // 'ြ' + \u1096
                {
                    from: '[#z3bOr7eTo84]([#zc])\u1096#kx',
                    to: '\u1004\u103A\u1039$1\u1039\u1010\u103C\u103D#kx',
                    minLength: 4,
                    quickTests: [['\u1096', 2], ['#kx', 3]],
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
                //
                {
                    from: '[#z3bOr7eTo84]([#zc])([#zplc])#kx',
                    to: '\u1004\u103A\u1039$1\u1039$2\u103C#kx',
                    minLength: 4,
                    quickTests: [['#kx', 3]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 3, gpx: 5 }
                },

                // 'ျ'
                {
                    from: '([#zc])([#zplc])[#z3aOr7d]#kx',
                    to: '\u1004\u103A\u1039$1\u1039$2\u103B#kx',
                    minLength: 4,
                    quickTests: [['#kx', 3]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 3, gpx: 5 }
                },

                // #
                //
                {
                    from: '([#zc])([#zplc])#kx',
                    to: '\u1004\u103A\u1039$1\u1039$2#kx',
                    minLength: 3,
                    quickTests: [['#kx', 2]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { gc1: 3, gpx: 5 }
                },
            ]
        }
    ]
};
