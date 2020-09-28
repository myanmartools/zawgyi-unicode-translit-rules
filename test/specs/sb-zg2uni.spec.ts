import { translit } from '@dagonmetric/translit-js';

import { zg2uniRules } from '../../src/zg2uni-rules';

import { uniSpellingBookExpects as uniSpellingBookInputs } from './test-data/uni-sb-expects';
import { uniSpellingBookInputs as uniSpellingBookExpects } from './test-data/uni-sb-inputs';

import { toFailOutput } from './shared.spec';

describe('zg2uni-spelling-book', () => {
    for (let i = 0; i < uniSpellingBookInputs.length; i++) {
        const inputText = uniSpellingBookInputs[i];
        const expectedText = uniSpellingBookExpects[i].replace(/\u1037\u103A/g, '\u103A\u1037');

        it(String.raw`${inputText}`, () => {
            const result = translit(inputText, zg2uniRules, undefined, true);
            void expect(result.outputText).toBe(expectedText, toFailOutput(inputText, result));
        });
    }
});
