// tslint:disable: no-floating-promises

import { TestBed } from '@angular/core/testing';

import { TranslitModule, TranslitResult, TranslitRule, TranslitService } from '@dagonmetric/ng-transliterate';

// tslint:disable-next-line: mocha-no-side-effect-code no-var-requires no-require-imports
const rules = require('./../../../docs/rules/uni2zg.json') as TranslitRule;

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

export function toFailOutput(result: TranslitResult): TranslitResult {
    result.outputText = formatCodePoints(result.outputText);
    if (result.traces) {
        for (const trace of result.traces) {
            trace.from = formatCodePoints(trace.from);
            trace.to = formatCodePoints(trace.to);
            trace.previousText = formatCodePoints(trace.previousText);
            trace.matchedText = formatCodePoints(trace.matchedText);
            trace.replacedText = formatCodePoints(trace.replacedText);
        }
    }

    return result;
}

describe('TranslitService', () => {
    let translitService: TranslitService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                TranslitModule.forRootWithOptions({
                    trace: true,
                    provideRuleStore: false
                })
            ]
        });

        translitService = TestBed.get<TranslitService>(TranslitService) as TranslitService;
    });

    it('TranslitService to be defined', () => {
        expect(translitService).toBeDefined();
        expect(translitService instanceof TranslitService).toBeTruthy();
    });

    it("should work 'ဿ'", (done: DoneFn) => {
        const input = 'ဿ';
        const expected = '\u1086';

        translitService.translit(input, 'uni2zg', rules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, result);
                done();
            });
    });

    it("should work [ကဃ... double width consonants] + U+1039 + '#psws'", (done: DoneFn) => {
        const input = 'တ္တ';
        const expected = '\u1010\u1071';

        translitService.translit(input, 'uni2zg', rules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, result);
                done();
            });
    });

    it("should work [က-ဪဿ၀-၉...] + U+1039 + '#pss'", (done: DoneFn) => {
        const input = 'မ္မ';
        const expected = '\u1019\u107C';

        translitService.translit(input, 'uni2zg', rules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work 'ဍ္ဍ', 'ဍ္ဎ', 'ဏ္ဍ', 'ဋ္ဌ', 'ဋ္ဋ'", (done: DoneFn) => {
        const input = 'ဍ္ဍဍ္ဎဏ္ဍဋ္ဌဋ္ဋ';
        const expected = '\u106E\u106F\u1091\u1092\u1097';

        translitService.translit(input, 'uni2zg', rules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work U+1039 + '#pss'", (done: DoneFn) => {
        const input = '္မ';
        const expected = '\u107C';

        translitService.translit(input, 'uni2zg', rules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work '၎င်း'", (done: DoneFn) => {
        const input = '၎င်း';
        const expected = '\u104E';

        translitService.translit(input, 'uni2zg', rules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work 'ါ်'", (done: DoneFn) => {
        const input = 'ခါ်';
        const expected = '\u1001\u105A';

        translitService.translit(input, 'uni2zg', rules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work 'ွှ'", (done: DoneFn) => {
        const input = 'မွှ';
        const expected = '\u1019\u108A';

        translitService.translit(input, 'uni2zg', rules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work 'ျ', 'ြ', ''ွ', 'ှ', '်'", (done: DoneFn) => {
        const input = 'ကျကြကွကှက်';
        const expected = '\u1000\u103A\u1000\u103B\u1000\u103C\u1000\u103D\u1000\u1039';

        translitService.translit(input, 'uni2zg', rules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });
});
