// tslint:disable: no-floating-promises
// tslint:disable: no-implicit-dependencies

import { TestBed } from '@angular/core/testing';

import { TranslitModule, TranslitService } from '@dagonmetric/ng-translit';

import { uni2zgRules } from '../src/uni2zg-rules';

import { uniSpellingBookExpects } from './test-data/uni-spelling-book-expects';
import { uniSpellingBookInputs } from './test-data/uni-spelling-book-inputs';

import { formatCodePoints, toFailOutput } from './shared.spec';

describe('uni2zg-spelling-book', () => {
    let translitService: TranslitService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                TranslitModule.withOptions({
                    trace: true,
                    shareCachedRules: false
                })
            ]
        });

        translitService = TestBed.get<TranslitService>(TranslitService) as TranslitService;
    });

    it('should be Zawgyi expected words (0-2999)', (done: DoneFn) => {
        const startIndex = 0;
        const endIndex = 2999;
        const input = uniSpellingBookInputs.slice(startIndex, endIndex).join('\n');

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
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

                        translitService.translit(currentInput, 'uni2zg', uni2zgRules)
                            .subscribe(currentResult => {
                                const failedMsg = toFailOutput(currentInput, currentResult);
                                expect(isEquals).toBe(true,
                                    `\ninput:\n${cpCurrentInput}\n\nactual:\n${cpActual}\n\nexpected:\n${cpExpected}\n`);
                                expect(isEquals).toBe(true, `${failedMsg}`);
                                done();
                            });

                        break;
                    }
                }

                expect(isEquals).toBe(true);
                done();
            });
    });

    it('should be Zawgyi expected words (3000-5999)', (done: DoneFn) => {
        const startIndex = 3000;
        const endIndex = 5999;
        const input = uniSpellingBookInputs.slice(startIndex, endIndex).join('\n');

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
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

                        translitService.translit(currentInput, 'uni2zg', uni2zgRules)
                            .subscribe(currentResult => {
                                const failedMsg = toFailOutput(currentInput, currentResult);
                                expect(isEquals).toBe(true,
                                    `\ninput:\n${cpCurrentInput}\n\nactual:\n${cpActual}\n\nexpected:\n${cpExpected}\n`);
                                expect(isEquals).toBe(true, `${failedMsg}`);
                                done();
                            });

                        break;
                    }
                }

                expect(isEquals).toBe(true);
                done();
            });
    });

    it('should be Zawgyi expected words (6000-8999)', (done: DoneFn) => {
        const startIndex = 6000;
        const endIndex = 8999;
        const input = uniSpellingBookInputs.slice(startIndex, endIndex).join('\n');

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
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

                        translitService.translit(currentInput, 'uni2zg', uni2zgRules)
                            .subscribe(currentResult => {
                                const failedMsg = toFailOutput(currentInput, currentResult);
                                expect(isEquals).toBe(true,
                                    `\ninput:\n${cpCurrentInput}\n\nactual:\n${cpActual}\n\nexpected:\n${cpExpected}\n`);
                                expect(isEquals).toBe(true, `${failedMsg}`);
                                done();
                            });

                        break;
                    }
                }

                expect(isEquals).toBe(true);
                done();
            });
    });

    it('should be Zawgyi expected words (>= 9000)', (done: DoneFn) => {
        const startIndex = 9000;
        const input = uniSpellingBookInputs.slice(startIndex).join('\n');

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
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

                        translitService.translit(currentInput, 'uni2zg', uni2zgRules)
                            .subscribe(currentResult => {
                                const failedMsg = toFailOutput(currentInput, currentResult);
                                expect(isEquals).toBe(true,
                                    `\ninput:\n${cpCurrentInput}\n\nactual:\n${cpActual}\n\nexpected:\n${cpExpected}\n`);
                                expect(isEquals).toBe(true, `${failedMsg}`);
                                done();
                            });

                        break;
                    }
                }

                expect(isEquals).toBe(true);
                done();
            });
    });
});
