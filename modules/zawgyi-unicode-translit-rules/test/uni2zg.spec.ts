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
    //

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

    // it("should work with 'င်' + U+1039 + '#uc' + 'ြ' + 'ွှ' + 'ေ' + '#kx'", (done: DoneFn) => {
    //     const input = '\u1004\u103A\u1039\u1014\u103C\u103D\u103E\u1031\u102D';
    //     const expected = '\u1031\u1083\u108F\u108A\u108B';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with 'င်' + U+1039 + '#uc' + 'ြ' + 'ွ' + 'ေ' + '#kx'", (done: DoneFn) => {
    //     const input = '\u1004\u103A\u1039\u1014\u103C\u103D\u1031\u102D';
    //     const expected = '\u1031\u1083\u108F\u103C\u108B';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with 'င်' + U+1039 + '#uc' + 'ြ' + 'ှ' + 'ေ' + '#kx'", (done: DoneFn) => {
    //     const input = '\u1004\u103A\u1039\u1014\u103C\u103E\u1031\u102D';
    //     const expected = '\u1031\u107F\u108F\u103D\u108B';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with 'င်' + U+1039 + '#uc' + 'ြ' + 'ေ' + '#kx'", (done: DoneFn) => {
    //     const input = '\u1004\u103A\u1039\u1014\u103C\u1031\u102D';
    //     const expected = '\u1031\u107F\u108F\u108B';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with 'င်' + U+1039 + '#uc' + 'ြ' + 'ွှ' + '#kx'", (done: DoneFn) => {
    //     const input = '\u1004\u103A\u1039\u1014\u103C\u103D\u103E\u102D';
    //     const expected = '\u1083\u108F\u108A\u108B';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with 'င်' + U+1039 + '#uc' + 'ြ' + 'ွ' + '#kx'", (done: DoneFn) => {
    //     const input = '\u1004\u103A\u1039\u1014\u103C\u103D\u102D';
    //     const expected = '\u1083\u108F\u103C\u108B';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with 'င်' + U+1039 + '#uc' + 'ြ' + 'ှ' + '#kx'", (done: DoneFn) => {
    //     const input = '\u1004\u103A\u1039\u1014\u103C\u103E\u102D';
    //     const expected = '\u107F\u108F\u103D\u108B';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with 'င်' + U+1039 + '#uc' + 'ြ' + '#kx'", (done: DoneFn) => {
    //     const input = '\u1004\u103A\u1039\u1014\u103C\u102D';
    //     const expected = '\u107F\u108F\u108B';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with 'င်' + U+1039 + '#uc' + 'ျ' + 'ွှ' + 'ေ' + '#kx'", (done: DoneFn) => {
    //     const input = '\u1004\u103A\u1039\u1014\u103B\u103D\u103E\u1031\u102D';
    //     const expected = '\u1031\u108F\u108A\u107D\u108B';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with 'င်' + U+1039 + '#uc' + 'ျ' + 'ွ' + 'ေ' + '#kx'", (done: DoneFn) => {
    //     const input = '\u1004\u103A\u1039\u1014\u103B\u103D\u1031\u102D';
    //     const expected = '\u1031\u108F\u103C\u107D\u108B';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with 'င်' + U+1039 + '#uc' + 'ျ' + 'ှ' + 'ေ' + '#kx'", (done: DoneFn) => {
    //     const input = '\u1004\u103A\u1039\u1014\u103B\u103E\u1031\u102D';
    //     const expected = '\u1031\u108F\u103D\u103A\u108B';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with 'င်' + U+1039 + '#uc' + 'ျ' + 'ေ' + '#kx'", (done: DoneFn) => {
    //     const input = '\u1004\u103A\u1039\u1014\u103B\u1031\u102D';
    //     const expected = '\u1031\u108F\u103A\u108B';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with 'င်' + U+1039 + '#uc' + 'ျ' + 'ွှ' + '#kx'", (done: DoneFn) => {
    //     const input = '\u1004\u103A\u1039\u1014\u103B\u103D\u103E\u102D';
    //     const expected = '\u108F\u108A\u107D\u108B';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with 'င်' + U+1039 + '#uc' + 'ျ' + 'ွ' + '#kx'", (done: DoneFn) => {
    //     const input = '\u1004\u103A\u1039\u1014\u103B\u103D\u102D';
    //     const expected = '\u108F\u103C\u107D\u108B';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with 'င်' + U+1039 + '#uc' + 'ျ' + 'ှ' + '#kx'", (done: DoneFn) => {
    //     const input = '\u1004\u103A\u1039\u1014\u103B\u103E\u102D';
    //     const expected = '\u108F\u103D\u103A\u108B';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with 'င်' + U+1039 + '#uc' + 'ျ' + '#kx'", (done: DoneFn) => {
    //     const input = '\u1004\u103A\u1039\u1014\u103B\u102D';
    //     const expected = '\u108F\u103A\u108B';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with 'င်' + U+1039 + '#uc' + 'ွှ' + 'ေ' + '#kx'", (done: DoneFn) => {
    //     const input = '\u1004\u103A\u1039\u1014\u103D\u103E\u1031\u102D';
    //     const expected = '\u1031\u108F\u108A\u108B';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with 'င်' + U+1039 + '#uc' + 'ွ' + 'ေ' + '#kx'", (done: DoneFn) => {
    //     const input = '\u1004\u103A\u1039\u1014\u103D\u1031\u102D';
    //     const expected = '\u1031\u108F\u103C\u108B';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with 'င်' + U+1039 + '#uc' + 'ှ' + 'ေ' + '#kx'", (done: DoneFn) => {
    //     const input = '\u1004\u103A\u1039\u1014\u103E\u1031\u102D';
    //     const expected = '\u1031\u108F\u103D\u108B';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with 'င်' + U+1039 + '#uc' + 'ေ' + '#kx'", (done: DoneFn) => {
    //     const input = '\u1004\u103A\u1039\u103F\u1031\u102D';
    //     const expected = '\u1031\u1086\u108B';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with 'င်' + U+1039 + '#uc' + 'ွှ' + '#kx'", (done: DoneFn) => {
    //     const input = '\u1004\u103A\u1039\u1014\u103D\u103E\u102D';
    //     const expected = '\u108F\u108A\u108B';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with 'င်' + U+1039 + '#uc' + 'ွ' + '#kx'", (done: DoneFn) => {
    //     const input = '\u1004\u103A\u1039\u1014\u103D\u102D';
    //     const expected = '\u108F\u103C\u108B';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with 'င်' + U+1039 + '#uc' + 'ှ' + '#kx'", (done: DoneFn) => {
    //     const input = '\u1004\u103A\u1039\u1014\u103E\u102D';
    //     const expected = '\u108F\u103D\u108B';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with 'င်' + U+1039 + '#uc' + '#kx'", (done: DoneFn) => {
    //     const input = '\u1004\u103A\u1039\u103F\u102D';
    //     const expected = '\u1086\u108B';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // \u1064
    // ------------------------------------------------------------------------------------------
    // it("should work with 'င်' + U+1039 + '#uc' + U+1039 + '#uc' + 'ြ' + 'ေ'", (done: DoneFn) => {
    //     const input = '\u1004\u103A\u1039\u1014\u1039\u1010\u103C\u1031';
    //     const expected = '\u1031\u1083\u108F\u1072\u1064';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with 'င်' + U+1039 + '#uc' + U+1039 + '#uc' + 'ျ' + 'ေ'", (done: DoneFn) => {
    //     const input = '\u1004\u103A\u1039\u1014\u1039\u1010\u103B\u1031';
    //     const expected = '\u1031\u108F\u1072\u107D\u1064';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with 'င်' + U+1039 + '#uc' + U+1039 + '#uc' + 'ြ'", (done: DoneFn) => {
    //     const input = '\u1004\u103A\u1039\u1014\u1039\u1010\u103C';
    //     const expected = '\u1083\u108F\u1072\u1064';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with 'င်' + U+1039 + '#uc' + U+1039 + '#uc' + 'ျ'", (done: DoneFn) => {
    //     const input = '\u1004\u103A\u1039\u1014\u1039\u1010\u103B';
    //     const expected = '\u108F\u1072\u107D\u1064';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with 'င်' + U+1039 + '#uc' + U+1039 + '#uc'", (done: DoneFn) => {
    //     const input = '\u1004\u103A\u1039\u1014\u1039\u1010';
    //     const expected = '\u108F\u1072\u1064';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with 'င်' + U+1039 + '#uc' + 'ြ' + 'ွှ' + 'ေ'", (done: DoneFn) => {
    //     const input = '\u1004\u103A\u1039\u1014\u103C\u103D\u103E\u1031';
    //     const expected = '\u1031\u1083\u108F\u108A\u1064';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with 'င်' + U+1039 + '#uc' + 'ြ' + 'ွ' + 'ေ'", (done: DoneFn) => {
    //     const input = '\u1004\u103A\u1039\u1014\u103C\u103D\u1031';
    //     const expected = '\u1031\u1083\u108F\u103C\u1064';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with 'င်' + U+1039 + '#uc' + 'ြ' + 'ှ' + 'ေ'", (done: DoneFn) => {
    //     const input = '\u1004\u103A\u1039\u1014\u103C\u103E\u1031';
    //     const expected = '\u1031\u107F\u108F\u103D\u1064';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with 'င်' + U+1039 + '#uc' + 'ြ' + 'ေ'", (done: DoneFn) => {
    //     const input = '\u1004\u103A\u1039\u1014\u103C\u1031';
    //     const expected = '\u1031\u107F\u108F\u1064';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with 'င်' + U+1039 + '#uc' + 'ြ' + 'ွှ'", (done: DoneFn) => {
    //     const input = '\u1004\u103A\u1039\u1014\u103C\u103D\u103E';
    //     const expected = '\u1083\u108F\u108A\u1064';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with 'င်' + U+1039 + '#uc' + 'ြ' + 'ွ'", (done: DoneFn) => {
    //     const input = '\u1004\u103A\u1039\u1014\u103C\u103D';
    //     const expected = '\u1083\u108F\u103C\u1064';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with 'င်' + U+1039 + '#uc' + 'ြ' + 'ှ'", (done: DoneFn) => {
    //     const input = '\u1004\u103A\u1039\u1014\u103C\u103E';
    //     const expected = '\u107F\u108F\u103D\u1064';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with 'င်' + U+1039 + '#uc' + 'ြ'", (done: DoneFn) => {
    //     const input = '\u1004\u103A\u1039\u1014\u103C';
    //     const expected = '\u107F\u108F\u1064';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with 'င်' + U+1039 + '#uc' + 'ျ' + 'ွှ' + 'ေ'", (done: DoneFn) => {
    //     const input = '\u1004\u103A\u1039\u1014\u103B\u103D\u103E\u1031';
    //     const expected = '\u1031\u108F\u108A\u107D\u1064';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with 'င်' + U+1039 + '#uc' + 'ျ' + 'ွ' + 'ေ'", (done: DoneFn) => {
    //     const input = '\u1004\u103A\u1039\u1014\u103B\u103D\u1031';
    //     const expected = '\u1031\u108F\u103C\u107D\u1064';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with 'င်' + U+1039 + '#uc' + 'ျ' + 'ှ' + 'ေ'", (done: DoneFn) => {
    //     const input = '\u1004\u103A\u1039\u1014\u103B\u103E\u1031';
    //     const expected = '\u1031\u108F\u103D\u103A\u1064';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with 'င်' + U+1039 + '#uc' + 'ျ' + 'ေ'", (done: DoneFn) => {
    //     const input = '\u1004\u103A\u1039\u1014\u103B\u1031';
    //     const expected = '\u1031\u108F\u103A\u1064';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with 'င်' + U+1039 + '#uc' + 'ျ' + 'ွှ'", (done: DoneFn) => {
    //     const input = '\u1004\u103A\u1039\u1014\u103B\u103D\u103E';
    //     const expected = '\u108F\u108A\u107D\u1064';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with 'င်' + U+1039 + '#uc' + 'ျ' + 'ွ'", (done: DoneFn) => {
    //     const input = '\u1004\u103A\u1039\u1014\u103B\u103D';
    //     const expected = '\u108F\u103C\u107D\u1064';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with 'င်' + U+1039 + '#uc' + 'ျ' + 'ှ'", (done: DoneFn) => {
    //     const input = '\u1004\u103A\u1039\u1014\u103B\u103E';
    //     const expected = '\u108F\u103D\u103A\u1064';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with 'င်' + U+1039 + '#uc' + 'ျ'", (done: DoneFn) => {
    //     const input = '\u1004\u103A\u1039\u1014\u103B';
    //     const expected = '\u108F\u103A\u1064';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with 'င်' + U+1039 + '#uc' + 'ွှ' + 'ေ'", (done: DoneFn) => {
    //     const input = '\u1004\u103A\u1039\u1014\u103D\u103E\u1031';
    //     const expected = '\u1031\u108F\u108A\u1064';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with 'င်' + U+1039 + '#uc' + 'ွ' + 'ေ'", (done: DoneFn) => {
    //     const input = '\u1004\u103A\u1039\u1014\u103D\u1031';
    //     const expected = '\u1031\u108F\u103C\u1064';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with 'င်' + U+1039 + '#uc' + 'ှ' + 'ေ'", (done: DoneFn) => {
    //     const input = '\u1004\u103A\u1039\u1014\u103E\u1031';
    //     const expected = '\u1031\u108F\u103D\u1064';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with 'င်' + U+1039 + '#uc' + 'ေ'", (done: DoneFn) => {
    //     const input = '\u1004\u103A\u1039\u103F\u1031';
    //     const expected = '\u1031\u1086\u1064';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with 'င်' + U+1039 + '#uc' + 'ွှ'", (done: DoneFn) => {
    //     const input = '\u1004\u103A\u1039\u1014\u103D\u103E';
    //     const expected = '\u108F\u108A\u1064';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with 'င်' + U+1039 + '#uc' + 'ွ'", (done: DoneFn) => {
    //     const input = '\u1004\u103A\u1039\u1014\u103D';
    //     const expected = '\u108F\u103C\u1064';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with 'င်' + U+1039 + '#uc' + 'ှ'", (done: DoneFn) => {
    //     const input = '\u1004\u103A\u1039\u1014\u103E';
    //     const expected = '\u108F\u103D\u1064';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with 'င်' + U+1039 + '#uc'", (done: DoneFn) => {
    //     const input = '\u1004\u103A\u1039\u103F';
    //     const expected = '\u1086\u1064';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // // \u108E
    // // ------------------------------------------------------------------------------------------
    // it("should work with '#zc' + U+1039 + '#zc' + 'ြ' + 'ေ' + 'ိံ'", (done: DoneFn) => {
    //     const input = '\u1014\u1039\u1010\u103C\u1031\u102D\u1036';
    //     const expected = '\u1031\u1083\u108F\u1072\u108E';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with '#zc' + U+1039 + '#zc' + 'ျ' + 'ေ' + 'ိံ'", (done: DoneFn) => {
    //     const input = '\u103F\u1039\u1010\u103B\u1031\u102D\u1036';
    //     const expected = '\u1031\u1086\u1071\u107D\u108E';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with '#zc' + U+1039 + '#zc' + 'ြ' + 'ိံ'", (done: DoneFn) => {
    //     const input = '\u101B\u1039\u1010\u103C\u102D\u1036';
    //     const expected = '\u1083\u1090\u1072\u108E';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with '#zc' + U+1039 + '#zc' + 'ျ' + 'ိံ'", (done: DoneFn) => {
    //     const input = '\u101B\u1039\u1011\u103B\u102D\u1036';
    //     const expected = '\u1090\u1074\u107D\u108E';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with '#zc' + U+1039 + '#zc' + 'ိံ'", (done: DoneFn) => {
    //     const input = '\u1014\u1039\u1011\u102D\u1036';
    //     const expected = '\u108F\u1074\u108E';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with #zc' + 'ြ' + 'ွှ' + 'ေ' + 'ိံ'", (done: DoneFn) => {
    //     const input = '\u1014\u103C\u103D\u103E\u1031\u102D\u1036';
    //     const expected = '\u1031\u1083\u108F\u108A\u108E';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with '#zc' + 'ြ' + 'ွ' + 'ေ' + 'ိံ'", (done: DoneFn) => {
    //     const input = '\u1014\u103C\u103D\u1031\u102D\u1036';
    //     const expected = '\u1031\u1083\u108F\u103C\u108E';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with '#zc' + 'ြ' + 'ှ' + 'ေ' + 'ိံ'", (done: DoneFn) => {
    //     const input = '\u1014\u103C\u103E\u1031\u102D\u1036';
    //     const expected = '\u1031\u107F\u108F\u103D\u108E';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with '#zc' + 'ြ' + 'ေ' + 'ိံ'", (done: DoneFn) => {
    //     const input = '\u1014\u103C\u1031\u102D\u1036';
    //     const expected = '\u1031\u107F\u108F\u108E';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with '#zc' + 'ြ' + 'ွှ' + 'ိံ'", (done: DoneFn) => {
    //     const input = '\u1014\u103C\u103D\u103E\u102D\u1036';
    //     const expected = '\u1083\u108F\u108A\u108E';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with '#zc' + 'ြ' + 'ွ' + 'ိံ'", (done: DoneFn) => {
    //     const input = '\u1014\u103C\u103D\u102D\u1036';
    //     const expected = '\u1083\u108F\u103C\u108E';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with '#zc' + 'ြ' + 'ှ' + 'ိံ'", (done: DoneFn) => {
    //     const input = '\u1014\u103C\u103E\u102D\u1036';
    //     const expected = '\u107F\u108F\u103D\u108E';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with '#zc' + 'ြ' + 'ိံ'", (done: DoneFn) => {
    //     const input = '\u1014\u103C\u102D\u1036';
    //     const expected = '\u107F\u108F\u108E';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with '#zc' + 'ျ' + 'ွှ' + 'ေ' + 'ိံ'", (done: DoneFn) => {
    //     const input = '\u1014\u103B\u103D\u103E\u1031\u102D\u1036';
    //     const expected = '\u1031\u108F\u108A\u107D\u108E';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with '#zc' + 'ျ' + 'ွ' + 'ေ' + 'ိံ'", (done: DoneFn) => {
    //     const input = '\u1014\u103B\u103D\u1031\u102D\u1036';
    //     const expected = '\u1031\u108F\u103C\u107D\u108E';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with '#zc' + 'ျ' + 'ှ' + 'ေ' + 'ိံ'", (done: DoneFn) => {
    //     const input = '\u1014\u103B\u103E\u1031\u102D\u1036';
    //     const expected = '\u1031\u108F\u103D\u103A\u108E';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with '#zc' + 'ျ' + 'ေ' + 'ိံ'", (done: DoneFn) => {
    //     const input = '\u1014\u103B\u1031\u102D\u1036';
    //     const expected = '\u1031\u108F\u103A\u108E';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with '#zc' + 'ျ' + 'ွှ' + 'ိံ'", (done: DoneFn) => {
    //     const input = '\u1014\u103B\u103D\u103E\u102D\u1036';
    //     const expected = '\u108F\u108A\u107D\u108E';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with '#zc' + 'ျ' + 'ွ' + 'ိံ'", (done: DoneFn) => {
    //     const input = '\u1014\u103B\u103D\u102D\u1036';
    //     const expected = '\u108F\u103C\u107D\u108E';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with '#zc' + 'ျ' + 'ှ' + 'ိံ'", (done: DoneFn) => {
    //     const input = '\u1014\u103B\u103E\u102D\u1036';
    //     const expected = '\u108F\u103D\u103A\u108E';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with '#zc' + 'ျ' + 'ိံ'", (done: DoneFn) => {
    //     const input = '\u1014\u103B\u102D\u1036';
    //     const expected = '\u108F\u103A\u108E';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with '#zc' + 'ွှ' + 'ေ' + 'ိံ'", (done: DoneFn) => {
    //     const input = '\u1014\u103D\u103E\u1031\u102D\u1036';
    //     const expected = '\u1031\u108F\u108A\u108E';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with '#zc' + 'ွ' + 'ေ' + 'ိံ'", (done: DoneFn) => {
    //     const input = '\u1014\u103D\u1031\u102D\u1036';
    //     const expected = '\u1031\u108F\u103C\u108E';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with '#zc' + 'ှ' + 'ေ' + 'ိံ'", (done: DoneFn) => {
    //     const input = '\u1014\u103E\u1031\u102D\u1036';
    //     const expected = '\u1031\u108F\u103D\u108E';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with '#zc' + 'ေ' + 'ိံ'", (done: DoneFn) => {
    //     const input = '\u1014\u1031\u102D\u1036';
    //     const expected = '\u1031\u1014\u108E';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with '#zc' + 'ွှ' + 'ိံ'", (done: DoneFn) => {
    //     const input = '\u1014\u103D\u103E\u102D\u1036';
    //     const expected = '\u108F\u108A\u108E';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with '#zc' + 'ွ' + 'ိံ'", (done: DoneFn) => {
    //     const input = '\u1014\u103D\u102D\u1036';
    //     const expected = '\u108F\u103C\u108E';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with '#zc' + 'ှ' + 'ိံ'", (done: DoneFn) => {
    //     const input = '\u1014\u103E\u102D\u1036';
    //     const expected = '\u108F\u103D\u108E';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with '#zc' + 'ိံ'", (done: DoneFn) => {
    //     const input = '\u1014\u102D\u1036';
    //     const expected = '\u1014\u108E';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // Stacked
    // ------------------------------------------------------------------------------------------
    // it("should work with 'ဍ' + U+1039 + 'ဍ' + 'ြ' + 'ေ'", (done: DoneFn) => {
    //     const input = '\u100D\u1039\u100D\u103C\u1031';
    //     const expected = '\u1031\u1081\u106E';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with 'ဍ' + U+1039 + 'ဍ' + 'ြ'", (done: DoneFn) => {
    //     const input = '\u100D\u1039\u100D\u103C';
    //     const expected = '\u1081\u106E';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with 'ဍ' + U+1039 + 'ဍ' + 'ေ'", (done: DoneFn) => {
    //     const input = '\u100D\u1039\u100D\u1031';
    //     const expected = '\u1031\u106E';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with 'ဍ' + U+1039 + 'ဍ'", (done: DoneFn) => {
    //     const input = '\u100D\u1039\u100D';
    //     const expected = '\u106E';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with 'ဍ' + U+1039 + 'ဎ' + 'ြ' + 'ေ'", (done: DoneFn) => {
    //     const input = '\u100D\u1039\u100E\u103C\u1031';
    //     const expected = '\u1031\u1081\u106F';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with 'ဍ' + U+1039 + 'ဎ' + 'ြ'", (done: DoneFn) => {
    //     const input = '\u100D\u1039\u100E\u103C';
    //     const expected = '\u1081\u106F';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with 'ဍ' + U+1039 + 'ဎ' + 'ေ'", (done: DoneFn) => {
    //     const input = '\u100D\u1039\u100E\u1031';
    //     const expected = '\u1031\u106F';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with 'ဍ' + U+1039 + 'ဎ'", (done: DoneFn) => {
    //     const input = '\u100D\u1039\u100E';
    //     const expected = '\u106F';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with 'ဏ' + U+1039 + 'ဍ' + 'ြ' + 'ေ'", (done: DoneFn) => {
    //     const input = '\u100F\u1039\u100D\u103C\u1031';
    //     const expected = '\u1031\u1081\u1091';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with 'ဏ' + U+1039 + 'ဍ' + 'ြ'", (done: DoneFn) => {
    //     const input = '\u100F\u1039\u100D\u103C';
    //     const expected = '\u1081\u1091';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with 'ဏ' + U+1039 + 'ဍ' + 'ေ'", (done: DoneFn) => {
    //     const input = '\u100F\u1039\u100D\u1031';
    //     const expected = '\u1031\u1091';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with 'ဏ' + U+1039 + 'ဍ'", (done: DoneFn) => {
    //     const input = '\u100F\u1039\u100D';
    //     const expected = '\u1091';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with 'ဋ' + U+1039 + 'ဌ' + 'ြ' + 'ေ'", (done: DoneFn) => {
    //     const input = '\u100B\u1039\u100C\u103C\u1031';
    //     const expected = '\u1031\u1081\u1092';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with 'ဋ' + U+1039 + 'ဌ' + 'ြ'", (done: DoneFn) => {
    //     const input = '\u100B\u1039\u100C\u103C';
    //     const expected = '\u1081\u1092';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with 'ဋ' + U+1039 + 'ဌ' + 'ေ'", (done: DoneFn) => {
    //     const input = '\u100B\u1039\u100C\u1031';
    //     const expected = '\u1031\u1092';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with 'ဋ' + U+1039 + 'ဌ'", (done: DoneFn) => {
    //     const input = '\u100B\u1039\u100C';
    //     const expected = '\u1092';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with 'ဋ' + U+1039 + 'ဋ' + 'ြ' + 'ေ'", (done: DoneFn) => {
    //     const input = '\u100B\u1039\u100B\u103C\u1031';
    //     const expected = '\u1031\u1081\u1097';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with 'ဋ' + U+1039 + 'ဋ' + 'ြ'", (done: DoneFn) => {
    //     const input = '\u100B\u1039\u100B\u103C';
    //     const expected = '\u1081\u1097';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with 'ဋ' + U+1039 + 'ဋ' + 'ေ'", (done: DoneFn) => {
    //     const input = '\u100B\u1039\u100B\u1031';
    //     const expected = '\u1031\u1097';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with 'ဋ' + U+1039 + 'ဋ'", (done: DoneFn) => {
    //     const input = '\u100B\u1039\u100B';
    //     const expected = '\u1097';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with '[#zlc]' + U+1039 + '#plx' + 'ြ' + 'ေ'", (done: DoneFn) => {
    //     const input = '\u1011\u1039\u1011\u103C\u1031';
    //     const expected = '\u1031\u1082\u1011\u1073';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with '[#zlc]' + U+1039 + '#plx' + 'ြ'", (done: DoneFn) => {
    //     const input = '\u1011\u1039\u1011\u103C';
    //     const expected = '\u1082\u1011\u1073';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with '[#zlc]' + U+1039 + '#plx' + 'ေ'", (done: DoneFn) => {
    //     const input = '\u1011\u1039\u1011\u1031';
    //     const expected = '\u1031\u1011\u1073';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with '[#zlc]' + U+1039 + '#plx'", (done: DoneFn) => {
    //     const input = '\u1011\u1039\u1011';
    //     const expected = '\u1011\u1073';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with '[#zc]' + U+1039 + '#psx' + 'ြ' + 'ေ'", (done: DoneFn) => {
    //     const input = '\u1014\u1039\u1010\u103C\u1031';
    //     const expected = '\u1031\u1081\u108F\u1072';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with '[#zc]' + U+1039 + '#psx' + 'ြ'", (done: DoneFn) => {
    //     const input = '\u1014\u1039\u1010\u103C';
    //     const expected = '\u1081\u108F\u1072';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with '[#zc]' + U+1039 + '#psx' + 'ေ'", (done: DoneFn) => {
    //     const input = '\u1014\u1039\u1010\u1031';
    //     const expected = '\u1031\u108F\u1072';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });

    // it("should work with '[#zc]' + U+1039 + '#psx'", (done: DoneFn) => {
    //     const input = '\u1014\u1039\u1010';
    //     const expected = '\u108F\u1072';

    //     translitService.translit(input, 'uni2zg', uni2zgRules)
    //         .subscribe(result => {
    //             expect(result.outputText).toBe(expected, toFailOutput(result));
    //             done();
    //         });
    // });
});
