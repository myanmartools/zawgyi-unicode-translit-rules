import { translit } from '@dagonmetric/translit-js';

import { uni2zgRules } from '../../src/uni2zg-rules';

import { toFailOutput } from './shared.spec';
import { uniSpellingBookExpects } from './test-data/uni-sb-expects';
import { uniSpellingBookInputs } from './test-data/uni-sb-inputs';

describe('uni2zg-spelling-book', () => {
    let i = 0;
    do {
        const start = i;
        i += 3000;

        const inputText = uniSpellingBookInputs.slice(start, i).join('\n');
        const expectedText = uniSpellingBookExpects.slice(start, i).join('\n');

        it(String.raw`${inputText}`, () => {
            const result = translit(inputText, uni2zgRules);
            void expect(result.outputText).toBe(expectedText, toFailOutput(inputText, result));
        });
    } while (i < uniSpellingBookInputs.length);
});
