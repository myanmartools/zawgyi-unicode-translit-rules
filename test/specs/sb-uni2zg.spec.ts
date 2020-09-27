import { translit } from '@dagonmetric/translit-js';

import { uni2zgRules } from '../../src/uni2zg-rules';

import { toFailOutput } from './shared.spec';
import { uniSpellingBookExpects } from './test-data/uni-sb-expects';
import { uniSpellingBookInputs } from './test-data/uni-sb-inputs';

describe('uni2zg-spelling-book', () => {
    for (let i = 0; i < uniSpellingBookInputs.length; i++) {
        const inputText = uniSpellingBookInputs[i];
        const expectedText = uniSpellingBookExpects[i];

        it(String.raw`${inputText}`, () => {
            const result = translit(inputText, uni2zgRules);
            void expect(result.outputText).toBe(expectedText, toFailOutput(inputText, result));
        });
    }
});
