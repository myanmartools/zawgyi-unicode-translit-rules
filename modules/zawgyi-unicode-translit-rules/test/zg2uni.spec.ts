// tslint:disable: no-floating-promises

// tslint:disable: no-implicit-dependencies

import { TestBed } from '@angular/core/testing';

import { TranslitModule, TranslitResult, TranslitService } from '@dagonmetric/ng-translit';

import { zg2uniRules } from '../src/zg2uni-rules';

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

export function toFailOutput(input: string, result: TranslitResult): string {
    let str = `\n\ninput: ${formatCodePoints(input)}\n`;
    str += `outputText: ${formatCodePoints(result.outputText)}\n\n`;

    if (result.traces) {
        for (const trace of result.traces) {
            str += `from (parsed): ${formatCodePoints(trace.parsedFrom)}\n`;
            str += `from: ${formatCodePoints(trace.from)}\n`;
            str += `to: ${formatCodePoints(trace.to)}\n`;
            str += `inputString: ${formatCodePoints(trace.inputString)}\n`;
            str += `matchedString: ${formatCodePoints(trace.matchedString)}\n`;
            str += `replacedString: ${formatCodePoints(trace.replacedString)}\n`;

            if (trace.postRuleTraces && trace.postRuleTraces.length > 0) {
                str += 'post rules:\n';
                for (const subTrace of trace.postRuleTraces) {
                    str += `from: ${formatCodePoints(subTrace.from)}\n`;
                    str += `to: ${formatCodePoints(subTrace.to)}\n`;
                    str += `inputString: ${formatCodePoints(subTrace.inputString)}\n`;
                    str += `matchedString: ${formatCodePoints(subTrace.matchedString)}\n`;
                    str += `replacedString: ${formatCodePoints(subTrace.replacedString)}\n`;
                }
            }
            str += '\n';
        }
    }

    return str;
}

describe('uni2zg-rules-individual', () => {
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

    // (zg: \u108B-\u108D) -> \u102D, \u102E, \u1036
    // ------------------------------------------------------------------------------------------
    // Pasin
    // ...............
    it("should work with '\u1031\u103B([#zc])\u1096#kx'", (done: DoneFn) => {
        const input = '\u1031\u1083\u108F\u1096\u108B';
        const expected = 'င်္န္တြွေိ';

        translitService.translit(input, 'zg2uni', zg2uniRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(input, result));
                done();
            });
    });

    it("should work with '\u1031([#zc])\u1096#kx", (done: DoneFn) => {
        const input = '\u1031\u1090\u1096\u108C';
        const expected = 'င်္ရ္တွေီ';

        translitService.translit(input, 'zg2uni', zg2uniRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(input, result));
                done();
            });
    });

    it("should work with '\u1031\u103B([#zc])([#zplc])#kx'", (done: DoneFn) => {
        const input = '\u1031\u1084\u1086\u1071\u108D';
        const expected = 'င်္ဿ္တြေံ';

        translitService.translit(input, 'zg2uni', zg2uniRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(input, result));
                done();
            });
    });

    it("should work with '\u1031\u103B([#zpc])#kx'", (done: DoneFn) => {
        const input = '\u1031\u1084\u106F\u108D';
        const expected = 'င်္ဍ္ဎြေံ';

        translitService.translit(input, 'zg2uni', zg2uniRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(input, result));
                done();
            });
    });

    it("should work with '\u1031([#zc])([#zplc])\u103A#kx'", (done: DoneFn) => {
        const input = '\u1031\u1040\u1072\u107D\u108B';
        const expected = 'င်္ဝ္တျေိ';

        translitService.translit(input, 'zg2uni', zg2uniRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(input, result));
                done();
            });
    });

    it("should work with '\u1031([#zpc])\u103A#kx'", (done: DoneFn) => {
        const input = '\u1031\u1091\u107D\u108B';
        const expected = 'င်္ဏ္ဍျေိ';

        translitService.translit(input, 'zg2uni', zg2uniRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(input, result));
                done();
            });
    });

    it("should work with '\u1031([#zc])([#zplc])#kx'", (done: DoneFn) => {
        const input = '\u1031\u106A\u1065\u108C';
        const expected = 'င်္ဉ္စေီ';

        translitService.translit(input, 'zg2uni', zg2uniRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(input, result));
                done();
            });
    });

    it("should work with '\u1031([#zpc])#kx'", (done: DoneFn) => {
        const input = '\u1031\u1092\u108B';
        const expected = 'င်္ဋ္ဌေိ';

        translitService.translit(input, 'zg2uni', zg2uniRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(input, result));
                done();
            });
    });

    it("should work with '\u103B([#zc])\u1096#kx'", (done: DoneFn) => {
        const input = '\u1084\u106B\u1096\u108C';
        const expected = 'င်္ည္တြွီ';

        translitService.translit(input, 'zg2uni', zg2uniRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(input, result));
                done();
            });
    });

    it("should work with '([#zc])\u1096#kx'", (done: DoneFn) => {
        const input = '\u108F\u1096\u108C';
        const expected = 'င်္န္တွီ';

        translitService.translit(input, 'zg2uni', zg2uniRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(input, result));
                done();
            });
    });

    it("should work with '\u103B([#zc])([#zplc])#kx'", (done: DoneFn) => {
        const input = '\u1083\u1090\u1072\u108D';
        const expected = 'င်္ရ္တြံ';

        translitService.translit(input, 'zg2uni', zg2uniRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(input, result));
                done();
            });
    });

    it("should work with '\u103B([#zpc])#kx'", (done: DoneFn) => {
        const input = '\u1084\u1091\u108B';
        const expected = 'င်္ဏ္ဍြိ';

        translitService.translit(input, 'zg2uni', zg2uniRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(input, result));
                done();
            });
    });

    it("should work with '([#zc])([#zplc])\u103A#kx'", (done: DoneFn) => {
        const input = '\u1090\u1074\u107D\u108B';
        const expected = 'င်္ရ္ထျိ';

        translitService.translit(input, 'zg2uni', zg2uniRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(input, result));
                done();
            });
    });

    it("should work with '([#zpc])\u103A#kx'", (done: DoneFn) => {
        const input = '\u1097\u107D\u108B';
        const expected = 'င်္ဋ္ဋျိ';

        translitService.translit(input, 'zg2uni', zg2uniRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(input, result));
                done();
            });
    });

    it("should work with '([#zc])([#zplc])#kx'", (done: DoneFn) => {
        const input = '\u108F\u1074\u108C';
        const expected = 'င်္န္ထီ';

        translitService.translit(input, 'zg2uni', zg2uniRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(input, result));
                done();
            });
    });

    it("should work with '([#zplc])#kx'", (done: DoneFn) => {
        const input = '\u106E\u108B';
        const expected = 'င်္ဍ္ဍိ';

        translitService.translit(input, 'zg2uni', zg2uniRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(input, result));
                done();
            });
    });
});
