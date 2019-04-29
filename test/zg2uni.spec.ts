// tslint:disable: mocha-no-side-effect-code
// tslint:disable: no-var-requires
// tslint:disable: no-require-imports
// tslint:disable: no-floating-promises
// tslint:disable: no-unsafe-any

import { TestBed } from '@angular/core/testing';

import { NoopTranslitRuleLoaderModule, TranslitModule, TranslitRule, TranslitService } from '../src';

// const uni2zgRules: TranslitRule = require('../rules/uni2zg.json');
const zg2uniRules: TranslitRule[] = require('../rules/zg2uni.json');

const zg2uniTestData: { input: string[]; expected: string[] } = require('./test-data/zg2uni.json');

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

        const inputText = zg2uniTestData.input.join('\n');

        translitService.translit(inputText, 'zg', 'uni')
            .subscribe(result => {
                const outputText = result.outputText;
                const actualWords = outputText.split('\n');
                expect(actualWords.length).toEqual(zg2uniTestData.expected.length);

                for (let i = 0; i < actualWords.length; i++) {
                    const actualWord = actualWords[i];
                    const expectedWord = zg2uniTestData.expected[i];

                    const isEquals = actualWord === expectedWord;
                    if (!isEquals) {
                        const cpActual = formatCodePoints(actualWord);
                        const cpExpected = formatCodePoints(expectedWord);
                        // tslint:disable-next-line: no-console
                        console.log(`Not equal, line: ${i}, actual: ${cpActual}, expected: ${cpExpected}`);
                    }

                    expect(actualWord).toEqual(expectedWord);
                }

                done();
            });
    });
});
