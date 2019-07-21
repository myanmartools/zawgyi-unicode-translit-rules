/**
 * @license
 * Copyright DagonMetric. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found under the LICENSE file in the root directory of this source tree.
 */

import { TranslitRule } from '@dagonmetric/ng-translit';

export const uni2zgRules: TranslitRule = {
    phases: [
        {
            tplVar: {
                '#uc': '\u1000-\u102A\u103F\u1040-\u1049',
                '#zc': '\u1000-\u1021\u1025\u1027\u1040\u106A\u1086\u108F\u1090',
                '#zlc': '\u1000\u1003\u1006\u100A\u100F-\u1011\u1018\u101A\u101C\u101E\u101F\u1021\u1086',
                '#ulc': '\u1000\u1003\u1006\u100A\u100F-\u1011\u1018\u101A\u101C\u101E\u101F\u1021\u103F',
                '#u37': '\u1000-\u1007\u1009\u100A\u100C\u100E-\u1013\u1015-\u101A\u101C-\u101F\u1021\u1025-\u1027\u103F\u1040',
                '#u2e30': '\u1000-\u1007\u100E-\u101A\u101C-\u101F\u1021\u1027\u103F\u1040'
            },
            tplSeq: {
                '#plx': [
                    ['\u1006', '\u1066', 1],
                    ['\u1010', '\u1071', 1],
                    ['\u1011', '\u1073', 1],
                    ['\u1018', '\u107B', 1]
                ],
                '#psx': [
                    ['\u1000', '\u1060', 4],
                    ['\u1005', '\u1065', 1],
                    ['\u1006', '\u1067', 3],
                    ['\u100B', '\u106C', 2],
                    ['\u100F', '\u1070', 1],
                    ['\u1010', '\u1072', 1],
                    ['\u1011', '\u1074', 7],
                    ['\u1018', '\u1093', 1],
                    ['\u1019', '\u107C', 1],
                    ['\u101C', '\u1085', 1]
                ],
                '#kx': [
                    ['\u102D', '\u108B', 1],
                    ['\u102E', '\u108C', 1],
                    ['\u1036', '\u108D', 1]
                ],
                '#cx': [
                    ['\u102F', '\u1033', 1],
                    ['\u1030', '\u1034', 1]
                ]
            },
            postRulesDef: {
                // Stacked
                //
                // For \u1031\u1083$1\u1039$2....
                p3183u39u: [
                    {
                        // description: "'န' အတို သို့",
                        from: '\u1014',
                        to: '\u108F',
                        start: 2,
                        orGroup: 'A'
                    },
                    {
                        // description: "'ရ' အတို သို့",
                        from: '\u101B',
                        to: '\u1090',
                        start: 2,
                        orGroup: 'A'
                    },
                    {
                        // description: "'ဿ' သို့",
                        from: '\u103F',
                        to: '\u1086',
                        start: 2,
                        orGroup: 'A'
                    },
                    {
                        // description: "သုည မှ 'ဝ' သို့",
                        from: '\u1040',
                        to: '\u101D',
                        start: 2,
                        orGroup: 'A'
                    },
                    {
                        // description: "'[ဉဥ]' မှ",
                        from: '[\u1009\u1025]',
                        to: '\u106A',
                        start: 2,
                        orGroup: 'A'
                    },

                    {
                        from: '\u1083([#zlc])',
                        to: '\u1084$1',
                        start: 1
                    },

                    {
                        from: '([#zlc])\u1039#plx',
                        to: '$1#plx',
                        start: 2,
                        orGroup: 'B'
                    },
                    {
                        from: '([#zc])\u1039#psx',
                        to: '$1#psx',
                        start: 2,
                        orGroup: 'B'
                    }
                ],
                // For \u1031$1\u1039$2...
                p31u39u: [
                    {
                        // description: "'န' အတို သို့",
                        from: '\u1014',
                        to: '\u108F',
                        start: 1,
                        orGroup: 'A'
                    },
                    {
                        // description: "'ရ' အတို သို့",
                        from: '\u101B',
                        to: '\u1090',
                        start: 1,
                        orGroup: 'A'
                    },
                    {
                        // description: "'ဿ' သို့",
                        from: '\u103F',
                        to: '\u1086',
                        start: 1,
                        orGroup: 'A'
                    },
                    {
                        // description: "သုည မှ 'ဝ' သို့",
                        from: '\u1040',
                        to: '\u101D',
                        start: 1,
                        orGroup: 'A'
                    },
                    {
                        // description: "'[ဉဥ]' မှ",
                        from: '[\u1009\u1025]',
                        to: '\u106A',
                        start: 1,
                        orGroup: 'A'
                    },

                    {
                        from: '([#zlc])\u1039#plx',
                        to: '$1#plx',
                        start: 1,
                        orGroup: 'B'
                    },
                    {
                        from: '([#zc])\u1039#psx',
                        to: '$1#psx',
                        start: 1,
                        orGroup: 'B'
                    }
                ],
                // For \u1083$1\u1039$2...
                p83u39u: [
                    {
                        // description: "'န' အတို သို့",
                        from: '\u1014',
                        to: '\u108F',
                        start: 1,
                        orGroup: 'A'
                    },
                    {
                        // description: "'ရ' အတို သို့",
                        from: '\u101B',
                        to: '\u1090',
                        start: 1,
                        orGroup: 'A'
                    },
                    {
                        // description: "'ဿ' သို့",
                        from: '\u103F',
                        to: '\u1086',
                        start: 1,
                        orGroup: 'A'
                    },
                    {
                        // description: "သုည မှ 'ဝ' သို့",
                        from: '\u1040',
                        to: '\u101D',
                        start: 1,
                        orGroup: 'A'
                    },
                    {
                        // description: "'[ဉဥ]' မှ",
                        from: '[\u1009\u1025]',
                        to: '\u106A',
                        start: 1,
                        orGroup: 'A'
                    },

                    {
                        from: '\u1083([#zlc])',
                        to: '\u1084$1'
                    },

                    {
                        from: '([#zlc])\u1039#plx',
                        to: '$1#plx',
                        start: 1,
                        orGroup: 'B'
                    },
                    {
                        from: '([#zc])\u1039#psx',
                        to: '$1#psx',
                        start: 1,
                        orGroup: 'B'
                    }
                ],
                // For $1\u1039$2...
                pu39u: [
                    {
                        // description: "'န' အတို သို့",
                        from: '\u1014',
                        to: '\u108F',
                        orGroup: 'A'
                    },
                    {
                        // description: "'ရ' အတို သို့",
                        from: '\u101B',
                        to: '\u1090',
                        orGroup: 'A'
                    },
                    {
                        // description: "'ဿ' သို့",
                        from: '\u103F',
                        to: '\u1086',
                        orGroup: 'A'
                    },
                    {
                        // description: "သုည မှ 'ဝ' သို့",
                        from: '\u1040',
                        to: '\u101D',
                        orGroup: 'A'
                    },
                    {
                        // description: "'[ဉဥ]' မှ",
                        from: '[\u1009\u1025]',
                        to: '\u106A',
                        orGroup: 'A'
                    },

                    {
                        from: '([#zlc])\u1039#plx',
                        to: '$1#plx',
                        orGroup: 'B'
                    },
                    {
                        from: '([#zc])\u1039#psx',
                        to: '$1#psx',
                        orGroup: 'B'
                    }
                ],

                // For \u1031\u1082$1...
                plx3182u: [
                    {
                        // description: "'ဿ' သို့",
                        from: '\u103F',
                        to: '\u1086',
                        start: 2
                    }
                ],
                // For [\u1031\u1082]$1...
                plx31Or82u: [
                    {
                        // description: "'ဿ' သို့",
                        from: '\u103F',
                        to: '\u1086',
                        start: 1
                    }
                ],
                // For $1...
                plxu: [
                    {
                        // description: "'ဿ' သို့",
                        from: '\u103F',
                        to: '\u1086'
                    }
                ],

                // For \u1031\u1081$1...
                psx3181u: [
                    {
                        // description: "'န' အတို သို့",
                        from: '\u1014',
                        to: '\u108F',
                        start: 2,
                        orGroup: 'A'
                    },
                    {
                        // description: "'ရ' အတို သို့",
                        from: '\u101B',
                        to: '\u1090',
                        start: 2,
                        orGroup: 'A'
                    },
                    {
                        // description: "သုည မှ 'ဝ' သို့",
                        from: '\u1040',
                        to: '\u101D',
                        start: 2,
                        orGroup: 'A'
                    },
                    {
                        // description: "'[ဉဥ]' မှ",
                        from: '[\u1009\u1025]',
                        to: '\u106A',
                        start: 2,
                        orGroup: 'A'
                    }
                ],
                // For [\u1031\u1081]$1...
                psx31Or81u: [
                    {
                        // description: "'န' အတို သို့",
                        from: '\u1014',
                        to: '\u108F',
                        start: 1,
                        orGroup: 'A'
                    },
                    {
                        // description: "'ရ' အတို သို့",
                        from: '\u101B',
                        to: '\u1090',
                        start: 1,
                        orGroup: 'A'
                    },
                    {
                        // description: "သုည မှ 'ဝ' သို့",
                        from: '\u1040',
                        to: '\u101D',
                        start: 1,
                        orGroup: 'A'
                    },
                    {
                        // description: "'[ဉဥ]' မှ",
                        from: '[\u1009\u1025]',
                        to: '\u106A',
                        start: 1,
                        orGroup: 'A'
                    }
                ],
                // For $1...
                psx1: [
                    {
                        // description: "'န' အတို သို့",
                        from: '\u1014',
                        to: '\u108F',
                        orGroup: 'A'
                    },
                    {
                        // description: "'ရ' အတို သို့",
                        from: '\u101B',
                        to: '\u1090',
                        orGroup: 'A'
                    },
                    {
                        // description: "သုည မှ 'ဝ' သို့",
                        from: '\u1040',
                        to: '\u101D',
                        orGroup: 'A'
                    },
                    {
                        // description: "'[ဉဥ]' မှ",
                        from: '[\u1009\u1025]',
                        to: '\u106A',
                        orGroup: 'A'
                    }
                ],

                // 'ေ' + 'ြ' ...
                //
                // 'ေ' + 'ြ' + $1 + [ွှွ] ...
                p3181Or83u8aOr3c: [
                    {
                        // description: "'န' အတို သို့",
                        from: '\u1014',
                        to: '\u108F',
                        start: 2,
                        orGroup: 'A'
                    },
                    {
                        // description: "'ရ' အတို သို့",
                        from: '\u101B',
                        to: '\u1090',
                        start: 2,
                        orGroup: 'A'
                    },
                    {
                        // description: "'ဿ' သို့",
                        from: '\u103F',
                        to: '\u1086',
                        start: 2,
                        orGroup: 'A'
                    },
                    {
                        // description: "သုည မှ 'ဝ' သို့",
                        from: '\u1040',
                        to: '\u101D',
                        start: 2,
                        orGroup: 'A'
                    },
                    {
                        // description: "'[ဉဥ]' မှ",
                        from: '[\u1009\u1025]',
                        to: '\u106A',
                        start: 2,
                        orGroup: 'A'
                    },

                    {
                        from: '\u1081([#zlc])',
                        to: '\u1082$1',
                        start: 1,
                        orGroup: 'B'
                    },
                    {
                        from: '\u1083([#zlc])',
                        to: '\u1084$1',
                        start: 1,
                        orGroup: 'B'
                    }
                ],
                // 'ေ' + 'ြ' + $1 + 'ှ' ...
                p313bOr7fu3d: [
                    {
                        // description: "'န' အတို သို့",
                        from: '\u1014',
                        to: '\u108F',
                        start: 2,
                        orGroup: 'A'
                    },
                    {
                        // description: "'ရ' အတို သို့",
                        from: '\u101B',
                        to: '\u1090',
                        start: 2,
                        orGroup: 'A'
                    },
                    {
                        // description: "'ဿ' သို့",
                        from: '\u103F',
                        to: '\u1086',
                        start: 2,
                        orGroup: 'A'
                    },
                    {
                        // description: "သုည မှ 'ဝ' သို့",
                        from: '\u1040',
                        to: '\u101D',
                        start: 2,
                        orGroup: 'A'
                    },
                    {
                        // description: "'ဉ' မှ 'ဥ' သို့",
                        from: '\u1009',
                        to: '\u1025',
                        start: 2,
                        orGroup: 'A',
                        when: {
                            'Zawgyi-One-2008': true
                        }
                    },

                    {
                        from: '\u103B[\u1009\u1025]',
                        to: '\u1081\u1025',
                        start: 1,
                        orGroup: 'B'
                    },
                    {
                        from: '\u107F[\u1009\u1025]',
                        to: '\u1083\u1025',
                        start: 1,
                        orGroup: 'B'
                    },
                    {
                        from: '\u103B([#zlc])',
                        to: '\u107E$1',
                        start: 1,
                        orGroup: 'B'
                    },
                    {
                        from: '\u107F([#zlc])',
                        to: '\u1080$1',
                        start: 1,
                        orGroup: 'B'
                    }
                ],
                // 'ေ' + 'ြ' + $1 ...
                p313bOr7fu: [
                    {
                        // description: "'န' အတို သို့",
                        from: '\u1014',
                        to: '\u108F',
                        start: 2,
                        orGroup: 'A'
                    },
                    {
                        // description: "'ရ' အတို သို့",
                        from: '\u101B',
                        to: '\u1090',
                        start: 2,
                        orGroup: 'A'
                    },
                    {
                        // description: "'ဿ' သို့",
                        from: '\u103F',
                        to: '\u1086',
                        start: 2,
                        orGroup: 'A'
                    },
                    {
                        // description: "သုည မှ 'ဝ' သို့",
                        from: '\u1040',
                        to: '\u101D',
                        start: 2,
                        orGroup: 'A'
                    },

                    {
                        from: '\u103B[\u1009\u1025]',
                        to: '\u1081\u1025',
                        start: 1,
                        orGroup: 'B'
                    },
                    {
                        from: '\u107F[\u1009\u1025]',
                        to: '\u1083\u1025',
                        start: 1,
                        orGroup: 'B'
                    },
                    {
                        from: '\u103B([#zlc])',
                        to: '\u107E$1',
                        start: 1,
                        orGroup: 'B'
                    },
                    {
                        from: '\u107F([#zlc])',
                        to: '\u1080$1',
                        start: 1,
                        orGroup: 'B'
                    }
                ],

                // 'ြ' ...
                //
                // 'ြ' + $1 + [ွှွ] ...
                p81Or83u8aOr3c: [
                    {
                        // description: "'န' အတို သို့",
                        from: '\u1014',
                        to: '\u108F',
                        start: 1,
                        orGroup: 'A'
                    },
                    {
                        // description: "'ရ' အတို သို့",
                        from: '\u101B',
                        to: '\u1090',
                        start: 1,
                        orGroup: 'A'
                    },
                    {
                        // description: "'ဿ' သို့",
                        from: '\u103F',
                        to: '\u1086',
                        start: 1,
                        orGroup: 'A'
                    },
                    {
                        // description: "သုည မှ 'ဝ' သို့",
                        from: '\u1040',
                        to: '\u101D',
                        start: 1,
                        orGroup: 'A'
                    },
                    {
                        // description: "'[ဉဥ]' မှ",
                        from: '[\u1009\u1025]',
                        to: '\u106A',
                        start: 1,
                        orGroup: 'A'
                    },

                    {
                        from: '\u1081([#zlc])',
                        to: '\u1082$1',
                        orGroup: 'B'
                    },
                    {
                        from: '\u1083([#zlc])',
                        to: '\u1084$1',
                        orGroup: 'B'
                    }
                ],
                // 'ြ' + $1 + 'ှ' ...
                p3bOr7fu3d: [
                    {
                        // description: "'န' အတို သို့",
                        from: '\u1014',
                        to: '\u108F',
                        start: 1,
                        orGroup: 'A'
                    },
                    {
                        // description: "'ရ' အတို သို့",
                        from: '\u101B',
                        to: '\u1090',
                        start: 1,
                        orGroup: 'A'
                    },
                    {
                        // description: "'ဿ' သို့",
                        from: '\u103F',
                        to: '\u1086',
                        start: 1,
                        orGroup: 'A'
                    },
                    {
                        // description: "သုည မှ 'ဝ' သို့",
                        from: '\u1040',
                        to: '\u101D',
                        start: 1,
                        orGroup: 'A'
                    },
                    {
                        // description: "'ဉ' + 'ှ'",
                        from: '\u1009',
                        to: '\u1025',
                        start: 1,
                        orGroup: 'A',
                        when: {
                            'Zawgyi-One-2008': true
                        }
                    },

                    {
                        from: '\u103B[\u1009\u1025]',
                        to: '\u1081\u1025',
                        orGroup: 'B'
                    },
                    {
                        from: '\u107F[\u1009\u1025]',
                        to: '\u1083\u1025',
                        orGroup: 'B'
                    },
                    {
                        from: '\u103B([#zlc])',
                        to: '\u107E$1',
                        orGroup: 'B'
                    },
                    {
                        from: '\u107F([#zlc])',
                        to: '\u1080$1',
                        orGroup: 'B'
                    }
                ],
                // 'ြ' + $1 ...
                p3bOr7fu: [
                    {
                        // description: "'န' အတို သို့",
                        from: '\u1014',
                        to: '\u108F',
                        start: 1,
                        orGroup: 'A'
                    },
                    {
                        // description: "'ရ' အတို သို့",
                        from: '\u101B',
                        to: '\u1090',
                        start: 1,
                        orGroup: 'A'
                    },
                    {
                        // description: "'ဿ' သို့",
                        from: '\u103F',
                        to: '\u1086',
                        start: 1,
                        orGroup: 'A'
                    },
                    {
                        // description: "သုည မှ 'ဝ' သို့",
                        from: '\u1040',
                        to: '\u101D',
                        start: 1,
                        orGroup: 'A'
                    },

                    {
                        from: '\u103B[\u1009\u1025]',
                        to: '\u1081\u1025',
                        orGroup: 'B'
                    },
                    {
                        from: '\u107F[\u1009\u1025]',
                        to: '\u1083\u1025',
                        orGroup: 'B'
                    },
                    {
                        from: '\u103B([#zlc])',
                        to: '\u107E$1',
                        orGroup: 'B'
                    },
                    {
                        from: '\u107F([#zlc])',
                        to: '\u1080$1',
                        orGroup: 'B'
                    }
                ],

                // 'ေ' + ...
                //
                // 'ေ' + $1 + [ွှွ] + [ျ]? ...
                p31u8aOr3c: [
                    {
                        // description: "'န' အတို သို့",
                        from: '\u1014',
                        to: '\u108F',
                        start: 1,
                        orGroup: 'A'
                    },
                    {
                        // description: "'ရ' အတို သို့",
                        from: '\u101B',
                        to: '\u1090',
                        start: 1,
                        orGroup: 'A'
                    },
                    {
                        // description: "'ဿ' သို့",
                        from: '\u103F',
                        to: '\u1086',
                        start: 1,
                        orGroup: 'A'
                    },
                    {
                        // description: "သုည မှ 'ဝ' သို့",
                        from: '\u1040',
                        to: '\u101D',
                        start: 1,
                        orGroup: 'A'
                    },
                    {
                        // description: "'[ဉဥ]' မှ",
                        from: '[\u1009\u1025]',
                        to: '\u106A',
                        start: 1,
                        orGroup: 'A'
                    }
                ],
                // 'ေ' + $1 + 'ှ' + 'ျ' ...
                p31u3d3a: [
                    {
                        // description: "'န' အတို သို့",
                        from: '\u1014',
                        to: '\u108F',
                        start: 1,
                        orGroup: 'A'
                    },
                    {
                        // description: "'ရ' အတို သို့",
                        from: '\u101B',
                        to: '\u1090',
                        start: 1,
                        orGroup: 'A'
                    },
                    {
                        // description: "'ဿ' သို့",
                        from: '\u103F',
                        to: '\u1086',
                        start: 1,
                        orGroup: 'A'
                    },
                    {
                        // description: "သုည မှ 'ဝ' သို့",
                        from: '\u1040',
                        to: '\u101D',
                        start: 1,
                        orGroup: 'A'
                    },
                    {
                        // description: "'ဉ' + 'ှ'",
                        from: '\u1009',
                        to: '\u1025',
                        start: 1,
                        orGroup: 'A',
                        when: {
                            'Zawgyi-One-2008': true
                        }
                    }
                ],
                // 'ေ' + $1 + 'ျ' ...
                prs3113a: [
                    {
                        // description: "'န' အတို သို့",
                        from: '\u1014',
                        to: '\u108F',
                        start: 1,
                        orGroup: 'A'
                    },
                    {
                        // description: "'ရ' အတို သို့",
                        from: '\u101B',
                        to: '\u1090',
                        start: 1,
                        orGroup: 'A'
                    },
                    {
                        // description: "'ဿ' သို့",
                        from: '\u103F',
                        to: '\u1086',
                        start: 1,
                        orGroup: 'A'
                    },
                    {
                        // description: "သုည မှ 'ဝ' သို့",
                        from: '\u1040',
                        to: '\u101D',
                        start: 1,
                        orGroup: 'A'
                    },

                    {
                        from: '\u1009\u103A',
                        to: '\u106A\u107D',
                        start: 1,
                        orGroup: 'A'
                    }
                ],
                // 'ေ' + $1 + [ု  ူ  ှ] ...
                p31u2fOr30Or3d: [
                    {
                        // description: "'န' အတို သို့",
                        from: '\u1014',
                        to: '\u108F',
                        start: 1,
                        orGroup: 'A'
                    },
                    {
                        // description: "'ရ' အတို သို့",
                        from: '\u101B',
                        to: '\u1090',
                        start: 1,
                        orGroup: 'A'
                    },
                    {
                        // description: "'ဿ' သို့",
                        from: '\u103F',
                        to: '\u1086',
                        start: 1,
                        orGroup: 'A'
                    },
                    {
                        // description: "သုည မှ 'ဝ' သို့",
                        from: '\u1040',
                        to: '\u101D',
                        start: 1,
                        orGroup: 'A'
                    },
                    {
                        // description: "'ဉ' + 'ှ'",
                        from: '\u1009',
                        to: '\u1025',
                        start: 1,
                        orGroup: 'A',
                        when: {
                            'Zawgyi-One-2008': true
                        }
                    }
                ],
                // 'ေ' + $1 ...
                p31u: [
                    {
                        // description: "'ဿ' သို့",
                        from: '\u103F',
                        to: '\u1086',
                        start: 1,
                        orGroup: 'A'
                    },
                    {
                        // description: "သုည မှ 'ဝ' သို့",
                        from: '\u1040',
                        to: '\u101D',
                        start: 1,
                        orGroup: 'A'
                    }
                ],

                // $1 + ...
                //
                // $1 + 'ှ' + 'ျ' ...
                pu3d3a: [
                    {
                        // description: "'န' အတို သို့",
                        from: '\u1014',
                        to: '\u108F',
                        orGroup: 'A'
                    },
                    {
                        // description: "'ရ' အတို သို့",
                        from: '\u101B',
                        to: '\u1090',
                        orGroup: 'A'
                    },
                    {
                        // description: "'ဿ' သို့",
                        from: '\u103F',
                        to: '\u1086',
                        orGroup: 'A'
                    },
                    {
                        // description: "သုည မှ 'ဝ' သို့",
                        from: '\u1040',
                        to: '\u101D',
                        orGroup: 'A'
                    },
                    {
                        from: '[\u1009\u1025](\u103D\u103A)',
                        to: '\u106A$1',
                        orGroup: 'A'
                    }
                ],
                // $1 + 'ျ' ...
                pu3a: [
                    {
                        // description: "'န' အတို သို့",
                        from: '\u1014',
                        to: '\u108F',
                        orGroup: 'A'
                    },
                    {
                        // description: "'ရ' အတို သို့",
                        from: '\u101B',
                        to: '\u1090',
                        orGroup: 'A'
                    },
                    {
                        // description: "'ဿ' သို့",
                        from: '\u103F',
                        to: '\u1086',
                        orGroup: 'A'
                    },
                    {
                        // description: "သုည မှ 'ဝ' သို့",
                        from: '\u1040',
                        to: '\u101D',
                        orGroup: 'A'
                    },
                    {
                        from: '\u1009\u103A',
                        to: '\u106A\u107D',
                        orGroup: 'A'
                    }
                ],
                // $1 + [ွှွ] ...
                pu8aOr3c: [
                    {
                        // description: "'န' အတို သို့",
                        from: '\u1014',
                        to: '\u108F',
                        orGroup: 'A'
                    },
                    {
                        // description: "'ရ' အတို သို့",
                        from: '\u101B',
                        to: '\u1090',
                        orGroup: 'A'
                    },
                    {
                        // description: "'ဿ' သို့",
                        from: '\u103F',
                        to: '\u1086',
                        orGroup: 'A'
                    },
                    {
                        // description: "သုည မှ 'ဝ' သို့",
                        from: '\u1040',
                        to: '\u101D',
                        orGroup: 'A'
                    },
                    {
                        // description: "'[ဉဥ]' မှ",
                        from: '[\u1009\u1025]',
                        to: '\u106A',
                        orGroup: 'A'
                    }
                ],
                // $1 + 'ှ' ...
                pu2fOr30Or3d: [
                    {
                        // description: "'န' အတို သို့",
                        from: '\u1014',
                        to: '\u108F',
                        orGroup: 'A'
                    },
                    {
                        // description: "'ရ' အတို သို့",
                        from: '\u101B',
                        to: '\u1090',
                        orGroup: 'A'
                    },
                    {
                        // description: "'ဿ' သို့",
                        from: '\u103F',
                        to: '\u1086',
                        orGroup: 'A'
                    },
                    {
                        // description: "သုည မှ 'ဝ' သို့",
                        from: '\u1040',
                        to: '\u101D',
                        orGroup: 'A'
                    },
                    {
                        // description: "'ဉ' + 'ှ'",
                        from: '\u1009',
                        to: '\u1025',
                        orGroup: 'A',
                        when: {
                            'Zawgyi-One-2008': true
                        }
                    }
                ],
                // $1...
                pu: [
                    {
                        // description: "'ဿ' သို့",
                        from: '\u103F',
                        to: '\u1086',
                        orGroup: 'A'
                    },
                    {
                        // description: "သုည မှ 'ဝ' သို့",
                        from: '\u1040',
                        to: '\u101D',
                        orGroup: 'A'
                    }
                ]
            },
            rules: [
                // \u108B-\u108D
                // ------------------------------------------------------------------------------------------
                // Stacked
                {
                    // description: "'င်' + U+1039 + '#uc' + U+1039 + '#uc' + 'ြ' + 'ေ' + '#kx'",
                    from: '\u1004\u103A\u1039([#uc])\u1039([#uc])\u103C\u1031#kx',
                    to: '\u1031\u1083$1\u1039$2#kx',
                    minLength: 9,
                    quickTests: [['\u1004', 0], ['\u103A', 1], ['\u1039', 2], ['\u1039', 4], ['\u103C', 6], ['\u1031', 7], ['#kx', 8]],
                    postRulesRef: 'p3183u39u'
                },
                {
                    // description: "'င်' + U+1039 + '#uc' + U+1039 + '#uc' + 'ျ' + 'ေ' + '#kx'",
                    from: '\u1004\u103A\u1039([#uc])\u1039([#uc])\u103B\u1031#kx',
                    to: '\u1031$1\u1039$2\u107D#kx',
                    minLength: 9,
                    quickTests: [['\u1004', 0], ['\u103A', 1], ['\u1039', 2], ['\u1039', 4], ['\u103B', 6], ['\u1031', 7], ['#kx', 8]],
                    postRulesRef: 'p31u39u'
                },
                {
                    // description: "'င်' + U+1039 + '#uc' + U+1039 + '#uc' + 'ေ' + '#kx'",
                    from: '\u1004\u103A\u1039([#uc])\u1039([#uc])\u1031#kx',
                    to: '\u1031$1\u1039$2#kx',
                    minLength: 8,
                    quickTests: [['\u1004', 0], ['\u103A', 1], ['\u1039', 2], ['\u1039', 4], ['\u1031', 6], ['#kx', 7]],
                    postRulesRef: 'p31u39u'
                },
                {
                    // description: "'င်' + U+1039 + '#uc' + U+1039 + '#uc' + 'ြ' + '#kx'",
                    from: '\u1004\u103A\u1039([#uc])\u1039([#uc])\u103C#kx',
                    to: '\u1083$1\u1039$2#kx',
                    minLength: 8,
                    quickTests: [['\u1004', 0], ['\u103A', 1], ['\u1039', 2], ['\u1039', 4], ['\u103C', 6], ['#kx', 7]],
                    postRulesRef: 'p83u39u'
                },
                {
                    // description: "'င်' + U+1039 + '#uc' + U+1039 + '#uc' + 'ျ' + '#kx'",
                    from: '\u1004\u103A\u1039([#uc])\u1039([#uc])\u103B#kx',
                    to: '$1\u1039$2\u107D#kx',
                    minLength: 8,
                    quickTests: [['\u1004', 0], ['\u103A', 1], ['\u1039', 2], ['\u1039', 4], ['\u103B', 6], ['#kx', 7]],
                    postRulesRef: 'pu39u'
                },
                {
                    // description: "'င်' + U+1039 + '#uc' + U+1039 + '#uc' + '#kx'",
                    from: '\u1004\u103A\u1039([#uc])\u1039([#uc])#kx',
                    to: '$1\u1039$2#kx',
                    minLength: 7,
                    quickTests: [['\u1004', 0], ['\u103A', 1], ['\u1039', 2], ['\u1039', 4], ['#kx', 6]],
                    postRulesRef: 'pu39u'
                },

                // 'ေ' + 'ြ' ...
                {
                    // description: "'င်' + U+1039 + '#uc' + 'ြ' + 'ွှ' + 'ေ' + '#kx'",
                    from: '\u1004\u103A\u1039([#uc])\u103C\u103D\u103E\u1031#kx',
                    to: '\u1031\u1083$1\u108A#kx',
                    minLength: 9,
                    quickTests: [['\u1004', 0], ['\u103A', 1], ['\u1039', 2], ['\u103C', 4], ['\u103D', 5], ['\u103E', 6], ['\u1031', 7], ['#kx', 8]],
                    postRulesRef: 'p3181Or83u8aOr3c'
                },
                {
                    // description: "'င်' + U+1039 + '#uc' + 'ြ' + 'ွ' + 'ေ' + '#kx'",
                    from: '\u1004\u103A\u1039([#uc])\u103C\u103D\u1031#kx',
                    to: '\u1031\u1083$1\u103C#kx',
                    minLength: 8,
                    quickTests: [['\u1004', 0], ['\u103A', 1], ['\u1039', 2], ['\u103C', 4], ['\u103D', 5], ['\u1031', 6], ['#kx', 7]],
                    postRulesRef: 'p3181Or83u8aOr3c'
                },
                {
                    // description: "'င်' + U+1039 + '#uc' + 'ြ' + 'ှ' + 'ေ' + '#kx'",
                    from: '\u1004\u103A\u1039([#uc])\u103C\u103E\u1031#kx',
                    to: '\u1031\u107F$1\u103D#kx',
                    minLength: 8,
                    quickTests: [['\u1004', 0], ['\u103A', 1], ['\u1039', 2], ['\u103C', 4], ['\u103E', 5], ['\u1031', 6], ['#kx', 7]],
                    postRulesRef: 'p313bOr7fu3d'
                },
                {
                    // description: "'င်' + U+1039 + '#uc' + 'ြ' + 'ေ' + '#kx'",
                    from: '\u1004\u103A\u1039([#uc])\u103C\u1031#kx',
                    to: '\u1031\u107F$1#kx',
                    minLength: 7,
                    quickTests: [['\u1004', 0], ['\u103A', 1], ['\u1039', 2], ['\u103C', 4], ['\u1031', 5], ['#kx', 6]],
                    postRulesRef: 'p313bOr7fu'
                },

                // 'ြ' + ...
                {
                    // description: "'င်' + U+1039 + '#uc' + 'ြ' + 'ွှ' + '#kx'",
                    from: '\u1004\u103A\u1039([#uc])\u103C\u103D\u103E#kx',
                    to: '\u1083$1\u108A#kx',
                    minLength: 8,
                    quickTests: [['\u1004', 0], ['\u103A', 1], ['\u1039', 2], ['\u103C', 4], ['\u103D', 5], ['\u103E', 6], ['#kx', 7]],
                    postRulesRef: 'p81Or83u8aOr3c'
                },
                {
                    // description: "'င်' + U+1039 + '#uc' + 'ြ' + 'ွ' + '#kx'",
                    from: '\u1004\u103A\u1039([#uc])\u103C\u103D#kx',
                    to: '\u1083$1\u103C#kx',
                    minLength: 7,
                    quickTests: [['\u1004', 0], ['\u103A', 1], ['\u1039', 2], ['\u103C', 4], ['\u103D', 5], ['#kx', 6]],
                    postRulesRef: 'p81Or83u8aOr3c'
                },
                {
                    // description: "'င်' + U+1039 + '#uc' + 'ြ' + 'ှ' + '#kx'",
                    from: '\u1004\u103A\u1039([#uc])\u103C\u103E#kx',
                    to: '\u107F$1\u103D#kx',
                    minLength: 7,
                    quickTests: [['\u1004', 0], ['\u103A', 1], ['\u1039', 2], ['\u103C', 4], ['\u103E', 5], ['#kx', 6]],
                    postRulesRef: 'p3bOr7fu3d'
                },
                {
                    // description: "'င်' + U+1039 + '#uc' + 'ြ' + '#kx'",
                    from: '\u1004\u103A\u1039([#uc])\u103C#kx',
                    to: '\u107F$1#kx',
                    minLength: 6,
                    quickTests: [['\u1004', 0], ['\u103A', 1], ['\u1039', 2], ['\u103C', 4], ['#kx', 5]],
                    postRulesRef: 'p3bOr7fu'
                },

                // 'ေ' + ...
                {
                    // description: "'င်' + U+1039 + '#uc' + 'ျ' + 'ွှ' + 'ေ' + '#kx'",
                    from: '\u1004\u103A\u1039([#uc])\u103B\u103D\u103E\u1031#kx',
                    to: '\u1031$1\u108A\u107D#kx',
                    minLength: 9,
                    quickTests: [['\u1004', 0], ['\u103A', 1], ['\u1039', 2], ['\u103B', 4], ['\u103D', 5], ['\u103E', 6], ['\u1031', 7], ['#kx', 8]],
                    postRulesRef: 'p31u8aOr3c'
                },
                {
                    // description: "'င်' + U+1039 + '#uc' + 'ျ' + 'ွ' + 'ေ' + '#kx'",
                    from: '\u1004\u103A\u1039([#uc])\u103B\u103D\u1031#kx',
                    to: '\u1031$1\u103C\u107D#kx',
                    minLength: 8,
                    quickTests: [['\u1004', 0], ['\u103A', 1], ['\u1039', 2], ['\u103B', 4], ['\u103D', 5], ['\u1031', 6], ['#kx', 7]],
                    postRulesRef: 'p31u8aOr3c'
                },
                {
                    // description: "'င်' + U+1039 + '#uc' + 'ွှ' + 'ေ' + '#kx'",
                    from: '\u1004\u103A\u1039([#uc])\u103D\u103E\u1031#kx',
                    to: '\u1031$1\u108A#kx',
                    minLength: 8,
                    quickTests: [['\u1004', 0], ['\u103A', 1], ['\u1039', 2], ['\u103D', 4], ['\u103E', 5], ['\u1031', 6], ['#kx', 7]],
                    postRulesRef: 'p31u8aOr3c'
                },
                {
                    // description: "'င်' + U+1039 + '#uc' + 'ွ' + 'ေ' + '#kx'",
                    from: '\u1004\u103A\u1039([#uc])\u103D\u1031#kx',
                    to: '\u1031$1\u103C#kx',
                    minLength: 7,
                    quickTests: [['\u1004', 0], ['\u103A', 1], ['\u1039', 2], ['\u103D', 4], ['\u1031', 5], ['#kx', 6]],
                    postRulesRef: 'p31u8aOr3c'
                },
                {
                    // description: "'င်' + U+1039 + '#uc' + 'ျ' + 'ှ' + 'ေ' + '#kx'",
                    from: '\u1004\u103A\u1039([#uc])\u103B\u103E\u1031#kx',
                    to: '\u1031$1\u103D\u103A#kx',
                    minLength: 8,
                    quickTests: [['\u1004', 0], ['\u103A', 1], ['\u1039', 2], ['\u103B', 4], ['\u103E', 5], ['\u1031', 6], ['#kx', 7]],
                    postRulesRef: 'p31u3d3a'
                },
                {
                    // description: "'င်' + U+1039 + '#uc' + 'ျ' + 'ေ' + '#kx'",
                    from: '\u1004\u103A\u1039([#uc])\u103B\u1031#kx',
                    to: '\u1031$1\u103A#kx',
                    minLength: 7,
                    quickTests: [['\u1004', 0], ['\u103A', 1], ['\u1039', 2], ['\u103B', 4], ['\u1031', 5], ['#kx', 6]],
                    postRulesRef: 'prs3113a'
                },
                {
                    // description: "'င်' + U+1039 + '#uc' + 'ှ' + 'ေ' + 'kss'",
                    from: '\u1004\u103A\u1039([#uc])\u103E\u1031#kx',
                    to: '\u1031$1\u103D#kx',
                    minLength: 7,
                    quickTests: [['\u1004', 0], ['\u103A', 1], ['\u1039', 2], ['\u103E', 4], ['\u1031', 5], ['#kx', 6]],
                    postRulesRef: 'p31u2fOr30Or3d'
                },
                {
                    // description: "''င်' + U+1039 + '#uc' + 'ေ' + 'kss'",
                    from: '\u1004\u103A\u1039([#uc])\u1031#kx',
                    to: '\u1031$1#kx',
                    minLength: 6,
                    quickTests: [['\u1004', 0], ['\u103A', 1], ['\u1039', 2], ['\u1031', 4], ['#kx', 5]],
                    postRulesRef: 'p31u'
                },

                // $1 + ...
                {
                    // description: "'င်' + U+1039 + '#uc' + 'ျ' + 'ှ' + '#kx'",
                    from: '\u1004\u103A\u1039([#uc])\u103B\u103E#kx',
                    to: '$1\u103D\u103A#kx',
                    minLength: 7,
                    quickTests: [['\u1004', 0], ['\u103A', 1], ['\u1039', 2], ['\u103B', 4], ['\u103E', 5], ['#kx', 6]],
                    postRulesRef: 'pu3d3a'
                },
                {
                    // description: "'င်' + U+1039 + '#uc' + 'ျ' + '#kx'",
                    from: '\u1004\u103A\u1039([#uc])\u103B#kx',
                    to: '$1\u103A#kx',
                    minLength: 6,
                    quickTests: [['\u1004', 0], ['\u103A', 1], ['\u1039', 2], ['\u103B', 4], ['#kx', 5]],
                    postRulesRef: 'u3a'
                },
                {
                    // description: "'င်' + U+1039 + '#uc' + 'ျ' + 'ွှ' + '#kx'",
                    from: '\u1004\u103A\u1039([#uc])\u103B\u103D\u103E#kx',
                    to: '$1\u108A\u107D#kx',
                    minLength: 8,
                    quickTests: [['\u1004', 0], ['\u103A', 1], ['\u1039', 2], ['\u103B', 4], ['\u103D', 5], ['\u103E', 6], ['#kx', 7]],
                    postRulesRef: 'pu8aOr3c'
                },
                {
                    // description: "'င်' + U+1039 + '#uc' + 'ျ' + 'ွ' + '#kx'",
                    from: '\u1004\u103A\u1039([#uc])\u103B\u103D#kx',
                    to: '$1\u103C\u107D#kx',
                    minLength: 7,
                    quickTests: [['\u1004', 0], ['\u103A', 1], ['\u1039', 2], ['\u103B', 4], ['\u103D', 5], ['#kx', 6]],
                    postRulesRef: 'pu8aOr3c'
                },
                {
                    // description: "'င်' + U+1039 + '#uc' + 'ွှ' + '#kx'",
                    from: '\u1004\u103A\u1039([#uc])\u103D\u103E#kx',
                    to: '$1\u108A#kx',
                    minLength: 7,
                    quickTests: [['\u1004', 0], ['\u103A', 1], ['\u1039', 2], ['\u103D', 4], ['\u103E', 5], ['#kx', 6]],
                    postRulesRef: 'pu8aOr3c'
                },
                {
                    // description: "'င်' + U+1039 + '#uc' + 'ွ' + '#kx'",
                    from: '\u1004\u103A\u1039([#uc])\u103D#kx',
                    to: '$1\u103C#kx',
                    minLength: 6,
                    quickTests: [['\u1004', 0], ['\u103A', 1], ['\u1039', 2], ['\u103D', 4], ['#kx', 5]],
                    postRulesRef: 'pu8aOr3c'
                },
                {
                    // description: "'င်' + U+1039 + '#uc' + 'ှ' + '#kx'",
                    from: '\u1004\u103A\u1039([#uc])\u103E#kx',
                    to: '$1\u103D#kx',
                    minLength: 6,
                    quickTests: [['\u1004', 0], ['\u103A', 1], ['\u1039', 2], ['\u103E', 4], ['#kx', 5]],
                    postRulesRef: 'pu2fOr30Or3d'
                },
                {
                    // description: "''င်' + U+1039 + '#uc' + '#kx'",
                    from: '\u1004\u103A\u1039([#uc])#kx',
                    to: '$1#kx',
                    minLength: 5,
                    quickTests: [['\u1004', 0], ['\u103A', 1], ['\u1039', 2], ['#kx', 4]],
                    postRulesRef: 'pu'
                },

                // \u1064
                // ------------------------------------------------------------------------------------------
                // Stacked
                {
                    // description: "'င်' + U+1039 + '#uc' + U+1039 + '#uc' + 'ြ' + 'ေ'",
                    from: '\u1004\u103A\u1039([#uc])\u1039([#uc])\u103C\u1031',
                    to: '\u1031\u1083$1\u1039$2\u1064',
                    minLength: 8,
                    quickTests: [['\u1004', 0], ['\u103A', 1], ['\u1039', 2], ['\u1039', 4], ['\u103C', 6], ['\u1031', 7]],
                    postRulesRef: 'p3183u39u'
                },
                {
                    // description: "'င်' + U+1039 + '#uc' + U+1039 + '#uc' + 'ျ' + 'ေ'",
                    from: '\u1004\u103A\u1039([#uc])\u1039([#uc])\u103B\u1031',
                    to: '\u1031$1\u1039$2\u107D\u1064',
                    minLength: 8,
                    quickTests: [['\u1004', 0], ['\u103A', 1], ['\u1039', 2], ['\u1039', 4], ['\u103B', 6], ['\u1031', 7]],
                    postRulesRef: 'p31u39u'
                },
                {
                    // description: "'င်' + U+1039 + '#uc' + U+1039 + '#uc' + 'ေ'",
                    from: '\u1004\u103A\u1039([#uc])\u1039([#uc])\u1031',
                    to: '\u1031$1\u1039$2\u1064',
                    minLength: 7,
                    quickTests: [['\u1004', 0], ['\u103A', 1], ['\u1039', 2], ['\u1039', 4], ['\u1031', 6]],
                    postRulesRef: 'p31u39u'
                },
                {
                    // description: "'င်' + U+1039 + '#uc' + U+1039 + '#uc' + 'ြ'",
                    from: '\u1004\u103A\u1039([#uc])\u1039([#uc])\u103C',
                    to: '\u1083$1\u1039$2\u1064',
                    minLength: 7,
                    quickTests: [['\u1004', 0], ['\u103A', 1], ['\u1039', 2], ['\u1039', 4], ['\u103C', 6]],
                    postRulesRef: 'p83u39u'
                },
                {
                    // description: "'င်' + U+1039 + '#uc' + U+1039 + '#uc' + 'ျ'",
                    from: '\u1004\u103A\u1039([#uc])\u1039([#uc])\u103B',
                    to: '$1\u1039$2\u107D\u1064',
                    minLength: 7,
                    quickTests: [['\u1004', 0], ['\u103A', 1], ['\u1039', 2], ['\u1039', 4], ['\u103B', 6]],
                    postRulesRef: 'pu39u'
                },
                {
                    // description: "'င်' + U+1039 + '#uc' + U+1039 + '#uc'",
                    from: '\u1004\u103A\u1039([#uc])\u1039([#uc])',
                    to: '$1\u1039$2\u1064',
                    minLength: 6,
                    quickTests: [['\u1004', 0], ['\u103A', 1], ['\u1039', 2], ['\u1039', 4]],
                    postRulesRef: 'pu39u'
                },

                // 'ေ' + 'ြ' ...
                {
                    // description: "'င်' + U+1039 + '#uc' + 'ြ' + 'ွှ' + 'ေ'",
                    from: '\u1004\u103A\u1039([#uc])\u103C\u103D\u103E\u1031',
                    to: '\u1031\u1083$1\u108A\u1064',
                    minLength: 8,
                    quickTests: [['\u1004', 0], ['\u103A', 1], ['\u1039', 2], ['\u103C', 4], ['\u103D', 5], ['\u103E', 6], ['\u1031', 7]],
                    postRulesRef: 'p3181Or83u8aOr3c'
                },
                {
                    // description: "'င်' + U+1039 + '#uc' + 'ြ' + 'ွ' + 'ေ'",
                    from: '\u1004\u103A\u1039([#uc])\u103C\u103D\u1031',
                    to: '\u1031\u1083$1\u103C\u1064',
                    minLength: 7,
                    quickTests: [['\u1004', 0], ['\u103A', 1], ['\u1039', 2], ['\u103C', 4], ['\u103D', 5], ['\u1031', 6]],
                    postRulesRef: 'p3181Or83u8aOr3c'
                },
                {
                    // description: "'င်' + U+1039 + '#uc' + 'ြ' + 'ှ' + 'ေ'",
                    from: '\u1004\u103A\u1039([#uc])\u103C\u103E\u1031',
                    to: '\u1031\u107F$1\u103D\u1064',
                    minLength: 7,
                    quickTests: [['\u1004', 0], ['\u103A', 1], ['\u1039', 2], ['\u103C', 4], ['\u103E', 5], ['\u1031', 6]],
                    postRulesRef: 'p313bOr7fu3d'
                },
                {
                    // description: "'င်' + U+1039 + '#uc' + 'ြ' + 'ေ'",
                    from: '\u1004\u103A\u1039([#uc])\u103C\u1031',
                    to: '\u1031\u107F$1\u1064',
                    minLength: 6,
                    quickTests: [['\u1004', 0], ['\u103A', 1], ['\u1039', 2], ['\u103C', 4], ['\u1031', 5]],
                    postRulesRef: 'p313bOr7fu'
                },

                // 'ြ' + ...
                {
                    // description: "'င်' + U+1039 + '#uc' + 'ြ' + 'ွှ'",
                    from: '\u1004\u103A\u1039([#uc])\u103C\u103D\u103E',
                    to: '\u1083$1\u108A\u1064',
                    minLength: 7,
                    quickTests: [['\u1004', 0], ['\u103A', 1], ['\u1039', 2], ['\u103C', 4], ['\u103D', 5], ['\u103E', 6]],
                    postRulesRef: 'p81Or83u8aOr3c'
                },
                {
                    // description: "'င်' + U+1039 + '#uc' + 'ြ' + 'ွ'",
                    from: '\u1004\u103A\u1039([#uc])\u103C\u103D',
                    to: '\u1083$1\u103C\u1064',
                    minLength: 6,
                    quickTests: [['\u1004', 0], ['\u103A', 1], ['\u1039', 2], ['\u103C', 4], ['\u103D', 5]],
                    postRulesRef: 'p81Or83u8aOr3c'
                },
                {
                    // description: "'င်' + U+1039 + '#uc' + 'ြ' + 'ှ'",
                    from: '\u1004\u103A\u1039([#uc])\u103C\u103E',
                    to: '\u107F$1\u103D\u1064',
                    minLength: 6,
                    quickTests: [['\u1004', 0], ['\u103A', 1], ['\u1039', 2], ['\u103C', 4], ['\u103E', 5]],
                    postRulesRef: 'p3bOr7fu3d'
                },
                {
                    // description: "'င်' + U+1039 + '#uc' + 'ြ'",
                    from: '\u1004\u103A\u1039([#uc])\u103C',
                    to: '\u107F$1\u1064',
                    minLength: 5,
                    quickTests: [['\u1004', 0], ['\u103A', 1], ['\u1039', 2], ['\u103C', 4]],
                    postRulesRef: 'p3bOr7fu'
                },

                // 'ေ' + ...
                {
                    // description: "'င်' + U+1039 + '#uc' + 'ျ' + 'ွှ' + 'ေ'",
                    from: '\u1004\u103A\u1039([#uc])\u103B\u103D\u103E\u1031',
                    to: '\u1031$1\u108A\u107D\u1064',
                    minLength: 8,
                    quickTests: [['\u1004', 0], ['\u103A', 1], ['\u1039', 2], ['\u103B', 4], ['\u103D', 5], ['\u103E', 6], ['\u1031', 7]],
                    postRulesRef: 'p31u8aOr3c'
                },
                {
                    // description: "'င်' + U+1039 + '#uc' + 'ျ' + 'ွ' + 'ေ'",
                    from: '\u1004\u103A\u1039([#uc])\u103B\u103D\u1031',
                    to: '\u1031$1\u103C\u107D\u1064',
                    minLength: 7,
                    quickTests: [['\u1004', 0], ['\u103A', 1], ['\u1039', 2], ['\u103B', 4], ['\u103D', 5], ['\u1031', 6]],
                    postRulesRef: 'p31u8aOr3c'
                },
                {
                    // description: "'င်' + U+1039 + '#uc' + 'ွှ' + 'ေ'",
                    from: '\u1004\u103A\u1039([#uc])\u103D\u103E\u1031',
                    to: '\u1031$1\u108A\u1064',
                    minLength: 7,
                    quickTests: [['\u1004', 0], ['\u103A', 1], ['\u1039', 2], ['\u103D', 4], ['\u103E', 5], ['\u1031', 6]],
                    postRulesRef: 'p31u8aOr3c'
                },
                {
                    // description: "'င်' + U+1039 + '#uc' + 'ွ' + 'ေ'",
                    from: '\u1004\u103A\u1039([#uc])\u103D\u1031',
                    to: '\u1031$1\u103C\u1064',
                    minLength: 6,
                    quickTests: [['\u1004', 0], ['\u103A', 1], ['\u1039', 2], ['\u103D', 4], ['\u1031', 5]],
                    postRulesRef: 'p31u8aOr3c'
                },
                {
                    // description: "'င်' + U+1039 + '#uc' + 'ျ' + 'ှ' + 'ေ'",
                    from: '\u1004\u103A\u1039([#uc])\u103B\u103E\u1031',
                    to: '\u1031$1\u103D\u103A\u1064',
                    minLength: 7,
                    quickTests: [['\u1004', 0], ['\u103A', 1], ['\u1039', 2], ['\u103B', 4], ['\u103E', 5], ['\u1031', 6]],
                    postRulesRef: 'p31u3d3a'
                },
                {
                    // description: "'င်' + U+1039 + '#uc' + 'ျ' + 'ေ'",
                    from: '\u1004\u103A\u1039([#uc])\u103B\u1031',
                    to: '\u1031$1\u103A\u1064',
                    minLength: 6,
                    quickTests: [['\u1004', 0], ['\u103A', 1], ['\u1039', 2], ['\u103B', 4], ['\u1031', 5]],
                    postRulesRef: 'prs3113a'
                },
                {
                    // description: "'င်' + U+1039 + '#uc' + 'ှ' + 'ေ'",
                    from: '\u1004\u103A\u1039([#uc])\u103E\u1031',
                    to: '\u1031$1\u103D\u1064',
                    minLength: 6,
                    quickTests: [['\u1004', 0], ['\u103A', 1], ['\u1039', 2], ['\u103E', 4], ['\u1031', 5]],
                    postRulesRef: 'p31u2fOr30Or3d'
                },
                {
                    // description: "''င်' + U+1039 + '#uc' + 'ေ'",
                    from: '\u1004\u103A\u1039([#uc])\u1031',
                    to: '\u1031$1\u1064',
                    minLength: 5,
                    quickTests: [['\u1004', 0], ['\u103A', 1], ['\u1039', 2], ['\u1031', 4]],
                    postRulesRef: 'p31u'
                },

                // $1 + ...
                {
                    // description: "'င်' + U+1039 + '#uc' + 'ျ' + 'ှ'",
                    from: '\u1004\u103A\u1039([#uc])\u103B\u103E',
                    to: '$1\u103D\u103A\u1064',
                    minLength: 6,
                    quickTests: [['\u1004', 0], ['\u103A', 1], ['\u1039', 2], ['\u103B', 4], ['\u103E', 5]],
                    postRulesRef: 'pu3d3a'
                },
                {
                    // description: "'င်' + U+1039 + '#uc' + 'ျ'",
                    from: '\u1004\u103A\u1039([#uc])\u103B',
                    to: '$1\u103A\u1064',
                    minLength: 5,
                    quickTests: [['\u1004', 0], ['\u103A', 1], ['\u1039', 2], ['\u103B', 4]],
                    postRulesRef: 'u3a'
                },
                {
                    // description: "'င်' + U+1039 + '#uc' + 'ျ' + 'ွှ'",
                    from: '\u1004\u103A\u1039([#uc])\u103B\u103D\u103E',
                    to: '$1\u108A\u107D\u1064',
                    minLength: 7,
                    quickTests: [['\u1004', 0], ['\u103A', 1], ['\u1039', 2], ['\u103B', 4], ['\u103D', 5], ['\u103E', 6]],
                    postRulesRef: 'pu8aOr3c'
                },
                {
                    // description: "'င်' + U+1039 + '#uc' + 'ျ' + 'ွ'",
                    from: '\u1004\u103A\u1039([#uc])\u103B\u103D',
                    to: '$1\u103C\u107D\u1064',
                    minLength: 6,
                    quickTests: [['\u1004', 0], ['\u103A', 1], ['\u1039', 2], ['\u103B', 4], ['\u103D', 5]],
                    postRulesRef: 'pu8aOr3c'
                },
                {
                    // description: "'င်' + U+1039 + '#uc' + 'ွှ'",
                    from: '\u1004\u103A\u1039([#uc])\u103D\u103E',
                    to: '$1\u108A\u1064',
                    minLength: 6,
                    quickTests: [['\u1004', 0], ['\u103A', 1], ['\u1039', 2], ['\u103D', 4], ['\u103E', 5]],
                    postRulesRef: 'pu8aOr3c'
                },
                {
                    // description: "'င်' + U+1039 + '#uc' + 'ွ'",
                    from: '\u1004\u103A\u1039([#uc])\u103D',
                    to: '$1\u103C\u1064',
                    minLength: 5,
                    quickTests: [['\u1004', 0], ['\u103A', 1], ['\u1039', 2], ['\u103D', 4]],
                    postRulesRef: 'pu8aOr3c'
                },
                {
                    // description: "'င်' + U+1039 + '#uc' + 'ှ'",
                    from: '\u1004\u103A\u1039([#uc])\u103E',
                    to: '$1\u103D\u1064',
                    minLength: 5,
                    quickTests: [['\u1004', 0], ['\u103A', 1], ['\u1039', 2], ['\u103E', 4]],
                    postRulesRef: 'pu2fOr30Or3d'
                },
                {
                    // description: "''င်' + U+1039 + '#uc'",
                    from: '\u1004\u103A\u1039([#uc])',
                    to: '$1\u1064',
                    minLength: 4,
                    quickTests: [['\u1004', 0], ['\u103A', 1], ['\u1039', 2]],
                    postRulesRef: 'pu'
                },

                // \u108B-\u108D
                // ------------------------------------------------------------------------------------------
                {
                    from: '\u1004\u103A\u1039#kx',
                    to: '#kx',
                    minLength: 4,
                    quickTests: [['\u1004', 0], ['\u103A', 1], ['\u1039', 2], ['#kx', 3]],
                },

                // \u1064
                // ------------------------------------------------------------------------------------------
                {
                    from: '\u1004\u103A\u1039',
                    to: '\u1064',
                    minLength: 3,
                    quickTests: [['\u1004', 0], ['\u103A', 1], ['\u1039', 2]]
                },

                // \u108E
                // ------------------------------------------------------------------------------------------
                {
                    // description: "'#uc' + U+1039 + '#uc' + 'ြ' + 'ေ' + 'ိံ'",
                    from: '([#uc])\u1039([#uc])\u103C\u1031\u102D\u1036',
                    to: '\u1031\u1083$1\u1039$2\u108E',
                    minLength: 7,
                    quickTests: [['\u1039', 1], ['\u103C', 3], ['\u1031', 4], ['\u102D', 5], ['\u1036', 6]],
                    postRulesRef: 'p3183u39u'
                },
                {
                    // description: "'#uc' + U+1039 + '#uc' + 'ျ' + 'ေ' + 'ိံ'",
                    from: '([#uc])\u1039([#uc])\u103B\u1031\u102D\u1036',
                    to: '\u1031$1\u1039$2\u107D\u108E',
                    minLength: 7,
                    quickTests: [['\u1039', 1], ['\u103B', 3], ['\u1031', 4], ['\u102D', 5], ['\u1036', 6]],
                    postRulesRef: 'p31u39u'
                },
                {
                    // description: "'#uc' + U+1039 + '#uc' +  'ေ' + 'ိံ'",
                    from: '([#uc])\u1039([#uc])\u1031\u102D\u1036',
                    to: '\u1031$1\u1039$2\u108E',
                    minLength: 6,
                    quickTests: [['\u1039', 1], ['\u1031', 3], ['\u102D', 4], ['\u1036', 5]],
                    postRulesRef: 'p31u39u'
                },
                {
                    // description: "'#uc' + U+1039 + '#uc' + 'ြ' + 'ိံ'",
                    from: '([#uc])\u1039([#uc])\u103C\u102D\u1036',
                    to: '\u1083$1\u1039$2\u108E',
                    minLength: 6,
                    quickTests: [['\u1039', 1], ['\u103C', 3], ['\u102D', 4], ['\u1036', 5]],
                    postRulesRef: 'p83u39u'
                },
                {
                    // description: "'#uc' + U+1039 + '#uc' + 'ျ' + 'ိံ'",
                    from: '([#uc])\u1039([#uc])\u103B\u102D\u1036',
                    to: '$1\u1039$2\u107D\u108E',
                    minLength: 6,
                    quickTests: [['\u1039', 1], ['\u103B', 3], ['\u102D', 4], ['\u1036', 5]],
                    postRulesRef: 'pu39u'
                },
                {
                    // description: "'#uc' + U+1039 + '#uc' + 'ိံ'",
                    from: '([#uc])\u1039([#uc])\u102D\u1036',
                    to: '$1\u1039$2\u108E',
                    minLength: 5,
                    quickTests: [['\u1039', 1], ['\u102D', 3], ['\u1036', 4]],
                    postRulesRef: 'pu39u'
                },

                {
                    // description: "'#uc' + 'ြ' + 'ွှ' + 'ေ' + 'ိံ'",
                    from: '([#uc])\u103C\u103D\u103E\u1031\u102D\u1036',
                    to: '\u1031\u1083$1\u108A\u108E',
                    minLength: 7,
                    quickTests: [['\u103C', 1], ['\u103D', 2], ['\u103E', 3], ['\u1031', 4], ['\u102D', 5], ['\u1036', 6]],
                    postRulesRef: 'p3181Or83u8aOr3c'
                },
                {
                    // description: "'#uc' + 'ြ' + 'ွ' + 'ေ' +  'ိံ'",
                    from: '([#uc])\u103C\u103D\u1031\u102D\u1036',
                    to: '\u1031\u1083$1\u103C\u108E',
                    minLength: 6,
                    quickTests: [['\u103C', 1], ['\u103D', 2], ['\u1031', 3], ['\u102D', 4], ['\u1036', 5]],
                    postRulesRef: 'p3181Or83u8aOr3c'

                },
                {
                    // description: "'#uc' + 'ြ' + 'ှ' + 'ေ' +  'ိံ'",
                    from: '([#uc])\u103C\u103E\u1031\u102D\u1036',
                    to: '\u1031\u107F$1\u103D\u108E',
                    minLength: 6,
                    quickTests: [['\u103C', 1], ['\u103E', 2], ['\u1031', 3], ['\u102D', 4], ['\u1036', 5]],
                    postRulesRef: 'p313bOr7fu3d'
                },
                {
                    // description: "'#uc' + 'ြ' + 'ေ' +  'ိံ'",
                    from: '([#uc])\u103C\u1031\u102D\u1036',
                    to: '\u1031\u107F$1\u108E',
                    minLength: 5,
                    quickTests: [['\u103C', 1], ['\u1031', 2], ['\u102D', 3], ['\u1036', 4]],
                    postRulesRef: 'p313bOr7fu'
                },

                {
                    description: "'#uc' + 'ြ' + 'ွှ' +  'ိံ'",
                    from: '([#uc])\u103C\u103D\u103E\u102D\u1036',
                    to: '\u1083$1\u108A\u108E',
                    minLength: 6,
                    quickTests: [['\u103C', 1], ['\u103D', 2], ['\u103E', 3], ['\u102D', 4], ['\u1036', 5]],
                    postRulesRef: 'p81Or83u8aOr3c'
                },
                {
                    // description: "'#uc' + 'ြ' + 'ွ' +  'ိံ'",
                    from: '([#uc])\u103C\u103D\u102D\u1036',
                    to: '\u1083$1\u103C\u108E',
                    minLength: 5,
                    quickTests: [['\u103C', 1], ['\u103D', 2], ['\u102D', 3], ['\u1036', 4]],
                    postRulesRef: 'p81Or83u8aOr3c'
                },
                {
                    // description: "'#uc' + 'ြ' + 'ှ' +  'ိံ'",
                    from: '([#uc])\u103C\u103E\u102D\u1036',
                    to: '\u107F$1\u103D\u108E',
                    minLength: 5,
                    quickTests: [['\u103C', 1], ['\u103E', 2], ['\u102D', 3], ['\u1036', 4]],
                    postRulesRef: 'p3bOr7fu3d'
                },
                {
                    // description: "'#uc' + 'ြ' +  'ိံ'",
                    from: '([#uc])\u103C\u102D\u1036',
                    to: '\u107F$1\u108E',
                    minLength: 4,
                    quickTests: [['\u103C', 1], ['\u102D', 2], ['\u1036', 3]],
                    postRulesRef: 'p3bOr7fu'
                },
                {
                    // description: "'#uc' + 'ျ' + 'ွှ' + 'ေ' +  'ိံ'",
                    from: '([#uc])\u103B\u103D\u103E\u1031\u102D\u1036',
                    to: '\u1031$1\u108A\u107D\u108E',
                    minLength: 7,
                    quickTests: [['\u103B', 1], ['\u103D', 2], ['\u103E', 3], ['\u1031', 4], ['\u102D', 5], ['\u1036', 6]],
                    postRulesRef: 'p31u8aOr3c'
                },
                {
                    // description: "'#uc' + 'ျ' + 'ွ' + 'ေ' +  'ိံ'",
                    from: '([#uc])\u103B\u103D\u1031\u102D\u1036',
                    to: '\u1031$1\u103C\u107D\u108E',
                    minLength: 6,
                    quickTests: [['\u103B', 1], ['\u103D', 2], ['\u1031', 3], ['\u102D', 4], ['\u1036', 5]],
                    postRulesRef: 'p31u8aOr3c'
                },
                {
                    // description: "'#uc' + 'ွှ' + 'ေ' +  'ိံ'",
                    from: '([#uc])\u103D\u103E\u1031\u102D\u1036',
                    to: '\u1031$1\u108A\u108E',
                    minLength: 6,
                    quickTests: [['\u103D', 1], ['\u103E', 2], ['\u1031', 3], ['\u102D', 4], ['\u1036', 5]],
                    postRulesRef: 'p31u8aOr3c'
                },
                {
                    // description: "'#uc' + 'ွ' + 'ေ' +  'ိံ'",
                    from: '([#uc])\u103D\u1031\u102D\u1036',
                    to: '\u1031$1\u103C\u108E',
                    minLength: 5,
                    quickTests: [['\u103D', 1], ['\u1031', 2], ['\u102D', 3], ['\u1036', 4]],
                    postRulesRef: 'p31u8aOr3c'
                },
                {
                    // description: "'#uc' + 'ျ' + 'ှ' + 'ေ' +  'ိံ'",
                    from: '([#uc])\u103B\u103E\u1031\u102D\u1036',
                    to: '\u1031$1\u103D\u103A\u108E',
                    minLength: 6,
                    quickTests: [['\u103B', 1], ['\u103E', 2], ['\u1031', 3], ['\u102D', 4], ['\u1036', 5]],
                    postRulesRef: 'p31u3d3a'
                },
                {
                    // description: "'#uc' + 'ျ' + 'ေ' +  'ိံ'",
                    from: '([#uc])\u103B\u1031\u102D\u1036',
                    to: '\u1031$1\u103A\u108E',
                    minLength: 5,
                    quickTests: [['\u103B', 1], ['\u1031', 2], ['\u102D', 3], ['\u1036', 4]],
                    postRulesRef: 'prs3113a'
                },
                {
                    // description: "'#uc' + 'ှ' + 'ေ' + 'kss'",
                    from: '([#uc])\u103E\u1031\u102D\u1036',
                    to: '\u1031$1\u103D\u108E',
                    minLength: 5,
                    quickTests: [['\u103E', 1], ['\u1031', 2], ['\u102D', 3], ['\u1036', 4]],
                    postRulesRef: 'p31u2fOr30Or3d'
                },
                {
                    // description: "''#uc' + 'ေ' + 'kss'",
                    from: '([#uc])\u1031\u102D\u1036',
                    to: '\u1031$1\u108E',
                    minLength: 4,
                    quickTests: [['\u1031', 1], ['\u102D', 2], ['\u1036', 3]],
                    postRulesRef: 'p31u'
                },

                {
                    // description: "'#uc' + 'ျ' + 'ှ' +  'ိံ'",
                    from: '([#uc])\u103B\u103E\u102D\u1036',
                    to: '$1\u103D\u103A\u108E',
                    minLength: 5,
                    quickTests: [['\u103B', 1], ['\u103E', 2], ['\u102D', 3], ['\u1036', 4]],
                    postRulesRef: 'pu3d3a'
                },
                {
                    // description: "'#uc' + 'ျ' +  'ိံ'",
                    from: '([#uc])\u103B\u102D\u1036',
                    to: '$1\u103A\u108E',
                    minLength: 4,
                    quickTests: [['\u103B', 1], ['\u102D', 2], ['\u1036', 3]],
                    postRulesRef: 'u3a'
                },
                {
                    // description: "'#uc' + 'ျ' + 'ွှ' +  'ိံ'",
                    from: '([#uc])\u103B\u103D\u103E\u102D\u1036',
                    to: '$1\u108A\u107D\u108E',
                    minLength: 6,
                    quickTests: [['\u103B', 1], ['\u103D', 2], ['\u103E', 3], ['\u102D', 4], ['\u1036', 5]],
                    postRulesRef: 'pu8aOr3c'
                },
                {
                    // description: "'#uc' + 'ျ' + 'ွ' +  'ိံ'",
                    from: '([#uc])\u103B\u103D\u102D\u1036',
                    to: '$1\u103C\u107D\u108E',
                    minLength: 5,
                    quickTests: [['\u103B', 1], ['\u103D', 2], ['\u102D', 3], ['\u1036', 4]],
                    postRulesRef: 'pu8aOr3c'
                },
                {
                    // description: "'#uc' + 'ွှ' +  'ိံ'",
                    from: '([#uc])\u103D\u103E\u102D\u1036',
                    to: '$1\u108A\u108E',
                    minLength: 5,
                    quickTests: [['\u103D', 1], ['\u103E', 2], ['\u102D', 3], ['\u1036', 4]],
                    postRulesRef: 'pu8aOr3c'
                },
                {
                    // description: "'#uc' + 'ွ' +  'ိံ'",
                    from: '([#uc])\u103D\u102D\u1036',
                    to: '$1\u103C\u108E',
                    minLength: 4,
                    quickTests: [['\u103D', 1], ['\u102D', 2], ['\u1036', 3]],
                    postRulesRef: 'pu8aOr3c'
                },
                {
                    // description: "'#uc' + 'ှ' +  'ိံ'",
                    from: '([#uc])\u103E\u102D\u1036',
                    to: '$1\u103D\u108E',
                    minLength: 4,
                    quickTests: [['\u103E', 1], ['\u102D', 2], ['\u1036', 3]],
                    postRulesRef: 'pu2fOr30Or3d'
                },
                {
                    // description: "''#uc' +  'ိံ'",
                    from: '([#uc])\u102D\u1036',
                    to: '$1\u108E',
                    minLength: 3,
                    quickTests: [['\u102D', 1], ['\u1036', 2]],
                    postRulesRef: 'pu'
                },

                {
                    from: '\u102D\u1036',
                    to: '\u108E',
                    minLength: 2,
                    quickTests: [['\u102D', 0], ['\u1036', 1]],
                },

                // Stacked
                // ------------------------------------------------------------------------------------------
                {
                    // description: "'ဍ' + U+1039 + 'ဍ' + 'ြ' + 'ေ'",
                    from: '\u100D\u1039\u100D\u103C\u1031',
                    to: '\u1031\u1081\u106E',
                    minLength: 5,
                    quickTests: [['\u100D', 0], ['\u1039', 1], ['\u100D', 2], ['\u103C', 3], ['\u1031', 4]]
                },
                {
                    // description: "'ဍ' + U+1039 + 'ဍ' + 'ြ'",
                    from: '\u100D\u1039\u100D\u103C',
                    to: '\u1081\u106E',
                    minLength: 4,
                    quickTests: [['\u100D', 0], ['\u1039', 1], ['\u100D', 2], ['\u103C', 3]]
                },
                {
                    // description: "'ဍ' + U+1039 + 'ဍ' + 'ေ'",
                    from: '\u100D\u1039\u100D\u1031',
                    to: '\u1031\u106E',
                    minLength: 4,
                    quickTests: [['\u100D', 0], ['\u1039', 1], ['\u100D', 2], ['\u1031', 3]]
                },
                {
                    // description: "'ဍ' + U+1039 + 'ဍ'",
                    from: '\u100D\u1039\u100D',
                    to: '\u106E',
                    minLength: 3,
                    quickTests: [['\u100D', 0], ['\u1039', 1], ['\u100D', 2]]
                },

                {
                    // description: "'ဍ' + U+1039 + 'ဎ' + 'ြ' + 'ေ'",
                    from: '\u100D\u1039\u100E\u103C\u1031',
                    to: '\u1031\u1081\u106F',
                    minLength: 5,
                    quickTests: [['\u100D', 0], ['\u1039', 1], ['\u100E', 2], ['\u103C', 3], ['\u1031', 4]]
                },
                {
                    // description: "'ဍ' + U+1039 + 'ဎ' + 'ြ'",
                    from: '\u100D\u1039\u100E\u103C',
                    to: '\u1081\u106F',
                    minLength: 4,
                    quickTests: [['\u100D', 0], ['\u1039', 1], ['\u100E', 2], ['\u103C', 3]]
                },
                {
                    // description: "'ဍ' + U+1039 + 'ဎ' + 'ေ'",
                    from: '\u100D\u1039\u100E\u1031',
                    to: '\u1031\u106F',
                    minLength: 4,
                    quickTests: [['\u100D', 0], ['\u1039', 1], ['\u100E', 2], ['\u1031', 3]]
                },
                {
                    // description: "'ဍ' + U+1039 + 'ဎ'",
                    from: '\u100D\u1039\u100E',
                    to: '\u106F',
                    minLength: 3,
                    quickTests: [['\u100D', 0], ['\u1039', 1], ['\u100E', 2]]
                },

                {
                    // description: "'ဏ' + U+1039 + 'ဍ' + 'ြ' + 'ေ'",
                    from: '\u100F\u1039\u100D\u103C\u1031',
                    to: '\u1031\u1081\u1091',
                    minLength: 5,
                    quickTests: [['\u100F', 0], ['\u1039', 1], ['\u100D', 2], ['\u103C', 3], ['\u1031', 4]]
                },
                {
                    // description: "'ဏ' + U+1039 + 'ဍ' + 'ြ'",
                    from: '\u100F\u1039\u100D\u103C',
                    to: '\u1081\u1091',
                    minLength: 4,
                    quickTests: [['\u100F', 0], ['\u1039', 1], ['\u100D', 2], ['\u103C', 3]]
                },
                {
                    // description: "'ဏ' + U+1039 + 'ဍ' + 'ေ'",
                    from: '\u100F\u1039\u100D\u1031',
                    to: '\u1031\u1091',
                    minLength: 4,
                    quickTests: [['\u100F', 0], ['\u1039', 1], ['\u100D', 2], ['\u1031', 3]]
                },
                {
                    // description: "'ဏ' + U+1039 + 'ဍ'",
                    from: '\u100F\u1039\u100D',
                    to: '\u1091',
                    minLength: 3,
                    quickTests: [['\u100F', 0], ['\u1039', 1], ['\u100D', 2]]
                },

                {
                    // description: "'ဋ' + U+1039 + 'ဌ' + 'ြ' + 'ေ'",
                    from: '\u100B\u1039\u100C\u103C\u1031',
                    to: '\u1031\u1081\u1092',
                    minLength: 5,
                    quickTests: [['\u100B', 0], ['\u1039', 1], ['\u100C', 2], ['\u103C', 3], ['\u1031', 4]]
                },
                {
                    // description: "'ဋ' + U+1039 + 'ဌ' + 'ြ'",
                    from: '\u100B\u1039\u100C\u103C',
                    to: '\u1081\u1092',
                    minLength: 4,
                    quickTests: [['\u100B', 0], ['\u1039', 1], ['\u100C', 2], ['\u103C', 3]]
                },
                {
                    // description: "'ဋ' + U+1039 + 'ဌ' + 'ေ'",
                    from: '\u100B\u1039\u100C\u1031',
                    to: '\u1031\u1092',
                    minLength: 4,
                    quickTests: [['\u100B', 0], ['\u1039', 1], ['\u100C', 2], ['\u1031', 3]]
                },
                {
                    // description: "'ဋ' + U+1039 + 'ဌ'",
                    from: '\u100B\u1039\u100C',
                    to: '\u1092',
                    minLength: 3,
                    quickTests: [['\u100B', 0], ['\u1039', 1], ['\u100C', 2]]
                },

                {
                    // description: "'ဋ' + U+1039 + 'ဋ' + 'ြ' + 'ေ'",
                    from: '\u100B\u1039\u100B\u103C\u1031',
                    to: '\u1031\u1081\u1097',
                    minLength: 5,
                    quickTests: [['\u100B', 0], ['\u1039', 1], ['\u100B', 2], ['\u103C', 3], ['\u1031', 4]]
                },
                {
                    // description: "'ဋ' + U+1039 + 'ဋ' + 'ြ'",
                    from: '\u100B\u1039\u100B\u103C',
                    to: '\u1081\u1097',
                    minLength: 4,
                    quickTests: [['\u100B', 0], ['\u1039', 1], ['\u100B', 2], ['\u103C', 3]]
                },
                {
                    // description: "'ဋ' + U+1039 + 'ဋ' + 'ေ'",
                    from: '\u100B\u1039\u100B\u1031',
                    to: '\u1031\u1097',
                    minLength: 4,
                    quickTests: [['\u100B', 0], ['\u1039', 1], ['\u100B', 2], ['\u1031', 3]]
                },
                {
                    // description: "'ဋ' + U+1039 + 'ဋ'",
                    from: '\u100B\u1039\u100B',
                    to: '\u1097',
                    minLength: 3,
                    quickTests: [['\u100B', 0], ['\u1039', 1], ['\u100B', 2]]
                },

                {
                    from: '([#uc])\u1039\u1010\u103D',
                    to: '$1\u1096',
                    minLength: 4,
                    quickTests: [['\u1039', 1], ['\u1010', 2], ['\u103D', 3]]
                },

                {
                    // description: "'[#ulc]' + U+1039 + '#plx' + 'ြ' + 'ေ'",
                    from: '([#ulc])\u1039#plx\u103C\u1031',
                    to: '\u1031\u1082$1#plx',
                    minLength: 5,
                    quickTests: [['\u1039', 1], ['#plx', 2], ['\u103C', 3], ['\u1031', 4]],
                    postRulesRef: 'plx3182u'
                },
                {
                    // description: "'[#ulc]' + U+1039 + '#plx' + 'ြ'",
                    from: '([#ulc])\u1039#plx\u103C',
                    to: '\u1082$1#plx',
                    minLength: 4,
                    quickTests: [['\u1039', 1], ['#plx', 2], ['\u103C', 3]],
                    postRulesRef: 'plx31Or82u'
                },
                {
                    // description: "'[#ulc]' + U+1039 + '#plx' + 'ေ'",
                    from: '([#ulc])\u1039#plx\u1031',
                    to: '\u1031$1#plx',
                    minLength: 4,
                    quickTests: [['\u1039', 1], ['#plx', 2], ['\u1031', 3]],
                    postRulesRef: 'plx31Or82u'
                },
                {
                    from: '([#ulc])\u1039#plx',
                    to: '$1#plx',
                    minLength: 3,
                    quickTests: [['\u1039', 1], ['#plx', 2]],
                    postRulesRef: 'plxu'
                },

                {
                    // description: "'[#uc]' + U+1039 + '#psx' + 'ြ' + 'ေ'",
                    from: '([#uc])\u1039#psx\u103C\u1031',
                    to: '\u1031\u1081$1#psx',
                    minLength: 5,
                    quickTests: [['\u1039', 1], ['#psx', 2], ['\u103C', 3], ['\u1031', 4]],
                    postRulesRef: 'psx3181u'
                },
                {
                    // description: "'[#uc]' + U+1039 + '#psx' + 'ြ'",
                    from: '([#uc])\u1039#psx\u103C',
                    to: '\u1081$1#psx',
                    minLength: 4,
                    quickTests: [['\u1039', 1], ['#psx', 2], ['\u103C', 3]],
                    postRulesRef: 'psx31Or81u'
                },
                {
                    // description: "'[#uc]' + U+1039 + '#psx' + 'ေ'",
                    from: '([#uc])\u1039#psx\u1031',
                    to: '\u1031$1#psx',
                    minLength: 4,
                    quickTests: [['\u1039', 1], ['#psx', 2], ['\u1031', 3]],
                    postRulesRef: 'psx31Or81u'
                },
                {
                    from: '([#uc])\u1039#psx',
                    to: '$1#psx',
                    minLength: 3,
                    quickTests: [['\u1039', 1], ['#psx', 2]],
                    postRulesRef: 'psx1'
                },

                {
                    from: '\u1039\u1010\u103D',
                    to: '\u1096',
                    minLength: 3,
                    quickTests: [['\u1039', 0], ['\u1010', 1], ['\u103D', 2]]
                },
                {
                    from: '\u1039#psx',
                    to: '#psx',
                    minLength: 2,
                    quickTests: [['\u1039', 0], ['#psx', 1]]
                },

                // 'ြ' ... 'ေ'
                // ------------------------------------------------------------------------------------------
                {
                    // description: "[#uc] + 'ြ' + 'ွှ' + 'ေ'",
                    from: '([#uc])\u103C\u103D\u103E\u1031',
                    to: '\u1031\u1081$1\u108A',
                    minLength: 5,
                    quickTests: [['\u103C', 1], ['\u103D', 2], ['\u103E', 3], ['\u1031', 4]],
                    postRulesRef: 'p3181Or83u8aOr3c'
                },
                {
                    // description: "[#uc] + 'ြ' + 'ွ' + 'ေ'",
                    from: '([#uc])\u103C\u103D\u1031',
                    to: '\u1031\u1081$1\u103C',
                    minLength: 4,
                    quickTests: [['\u103C', 1], ['\u103D', 2], ['\u1031', 3]],
                    postRulesRef: 'p3181Or83u8aOr3c'
                },
                {
                    // description: "[#uc] + 'ြ' + 'ှ' + 'ေ'",
                    from: '([#uc])\u103C\u103E\u1031',
                    to: '\u1031\u103B$1\u103D',
                    minLength: 4,
                    quickTests: [['\u103C', 1], ['\u103E', 2], ['\u1031', 3]],
                    postRulesRef: 'p313bOr7fu3d'
                },
                {
                    // description: "[#uc] + 'ြ' + 'ေ'",
                    from: '([#uc])\u103C\u1031',
                    to: '\u1031\u103B$1',
                    minLength: 3,
                    quickTests: [['\u103C', 1], ['\u1031', 2]],
                    postRulesRef: 'p313bOr7fu'
                },

                // 'ြ'
                // ------------------------------------------------------------------------------------------
                {
                    // description: "[#uc] + 'ြ' + 'ွှ'",
                    from: '([#uc])\u103C\u103D\u103E',
                    to: '\u1081$1\u108A',
                    minLength: 4,
                    quickTests: [['\u103C', 1], ['\u103D', 2], ['\u103E', 3]],
                    postRulesRef: 'p81Or83u8aOr3c'
                },
                {
                    // description: "[#uc] + 'ြ' + 'ွ'",
                    from: '([#uc])\u103C\u103D',
                    to: '\u1081$1\u103C',
                    minLength: 3,
                    quickTests: [['\u103C', 1], ['\u103D', 2]],
                    postRulesRef: 'p81Or83u8aOr3c'
                },
                {
                    // description: "[#uc] + 'ြ' + 'ှ'",
                    from: '([#uc])\u103C\u103E',
                    to: '\u103B$1\u103D',
                    minLength: 3,
                    quickTests: [['\u103C', 1], ['\u103E', 2]],
                    postRulesRef: 'p3bOr7fu3d'
                },
                {
                    // description: "'[#uc] + 'ြ'",
                    from: '([#uc])\u103C',
                    to: '\u103B$1',
                    minLength: 2,
                    quickTests: [['\u103C', 1]],
                    postRulesRef: 'p3bOr7fu'
                },

                //  ေ
                // ------------------------------------------------------------------------------------------
                {
                    // description: "[#uc] + 'ျ' + 'ွှ' + 'ေ'",
                    from: '([#uc])\u103B\u103D\u103E\u1031',
                    to: '\u1031$1\u108A\u107D',
                    minLength: 5,
                    quickTests: [['\u103B', 1], ['\u103D', 2], ['\u103E', 3], ['\u1031', 4]],
                    postRulesRef: 'p31u8aOr3c'
                },
                {
                    // description: "[#uc] + 'ျ' + 'ွ' + 'ေ'",
                    from: '([#uc])\u103B\u103D\u1031',
                    to: '\u1031$1\u103C\u107D',
                    minLength: 4,
                    quickTests: [['\u103B', 1], ['\u103D', 2], ['\u1031', 3]],
                    postRulesRef: 'p31u8aOr3c'
                },
                {
                    // description: "[#uc] + 'ွှ'+ 'ေ'",
                    from: '([#uc])\u103D\u103E\u1031',
                    to: '\u1031$1\u108A',
                    minLength: 4,
                    quickTests: [['\u103D', 1], ['\u103E', 2], ['\u1031', 3]],
                    postRulesRef: 'p31u8aOr3c'
                },
                {
                    // description: "[#uc] + 'ွ'+ 'ေ'",
                    from: '([#uc])\u103D\u1031',
                    to: '\u1031$1\u103C',
                    minLength: 3,
                    quickTests: [['\u103D', 1], ['\u1031', 2]],
                    postRulesRef: 'p31u8aOr3c'
                },

                {
                    // description: "[#uc] + 'ျ' + 'ှ' + 'ေ'",
                    from: '([#uc])\u103B\u103E\u1031',
                    to: '\u1031$1\u103D\u103A',
                    minLength: 4,
                    quickTests: [['\u103B', 1], ['\u103E', 2], ['\u1031', 3]],
                    postRulesRef: 'p31u3d3a'
                },
                {
                    // description: "[#uc] + 'ျ' + 'ေ'",
                    from: '([#uc])\u103B\u1031',
                    to: '\u1031$1\u103A',
                    minLength: 3,
                    quickTests: [['\u103B', 1], ['\u1031', 2]],
                    postRulesRef: 'prs3113a'
                },
                {
                    // description: "[#uc] + 'ှ'+ 'ေ'",
                    from: '([#uc])\u103E\u1031',
                    to: '\u1031$1\u103D',
                    minLength: 3,
                    quickTests: [['\u103E', 1], ['\u1031', 2]],
                    postRulesRef: 'p31u2fOr30Or3d'
                },
                {
                    // description: "[#uc] + 'ေ'",
                    from: '([#uc])\u1031',
                    to: '\u1031$1',
                    minLength: 2,
                    quickTests: [['\u1031', 1]],
                    postRulesRef: 'p31u'
                },

                // 'ျ'
                // ------------------------------------------------------------------------------------------
                {
                    // description: "[#uc] + 'ျ' + 'ွှ'",
                    from: '([#uc])\u103B\u103D\u103E',
                    to: '$1\u108A\u107D',
                    minLength: 4,
                    quickTests: [['\u103B', 1], ['\u103D', 2], ['\u103E', 3]],
                    postRulesRef: 'pu8aOr3c'

                },
                {
                    // description: "[#uc] + 'ျ' + 'ွ'",
                    from: '([#uc])\u103B\u103D',
                    to: '$1\u103C\u107D',
                    minLength: 3,
                    quickTests: [['\u103B', 1], ['\u103D', 2]],
                    postRulesRef: 'pu8aOr3c'
                },
                {
                    // description: "[#uc] + 'ျ' + 'ှ'",
                    from: '([#uc])\u103B\u103E',
                    to: '$1\u103D\u103A',
                    minLength: 3,
                    quickTests: [['\u103B', 1], ['\u103E', 2]],
                    postRulesRef: 'pu3d3a'
                },

                {
                    // description: "'[ဉဥ]' + 'ျ'",
                    from: '[\u1009\u1025]\u103B',
                    to: '\u106A\u107D',
                    minLength: 2,
                    quickTests: [['\u103B', 1]]
                },

                {
                    // description: "[#uc] + 'ျ'",
                    from: '([#uc])\u103B',
                    to: '$1\u103A',
                    minLength: 2,
                    quickTests: [['\u103B', 1]],
                    postRulesRef: 'pu'
                },

                // ၎င်း
                // ------------------------------------------------------------------------------------------
                {
                    description: '၎င်း',
                    from: '\u104E\u1004\u103A\u1038',
                    to: '\u104E',
                    minLength: 4,
                    quickTests: [['\u104E', 0], ['\u1004', 1], ['\u103A', 2]]
                },

                // ဿ
                // ------------------------------------------------------------------------------------------
                {
                    // description: 'ဿ',
                    from: '\u103F',
                    to: '\u1086'
                },

                // [ဉဥ] +
                // ------------------------------------------------------------------------------------------

                {
                    // description: "'[ဉဥ]' + [ိ  ီ] + 'ု'",
                    from: '[\u1009\u1025]([\u102D\u102E])\u102F',
                    to: '\u1025$1\u1033',
                    minLength: 3,
                    quickTests: [['\u102F', 2]]
                },
                {
                    // description: "'[ဉဥ]' + [ိ  ီ] + 'ူ'",
                    from: '[\u1009\u1025]([\u102D\u102E])\u1030',
                    to: '\u1025$1\u1034',
                    minLength: 3,
                    quickTests: [['\u1030', 2]]
                },

                {
                    // description: "'[ဉဥ]' + 'ှ' + 'ု'",
                    from: '[\u1009\u1025]\u103E\u102F',
                    to: '\u1025\u103D\u1033',
                    minLength: 3,
                    quickTests: [['\u103E', 1], ['\u102F', 2]]
                },
                {
                    // description: "'[ဉဥ]' + 'ှ' + 'ူ'",
                    from: '[\u1009\u1025]\u103E\u1030',
                    to: '\u1025\u103D\u1034',
                    minLength: 3,
                    quickTests: [['\u103E', 1], ['\u1030', 2]]
                },

                {
                    // description: "'[ဉဥ]' + 'ု'",
                    from: '[\u1009\u1025]\u102F',
                    to: '\u1025\u1033',
                    minLength: 2,
                    quickTests: [['\u102F', 1]]
                },
                {
                    // description: "'[ဉဥ]' + 'ူ'",
                    from: '[\u1009\u1025]\u1030',
                    to: '\u1025\u1034',
                    minLength: 2,
                    quickTests: [['\u1030', 1]]
                },


                {
                    // description: "'ဉ' + 'ွှ'",
                    from: '\u1009\u103D\u103E',
                    to: '\u106A\u108A',
                    minLength: 3,
                    quickTests: [['\u1009', 0], ['\u103D', 1], ['\u103E', 2]]
                },
                {
                    // description: "'ဉ' + 'ွ'",
                    from: '\u1009\u103D',
                    to: '\u106A\u103C',
                    minLength: 2,
                    quickTests: [['\u1009', 0], ['\u103D', 1]]
                },
                {
                    // description: "'ဉ' + 'ှ'",
                    from: '\u1009\u103E',
                    to: '\u1025\u103D',
                    minLength: 2,
                    quickTests: [['\u1009', 0], ['\u103E', 1]],
                    when: {
                        'Zawgyi-One-2008': true
                    }
                },
                {
                    // description: "'ဉ' + '်'",
                    from: '\u1009\u103A',
                    to: '\u1025\u1039',
                    minLength: 2,
                    quickTests: [['\u1009', 0], ['\u103A', 1]],
                    when: {
                        'Zawgyi-One-2008': true
                    }
                },

                {
                    // description: "'ဥ' + 'ီ' မှ 'ဦ' သို့",
                    from: '\u1025\u102E',
                    to: '\u1026',
                    minLength: 2,
                    quickTests: [['\u1009', 0], ['\u102E', 1]],
                },

                // အောက်မြစ်
                // ------------------------------------------------------------------------------------------
                // \u1094
                {
                    // description: "[#u2e30] + 'ေ' + [ိ  ီ] + 'ု' + '့'",
                    from: '([#u2e30])\u1031([\u102D\u102E])\u102F\u1037',
                    to: '\u1031$1$2\u102F\u1094',
                    minLength: 5,
                    quickTests: [['\u1031', 1], ['\u102F', 3], ['\u1037', 4]],
                    postRulesRef: 'p31u2fOr30Or3d'
                },
                {
                    // description: "[#u2e30] + 'ေ' + 'ု' + [ ဲ  ံ] + '့'",
                    from: '([#u2e30])\u1031\u102F([\u1032\u1036])\u1037',
                    to: '\u1031$1\u102F$2\u1094',
                    minLength: 5,
                    quickTests: [['\u1031', 1], ['\u102F', 3], ['\u1037', 4]],
                    postRulesRef: 'p31u2fOr30Or3d'
                },

                {
                    // description: "[#u2e30] + 'ှ' + 'ေ' + [ိ  ီ  ဲ  ံ] +  '့'",
                    from: '([#u2e30])\u103E\u1031([\u102D\u102E\u1032\u1036])\u1037',
                    to: '\u1031$1\u103D$2\u1094',
                    minLength: 5,
                    quickTests: [['\u103E', 1], ['\u1031', 2], ['\u1037', 4]],
                    postRulesRef: 'p31u2fOr30Or3d'
                },

                {
                    // description: "[#u2e30] + 'ေ' + 'ု' + '့'",
                    from: '([#u2e30])\u1031\u102F\u1037',
                    to: '\u1031$1\u102F\u1094',
                    minLength: 4,
                    quickTests: [['\u1031', 1], ['\u102F', 2], ['\u1037', 3]],
                    postRulesRef: 'p31u2fOr30Or3d'
                },
                {
                    // description: "[#u2e30] + 'ှ' + 'ေ' + '့'",
                    from: '([#u2e30])\u103E\u1031\u1037',
                    to: '\u1031$1\u103D\u1094',
                    minLength: 4,
                    quickTests: [['\u103E', 1], ['\u1031', 2], ['\u1037', 3]],
                    postRulesRef: 'p31u2fOr30Or3d'
                },

                {
                    // description: "'န' + 'ေ' + [ိ  ီ  ဲ  ံ] + '့'",
                    from: '\u1014\u1031([\u102D\u102E\u1032\u1036])\u1037',
                    to: '\u1031\u1014$1\u1094',
                    minLength: 4,
                    quickTests: [['\u1014', 0], ['\u1031', 1], ['\u1037', 3]]
                },
                {
                    // description: "'န' + 'ေ' + '့'",
                    from: '\u1014\u1031\u1037',
                    to: '\u1031\u1014\u1094',
                    minLength: 3,
                    quickTests: [['\u1014', 0], ['\u1031', 1], ['\u1037', 2]]
                },

                {
                    // description: "[#u2e30] + [ိ  ီ] + 'ု' + '့'",
                    from: '([#u2e30])([\u102D\u102E])\u102F\u1037',
                    to: '$1$2\u102F\u1094',
                    minLength: 4,
                    quickTests: [['\u102F', 2], ['\u1037', 3]],
                    postRulesRef: 'pu2fOr30Or3d'
                },
                {
                    // description: "[#u2e30] + [ဲ  ံ] + 'ု' + '့'",
                    from: '([#u2e30])\u102F([\u1032\u1036])\u1037',
                    to: '$1\u102F$2\u1094',
                    minLength: 4,
                    quickTests: [['\u102F', 2], ['\u1037', 3]],
                    postRulesRef: 'pu2fOr30Or3d'
                },

                {
                    // description: "[#u2e30] + 'ှ' + [ိ  ီ  ဲ  ံ] +  '့'",
                    from: '([#u2e30])\u103E([\u102D\u102E\u1032\u1036])\u1037',
                    to: '$1\u103D$2\u1094',
                    minLength: 4,
                    quickTests: [['\u103E', 1], ['\u1037', 3]],
                    postRulesRef: 'pu2fOr30Or3d'
                },

                {
                    // description: "[#u2e30] + 'ု' + '့'",
                    from: '([#u2e30])\u102F\u1037',
                    to: '$1\u102F\u1094',
                    minLength: 3,
                    quickTests: [['\u102F', 1], ['\u1037', 2]],
                    postRulesRef: 'pu2fOr30Or3d'
                },
                {
                    // description: "[#u2e30] + 'ှ' + '့'",
                    from: '([#u2e30])\u103E\u1037',
                    to: '$1\u103D\u1094',
                    minLength: 3,
                    quickTests: [['\u103E', 1], ['\u1037', 2]],
                    postRulesRef: 'pu2fOr30Or3d'
                },

                {
                    // description: "'န' + [ိ  ီ  ဲ  ံ] + '့'",
                    from: '\u1014([\u102D\u102E\u1032\u1036])\u1037',
                    to: '\u1014$1\u1094',
                    minLength: 3,
                    quickTests: [['\u1014', 0], ['\u1037', 2]]
                },
                {
                    // description: "'န' + '့'",
                    from: '\u1014\u1037',
                    to: '\u1014\u1094',
                    minLength: 2,
                    quickTests: [['\u1014', 0], ['\u1037', 1]]
                },

                // \u1037
                {
                    from: '([#u37\u1014\u101B])\u103C\u1031([\u102D\u102E\u1032\u1036])\u1037',
                    to: '\u1031\u107F$1$2\u1037',
                    minLength: 5,
                    quickTests: [['\u103C', 1], ['\u1031', 2], ['\u1037', 4]],
                    postRulesRef: 'p313bOr7fu'
                },
                {
                    from: '([#u37\u1014\u101B])\u103C\u1031\u1037',
                    to: '\u1031\u103B$1\u1037',
                    minLength: 4,
                    quickTests: [['\u103C', 1], ['\u1031', 2], ['\u1037', 3]],
                    postRulesRef: 'p313bOr7fu'
                },
                {
                    from: '([#u37\u1014\u101B])\u103C([\u102D\u102E\u1032\u1036])\u1037',
                    to: '\u107F$1$2\u1037',
                    minLength: 4,
                    quickTests: [['\u103C', 1], ['\u1037', 3]],
                    postRulesRef: 'p3bOr7fu'
                },
                {
                    from: '([#u37\u1014\u101B])\u103C\u1037',
                    to: '\u103B$1\u1037',
                    minLength: 3,
                    quickTests: [['\u103C', 1], ['\u1037', 2]],
                    postRulesRef: 'p3bOr7fu'
                },

                {
                    from: '[\u1009\u1025]\u1031([\u102D\u102E\u1032\u1036])\u1037',
                    to: '\u1031\u1025$1\u1037',
                    minLength: 4,
                    quickTests: [['\u1031', 1], ['\u1037', 3]],
                    postRulesRef: 'p31u'
                },
                {
                    from: '([#u37])\u1031([\u102D\u102E\u1032\u1036])\u1037',
                    to: '\u1031$1$2\u1037',
                    minLength: 4,
                    quickTests: [['\u1031', 1], ['\u1037', 3]],
                    postRulesRef: 'p31u'
                },
                {
                    from: '[\u1009\u1025]\u1031\u1037',
                    to: '\u1031\u1025\u1037',
                    minLength: 2,
                    quickTests: [['\u1031', 1], ['\u1037', 2]],
                    postRulesRef: 'p31u'
                },
                {
                    from: '([#u37])\u1031\u1037',
                    to: '\u1031$1\u1037',
                    minLength: 2,
                    quickTests: [['\u1031', 1], ['\u1037', 2]],
                    postRulesRef: 'p31u'
                },

                {
                    // description: "[ဉဥ] + [ိ  ီ  ဲ  ံ] + '့'",
                    from: '[\u1009\u1025]([\u102D\u102E\u1032\u1036])\u1037',
                    to: '\u1025$1\u1037',
                    minLength: 3,
                    quickTests: [['\u1037', 2]]
                },
                {
                    from: '([#u37])([\u102D\u102E\u1032\u1036])\u1037',
                    to: '$1$2\u1037',
                    minLength: 3,
                    quickTests: [['\u1037', 2]],
                    postRulesRef: 'pu'
                },
                {
                    // description: '[ဉဥ] +  ့',
                    from: '[\u1009\u1025]([\u1037])',
                    to: '\u1025$1',
                    minLength: 2,
                    quickTests: [['\u1037', 1]]
                },
                {
                    from: '([#u37])\u1037',
                    to: '$1\u1037',
                    minLength: 2,
                    quickTests: [['\u1037', 1]],
                    postRulesRef: 'pu'
                },

                // \u1095 - Others ...

                // တစ်ချောင်းငင်၊ နှစ်ချောင်းငင်
                // ------------------------------------------------------------------------------------------
                {
                    // description: "[#uc] + 'ြ' + 'ွှ' + 'ေ' + [ိ  ီ] + '#cx'",
                    from: '([#uc])\u103C\u103D\u103E\u1031([\u102D\u102E])#cx',
                    to: '\u1031\u1083$1\u108A$2#cx',
                    minLength: 7,
                    quickTests: [['\u103C', 1], ['\u103D', 2], ['\u103E', 3], ['\u1031', 4], ['#cx', 6]],
                    postRulesRef: 'p3181Or83u8aOr3c'
                },
                {
                    // description: "[#uc] + 'ြ' + 'ွ' + 'ေ' + [ိ  ီ] + '#cx'",
                    from: '([#uc])\u103C\u103D\u1031([\u102D\u102E])#cx',
                    to: '\u1031\u1083$1\u103C$2#cx',
                    minLength: 6,
                    quickTests: [['\u103C', 1], ['\u103D', 2], ['\u1031', 3], ['#cx', 5]],
                    postRulesRef: 'p3181Or83u8aOr3c'
                },
                {
                    // description: "[#uc] + 'ြ' + 'ှ' + 'ေ' + [ိ  ီ] + '#cx'",
                    from: '([#uc])\u103C\u103E\u1031([\u102D\u102E])#cx',
                    to: '\u1031\u107F$1\u1087$2#cx',
                    minLength: 6,
                    quickTests: [['\u103C', 1], ['\u103E', 2], ['\u1031', 3], ['#cx', 5]],
                    postRulesRef: 'p313bOr7fu'
                },

                {
                    // description: "[#uc] + 'ြ' + 'ေ' + [ိ  ီ] + '#cx'",
                    from: '([#uc])\u103C\u1031([\u102D\u102E])#cx',
                    to: '\u1031\u107F$1$2#cx',
                    minLength: 5,
                    quickTests: [['\u103C', 1], ['\u1031', 2], ['#cx', 4]],
                    postRulesRef: 'p313bOr7fu'
                },

                {
                    // description: "[#uc] + 'ြ' + 'ွှ' + 'ေ' + '#cx'",
                    from: '([#uc])\u103C\u103D\u103E\u1031#cx',
                    to: '\u1031\u1081$1\u108A#cx',
                    minLength: 6,
                    quickTests: [['\u103C', 1], ['\u103D', 2], ['\u103E', 3], ['\u1031', 4], ['#cx', 5]],
                    postRulesRef: 'p3181Or83u8aOr3c'
                },
                {
                    // description: "[#uc] + 'ြ' + 'ွ' + 'ေ' + '#cx'",
                    from: '([#uc])\u103C\u103D\u1031#cx',
                    to: '\u1031\u1081$1\u103C#cx',
                    minLength: 5,
                    quickTests: [['\u103C', 1], ['\u103D', 2], ['\u1031', 3], ['#cx', 4]],
                    postRulesRef: 'p3181Or83u8aOr3c'
                },
                {
                    // description: "[#uc] + 'ြ' + 'ှ' + 'ေ' + '#cx'",
                    from: '([#uc])\u103C\u103E\u1031#cx',
                    to: '\u1031\u103B$1\u1087#cx',
                    minLength: 5,
                    quickTests: [['\u103C', 1], ['\u103E', 2], ['\u1031', 3], ['#cx', 4]],
                    postRulesRef: 'p313bOr7fu'
                },

                {
                    // description: "[#uc] + 'ြ' + 'ေ' + '#cx'",
                    from: '([#uc])\u103C\u1031#cx',
                    to: '\u1031\u103B$1#cx',
                    minLength: 4,
                    quickTests: [['\u103C', 1], ['\u1031', 2], ['#cx', 3]],
                    postRulesRef: 'p313bOr7fu'
                },

                {
                    // description: "[#uc] + 'ြ' + 'ွှ' + [ိ  ီ] + '#cx'",
                    from: '([#uc])\u103C\u103D\u103E([\u102D\u102E])#cx',
                    to: '\u1083$1\u108A$2#cx',
                    minLength: 6,
                    quickTests: [['\u103C', 1], ['\u103D', 2], ['\u103E', 3], ['#cx', 5]],
                    postRulesRef: 'p81Or83u8aOr3c'
                },
                {
                    // description: "[#uc] + 'ြ' + 'ွ' + [ိ  ီ] + '#cx'",
                    from: '([#uc])\u103C\u103D([\u102D\u102E])#cx',
                    to: '\u1083$1\u103C$2#cx',
                    minLength: 5,
                    quickTests: [['\u103C', 1], ['\u103D', 2], ['#cx', 4]],
                    postRulesRef: 'p81Or83u8aOr3c'
                },
                {
                    // description: "[#uc] + 'ြ' + 'ှ' + [ိ  ီ] + '#cx'",
                    from: '([#uc])\u103C\u103E([\u102D\u102E])#cx',
                    to: '\u107F$1\u1087$2#cx',
                    minLength: 5,
                    quickTests: [['\u103C', 1], ['\u103E', 2], ['#cx', 4]],
                    postRulesRef: 'p3bOr7fu'
                },

                {
                    // description: "[#uc] + 'ြ' + [ိ  ီ] + '#cx'",
                    from: '([#uc])\u103C([\u102D\u102E])#cx',
                    to: '\u107F$1$2#cx',
                    minLength: 4,
                    quickTests: [['\u103C', 1], ['#cx', 3]],
                    postRulesRef: 'p3bOr7fu'
                },

                {
                    // description: "[#uc] + 'ြ' + 'ွှ' + '#cx'",
                    from: '([#uc])\u103C\u103D\u103E#cx',
                    to: '\u1083$1\u108A#cx',
                    minLength: 5,
                    quickTests: [['\u103C', 1], ['\u103D', 2], ['\u103E', 3], ['#cx', 4]],
                    postRulesRef: 'p81Or83u8aOr3c'
                },
                {
                    // description: "[#uc] + 'ြ' + 'ွ' + '#cx'",
                    from: '([#uc])\u103C\u103D#cx',
                    to: '\u1083$1\u103C#cx',
                    minLength: 4,
                    quickTests: [['\u103C', 1], ['\u103D', 2], ['#cx', 3]],
                    postRulesRef: 'p81Or83u8aOr3c'
                },
                {
                    // description: "[#uc] + 'ြ' + 'ှ' + '#cx'",
                    from: '([#uc])\u103C\u103E#cx',
                    to: '\u107F$1\u1087#cx',
                    minLength: 4,
                    quickTests: [['\u103C', 1], ['\u103E', 2], ['#cx', 3]],
                    postRulesRef: 'p3bOr7fu'
                },

                {
                    // description: "[#uc] + 'ြ' + '#cx'",
                    from: '([#uc])\u103C#cx',
                    to: '\u103B$1#cx',
                    minLength: 3,
                    quickTests: [['\u103C', 1], ['#cx', 2]],
                    postRulesRef: 'p3bOr7fu'
                },

                {
                    // description: "[#uc] + 'ျ' + 'ွှ' + 'ေ' + [ိ  ီ] + 'ု'",
                    from: '\u1014\u103B\u103D\u103E\u1031([\u102D\u102E])\u102F',
                    to: '\u1031\u108F\u108A\u107D$1\u1033'
                },
                {
                    // description: "'န' +  'ျ' + 'ွှ' + 'ေ' + 'ု' +  [ဲ  ံ] + '့'",
                    from: '\u1014\u103B\u103D\u103E\u1031\u102F([\u1032\u1036])\u1037',
                    to: '\u1031\u108F\u108A\u107D$1\u1033\u1095'
                },
                {
                    // description: "'န' + 'ျ' + 'ွ' + 'ေ' + [ိီ] + 'ု' + '့'",
                    from: '\u1014\u103B\u103D\u1031([\u102D\u102E])\u102F\u1037',
                    to: '\u1031\u108F\u103C\u107D$1\u1033\u1095'
                },
                {
                    // description: "'န' +  'ျ' + 'ွ' + 'ေ' + 'ု' +  [ဲ  ံ] + '့'",
                    from: '\u1014\u103B\u103D\u1031\u102F([\u1032\u1036])\u1037',
                    to: '\u1031\u108F\u103C\u107D$1\u1033\u1095'
                },
                {
                    // description: "'န' +  'ျ' + 'ွ' + 'ေ' + 'ူ' +  [ဲ  ံ] + '့'",
                    from: '\u1014\u103B\u103D\u1031\u1030([\u1032\u1036])\u1037',
                    to: '\u1031\u108F\u103C\u107D$1\u1034\u1095'
                },



                {
                    // description: "'န' + 'ွှ' + 'ေ' + [ိီ] + 'ု' + '့'",
                    from: '\u1014\u103D\u103E\u1031([\u102D\u102E])\u102F\u1037',
                    to: '\u1031\u108F\u108A$1\u1033\u1095'
                },
                {
                    // description: "'န' + 'ွှ' + 'ေ' + [ိီ] + 'ူ' + '့'",
                    from: '\u1014\u103D\u103E\u1031([\u102D\u102E])\u1030\u1037',
                    to: '\u1031\u108F\u108A$1\u1034\u1095'
                },
                {
                    // description: "'န' + 'ွှ' + 'ေ' + 'ု' +  [ဲ  ံ] + '့'",
                    from: '\u1014\u103D\u103E\u1031\u102F([\u1032\u1036])\u1037',
                    to: '\u1031\u108F\u108A$1\u1033\u1095'
                },
                {
                    // description: "'န' + 'ွှ' + 'ေ' + 'ူ' +  [ဲ  ံ] + '့'",
                    from: '\u1014\u103D\u103E\u1031\u1030([\u1032\u1036])\u1037',
                    to: '\u1031\u108F\u108A$1\u1034\u1095'
                },

                {
                    // description: "'န' + 'ွ' + 'ေ' + [ိီ] + 'ု' + '့'",
                    from: '\u1014\u103D\u1031([\u102D\u102E])\u102F\u1037',
                    to: '\u1031\u108F\u103C$1\u1033\u1095'
                },
                {
                    // description: "'န' + 'ွ' + 'ေ' + [ိီ] + 'ူ' + '့'",
                    from: '\u1014\u103D\u1031([\u102D\u102E])\u1030\u1037',
                    to: '\u1031\u108F\u103C$1\u1034\u1095'
                },
                {
                    // description: "'န' + 'ွ' + 'ေ' + 'ု' +  [ဲ  ံ] + '့'",
                    from: '\u1014\u103D\u1031\u102F([\u1032\u1036])\u1037',
                    to: '\u1031\u108F\u103C$1\u1033\u1095'
                },
                {
                    // description: "'န' + 'ွ' + 'ေ' + 'ူ' +  [ဲ  ံ] + '့'",
                    from: '\u1014\u103D\u1031\u1030([\u1032\u1036])\u1037',
                    to: '\u1031\u108F\u103C$1\u1034\u1095'
                },

                {
                    // description: "'န' + 'ွှ' + [ိီ] + 'ု' + '့'",
                    from: '\u1014\u103D\u103E([\u102D\u102E])\u102F\u1037',
                    to: '\u108F\u108A$1\u1033\u1095'
                },
                {
                    // description: "'န' + 'ွှ' + [ိီ] + 'ူ' + '့'",
                    from: '\u1014\u103D\u103E([\u102D\u102E])\u1030\u1037',
                    to: '\u108F\u108A$1\u1034\u1095'
                },
                {
                    // description: "'န' + 'ွှ' + 'ု' +  [ဲ  ံ] + '့'",
                    from: '\u1014\u103D\u103E\u102F([\u1032\u1036])\u1037',
                    to: '\u108F\u108A$1\u1033\u1095'
                },
                {
                    // description: "'န' + 'ွှ' + 'ူ' +  [ဲ  ံ] + '့'",
                    from: '\u1014\u103D\u103E\u1030([\u1032\u1036])\u1037',
                    to: '\u108F\u108A$1\u1034\u1095'
                },

                {
                    // description: "'န' + 'ွ' + [ိီ] + 'ု' + '့'",
                    from: '\u1014\u103D([\u102D\u102E])\u102F\u1037',
                    to: '\u108F\u103C$1\u1033\u1095'
                },
                {
                    // description: "'န' + 'ွ' + [ိီ] + 'ူ' + '့'",
                    from: '\u1014\u103D([\u102D\u102E])\u1030\u1037',
                    to: '\u108F\u103C$1\u1034\u1095'
                },
                {
                    // description: "'န' + 'ွ' + 'ု' +  [ဲ  ံ] + '့'",
                    from: '\u1014\u103D\u102F([\u1032\u1036])\u1037',
                    to: '\u108F\u103C$1\u1033\u1095'
                },
                {
                    // description: "'န' + 'ွ' + 'ူ' +  [ဲ  ံ] + '့'",
                    from: '\u1014\u103D\u1030([\u1032\u1036])\u1037',
                    to: '\u108F\u103C$1\u1034\u1095'
                },

                {
                    // description: "'န' + 'ွှ' + 'ု' + '့'",
                    from: '\u1014\u103D\u103E\u102F\u1037',
                    to: '\u108F\u108A\u1033\u1095'
                },
                {
                    // description: "'န' + 'ွှ' + 'ူ' + '့'",
                    from: '\u1014\u103D\u103E\u1030\u1037',
                    to: '\u108F\u108A\u1034\u1095'
                },

                {
                    // description: "'န' + 'ွ' + 'ု' + '့'",
                    from: '\u1014\u103D\u102F\u1037',
                    to: '\u108F\u103C\u1033\u1095'
                },
                {
                    // description: "'န' + 'ွ' + 'ူ' + '့'",
                    from: '\u1014\u103D\u1030\u1037',
                    to: '\u108F\u103C\u1034\u1095'
                },

                // န
                // ------------------------------------------------------------------------------------------
                {
                    // description: "'န' + 'ွှ' + 'ု'",
                    from: '\u1014\u103D\u103E\u102F',
                    to: '\u108F\u108A\u1033'
                },
                {
                    // description: "'န' + 'ွှ' + 'ူ'",
                    from: '\u1014\u103D\u103E\u1030',
                    to: '\u108F\u108A\u1034'
                },
                {
                    // description: "'န' + [ု  ူ]",
                    from: '\u1014([\u102F\u1030])',
                    to: '\u108F$1'
                },
                {
                    // description: "'န' + 'ွ'",
                    from: '\u1014\u103D',
                    to: '\u108F\u103C'
                },

                {
                    // description: "'န' + 'ှ'",
                    from: '\u1014\u103E',
                    to: '\u108F\u103D'
                },

                {
                    // description: "'န' + [ု  ူ  ွ  ှ  ...]",
                    from: '\u1014([\u1087-\u108A])',
                    to: '\u108F$1'
                },

                {
                    // description: "'န' + [ိ  ီ  ေ] + [ု  ူ]",
                    from: '\u1014([\u102D\u102E\u1031])([\u102F\u1030])',
                    to: '\u108F$1$2'
                },
                {
                    // description: "'န' + [်  င်္] + [ု  ူ  ွ  ွှ]",
                    from: '\u1014([\u1039\u1064])([\u102F\u1030\u103C\u108A])',
                    to: '\u108F$1$2'
                },

                // ------------------------------------------------------------------------------------------
                // TODO: Long 'ု' and 'ူ'

                // Others
                // ------------------------------------------------------------------------------------------
                {
                    description: 'ါ်',
                    from: '\u102B\u103A',
                    to: '\u105A',
                    minLength: 2,
                    quickTests: [['\u102B', 0], ['\u103A', 1]]
                },
                {
                    description: 'ွှ',
                    from: '\u103D\u103E',
                    to: '\u108A',
                    minLength: 2,
                    quickTests: [['\u103D', 0], ['\u103E', 1]]
                },
                {
                    description: 'ျ',
                    from: '\u103B',
                    to: '\u103A'
                },
                {
                    description: 'ြ',
                    from: '\u103C',
                    to: '\u103B'
                },
                {
                    description: 'ွ',
                    from: '\u103D',
                    to: '\u103C'
                },
                {
                    description: 'ှ',
                    from: '\u103E',
                    to: '\u103D'
                },
                {
                    description: '်',
                    from: '\u103A',
                    to: '\u1039'
                },
                {
                    description: '့',
                    from: '\u1037',
                    to: '\u1095'
                }

            ]
        }
    ]
};
