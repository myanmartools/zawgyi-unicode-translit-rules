import { translit } from '@dagonmetric/translit-js';

import { zg2uniRules } from '../../src/zg2uni-rules';

import { uniSpellingBookExpects as uniSpellingBookInputs } from './test-data/uni-sb-expects';
import { uniSpellingBookInputs as uniSpellingBookExpects } from './test-data/uni-sb-inputs';

import { toFailOutput } from './shared.spec';

describe('zg2uni-spelling-book', () => {
    let i = 0;
    do {
        const start = i;
        i += 3000;

        const inputText = uniSpellingBookInputs.slice(start, i).join('\n');
        const expectedText = uniSpellingBookExpects.slice(start, i).join('\n');

        it(String.raw`${inputText}`, () => {
            const result = translit(inputText, zg2uniRules);
            void expect(result.outputText).toBe(expectedText, toFailOutput(inputText, result));
        });
    } while (i < uniSpellingBookInputs.length);
});
