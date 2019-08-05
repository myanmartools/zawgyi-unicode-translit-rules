// tslint:disable: no-floating-promises

// tslint:disable: no-implicit-dependencies

import { TestBed } from '@angular/core/testing';

import { TranslitModule, TranslitResult, TranslitService } from '@dagonmetric/ng-translit';

import { uni2zgRules } from '../src/uni2zg-rules';

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
            trace.previousString = formatCodePoints(trace.previousString);
            trace.matchedString = formatCodePoints(trace.matchedString);
            trace.newString = formatCodePoints(trace.newString);
        }
    }

    return result;
}

describe('uni2zg-rules', () => {
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

    // \u1086
    // ------------------------------------------------------------------------------------------
    it("should work with 'ဿ'", (done: DoneFn) => {
        const input = 'ဿ';
        const expected = '\u1086';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    // \u108B-\u108D
    // ------------------------------------------------------------------------------------------
    // Pasin
    // ...............
    it("should work with '\u1004\u103A\u1039([#uc])\u1039\u1010\u103C\u103D\u1031#kx'", (done: DoneFn) => {
        const input = 'င်္န္တြွေိ';
        const expected = '\u1031\u1083\u108F\u1096\u108B';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1004\u103A\u1039([#uc])\u1039\u1010\u103D\u1031#kx'", (done: DoneFn) => {
        const input = 'င်္ရ္တွေီ';
        const expected = '\u1031\u1090\u1096\u108C';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1004\u103A\u1039([#uc])\u1039([#uc])\u103C\u1031#kx'", (done: DoneFn) => {
        const input = 'င်္ဿ္တြေံ';
        const expected = '\u1031\u1084\u1086\u1071\u108D';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1004\u103A\u1039([#uc])\u1039([#uc])\u103B\u1031#kx'", (done: DoneFn) => {
        const input = 'င်္၀္တျေိ';
        const expected = '\u1031\u101D\u1072\u107D\u108B';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1004\u103A\u1039([#uc])\u1039([#uc])\u1031#kx'", (done: DoneFn) => {
        const input = 'င်္ဉ္စေီ';
        const expected = '\u1031\u106A\u1065\u108C';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1004\u103A\u1039([#uc])\u1039\u1010\u103C\u103D#kx'", (done: DoneFn) => {
        const input = 'င်္ည္တြွီ';
        const expected = '\u1084\u106B\u1096\u108C';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1004\u103A\u1039([#uc])\u1039\u1010\u103D\u1031#kx'", (done: DoneFn) => {
        const input = 'င်္န္တွီ';
        const expected = '\u108F\u1096\u108C';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1004\u103A\u1039([#uc])\u1039([#uc])\u103C#kx'", (done: DoneFn) => {
        const input = 'င်္ရ္တြံ';
        const expected = '\u1083\u1090\u1072\u108D';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1004\u103A\u1039([#uc])\u1039([#uc])\u103B#kx'", (done: DoneFn) => {
        const input = 'င်္ရ္ထျိ';
        const expected = '\u1090\u1074\u107D\u108B';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1004\u103A\u1039([#uc])\u1039([#uc])#kx'", (done: DoneFn) => {
        const input = 'င်္န္ထီ';
        const expected = '\u108F\u1074\u108C';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    // '.' (zg: \u1094)
    // ...............
    it("should work with '\u1004\u103A\u1039([#u2e30])\u1031#kx\u102F\u1037'", (done: DoneFn) => {
        const input = 'င်္နေို့';
        const expected = '\u1031\u108F\u102F\u108B\u1094';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1004\u103A\u1039([#u2e30])\u103E\u1031#kx\u1037'", (done: DoneFn) => {
        const input = 'င်္နှေီ့';
        const expected = '\u1031\u108F\u103D\u108C\u1094';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1004\u103A\u1039([#u2e30])#kx\u102F\u1037'", (done: DoneFn) => {
        const input = 'င်္နီု့';
        const expected = '\u108F\u102F\u108C\u1094';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1004\u103A\u1039([#u2e30])\u103E#kx\u1037''", (done: DoneFn) => {
        const input = 'င်္နှိ့';
        const expected = '\u108F\u103D\u108B\u1094';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1004\u103A\u1039\u1014\u1031#kx\u1037'", (done: DoneFn) => {
        const input = 'င်္နေိ့';
        const expected = '\u1031\u1014\u108B\u1094';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1004\u103A\u1039\u1014#kx\u1037'", (done: DoneFn) => {
        const input = 'င်္နိ့';
        const expected = '\u1014\u108B\u1094';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    // '.' (zg: \u1037)
    // ...............
    it("should work with '\u1004\u103A\u1039([#u37\u1014])\u103C\u1031#kx\u1037'", (done: DoneFn) => {
        const input = 'င်္နြေိ့';
        const expected = '\u1031\u107F\u108F\u108B\u1037';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1004\u103A\u1039[\u1009\u1025]\u1031#kx\u1037'", (done: DoneFn) => {
        const input = 'င်္ဉေိ့';
        const expected = '\u1031\u1025\u108B\u1037';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1004\u103A\u1039([#u37])\u1031#kx\u1037'", (done: DoneFn) => {
        const input = 'င်္ကေိ့';
        const expected = '\u1031\u1000\u108B\u1037';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1004\u103A\u1039([#u37\u1014])\u103C#kx\u1037'", (done: DoneFn) => {
        const input = 'င်္နြိ့';
        const expected = '\u103B\u108F\u108B\u1037';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1004\u103A\u1039[\u1009\u1025]#kx\u1037'", (done: DoneFn) => {
        const input = 'င်္ဉိ့';
        const expected = '\u1025\u108B\u1037';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1004\u103A\u1039([#u37])#kx\u1037'", (done: DoneFn) => {
        const input = 'င်္ခိ့';
        const expected = '\u1001\u108B\u1037';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    // [ု  ူ] (zg: \u1033, \u1034)
    // ...............
    it("should work with '\u1004\u103A\u1039[\u1009\u1025]\u103E\u1031#kx\u102F'", (done: DoneFn) => {
        const input = 'င်္ဉှေို';
        const expected = '\u1031\u1025\u108B\u1087\u1033';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1004\u103A\u1039[\u1009\u1025]\u103E\u1031#kx\u1030'", (done: DoneFn) => {
        const input = 'င်္ဉှေိူ';
        const expected = '\u1031\u1025\u108B\u1087\u1034';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1004\u103A\u1039[\u1009\u1025]\u1031#kx\u102F'", (done: DoneFn) => {
        const input = 'င်္ဉေို';
        const expected = '\u1031\u1025\u108B\u1033';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1004\u103A\u1039[\u1009\u1025]\u103E#kx\u1030'", (done: DoneFn) => {
        const input = 'င်္ဉှိူ';
        const expected = '\u1025\u108B\u1087\u1034';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1004\u103A\u1039[\u1009\u1025]#kx\u1030'", (done: DoneFn) => {
        const input = 'င်္ဉိူ';
        const expected = '\u1025\u108B\u1034';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    // [ု  ူ] (zg: \u1088, \u1089)
    // ...............
    it("should work with '\u1004\u103A\u1039([#u2e30])\u103E\u1031#kx\u102F'", (done: DoneFn) => {
        const input = 'င်္ကှေို';
        const expected = '\u1031\u1000\u108B\u1088';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1004\u103A\u1039([#u2e30])\u103E\u1031#kx\u1030'", (done: DoneFn) => {
        const input = 'င်္ကှေိူ';
        const expected = '\u1031\u1000\u108B\u1089';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1004\u103A\u1039([#u2e30])\u103E#kx\u1030'", (done: DoneFn) => {
        const input = 'င်္ပှိူ';
        const expected = '\u1015\u108B\u1089';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    // [ု  ူ] (zg: \u102F, \u1030)
    // ...............
    it("should work with '\u1004\u103A\u1039([#u2e30])\u1031#kx\u102F'", (done: DoneFn) => {
        const input = 'င်္ကေို';
        const expected = '\u1031\u1000\u102F\u108B';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1004\u103A\u1039([#u2e30])\u1031#kx\u1030'", (done: DoneFn) => {
        const input = 'င်္ကေိူ';
        const expected = '\u1031\u1000\u1030\u108B';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1004\u103A\u1039([#u2e30])#kx\u1030'", (done: DoneFn) => {
        const input = 'င်္ကိူ';
        const expected = '\u1000\u1030\u108B';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    //  ေ
    // ...............
    it("should work with '\u1004\u103A\u1039([#uc])\u103C\u103D\u103E\u1031#kx'", (done: DoneFn) => {
        const input = 'င်္နြွှေိ';
        const expected = '\u1031\u1083\u108F\u108A\u108B';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1004\u103A\u1039([#uc])\u103C\u103D\u1031#kx'", (done: DoneFn) => {
        const input = 'င်္နြွေိ';
        const expected = '\u1031\u1083\u108F\u103C\u108B';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1004\u103A\u1039([#uc])\u103C\u103E\u1031#kx'", (done: DoneFn) => {
        const input = 'င်္နြှေိ';
        const expected = '\u1031\u107F\u108F\u103D\u108B';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1004\u103A\u1039([#uc])\u103B\u103D\u103E\u1031#kx'", (done: DoneFn) => {
        const input = 'င်္နျွှေိ';
        const expected = '\u1031\u108F\u108A\u107D\u108B';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1004\u103A\u1039([#uc])\u103B\u103D\u1031#kx'", (done: DoneFn) => {
        const input = 'င်္နျွေိ';
        const expected = '\u1031\u108F\u103C\u107D\u108B';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1004\u103A\u1039([#uc])\u103B\u103E\u1031#kx'", (done: DoneFn) => {
        const input = 'င်္နျှေိ';
        const expected = '\u1031\u108F\u103D\u103A\u108B';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1004\u103A\u1039([#uc])\u103D\u103E\u1031#kx'", (done: DoneFn) => {
        const input = 'င်္နွှေိ';
        const expected = '\u1031\u108F\u108A\u108B';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1004\u103A\u1039([#uc])\u103D\u1031#kx'", (done: DoneFn) => {
        const input = 'င်္နွေိ';
        const expected = '\u1031\u108F\u103C\u108B';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1004\u103A\u1039([#uc])\u103E\u1031#kx'", (done: DoneFn) => {
        const input = 'င်္နှေိ';
        const expected = '\u1031\u108F\u103D\u108B';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1004\u103A\u1039([#uc])\u103C\u1031#kx'", (done: DoneFn) => {
        const input = 'င်္နြေိ';
        const expected = '\u1031\u107F\u108F\u108B';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1004\u103A\u1039([#uc])\u103B\u1031#kx'", (done: DoneFn) => {
        const input = 'င်္နျေိ';
        const expected = '\u1031\u108F\u103A\u108B';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1004\u103A\u1039([#uc])\u1031#kx'", (done: DoneFn) => {
        const input = 'င်္ဿေိ';
        const expected = '\u1031\u1086\u108B';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    // [ွှ  ွ  ှ]
    // ...............
    it("should work with '\u1004\u103A\u1039([#uc])\u103C\u103D\u103E#kx'", (done: DoneFn) => {
        const input = 'င်္နြွှိ';
        const expected = '\u1083\u108F\u108A\u108B';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1004\u103A\u1039([#uc])\u103C\u103D#kx'", (done: DoneFn) => {
        const input = 'င်္နြွိ';
        const expected = '\u1083\u108F\u103C\u108B';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1004\u103A\u1039([#uc])\u103C\u103E#kx'", (done: DoneFn) => {
        const input = 'င်္နြှိ';
        const expected = '\u107F\u108F\u103D\u108B';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1004\u103A\u1039([#uc])\u103B\u103D\u103E#kx'", (done: DoneFn) => {
        const input = 'င်္နျွှိ';
        const expected = '\u108F\u108A\u107D\u108B';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1004\u103A\u1039([#uc])\u103B\u103D#kx'", (done: DoneFn) => {
        const input = 'င်္နျွိ';
        const expected = '\u108F\u103C\u107D\u108B';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1004\u103A\u1039([#uc])\u103B\u103E#kx'", (done: DoneFn) => {
        const input = '\u1004\u103A\u1039\u1014\u103B\u103E\u102D';
        const expected = '\u108F\u103D\u103A\u108B';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1004\u103A\u1039([#uc])\u103D\u103E#kx'", (done: DoneFn) => {
        const input = 'င်္နွှိ';
        const expected = '\u108F\u108A\u108B';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1004\u103A\u1039([#uc])\u103D#kx'", (done: DoneFn) => {
        const input = 'င်္နွိ';
        const expected = '\u108F\u103C\u108B';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1004\u103A\u1039([#uc])\u103E#kx'", (done: DoneFn) => {
        const input = 'င်္နှိ';
        const expected = '\u108F\u103D\u108B';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    // 'ြ'
    // ...............
    it("should work with '\u1004\u103A\u1039([#uc])\u103C#kx'", (done: DoneFn) => {
        const input = 'င်္နြိ';
        const expected = '\u107F\u108F\u108B';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    // 'ျ'
    // ...............
    it("should work with '\u1004\u103A\u1039([#uc])\u103B#kx'", (done: DoneFn) => {
        const input = 'င်္နျိ';
        const expected = '\u108F\u103A\u108B';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    // #
    // ...............
    it("should work with '\u1004\u103A\u1039([#uc])#kx'", (done: DoneFn) => {
        const input = 'င်္ဿိ';
        const expected = '\u1086\u108B';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    // \u1064
    // ------------------------------------------------------------------------------------------
    // Pasin
    // ...............
    it("should work with '\u1004\u103A\u1039([#uc])\u1039\u1010\u103C\u103D\u1031'", (done: DoneFn) => {
        const input = 'င်္န္တြွေ';
        const expected = '\u1031\u1083\u108F\u1096\u1064';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1004\u103A\u1039([#uc])\u1039\u1010\u103D\u1031'", (done: DoneFn) => {
        const input = 'င်္ရ္တွေ';
        const expected = '\u1031\u1090\u1096\u1064';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1004\u103A\u1039([#uc])\u1039([#uc])\u103C\u1031'", (done: DoneFn) => {
        const input = 'င်္ဿ္တြေ';
        const expected = '\u1031\u1084\u1086\u1071\u1064';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1004\u103A\u1039([#uc])\u1039([#uc])\u103B\u1031'", (done: DoneFn) => {
        const input = 'င်္၀္တျေ';
        const expected = '\u1031\u101D\u1072\u107D\u1064';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1004\u103A\u1039([#uc])\u1039([#uc])\u1031", (done: DoneFn) => {
        const input = 'င်္ဉ္စေ';
        const expected = '\u1031\u106A\u1065\u1064';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1004\u103A\u1039([#uc])\u1039\u1010\u103C\u103D'", (done: DoneFn) => {
        const input = 'င်္ည္တြွ';
        const expected = '\u1084\u106B\u1096\u1064';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1004\u103A\u1039([#uc])\u1039\u1010\u103D\u1031'", (done: DoneFn) => {
        const input = 'င်္န္တွ';
        const expected = '\u108F\u1096\u1064';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1004\u103A\u1039([#uc])\u1039([#uc])\u103C'", (done: DoneFn) => {
        const input = 'င်္ရ္တြ';
        const expected = '\u1083\u1090\u1072\u1064';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1004\u103A\u1039([#uc])\u1039([#uc])\u103B'", (done: DoneFn) => {
        const input = 'င်္ရ္ထျ';
        const expected = '\u1090\u1074\u107D\u1064';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1004\u103A\u1039([#uc])\u1039([#uc])'", (done: DoneFn) => {
        const input = 'င်္န္ထ';
        const expected = '\u108F\u1074\u1064';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    // '.' (zg: \u1094)
    // ...............
    // '.' (zg: \u1094)
    // ...............
    it("should work with '\u1004\u103A\u1039([#u2e30])\u1031\u102F\u1037'", (done: DoneFn) => {
        const input = 'င်္နေု့';
        const expected = '\u1031\u108F\u102F\u1064\u1094';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1004\u103A\u1039([#u2e30])\u103E\u1031\u1037'", (done: DoneFn) => {
        const input = 'င်္နှေ့';
        const expected = '\u1031\u108F\u103D\u1064\u1094';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1004\u103A\u1039([#u2e30])\u102F\u1037'", (done: DoneFn) => {
        const input = 'င်္နု့';
        const expected = '\u108F\u102F\u1064\u1094';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1004\u103A\u1039([#u2e30])\u103E\u1037''", (done: DoneFn) => {
        const input = 'င်္နှ့';
        const expected = '\u108F\u103D\u1064\u1094';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1004\u103A\u1039\u1014\u1031\u1037'", (done: DoneFn) => {
        const input = 'င်္နေ့';
        const expected = '\u1031\u1014\u1064\u1094';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1004\u103A\u1039\u1014\u1037'", (done: DoneFn) => {
        const input = 'င်္န့';
        const expected = '\u1014\u1064\u1094';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    // '.' (zg: \u1037)
    // ...............
    it("should work with '\u1004\u103A\u1039([#u37\u1014])\u103C\u1031\u1037'", (done: DoneFn) => {
        const input = 'င်္နြေ့';
        const expected = '\u1031\u107F\u108F\u1064\u1037';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1004\u103A\u1039[\u1009\u1025]\u1031\u1037'", (done: DoneFn) => {
        const input = 'င်္ဉေ့';
        const expected = '\u1031\u1025\u1064\u1037';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1004\u103A\u1039([#u37])\u1031\u1037'", (done: DoneFn) => {
        const input = 'င်္ကေ့';
        const expected = '\u1031\u1000\u1064\u1037';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1004\u103A\u1039([#u37\u1014])\u103C\u1037'", (done: DoneFn) => {
        const input = 'င်္နြ့';
        const expected = '\u103B\u108F\u1064\u1037';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1004\u103A\u1039[\u1009\u1025]\u1037'", (done: DoneFn) => {
        const input = 'င်္ဉ့';
        const expected = '\u1025\u1064\u1037';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1004\u103A\u1039([#u37])\u1037'", (done: DoneFn) => {
        const input = 'င်္ခ့';
        const expected = '\u1001\u1064\u1037';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    // [ု  ူ] (zg: \u1033, \u1034)
    // ...............
    it("should work with '\u1004\u103A\u1039[\u1009\u1025]\u103E\u1031\u102F'", (done: DoneFn) => {
        const input = 'င်္ဉှေု';
        const expected = '\u1031\u1025\u1064\u1087\u1033';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1004\u103A\u1039[\u1009\u1025]\u103E\u1031\u1030'", (done: DoneFn) => {
        const input = 'င်္ဉှေူ';
        const expected = '\u1031\u1025\u1064\u1087\u1034';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1004\u103A\u1039[\u1009\u1025]\u1031\u102F'", (done: DoneFn) => {
        const input = 'င်္ဉေု';
        const expected = '\u1031\u1025\u1064\u1033';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1004\u103A\u1039[\u1009\u1025]\u103E\u1030'", (done: DoneFn) => {
        const input = 'င်္ဉှူ';
        const expected = '\u1025\u1064\u1087\u1034';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1004\u103A\u1039[\u1009\u1025]\u1030'", (done: DoneFn) => {
        const input = 'င်္ဉူ';
        const expected = '\u1025\u1064\u1034';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    // [ု  ူ] (zg: \u1088, \u1089)
    // ...............
    it("should work with '\u1004\u103A\u1039([#u2e30])\u103E\u1031\u102F'", (done: DoneFn) => {
        const input = 'င်္ကှေု';
        const expected = '\u1031\u1000\u1064\u1088';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1004\u103A\u1039([#u2e30])\u103E\u1031\u1030'", (done: DoneFn) => {
        const input = 'င်္ကှေူ';
        const expected = '\u1031\u1000\u1064\u1089';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1004\u103A\u1039([#u2e30])\u103E\u1030'", (done: DoneFn) => {
        const input = 'င်္ပှူ';
        const expected = '\u1015\u1064\u1089';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    // [ု  ူ] (zg: \u102F, \u1030)
    // ...............
    it("should work with '\u1004\u103A\u1039([#u2e30])\u1031\u102F'", (done: DoneFn) => {
        const input = 'င်္ကေု';
        const expected = '\u1031\u1000\u102F\u1064';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1004\u103A\u1039([#u2e30])\u1031\u1030'", (done: DoneFn) => {
        const input = 'င်္ကေူ';
        const expected = '\u1031\u1000\u1030\u1064';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1004\u103A\u1039([#u2e30])\u1030'", (done: DoneFn) => {
        const input = 'င်္ကူ';
        const expected = '\u1000\u1030\u1064';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    //  ေ
    // ...............
    it("should work with '\u1004\u103A\u1039([#uc])\u103C\u103D\u103E\u1031'", (done: DoneFn) => {
        const input = 'င်္နြွှေ';
        const expected = '\u1031\u1083\u108F\u108A\u1064';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1004\u103A\u1039([#uc])\u103C\u103D\u1031'", (done: DoneFn) => {
        const input = 'င်္နြွေ';
        const expected = '\u1031\u1083\u108F\u103C\u1064';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1004\u103A\u1039([#uc])\u103C\u103E\u1031'", (done: DoneFn) => {
        const input = 'င်္နြှေ';
        const expected = '\u1031\u107F\u108F\u103D\u1064';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1004\u103A\u1039([#uc])\u103C\u1031'", (done: DoneFn) => {
        const input = 'င်္နြေ';
        const expected = '\u1031\u107F\u108F\u1064';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1004\u103A\u1039([#uc])\u103B\u103D\u103E\u1031'", (done: DoneFn) => {
        const input = 'င်္နျွှေ';
        const expected = '\u1031\u108F\u108A\u107D\u1064';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1004\u103A\u1039([#uc])\u103B\u103D\u1031'", (done: DoneFn) => {
        const input = 'င်္နျွေ';
        const expected = '\u1031\u108F\u103C\u107D\u1064';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1004\u103A\u1039([#uc])\u103B\u103E\u1031'", (done: DoneFn) => {
        const input = 'င်္နျှေ';
        const expected = '\u1031\u108F\u103D\u103A\u1064';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1004\u103A\u1039([#uc])\u103B\u1031'", (done: DoneFn) => {
        const input = 'င်္နျေ';
        const expected = '\u1031\u108F\u103A\u1064';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1004\u103A\u1039([#uc])\u103D\u103E\u1031'", (done: DoneFn) => {
        const input = 'င်္နွှေ';
        const expected = '\u1031\u108F\u108A\u1064';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1004\u103A\u1039([#uc])\u103D\u1031'", (done: DoneFn) => {
        const input = 'င်္နွေ';
        const expected = '\u1031\u108F\u103C\u1064';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1004\u103A\u1039([#uc])\u103E\u1031'", (done: DoneFn) => {
        const input = 'င်္နှေ';
        const expected = '\u1031\u108F\u103D\u1064';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1004\u103A\u1039([#uc])\u1031'", (done: DoneFn) => {
        const input = 'င်္ဿေ';
        const expected = '\u1031\u1086\u1064';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    // [ွှ  ွ  ှ]
    // ...............
    it("should work with '\u1004\u103A\u1039([#uc])\u103C\u103D\u103E'", (done: DoneFn) => {
        const input = 'င်္နြွှ';
        const expected = '\u1083\u108F\u108A\u1064';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1004\u103A\u1039([#uc])\u103C\u103D'", (done: DoneFn) => {
        const input = 'င်္နြွ';
        const expected = '\u1083\u108F\u103C\u1064';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1004\u103A\u1039([#uc])\u103C\u103E'", (done: DoneFn) => {
        const input = 'င်္နြှ';
        const expected = '\u107F\u108F\u103D\u1064';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1004\u103A\u1039([#uc])\u103B\u103D\u103E'", (done: DoneFn) => {
        const input = 'င်္နျွှ';
        const expected = '\u108F\u108A\u107D\u1064';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1004\u103A\u1039([#uc])\u103B\u103D'", (done: DoneFn) => {
        const input = 'င်္နျွ';
        const expected = '\u108F\u103C\u107D\u1064';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1004\u103A\u1039([#uc])\u103B\u103E'", (done: DoneFn) => {
        const input = 'င်္နျှ';
        const expected = '\u108F\u103D\u103A\u1064';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1004\u103A\u1039([#uc])\u103D\u103E'", (done: DoneFn) => {
        const input = 'င်္နွှ';
        const expected = '\u108F\u108A\u1064';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1004\u103A\u1039([#uc])\u103D'", (done: DoneFn) => {
        const input = 'င်္နွ';
        const expected = '\u108F\u103C\u1064';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1004\u103A\u1039([#uc])\u103E'", (done: DoneFn) => {
        const input = 'င်္နှ';
        const expected = '\u108F\u103D\u1064';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    // 'ြ'
    // ...............
    it("should work with '\u1004\u103A\u1039([#uc])\u103C'", (done: DoneFn) => {
        const input = 'င်္နြ';
        const expected = '\u107F\u108F\u1064';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    // 'ျ'
    // ...............
    it("should work with '\u1004\u103A\u1039([#uc])\u103B'", (done: DoneFn) => {
        const input = 'င်္နျ';
        const expected = '\u108F\u103A\u1064';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    // #
    // ...............
    it("should work with '\u1004\u103A\u1039([#uc])'", (done: DoneFn) => {
        const input = 'င်္ဿ';
        const expected = '\u1086\u1064';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    // \u108B-\u108D
    // ------------------------------------------------------------------------------------------
    it("should work with '\u1004\u103A\u1039#kx' (\u108B)", (done: DoneFn) => {
        const input = 'င်္ိ';
        const expected = '\u108B';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1004\u103A\u1039#kx' (\u108C)", (done: DoneFn) => {
        const input = 'င်္ီ';
        const expected = '\u108C';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1004\u103A\u1039#kx' (\u108D)", (done: DoneFn) => {
        const input = 'င်္ံ';
        const expected = '\u108D';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    // \u1064
    // ------------------------------------------------------------------------------------------
    it("should work with '\u1004\u103A\u1039'", (done: DoneFn) => {
        const input = 'င်္';
        const expected = '\u1064';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    // // \u108E
    // // ------------------------------------------------------------------------------------------
    // Pasin
    // ...............
    it("should work with '([#uc])\u1039\u1010\u103C\u103D\u1031\u102D\u1036'", (done: DoneFn) => {
        const input = 'န္တြွေိံ';
        const expected = '\u1031\u1083\u108F\u1096\u108E';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '([#uc])\u1039([#uc])\u103C\u1031\u102D\u1036'", (done: DoneFn) => {
        const input = 'န္တြေိံ';
        const expected = '\u1031\u1083\u108F\u1072\u108E';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '([#uc])\u1039([#uc])\u103C\u102D\u1036'", (done: DoneFn) => {
        const input = 'န္တြိံ';
        const expected = '\u1083\u108F\u1072\u108E';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    // ...............
    it("should work with '([#uc])\u103C\u103D\u103E\u1031\u102D\u1036'", (done: DoneFn) => {
        const input = 'နြွှေိံ';
        const expected = '\u1031\u1083\u108F\u108A\u108E';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '([#uc])\u103C\u103D\u1031\u102D\u1036'", (done: DoneFn) => {
        const input = 'နြွေိံ';
        const expected = '\u1031\u1083\u108F\u103C\u108E';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '([#uc])\u103C\u103E\u1031\u102D\u1036'", (done: DoneFn) => {
        const input = 'နြှေိံ';
        const expected = '\u1031\u107F\u108F\u103D\u108E';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '([#uc])\u103C\u1031\u102D\u1036'", (done: DoneFn) => {
        const input = 'နြေိံ';
        const expected = '\u1031\u107F\u108F\u108E';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '([#uc])\u103C\u103D\u103E\u102D\u1036'", (done: DoneFn) => {
        const input = 'နြွှိံ';
        const expected = '\u1083\u108F\u108A\u108E';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '([#uc])\u103C\u103D\u102D\u1036'", (done: DoneFn) => {
        const input = 'နြွိံ';
        const expected = '\u1083\u108F\u103C\u108E';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '([#uc])\u103C\u103E\u102D\u1036'", (done: DoneFn) => {
        const input = 'နြှိံ';
        const expected = '\u107F\u108F\u103D\u108E';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '([#uc])\u103C\u102D\u1036'", (done: DoneFn) => {
        const input = 'နြိံ';
        const expected = '\u107F\u108F\u108E';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    // Pasin (zg: [\u1060-\u1063], [\u1065-\u1069], [\u106C-\u107C], \u1085, \u1093, \u1096)
    // ------------------------------------------------------------------------------------------
    // 'ေ'
    // ...............
    it("should work with '\u100D\u1039\u100D\u103C\u1031'", (done: DoneFn) => {
        const input = 'ဍ္ဍြေ';
        const expected = '\u1031\u1081\u106E';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u100D\u1039\u100D\u1031'", (done: DoneFn) => {
        const input = 'ဍ္ဍေ';
        const expected = '\u1031\u106E';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u100D\u1039\u100E\u103C\u1031'", (done: DoneFn) => {
        const input = 'ဍ္ဎြေ';
        const expected = '\u1031\u1081\u106F';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u100D\u1039\u100E\u1031'", (done: DoneFn) => {
        const input = 'ဍ္ဎေ';
        const expected = '\u1031\u106F';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u100F\u1039\u100D\u103C\u1031'", (done: DoneFn) => {
        const input = 'ဏ္ဍြေ';
        const expected = '\u1031\u1082\u1091';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u100F\u1039\u100D\u1031'", (done: DoneFn) => {
        const input = 'ဏ္ဍေ';
        const expected = '\u1031\u1091';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u100B\u1039\u100C\u103C\u1031'", (done: DoneFn) => {
        const input = 'ဋ္ဌြေ';
        const expected = '\u1031\u1081\u1092';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u100B\u1039\u100C\u1031'", (done: DoneFn) => {
        const input = 'ဋ္ဌေ';
        const expected = '\u1031\u1092';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u100B\u1039\u100B\u103C\u1031'", (done: DoneFn) => {
        const input = 'ဋ္ဋြေ';
        const expected = '\u1031\u1081\u1097';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u100B\u1039\u100B\u1031'", (done: DoneFn) => {
        const input = 'ဋ္ဋေ';
        const expected = '\u1031\u1097';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '([#uc])\u1039\u1010\u103C\u103D\u1031' - (\u1081)", (done: DoneFn) => {
        const input = 'န္တြွေ';
        const expected = '\u1031\u1081\u108F\u1096';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '([#uc])\u1039\u1010\u103C\u103D\u1031' - (\u1082)", (done: DoneFn) => {
        const input = 'က္တြွေ';
        const expected = '\u1031\u1082\u1000\u1096';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '([#uc])\u1039\u1010\u103D\u1031'", (done: DoneFn) => {
        const input = 'က္တွေ';
        const expected = '\u1031\u1000\u1096';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '([#ulc])\u1039#plx\u103C\u1031'", (done: DoneFn) => {
        const input = 'ထ္ထြေ';
        const expected = '\u1031\u1082\u1011\u1073';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '([#uc])\u1039#psx\u103C\u1031'", (done: DoneFn) => {
        const input = 'ခ္ထြေ';
        const expected = '\u1031\u1081\u1001\u1074';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '([#ulc])\u1039#plx\u103B\u1031'", (done: DoneFn) => {
        const input = 'က္ထျေ';
        const expected = '\u1031\u1000\u1073\u107D';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '([#uc])\u1039#psx\u103B\u1031'", (done: DoneFn) => {
        const input = 'ခ္ထျေ';
        const expected = '\u1031\u1001\u1074\u107D';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '([#ulc])\u1039#plx\u1031'", (done: DoneFn) => {
        const input = 'ထ္ထေ';
        const expected = '\u1031\u1011\u1073';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '([#uc])\u1039#psx\u1031'", (done: DoneFn) => {
        const input = 'န္တေ';
        const expected = '\u1031\u108F\u1072';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    // 'ွ'
    // ...............
    it("should work with '([#uc])\u1039\u1010\u103C\u103D'", (done: DoneFn) => {
        const input = 'က္တြွ';
        const expected = '\u1082\u1000\u1096';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '([#uc])\u1039\u1010\u103D'", (done: DoneFn) => {
        const input = 'က္တွ';
        const expected = '\u1000\u1096';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    // 'ြ'
    // ...............
    it("should work with '\u100D\u1039\u100D\u103C'", (done: DoneFn) => {
        const input = 'ဍ္ဍြ';
        const expected = '\u1081\u106E';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u100F\u1039\u100D\u103C'", (done: DoneFn) => {
        const input = 'ဏ္ဍြ';
        const expected = '\u1082\u1091';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '([#ulc])\u1039#plx\u103C'", (done: DoneFn) => {
        const input = 'ထ္ထြ';
        const expected = '\u1082\u1011\u1073';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '([#uc])\u1039#psx\u103C'", (done: DoneFn) => {
        const input = 'န္တြ';
        const expected = '\u1081\u108F\u1072';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    // #
    // ...............
    it("should work with '\u100D\u1039\u100D'", (done: DoneFn) => {
        const input = 'ဍ္ဍ';
        const expected = '\u106E';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u100D\u1039\u100E'", (done: DoneFn) => {
        const input = 'ဍ္ဎ';
        const expected = '\u106F';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u100F\u1039\u100D'", (done: DoneFn) => {
        const input = 'ဏ္ဍ';
        const expected = '\u1091';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u100B\u1039\u100C'", (done: DoneFn) => {
        const input = 'ဋ္ဌ';
        const expected = '\u1092';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u100B\u1039\u100B'", (done: DoneFn) => {
        const input = 'ဋ္ဋ';
        const expected = '\u1097';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '([#ulc])\u1039#plx'", (done: DoneFn) => {
        const input = 'ထ္ထ';
        const expected = '\u1011\u1073';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '([#uc])\u1039#psx'", (done: DoneFn) => {
        const input = 'န္တ';
        const expected = '\u108F\u1072';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '([#uc])\u1039#psx' - \u106C", (done: DoneFn) => {
        const input = 'က္ဋ';
        const expected = '\u1000\u106C';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '([#uc])\u1039#psx' - \u106D", (done: DoneFn) => {
        const input = 'က္ဌ';
        const expected = '\u1000\u106D';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    // 'း' (zg: \u1038)
    // ------------------------------------------------------------------------------------------
    it("should work with '\u104E\u1004\u103A\u1038'", (done: DoneFn) => {
        const input = '၎င်း';
        const expected = '\u104E';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1044\u1004\u103A\u1038'", (done: DoneFn) => {
        const input = '၄င်း';
        const expected = '\u104E';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1040\u1004\u103A\u1038'", (done: DoneFn) => {
        const input = '၀င်း';
        const expected = '\u101D\u1004\u1039\u1038';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    // '.' (zg: \u1095)
    // ------------------------------------------------------------------------------------------

    // '.' (zg: \u1094)
    // ------------------------------------------------------------------------------------------
    // 'ေ' + 'ု'
    // ...............
    it("should work with '([#u2e30])\u1031([\u102D\u102E])\u102F\u1037'", (done: DoneFn) => {
        const input = 'ကေို့';
        const expected = '\u1031\u1000\u102D\u102F\u1094';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '([#u2e30])\u1031\u102F([\u1032\u1036])\u1037'", (done: DoneFn) => {
        const input = 'နေုဲ့';
        const expected = '\u1031\u108F\u102F\u1032\u1094';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '([#u2e30])\u1031\u102F\u1037\u103A'", (done: DoneFn) => {
        const input = 'နေု့်';
        const expected = '\u1031\u108F\u1039\u102F\u1094';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '([#u2e30])\u103A\u1031\u102F\u1037'", (done: DoneFn) => {
        const input = 'န်ေု့';
        const expected = '\u1031\u108F\u1039\u102F\u1094';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '([#u2e30])\u1031\u102F\u1037'", (done: DoneFn) => {
        const input = 'နေု့';
        const expected = '\u1031\u108F\u102F\u1094';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    // 'ေ' + 'ှ'
    // ...............
    it("should work with '([#u2e30])\u103E\u1031([\u102D\u102E\u1032\u1036])\u1037'", (done: DoneFn) => {
        const input = 'ကှေိ့';
        const expected = '\u1031\u1000\u103D\u102D\u1094';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '([#u2e30])\u103E\u1031\u1037\u103A'", (done: DoneFn) => {
        const input = 'နှေ့်';
        const expected = '\u1031\u108F\u103D\u1039\u1094';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '([#u2e30])\u103A\u103E\u1031\u1037'", (done: DoneFn) => {
        const input = 'န်ှေ့';
        const expected = '\u1031\u108F\u103D\u1039\u1094';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '([#u2e30])\u103E\u103A\u1031\u1037'", (done: DoneFn) => {
        const input = 'နှ်ေ့';
        const expected = '\u1031\u108F\u103D\u1039\u1094';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '([#u2e30])\u103E\u1031\u1037'", (done: DoneFn) => {
        const input = 'နှေ့';
        const expected = '\u1031\u108F\u103D\u1094';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    // 'ု'
    // ...............
    it("should work with '([#u2e30])([\u102D\u102E])\u102F\u1037'", (done: DoneFn) => {
        const input = 'နို့';
        const expected = '\u108F\u102D\u102F\u1094';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '([#u2e30])\u102F([\u1032\u1036])\u1037'", (done: DoneFn) => {
        const input = 'နုဲ့';
        const expected = '\u108F\u102F\u1032\u1094';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '([#u2e30])\u102F\u1037\u103A'", (done: DoneFn) => {
        const input = 'နု့်';
        const expected = '\u108F\u1039\u102F\u1094';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '([#u2e30])\u103A\u102F\u1037'", (done: DoneFn) => {
        const input = 'န်ု့';
        const expected = '\u108F\u1039\u102F\u1094';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '([#u2e30])\u102F\u1037'", (done: DoneFn) => {
        const input = 'နု့';
        const expected = '\u108F\u102F\u1094';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    // 'ှ'
    // ...............
    it("should work with '([#u2e30])\u103E([\u102D\u102E\u1032\u1036])\u1037'", (done: DoneFn) => {
        const input = 'နှိ့';
        const expected = '\u108F\u103D\u102D\u1094';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '([#u2e30])\u103E\u1037\u103A'", (done: DoneFn) => {
        const input = 'နှ့်';
        const expected = '\u108F\u103D\u1039\u1094';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '([#u2e30])\u103A\u103E\u1037'", (done: DoneFn) => {
        const input = 'န်ှ့';
        const expected = '\u108F\u103D\u1039\u1094';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '([#u2e30])\u103E\u103A\u1037'", (done: DoneFn) => {
        const input = 'နှ့်';
        const expected = '\u108F\u103D\u1039\u1094';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '([#u2e30])\u103E\u1037'", (done: DoneFn) => {
        const input = 'နှ့';
        const expected = '\u108F\u103D\u1094';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    // 'န'
    // ...............
    it("should work with '\u1014\u1031\u1037\u103A'", (done: DoneFn) => {
        const input = 'နေ့်';
        const expected = '\u1031\u1014\u1039\u1094';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1014\u103A\u1031\u1037'", (done: DoneFn) => {
        const input = 'န်ေ့';
        const expected = '\u1031\u1014\u1039\u1094';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1014\u1031([\u102D\u102E\u1032\u1036])\u1037'", (done: DoneFn) => {
        const input = 'နေိ့';
        const expected = '\u1031\u1014\u102D\u1094';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1014\u1031\u1037'", (done: DoneFn) => {
        const input = 'နေ့';
        const expected = '\u1031\u1014\u1094';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1014\u103A\u1037'", (done: DoneFn) => {
        const input = 'န့်';
        const expected = '\u1014\u1039\u1094';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1014\u1037\u103A'", (done: DoneFn) => {
        const input = 'န့်';
        const expected = '\u1014\u1039\u1094';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1014([\u102D\u102E\u1032\u1036])\u1037'", (done: DoneFn) => {
        const input = 'နိ့';
        const expected = '\u1014\u102D\u1094';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1014\u1037'", (done: DoneFn) => {
        const input = 'န့';
        const expected = '\u1014\u1094';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    // '.' (zg: \u1037)
    // ------------------------------------------------------------------------------------------
    it("should work with '([#u37\u1014])\u103C\u1031\u1037\u103A'", (done: DoneFn) => {
        const input = 'နြေ့်';
        const expected = '\u1031\u107F\u108F\u1039\u1037';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '([#u37\u1014])\u103A\u103C\u1031\u1037'", (done: DoneFn) => {
        const input = 'န်ြေ့';
        const expected = '\u1031\u107F\u108F\u1039\u1037';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '([#u37\u1014])\u103C\u1031([\u102D\u102E\u1032\u1036])\u1037'", (done: DoneFn) => {
        const input = 'နြေိ့';
        const expected = '\u1031\u107F\u108F\u102D\u1037';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '([#u37\u1014])\u103C\u1031\u1037'", (done: DoneFn) => {
        const input = 'နြေ့';
        const expected = '\u1031\u103B\u108F\u1037';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    // 'ေ'
    // ...............
    it("should work with '[\u1009\u1025]\u103A\u1031\u1037'", (done: DoneFn) => {
        const input = 'ဉ်ေ့';
        const expected = '\u1031\u1025\u1039\u1037';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '[\u1009\u1025]\u1031\u1037\u103A'", (done: DoneFn) => {
        const input = 'ဉေ့်';
        const expected = '\u1031\u1025\u1039\u1037';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '([#u37])\u103A\u1031\u1037'", (done: DoneFn) => {
        const input = 'က်ေ့';
        const expected = '\u1031\u1000\u1039\u1037';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '([#u37])\u1031\u1037\u103A'", (done: DoneFn) => {
        const input = 'ကေ့်';
        const expected = '\u1031\u1000\u1039\u1037';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '[\u1009\u1025]\u1031([\u102D\u102E\u1032\u1036])\u1037'", (done: DoneFn) => {
        const input = 'ဉေိ့';
        const expected = '\u1031\u1025\u102D\u1037';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '([#u37])\u1031([\u102D\u102E\u1032\u1036])\u1037'", (done: DoneFn) => {
        const input = 'ကေိ့';
        const expected = '\u1031\u1000\u102D\u1037';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '[\u1009\u1025]\u1031\u1037'", (done: DoneFn) => {
        const input = 'ဉေ့';
        const expected = '\u1031\u1025\u1037';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '([#u37])\u1031\u1037'", (done: DoneFn) => {
        const input = 'ကေ့';
        const expected = '\u1031\u1000\u1037';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    // 'ြ'
    // ...............
    it("should work with '([#u37\u1014])\u103C([\u102D\u102E\u1032\u1036])\u1037'", (done: DoneFn) => {
        const input = 'နြိ့';
        const expected = '\u107F\u108F\u102D\u1037';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '([#u37\u1014])\u103C\u1037\u103A'", (done: DoneFn) => {
        const input = 'နြ့်';
        const expected = '\u107F\u108F\u1039\u1037';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '([#u37\u1014])\u103A\u103C\u1037'", (done: DoneFn) => {
        const input = 'န်ြ့';
        const expected = '\u107F\u108F\u1039\u1037';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '([#u37\u1014])\u103C\u1037'", (done: DoneFn) => {
        const input = 'နြ့';
        const expected = '\u103B\u108F\u1037';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    // #
    // ...............
    it("should work with '[\u1009\u1025]\u1037\u103A'", (done: DoneFn) => {
        const input = 'ဉ့်';
        const expected = '\u1025\u1039\u1037';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '[\u1009\u1025]\u103A\u1037'", (done: DoneFn) => {
        const input = 'ဉ့်';
        const expected = '\u1025\u1039\u1037';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '([#u37])\u1037\u103A'", (done: DoneFn) => {
        const input = 'က့်';
        const expected = '\u1000\u1039\u1037';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '([#u37])\u103A\u1037'", (done: DoneFn) => {
        const input = 'က့်';
        const expected = '\u1000\u1039\u1037';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '[\u1009\u1025]([\u102D\u102E\u1032\u1036])\u1037'", (done: DoneFn) => {
        const input = 'ဉိ့';
        const expected = '\u1025\u102D\u1037';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '([#u37])([\u102D\u102E\u1032\u1036])\u1037'", (done: DoneFn) => {
        const input = 'ကိ့';
        const expected = '\u1000\u102D\u1037';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '[\u1009\u1025]\u1037'", (done: DoneFn) => {
        const input = 'ဉ့';
        const expected = '\u1025\u1037';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '([#u37])\u1037'", (done: DoneFn) => {
        const input = 'က့';
        const expected = '\u1000\u1037';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    //  [ဲ  ံ] (zg: \u1032, \u1036) - [ု  ူ] + [ဲ  ံ] မှ [ဲ  ံ] + [ု  ူ] သို့
    // ------------------------------------------------------------------------------------------
    // 'ျ' + [ွှ  ွ] + 'ေ'
    // ...............
    it("should work with '([#uc])\u103B\u103D\u103E\u1031\u102F([\u1032\u1036])'", (done: DoneFn) => {
        const input = 'ကျွှေုဲ';
        const expected = '\u1031\u1000\u108A\u107D\u1032\u1033';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '([#uc])\u103B\u103D\u103E\u1031\u1030([\u1032\u1036])'", (done: DoneFn) => {
        const input = 'ကျွှေူဲ';
        const expected = '\u1031\u1000\u108A\u107D\u1032\u1034';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '([#uc])\u103B\u103D\u1031\u102F([\u1032\u1036])'", (done: DoneFn) => {
        const input = 'နျွေုဲ';
        const expected = '\u1031\u108F\u103C\u107D\u1032\u1033';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '([#uc])\u103B\u103D\u1031\u1030([\u1032\u1036])'", (done: DoneFn) => {
        const input = 'နျွေူဲ';
        const expected = '\u1031\u108F\u103C\u107D\u1032\u1034';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    // 'ျ' + 'ှ' + 'ေ'
    // ...............
    it("should work with '([#uc])\u103B\u103E\u1031\u102F([\u1032\u1036])'", (done: DoneFn) => {
        const input = 'နျှေုဲ';
        const expected = '\u1031\u108F\u103D\u103a\u1032\u1033';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '([#uc])\u103B\u103E\u1031\u1030([\u1032\u1036])'", (done: DoneFn) => {
        const input = 'နျှေူဲ';
        const expected = '\u1031\u108F\u103D\u103a\u1032\u1034';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    // 'ျ' + 'ေ'
    // ...............
    it("should work with '([#uc])\u103B\u1031\u102F([\u1032\u1036])'", (done: DoneFn) => {
        const input = 'နျေုဲ';
        const expected = '\u1031\u108F\u103a\u1032\u1033';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    // 'ျ' + [ွှ  ွ]
    // ...............
    it("should work with '([#uc])\u103B\u103D\u103E\u1030([\u1032\u1036])'", (done: DoneFn) => {
        const input = 'နျွှူံ';
        const expected = '\u108F\u108A\u107D\u1036\u1034';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '([#uc])\u103B\u103D\u1030([\u1032\u1036])'", (done: DoneFn) => {
        const input = 'နျွူဲ';
        const expected = '\u108F\u103C\u107D\u1032\u1034';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    // 'ျ' + 'ှ'
    // ...............
    it("should work with '([#uc])\u103B\u103E\u102F([\u1032\u1036])'", (done: DoneFn) => {
        const input = 'နျှုဲ';
        const expected = '\u108F\u103D\u103a\u1032\u1033';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    // 'ျ'
    // ...............
    it("should work with '([#uc])\u103B\u1030([\u1032\u1036])'", (done: DoneFn) => {
        const input = 'နျူဲ';
        const expected = '\u108F\u103a\u1032\u1034';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    // [ွှ  ွ] + 'ေ'
    // ...............
    it("should work with '([#uc])\u103D\u103E\u1031\u1030([\u1032\u1036])'", (done: DoneFn) => {
        const input = 'နွှေူဲ';
        const expected = '\u1031\u108F\u108A\u1032\u1034';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '([#uc])\u103D\u1031\u1030([\u1032\u1036])'", (done: DoneFn) => {
        const input = 'နွေူဲ';
        const expected = '\u1031\u108F\u103C\u1032\u1034';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    // [ွှ  ွ]
    // ...............
    it("should work with '([#uc])\u103D\u103E\u1030([\u1032\u1036])'", (done: DoneFn) => {
        const input = 'နွှူဲ';
        const expected = '\u108F\u108A\u1032\u1034';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '([#uc])\u103D\u1030([\u1032\u1036])'", (done: DoneFn) => {
        const input = 'နွူဲ';
        const expected = '\u108F\u103C\u1032\u1034';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    // [ု  ူ] (zg: \u1033, \u1034)
    // ------------------------------------------------------------------------------------------
    // 'ေ' + 'ှ' + [ိ  ီ]
    // ...............
    it("should work with '[\u1009\u1025]\u103E\u1031([\u102D\u102E])\u102F'", (done: DoneFn) => {
        const input = 'ဉှေို';
        const expected = '\u1031\u1025\u102D\u1087\u1033';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    // 'ေ' + 'ှ' + '်'
    // ...............
    it("should work with '[\u1009\u1025]\u103E\u103A\u1031\u1030'", (done: DoneFn) => {
        const input = 'ဉှ်ေူ';
        const expected = '\u1031\u1025\u1039\u1087\u1034';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '[\u1009\u1025]\u103A\u103E\u1031\u1030'", (done: DoneFn) => {
        const input = 'ဉ်ှေူ';
        const expected = '\u1031\u1025\u1039\u1087\u1034';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    // 'ေ' + [ိ  ီ]
    // ...............
    it("should work with '[\u1009\u1025]\u1031([\u102D\u102E])\u1030'", (done: DoneFn) => {
        const input = 'ဉေိူ';
        const expected = '\u1031\u1025\u102D\u1034';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    // 'ေ' + 'ှ'
    // ...............
    it("should work with '[\u1009\u1025]\u103E\u1031\u1030'", (done: DoneFn) => {
        const input = 'ဉှေူ';
        const expected = '\u1031\u1025\u1087\u1034';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    // 'ေ'
    // ...............
    it("should work with '[\u1009\u1025]\u1031\u1030'", (done: DoneFn) => {
        const input = 'ဉေူ';
        const expected = '\u1031\u1025\u1034';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    // 'ှ' + [ိ  ီ]
    // ...............
    it("should work with '[\u1009\u1025]\u103E([\u102D\u102E])\u1030'", (done: DoneFn) => {
        const input = 'ဉှိူ';
        const expected = '\u1025\u102D\u1087\u1034';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    // [ိ  ီ]
    // ...............
    it("should work with '[\u1009\u1025]([\u102D\u102E])\u1030'", (done: DoneFn) => {
        const input = 'ဉိူ';
        const expected = '\u1025\u102D\u1034';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    // '်'
    // ...............
    it("should work with '[\u1009\u1025]\u103A\u1030'", (done: DoneFn) => {
        const input = 'ဉ်ူ';
        const expected = '\u1025\u1039\u1034';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    // 'ှ'
    // ...............
    it("should work with '[\u1009\u1025]\u103E\u1030'", (done: DoneFn) => {
        const input = 'ဉှူ';
        const expected = '\u1025\u1087\u1034';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    // #
    // ...............
    it("should work with '[\u1009\u1025]\u1030'", (done: DoneFn) => {
        const input = 'ဉူ';
        const expected = '\u1025\u1034';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    // [ု  ူ] (zg: \u1088, \u1089)
    // ------------------------------------------------------------------------------------------
    // 'ေ' + 'ှ' + [ိ  ီ]
    // ...............
    it("should work with '([#u2e30])\u103E\u1031([\u102D\u102E])\u102F'", (done: DoneFn) => {
        const input = 'နှေို';
        const expected = '\u1031\u108F\u102D\u1088';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '([#u2e30])\u103E\u1031([\u102D\u102E])\u1030'", (done: DoneFn) => {
        const input = 'နှေိူ';
        const expected = '\u1031\u108F\u102D\u1089';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    // 'ေ' + 'ှ' + '်'
    // ...............
    it("should work with '([#u2e30])\u103E\u103A\u1031\u1030'", (done: DoneFn) => {
        const input = 'နှ်ေူ';
        const expected = '\u1031\u108F\u1039\u1089';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '([#u2e30])\u103A\u103E\u1031\u1030'", (done: DoneFn) => {
        const input = 'န်ှေူ';
        const expected = '\u1031\u108F\u1039\u1089';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    // 'ေ' + 'ှ'
    // ...............
    it("should work with '([#u2e30])\u103E\u1031\u1030'", (done: DoneFn) => {
        const input = 'နှေူ';
        const expected = '\u1031\u108F\u1089';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    // 'ှ' + [ိ  ီ]
    // ...............
    it("should work with '([#u2e30])\u103E([\u102D\u102E])\u1030'", (done: DoneFn) => {
        const input = 'နှိူ';
        const expected = '\u108F\u102D\u1089';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    // 'ှ' + '်'
    // ...............
    it("should work with '([#u2e30])\u103E\u103A\u1030'", (done: DoneFn) => {
        const input = 'နှ်ူ';
        const expected = '\u108F\u1039\u1089';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '([#u2e30])\u103A\u103E\u1030'", (done: DoneFn) => {
        const input = 'န်ှူ';
        const expected = '\u108F\u1039\u1089';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    // 'ှ'
    // ...............
    it("should work with '([#u2e30])\u103E\u1030'", (done: DoneFn) => {
        const input = 'နှူ';
        const expected = '\u108F\u1089';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    // [ု  ူ] (zg: \u102F, \u1030)
    // ------------------------------------------------------------------------------------------
    // 'ေ' + '်'
    // ...............
    it("should work with '([#u2e30])\u103A\u1031\u1030'", (done: DoneFn) => {
        const input = 'န်ေူ';
        const expected = '\u1031\u108F\u1039\u1030';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    // 'ေ' + [ိ  ီ]
    // ...............
    it("should work with '([#u2e30])\u1031([\u102D\u102E])\u1030'", (done: DoneFn) => {
        const input = 'နေိူ';
        const expected = '\u1031\u108F\u102D\u1030';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    // 'ေ'
    // ...............
    it("should work with '([#u2e30])\u1031\u1030'", (done: DoneFn) => {
        const input = 'နေူ';
        const expected = '\u1031\u108F\u1030';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    // '်'
    // ...............
    it("should work with '([#u2e30])\u103A\u1030'", (done: DoneFn) => {
        const input = 'န်ူ';
        const expected = '\u108F\u1039\u1030';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    // [ိ  ီ]
    // ...............
    it("should work with '([#u2e30])([\u102D\u102E])\u1030'", (done: DoneFn) => {
        const input = 'နိူ';
        const expected = '\u108F\u102D\u1030';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    // #
    // ...............
    it("should work with '([#u2e30])\u1030'", (done: DoneFn) => {
        const input = 'နူ';
        const expected = '\u108F\u1030';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    // '်' (zg: \u1039)
    // ------------------------------------------------------------------------------------------
    // 'ေ'
    // ...............
    it("should work with '([#uc])\u103C\u103D\u103E\u103A\u1031'", (done: DoneFn) => {
        const input = 'နြွှ်ေ';
        const expected = '\u1031\u1083\u108F\u108A\u1039';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '([#uc])\u103A\u103C\u103D\u103E\u1031'", (done: DoneFn) => {
        const input = 'န်ြွှေ';
        const expected = '\u1031\u1083\u108F\u108A\u1039';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '([#uc])\u103C\u103D\u103A\u1031'", (done: DoneFn) => {
        const input = 'နြွ်ေ';
        const expected = '\u1031\u1083\u108F\u103C\u1039';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '([#uc])\u103A\u103C\u103D\u1031'", (done: DoneFn) => {
        const input = 'န်ြွေ';
        const expected = '\u1031\u1083\u108F\u103C\u1039';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '([#uc])\u103A\u103C\u103E\u1031'", (done: DoneFn) => {
        const input = 'န်ြှေ';
        const expected = '\u1031\u107F\u108F\u1087\u1039';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '([#uc])\u103A\u103C\u1031'", (done: DoneFn) => {
        const input = 'န်ြေ';
        const expected = '\u1031\u107F\u108F\u1039';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '([#uc])\u103A\u103B\u103D\u103E\u1031'", (done: DoneFn) => {
        const input = 'န်ျွှေ';
        const expected = '\u1031\u108F\u108A\u107D\u1039';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '([#uc])\u103A\u103B\u103D\u1031'", (done: DoneFn) => {
        const input = 'န်ျွေ';
        const expected = '\u1031\u108F\u103C\u107D\u1039';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '([#uc])\u103A\u103B\u103E\u1031'", (done: DoneFn) => {
        const input = 'န်ျှေ';
        const expected = '\u1031\u108F\u103D\u103A\u1039';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '([#uc])\u103A\u103B\u1031'", (done: DoneFn) => {
        const input = 'န်ျေ';
        const expected = '\u1031\u108F\u103A\u1039';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '([#uc])\u103A\u103D\u103E\u1031'", (done: DoneFn) => {
        const input = 'န်ွှေ';
        const expected = '\u1031\u108F\u108A\u1039';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '([#uc])\u103A\u103D\u1031'", (done: DoneFn) => {
        const input = 'န်ွေ';
        const expected = '\u1031\u108F\u103C\u1039';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '([#uc])\u103E\u103A\u1031'", (done: DoneFn) => {
        const input = 'နှ်ေ';
        const expected = '\u1031\u108F\u103D\u1039';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1009\u103A\u1031'", (done: DoneFn) => {
        const input = 'ဉ်ေ';
        const expected = '\u1031\u1025\u1039';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '([#uc])\u103A\u1031'", (done: DoneFn) => {
        const input = 'က်ေ';
        const expected = '\u1031\u1000\u1039';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    // [ွှ  ွ  ှ]
    // ...............
    it("should work with '([#uc])\u103C\u103D\u103E\u103A'", (done: DoneFn) => {
        const input = 'နြွှ်';
        const expected = '\u1083\u108F\u108A\u1039';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '([#uc])\u103A\u103C\u103D'", (done: DoneFn) => {
        const input = 'န်ြွ';
        const expected = '\u1083\u108F\u103C\u1039';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '([#uc])\u103A\u103C\u103E'", (done: DoneFn) => {
        const input = 'န်ြှ';
        const expected = '\u107F\u108F\u1087\u1039';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '([#uc])\u103A\u103B\u103D\u103E'", (done: DoneFn) => {
        const input = 'န်ျွှ';
        const expected = '\u108F\u108A\u107D\u1039';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '([#uc])\u103A\u103B\u103D'", (done: DoneFn) => {
        const input = 'န်ျွ';
        const expected = '\u108F\u103C\u107D\u1039';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '([#uc])\u103A\u103B\u103E'", (done: DoneFn) => {
        const input = 'န်ျှ';
        const expected = '\u108F\u103D\u103A\u1039';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '([#uc])\u103A\u103D\u103E'", (done: DoneFn) => {
        const input = 'န်ွှ';
        const expected = '\u108F\u108A\u1039';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '([#uc])\u103A\u103D'", (done: DoneFn) => {
        const input = 'န်ွ';
        const expected = '\u108F\u103C\u1039';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '([#uc])\u103E\u103A'", (done: DoneFn) => {
        const input = 'နှ်';
        const expected = '\u108F\u103D\u1039';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    // 'ြ'
    // ...............
    it("should work with '([#uc])\u103A\u103C'", (done: DoneFn) => {
        const input = 'န်ြ';
        const expected = '\u107F\u108F\u1039';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    // 'ျ'
    // ...............
    it("should work with '([#uc])\u103B\u103A'", (done: DoneFn) => {
        const input = 'နျ်';
        const expected = '\u108F\u103A\u1039';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '([#uc])\u103A\u103B'", (done: DoneFn) => {
        const input = 'န်ျ';
        const expected = '\u108F\u103A\u1039';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    // [ိ  ီ  ဲ  ံ] (zg: \u102D, \u102E, \u1032, \u1036)
    // ------------------------------------------------------------------------------------------
    it("should work with '([#uc])\u103C\u103D\u103E\u1031([\u102D\u102E\u1032])'", (done: DoneFn) => {
        const input = 'နြွှေိ';
        const expected = '\u1031\u1083\u108F\u108A\u102D';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '([#uc])\u103C\u103D\u1031([\u102D\u102E\u1032])'", (done: DoneFn) => {
        const input = 'နြွေိ';
        const expected = '\u1031\u1083\u108F\u103C\u102D';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    // 'ြ' + 'ှ' + 'ေ'
    // ...............
    it("should work with '([#uc])\u103C\u103E\u1031([\u102D\u102E\u1032])'", (done: DoneFn) => {
        const input = 'နြှေိ';
        const expected = '\u1031\u107F\u108F\u1087\u102D';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    // 'ြ' + 'ေ'
    // ...............
    it("should work with '([#uc])\u103C\u1031([\u102D\u102E\u1032])'", (done: DoneFn) => {
        const input = 'နြေိ';
        const expected = '\u1031\u107F\u108F\u102D';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    // 'ြ' + [ွှ  ွ]
    // ...............
    it("should work with '([#uc])\u103C\u103D\u103E([\u102D\u102E\u1032])'", (done: DoneFn) => {
        const input = 'နြွှိ';
        const expected = '\u1083\u108F\u108A\u102D';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    // 'ြ' + 'ှ'
    // ...............
    it("should work with '([#uc])\u103C\u103E([\u102D\u102E\u1032])'", (done: DoneFn) => {
        const input = 'နြှိ';
        const expected = '\u107F\u108F\u1087\u102D';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    //  ြ
    // ...............
    it("should work with '([#uc])\u103C([\u102D\u102E\u1032])'", (done: DoneFn) => {
        const input = 'နြိ';
        const expected = '\u107F\u108F\u102D';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    //  ေ
    // ------------------------------------------------------------------------------------------
    // 'ြ' + [ွှ  ွ]
    // ...............
    it("should work with '([#uc])\u103C\u103D\u103E\u1031'", (done: DoneFn) => {
        const input = 'နြွှေ';
        const expected = '\u1031\u1081\u108F\u108A';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '([#uc])\u103C\u103D\u1031'", (done: DoneFn) => {
        const input = 'နြွေ';
        const expected = '\u1031\u1081\u108F\u103C';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    // 'ြ' + 'ှ'
    // ...............
    it("should work with '([#uc])\u103C\u103E\u1031'", (done: DoneFn) => {
        const input = 'နြှေ';
        const expected = '\u1031\u103B\u108F\u1087';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    // 'ြ'
    // ...............
    it("should work with '([#uc])\u103C\u1031'", (done: DoneFn) => {
        const input = 'နြေ';
        const expected = '\u1031\u103B\u108F';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    // 'ျ' + [ွှ  ွ]
    // ...............
    it("should work with '([#uc])\u103B\u103D\u103E\u1031'", (done: DoneFn) => {
        const input = 'နျွှေ';
        const expected = '\u1031\u108F\u108A\u107D';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '([#uc])\u103B\u103D\u1031'", (done: DoneFn) => {
        const input = 'နျွေ';
        const expected = '\u1031\u108F\u103C\u107D';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    // 'ျ' + 'ှ'
    // ...............
    it("should work with '([#uc])\u103B\u103E\u1031'", (done: DoneFn) => {
        const input = 'နျှေ';
        const expected = '\u1031\u108F\u103D\u103A';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    // 'ျ'
    // ...............
    it("should work with '([#uc])\u103B\u1031'", (done: DoneFn) => {
        const input = 'နျေ';
        const expected = '\u1031\u108F\u103A';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    // [ွှ  ွ]
    // ...............
    it("should work with '([#uc])\u103D\u103E\u1031'", (done: DoneFn) => {
        const input = 'နွှေ';
        const expected = '\u1031\u108F\u108A';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '([#uc])\u103D\u1031'", (done: DoneFn) => {
        const input = 'နွေ';
        const expected = '\u1031\u108F\u103C';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    // 'ှ'
    // ...............
    it("should work with '([#uc])\u103E\u1031'", (done: DoneFn) => {
        const input = 'နှေ';
        const expected = '\u1031\u108F\u103D';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    // #
    // ...............
    it("should work with '([#uc])\u1031'", (done: DoneFn) => {
        const input = 'ကေ';
        const expected = '\u1031\u1000';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    // [ွှ  ွ  ှ]
    // ------------------------------------------------------------------------------------------
    // 'ြ'
    // ...............
    it("should work with '([#uc])\u103C\u103D\u103E'", (done: DoneFn) => {
        const input = 'နြွှ';
        const expected = '\u1081\u108F\u108A';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '([#uc])\u103C\u103D'", (done: DoneFn) => {
        const input = 'နြွ';
        const expected = '\u1081\u108F\u103C';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '([#uc])\u103C\u103E'", (done: DoneFn) => {
        const input = 'နြှ';
        const expected = '\u103B\u108F\u1087';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    // 'ျ'
    // ...............
    it("should work with '([#uc])\u103B\u103D\u103E'", (done: DoneFn) => {
        const input = 'နျွှ';
        const expected = '\u108F\u108A\u107D';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '([#uc])\u103B\u103D'", (done: DoneFn) => {
        const input = 'နျွ';
        const expected = '\u108F\u103C\u107D';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '([#uc])\u103B\u103E'", (done: DoneFn) => {
        const input = 'နျှ';
        const expected = '\u108F\u103D\u103A';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    // #
    // ...............
    it("should work with '([#uc])\u103D\u103E'", (done: DoneFn) => {
        const input = 'နွှ';
        const expected = '\u108F\u108A';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '([#uc])\u103D'", (done: DoneFn) => {
        const input = 'နွ';
        const expected = '\u108F\u103C';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '([#uc])\u103E'", (done: DoneFn) => {
        const input = 'နှ';
        const expected = '\u108F\u103D';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    // 'ြ'
    // ------------------------------------------------------------------------------------------
    it("should work with '([#uc])\u103C'", (done: DoneFn) => {
        const input = 'နြ';
        const expected = '\u103B\u108F';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '([#uc])\u103B\u103C'", (done: DoneFn) => {
        const input = 'နျြ';
        const expected = '\u1081\u108F\u103A';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    // 'ျ'
    // ------------------------------------------------------------------------------------------
    it("should work with '([#uc])\u103B'", (done: DoneFn) => {
        const input = 'နျ';
        const expected = '\u108F\u103A';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    // 'ဦ'
    // ------------------------------------------------------------------------------------------
    it("should work with '\u1025\u102E'", (done: DoneFn) => {
        const input = 'ဦ';
        const expected = '\u1026';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    // Others
    // ------------------------------------------------------------------------------------------
    it("should work with '\u102D\u1036'", (done: DoneFn) => {
        const input = 'ိံ';
        const expected = '\u108E';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1039\u1010\u103D'", (done: DoneFn) => {
        const input = '္တွ';
        const expected = '\u1096';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1039#psx'", (done: DoneFn) => {
        const input = '္က';
        const expected = '\u1060';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u102B\u103A'", (done: DoneFn) => {
        const input = 'ခါ်';
        const expected = '\u1001\u105A';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u102B\u103A' - with \u1031", (done: DoneFn) => {
        const input = 'ခေါ်';
        const expected = '\u1031\u1001\u105A';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u103D\u103E'", (done: DoneFn) => {
        const input = 'ွှ';
        const expected = '\u108A';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u103B'", (done: DoneFn) => {
        const input = 'ျ';
        const expected = '\u103A';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u103C'", (done: DoneFn) => {
        const input = 'ြ';
        const expected = '\u103B';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u103D'", (done: DoneFn) => {
        const input = 'ွ';
        const expected = '\u103C';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u103E'", (done: DoneFn) => {
        const input = 'ှ';
        const expected = '\u103D';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u102F'", (done: DoneFn) => {
        const input = 'ု';
        const expected = '\u1033';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1030'", (done: DoneFn) => {
        const input = 'ူ';
        const expected = '\u1034';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1037\u103A'", (done: DoneFn) => {
        const input = '့်';
        const expected = '\u1039\u1095';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u103A'", (done: DoneFn) => {
        const input = '်';
        const expected = '\u1039';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });

    it("should work with '\u1037'", (done: DoneFn) => {
        const input = '့';
        const expected = '\u1095';

        translitService.translit(input, 'uni2zg', uni2zgRules)
            .subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(result));
                done();
            });
    });
});
