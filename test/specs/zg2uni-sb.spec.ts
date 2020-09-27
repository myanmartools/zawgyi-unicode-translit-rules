import { translit } from '@dagonmetric/translit-js';

import { zg2uniRules } from '../../src/zg2uni-rules';

import { uniSpellingBookExpects as uniSpellingBookInputs } from './test-data/uni-sb-expects';
import { uniSpellingBookInputs as uniSpellingBookExpects } from './test-data/uni-sb-inputs';

import { toFailOutput } from './shared.spec';

describe('zg2uni-spelling-book', () => {
    for (let i = 0; i < uniSpellingBookInputs.length; i++) {
        const input = uniSpellingBookInputs[i];
        const expectedWord = uniSpellingBookExpects[i];

        it(String.raw`${input}`, () => {
            const result = translit(input, zg2uniRules);
            void expect(result.outputText).toBe(expectedWord, toFailOutput(input, result));
        });
    }
});
