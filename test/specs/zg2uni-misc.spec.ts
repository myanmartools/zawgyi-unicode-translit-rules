import { translit } from '@dagonmetric/translit-js';

import { zg2uniRules } from '../../src/zg2uni-rules';

import { toFailOutput } from './shared.spec';

describe('translit#zg2uni-misc', () => {
    it(String.raw`\u1021\u102C\u101B\u1017 \u107B`, () => {
        const input = '\u1021\u102C\u101B\u1017 \u107B';
        const expected = '\u1021\u102C\u101B\u1017\u1039\u1018';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u101C\u102D\u102F \u1037`, () => {
        const input = '\u101C\u102D\u102F \u1037';
        const expected = '\u101C\u102D\u102F\u1037';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });
});
