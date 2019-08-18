// tslint:disable: no-floating-promises

// tslint:disable: no-implicit-dependencies

import { TestBed } from '@angular/core/testing';

import { TranslitModule, TranslitResult, TranslitService } from '@dagonmetric/ng-translit';

import { uni2zgRules } from '../src/uni2zg-rules';

import { uniSpellingBookExpects } from './test-data/uni-spelling-book-expects';
import { uniSpellingBookInputs } from './test-data/uni-spelling-book-inputs';

export function formatCodePoints(str?: string): string {
    if (str == null) {
        return '';
    }

    const cpArray: string[] = [];
    for (const c of str) {
        const cp = c.codePointAt(0);
        if (cp != null && /[\u1000-\u109F\uAA60-\uAA7F\uA9E0-\uA9FF]/.test(c)) {
            cpArray.push(`\\u${cp.toString(16)}`);
        } else if (/[\b\f\n\r\t\v]/.test(c)) {
            if (c === '\n') {
                cpArray.push('\\n');
            } else if (c === '\r') {
                cpArray.push('\\r');
            } else if (c === '\t') {
                cpArray.push('\\t');
            } else if (c === '\f') {
                cpArray.push('\\f');
            } else if (c === '\v') {
                cpArray.push('\\v');
            } else if (c === '\b') {
                cpArray.push('\\b');
            }
        } else {
            cpArray.push(`${c}`);
        }
    }

    return cpArray.join('');
}

export function toFailOutput(result: TranslitResult): string {
    let str = '\n';

    if (result.traces) {
        for (const trace of result.traces) {
            str += `from: ${formatCodePoints(trace.from)}\n`;
            str += `to: ${formatCodePoints(trace.to)}\n`;
            str += `inputString: ${formatCodePoints(trace.inputString)}\n`;
            // str += `matchedString: ${formatCodePoints(trace.matchedString)}\n`;
            // str += `replacedString: ${formatCodePoints(trace.replacedString)}\n`;

            if (trace.postRuleTraces && trace.postRuleTraces.length > 0) {
                str += 'post rules:\n';
                for (const subTrace of trace.postRuleTraces) {
                    str += `from: ${formatCodePoints(subTrace.from)}\n`;
                    str += `to: ${formatCodePoints(subTrace.to)}\n`;
                    str += `inputString: ${formatCodePoints(subTrace.inputString)}\n`;
                    // str += `matchedString: ${formatCodePoints(subTrace.matchedString)}\n`;
                    // str += `replacedString: ${formatCodePoints(subTrace.replacedString)}\n`;
                }
            }
            str += '\n';
        }
    }

    return str;
}

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
                                const failedMsg = toFailOutput(currentResult);
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
                                const failedMsg = toFailOutput(currentResult);
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
                                const failedMsg = toFailOutput(currentResult);
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
                                const failedMsg = toFailOutput(currentResult);
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
