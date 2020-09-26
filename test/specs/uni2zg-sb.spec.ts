import { translit } from '@dagonmetric/translit-js';

import { uni2zgRules } from '../../src/uni2zg-rules';

import { formatCodePoints, toFailOutput } from './shared.spec';
import { uniSpellingBookExpects } from './test-data/uni-sb-expects';
import { uniSpellingBookInputs } from './test-data/uni-sb-inputs';

describe('uni2zg-spelling-book', () => {
    it('should be Zawgyi expected words (0-2999)', (done: DoneFn) => {
        const startIndex = 0;
        const endIndex = 2999;

        const input = uniSpellingBookInputs.slice(startIndex, endIndex).join('\n');
        const result = translit(input, uni2zgRules);
        const actualWords = result.outputText.trim().split('\n');
        let isEquals = true;

        for (let i = 0; i < actualWords.length; i++) {
            const actualWord = actualWords[i];
            const expectedWord = uniSpellingBookExpects.slice(startIndex, endIndex)[i];
            isEquals = actualWord === expectedWord;

            if (!isEquals) {
                const cpActual = formatCodePoints(actualWord);
                const cpExpected = formatCodePoints(expectedWord);
                const currentInput = uniSpellingBookInputs[startIndex + i];
                const cpCurrentInput = formatCodePoints(currentInput);

                const currentResult = translit(currentInput, uni2zgRules);
                const failedMsg = toFailOutput(currentInput, currentResult);

                void expect(isEquals).toBe(
                    true,
                    `\ninput:\n${cpCurrentInput}\n\nactual:\n${cpActual}\n\nexpected:\n${cpExpected}\n`
                );
                void expect(isEquals).toBe(true, `${failedMsg}`);
                done();

                break;
            }
        }

        void expect(isEquals).toBe(true);
    });

    it('should be Zawgyi expected words (3000-5999)', (done: DoneFn) => {
        const startIndex = 3000;
        const endIndex = 5999;

        const input = uniSpellingBookInputs.slice(startIndex, endIndex).join('\n');
        const result = translit(input, uni2zgRules);
        const actualWords = result.outputText.trim().split('\n');
        let isEquals = true;

        for (let i = 0; i < actualWords.length; i++) {
            const actualWord = actualWords[i];
            const expectedWord = uniSpellingBookExpects.slice(startIndex, endIndex)[i];
            isEquals = actualWord === expectedWord;

            if (!isEquals) {
                const cpActual = formatCodePoints(actualWord);
                const cpExpected = formatCodePoints(expectedWord);
                const currentInput = uniSpellingBookInputs[startIndex + i];
                const cpCurrentInput = formatCodePoints(currentInput);

                const currentResult = translit(currentInput, uni2zgRules);
                const failedMsg = toFailOutput(currentInput, currentResult);

                void expect(isEquals).toBe(
                    true,
                    `\ninput:\n${cpCurrentInput}\n\nactual:\n${cpActual}\n\nexpected:\n${cpExpected}\n`
                );
                void expect(isEquals).toBe(true, `${failedMsg}`);
                done();

                break;
            }
        }

        void expect(isEquals).toBe(true);
    });

    it('should be Zawgyi expected words (6000-8999)', (done: DoneFn) => {
        const startIndex = 6000;
        const endIndex = 8999;

        const input = uniSpellingBookInputs.slice(startIndex, endIndex).join('\n');
        const result = translit(input, uni2zgRules);
        const actualWords = result.outputText.trim().split('\n');
        let isEquals = true;

        for (let i = 0; i < actualWords.length; i++) {
            const actualWord = actualWords[i];
            const expectedWord = uniSpellingBookExpects.slice(startIndex, endIndex)[i];
            isEquals = actualWord === expectedWord;

            if (!isEquals) {
                const cpActual = formatCodePoints(actualWord);
                const cpExpected = formatCodePoints(expectedWord);
                const currentInput = uniSpellingBookInputs[startIndex + i];
                const cpCurrentInput = formatCodePoints(currentInput);

                const currentResult = translit(currentInput, uni2zgRules);
                const failedMsg = toFailOutput(currentInput, currentResult);

                void expect(isEquals).toBe(
                    true,
                    `\ninput:\n${cpCurrentInput}\n\nactual:\n${cpActual}\n\nexpected:\n${cpExpected}\n`
                );
                void expect(isEquals).toBe(true, `${failedMsg}`);
                done();

                break;
            }
        }

        void expect(isEquals).toBe(true);
    });

    it('should be Zawgyi expected words (>= 9000)', (done: DoneFn) => {
        const startIndex = 9000;
        const input = uniSpellingBookInputs.slice(startIndex).join('\n');

        const result = translit(input, uni2zgRules);
        const actualWords = result.outputText.trim().split('\n');
        let isEquals = true;

        for (let i = 0; i < actualWords.length; i++) {
            const actualWord = actualWords[i];
            const expectedWord = uniSpellingBookExpects.slice(startIndex)[i];
            isEquals = actualWord === expectedWord;

            if (!isEquals) {
                const cpActual = formatCodePoints(actualWord);
                const cpExpected = formatCodePoints(expectedWord);
                const currentInput = uniSpellingBookInputs[startIndex + i];
                const cpCurrentInput = formatCodePoints(currentInput);

                const currentResult = translit(currentInput, uni2zgRules);
                const failedMsg = toFailOutput(currentInput, currentResult);

                void expect(isEquals).toBe(
                    true,
                    `\ninput:\n${cpCurrentInput}\n\nactual:\n${cpActual}\n\nexpected:\n${cpExpected}\n`
                );
                void expect(isEquals).toBe(true, `${failedMsg}`);
                done();

                break;
            }
        }

        void expect(isEquals).toBe(true);
    });
});
