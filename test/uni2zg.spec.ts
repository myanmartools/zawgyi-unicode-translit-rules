// tslint:disable: mocha-no-side-effect-code
// tslint:disable: no-var-requires
// tslint:disable: no-require-imports
// tslint:disable: no-floating-promises
// tslint:disable: no-unsafe-any

import { TestBed } from '@angular/core/testing';

import { NoopTranslitRuleLoaderModule, TranslitModule, TranslitRule, TranslitService } from '../src';

// const uni2zgRules: TranslitRule = require('../rules/uni2zg.json');
const uni2zgRules: TranslitRule[] = require('../rules/uni2zg.json');

const uni2zgTestData: { input: string[]; expected: string[] } = require('./test-data/uni2zg.json');

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

    it('Converting Unicode to Zawgyi, should be Zawgyi expected text', (done: DoneFn) => {
        translitService.useRule('uni', 'zg', uni2zgRules);

        const inputText = uni2zgTestData.input.join('\n');

        translitService.translit(inputText, 'uni', 'zg')
            .subscribe(result => {
                const outputText = result.outputText;
                const actualWords = outputText.split('\n');
                expect(actualWords.length).toEqual(uni2zgTestData.expected.length);

                let errorCount = 0;

                for (let i = 0; i < actualWords.length; i++) {
                    const actualWord = actualWords[i];
                    const expectedWord = uni2zgTestData.expected[i];

                    const isEquals = actualWord === expectedWord;
                    if (!isEquals) {
                        const cpActual = formatCodePoints(actualWord);
                        const cpExpected = formatCodePoints(expectedWord);
                        // tslint:disable-next-line: no-console
                        console.log(`Not equal, line: ${i}, actual: ${cpActual}, expected: ${cpExpected}`);
                        errorCount++;
                    }

                    expect(actualWord).toEqual(expectedWord);

                    if (errorCount > 3) {
                        break;
                    }
                }

                done();
            });
    });
});
