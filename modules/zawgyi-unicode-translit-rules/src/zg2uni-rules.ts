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
            tplVar: {
                '#z3bOr7eTo84': '\u103B\u107E-\u1084',
            },
            tplSeq: {
                '#zkx': [
                    ['\u108B', '\u102D', 1],
                    ['\u108C', '\u102E', 1],
                    ['\u108D', '\u1036', 1]
                ]
            },
            postRulesDef: {
                pz2u: [
                    {
                        // description: "'န' သို့",
                        from: '\u108F',
                        to: '\u1014',
                        orGroup: 'a'
                    },
                    {
                        // description: "'ရ' သို့",
                        from: '\u1090',
                        to: '\u101B',
                        orGroup: 'a'
                    },
                    {
                        // description: "'ဉ' သို့",
                        from: '\u106A',
                        // TODO: \u1025?
                        to: '\u1009',
                        orGroup: 'a'
                    },
                    {
                        // description: "'ည' မှ",
                        from: '\u106B',
                        to: '\u100A',
                        orGroup: 'a'
                    },
                    {
                        // description: "သုည မှ 'ဝ' သို့",
                        from: '\u1040',
                        to: '\u101D',
                        orGroup: 'a'
                    }
                ]
            },
            rules: [
                // (zg: \u108B-\u108D)
                // ------------------------------------------------------------------------------------------
                // Pasin
                // ...............
                //
                //
                {
                    from: '\u1031[#z3bOr7eTo84]([#zc])\u1096#zkx',
                    to: '\u1004\u103A\u1039$1\u1039\u1010\u103C\u103D\u1031#zkx',
                    minLength: 5,
                    quickTests: [['\u1031', 0], ['\u1096', 3], ['#zkx', 4]],
                    postRulesRef: 'pz2u',
                    postRulesStart: { a: 3}
                },
            ]
        }
    ]
};
