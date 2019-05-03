// tslint:disable: mocha-no-side-effect-code
// tslint:disable: no-var-requires
// tslint:disable: no-require-imports
// tslint:disable: no-floating-promises
// tslint:disable: no-unsafe-any

import { TestBed } from '@angular/core/testing';

import { NoopTranslitRuleLoaderModule, TranslitModule, TranslitRule, TranslitService } from '@myanmartools/ng-translit';

const zg2uniRules: TranslitRule[] = require('../../../rules/zawgyi-to-unicode-rules/zg2uni.json');

const zg2uniInputs: [] = require('../../test-data/zg2uni-inputs.json');
const zg2uniExpects: [] = require('../../test-data/zg2uni-expects.json');

export function formatCodePoints(word: string): string {
    const cpArray: string[] = [];

    for (const c of word) {
        const cp = c.codePointAt(0);
        if (!cp) {
            continue;
        }

        cpArray.push(`\\u${cp.toString(16)}`);
    }

    return cpArray.join('');
}

describe('TranslitService', () => {
    let translitService: TranslitService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                TranslitModule,
                NoopTranslitRuleLoaderModule
            ]
        });

        translitService = TestBed.get(TranslitService);
    });

    it('Converting Zawgyi to Unicode, should be Unicode expected text', (done: DoneFn) => {
        translitService.useRule('zg', 'uni', zg2uniRules);

        const inputText = zg2uniInputs.join('\n');

        translitService.translit(inputText, 'zg', 'uni')
            .subscribe(result => {
                const outputText = result.outputText;
                const actualWords = outputText.split('\n');

                let wrongCount = 0;

                for (let i = 0; i < actualWords.length; i++) {
                    const actualWord = actualWords[i];
                    const expectedWord = zg2uniExpects[i];

                    const isEquals = actualWord === expectedWord;

                    if (!isEquals) {
                        wrongCount++;

                        if (wrongCount < 4) {
                            const cpActual = formatCodePoints(actualWord);
                            const cpExpected = formatCodePoints(expectedWord);

                            expect(isEquals).toBeTruthy(`Not equal, line: ${i}, actual: ${cpActual}, expected: ${cpExpected}`);
                        }
                    }
                }

                expect(wrongCount).toEqual(0, 'Should wrongCount 0');
                done();
            });
    });
});
