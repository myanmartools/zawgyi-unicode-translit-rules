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
    str += `output: ${formatCodePoints(result.outputText)}\n\n`;

    if (result.traces) {
        for (const trace of result.traces) {
            str += `from: ${formatCodePoints(trace.from)}\n`;
            str += `to: ${formatCodePoints(trace.to)}\n`;
            str += `input: ${formatCodePoints(trace.inputString)}\n`;
            // str += `matched: ${formatCodePoints(trace.matchedString)}\n`;
            str += `replaced: ${formatCodePoints(trace.replacedString)}\n`;

            if (trace.postRuleTraces && trace.postRuleTraces.length > 0) {
                str += 'post rules:\n';
                for (const subTrace of trace.postRuleTraces) {
                    str += `  from: ${formatCodePoints(subTrace.from)}\n`;
                    str += `  to: ${formatCodePoints(subTrace.to)}\n`;
                    str += `  input: ${formatCodePoints(subTrace.inputString)}\n`;
                    // str += `  matched: ${formatCodePoints(subTrace.matchedString)}\n`;
                    str += `  replaced: ${formatCodePoints(subTrace.replacedString)}\n`;
                }
            }
            str += '\n';
        }
    }

    return str;
}

describe('zg2uni-rules-individual', () => {
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

    // Overlapped characters normalization
    // ------------------------------------------------------------------------------------------
    it(String.raw`overlapped characters normalization`, (done: DoneFn) => {
        const input = '\u1000\u102D\u102D\u102D\u1036\u1036';
        const expected = '\u1000\u102D\u1036';

        translitService.translit(input, 'rule1', zg2uniRules, {
            convertSingleForm: false,
            fixSpaceBetweenAccentedChars: false,
            sortOrder: false,
            convertZg2Uni: false
        }).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    // Single form normalization
    // ------------------------------------------------------------------------------------------
    it(String.raw`single form normalization`, (done: DoneFn) => {
        const input = '\u107F\u108F\u107D\u103C\u108A\u102D\u102E\u1033\u1034';
        const expected = '\u103B\u1014\u103A\u103C\u103D\u102E\u1030';

        translitService.translit(input, 'rule1', zg2uniRules, {
            fixSpaceBetweenAccentedChars: false,
            sortOrder: false,
            convertZg2Uni: false
        }).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    // Space between accented characters normalization phase
    // ------------------------------------------------------------------------------------------
    it(String.raw`space between accented characters normalization phase - (with \u1031\u103B)`, (done: DoneFn) => {
        const input = '\u1031  \u103B \u1000';
        const expected = '\u1031\u103B\u1000';

        translitService.translit(input, 'rule1', zg2uniRules, {
            sortOrder: false,
            convertZg2Uni: false
        }).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`space between accented characters normalization phase - (with \u1031)`, (done: DoneFn) => {
        const input = '\u1031  \u1000';
        const expected = '\u1031\u1000';

        translitService.translit(input, 'rule1', zg2uniRules, {
            sortOrder: false,
            convertZg2Uni: false
        }).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`space between accented characters normalization phase - (with \u103B)`, (done: DoneFn) => {
        const input = '\u103B  \u1000';
        const expected = '\u103B\u1000';

        translitService.translit(input, 'rule1', zg2uniRules, {
            sortOrder: false,
            convertZg2Uni: false
        }).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`space between accented characters normalization phase`, (done: DoneFn) => {
        const input = '\u1000   \u102D  \u1037';
        const expected = '\u1000\u102D\u1037';

        translitService.translit(input, 'rule1', zg2uniRules, {
            sortOrder: false,
            convertZg2Uni: false
        }).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    // Order normalization phase
    // ------------------------------------------------------------------------------------------
    it(String.raw`order normalization phase`, (done: DoneFn) => {
        const input = '\u1000\u1036\u102E\u1060\u102F\u103A';
        const expected = '\u1000\u1060\u103A\u102E\u102F\u1036';

        translitService.translit(input, 'rule1', zg2uniRules, {
            convertZg2Uni: false
        }).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    // \u108B-\u108D, \u1064
    // ------------------------------------------------------------------------------------------
    // 'ေ' + 'ြ'
    // ...............
    it(String.raw`\u1031\u103B([#zc])\u1096#kx`, (done: DoneFn) => {
        const input = '\u1031\u1083\u108F\u1096\u108B';
        const expected = 'င်္န္တြွေိ';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`\u1031\u103B([#zc])\u1096#kx - (\u1064)`, (done: DoneFn) => {
        const input = '\u1031\u1083\u108F\u1096\u1064';
        const expected = 'င်္န္တြွေ';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`\u1031\u103B([#zc])([#zplc])#kx`, (done: DoneFn) => {
        const input = '\u1031\u1084\u1086\u1071\u108D';
        const expected = 'င်္ဿ္တြေံ';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`\u1031\u103B([#zc])([#zplc])#kx - (\u1064)`, (done: DoneFn) => {
        const input = '\u1031\u1084\u1086\u1071\u1064';
        const expected = 'င်္ဿ္တြေ';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`\u1031\u103B([#zpc])#kx`, (done: DoneFn) => {
        const input = '\u1031\u1084\u106F\u108D';
        const expected = 'င်္ဍ္ဎြေံ';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`\u1031\u103B([#zpc])#kx - (\u1064)`, (done: DoneFn) => {
        const input = '\u1031\u1084\u106F\u1064';
        const expected = 'င်္ဍ္ဎြေ';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`\u1031\u103B([#zc])\u103C\u103D#kx`, (done: DoneFn) => {
        const input = '\u1031\u1083\u108F\u108A\u108B';
        const expected = 'င်္နြွှေိ';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`\u1031\u103B([#zc])\u103C\u103D#kx - (\u1064)`, (done: DoneFn) => {
        const input = '\u1031\u1083\u108F\u108A\u1064';
        const expected = 'င်္နြွှေ';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`'\u1031\u103B([#zc])\u103D#kx`, (done: DoneFn) => {
        const input = '\u1031\u1083\u108F\u103D\u108B';
        const expected = 'င်္နြှေိ';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`'\u1031\u103B([#zc])\u103D#kx - (\u1064)`, (done: DoneFn) => {
        const input = '\u1031\u1083\u108F\u103D\u1064';
        const expected = 'င်္နြှေ';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`\u1031\u103B([#zc])\u103C#kx`, (done: DoneFn) => {
        const input = '\u1031\u1083\u108F\u103C\u108B';
        const expected = 'င်္နြွေိ';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`\u1031\u103B([#zc])\u103C#kx - (\u1064)`, (done: DoneFn) => {
        const input = '\u1031\u1083\u108F\u103C\u1064';
        const expected = 'င်္နြွေ';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`'\u1031\u103B([#zc])#kx`, (done: DoneFn) => {
        const input = '\u1031\u107F\u108F\u108B';
        const expected = 'င်္နြေိ';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`'\u1031\u103B([#zc])#kx - (\u1064)`, (done: DoneFn) => {
        const input = '\u1031\u107F\u108F\u1064';
        const expected = 'င်္နြေ';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    // 'ေ'
    // ...............
    it(String.raw`\u1031([#zc])\u1096#kx`, (done: DoneFn) => {
        const input = '\u1031\u1090\u1096\u108C';
        const expected = 'င်္ရ္တွေီ';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`\u1031([#zc])\u1096#kx - (\u1064)`, (done: DoneFn) => {
        const input = '\u1031\u1090\u1096\u1064';
        const expected = 'င်္ရ္တွေ';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`\u1031([#zc])([#zplc])\u103A#kx`, (done: DoneFn) => {
        const input = '\u1031\u1040\u1072\u107D\u108B';
        const expected = 'င်္ဝ္တျေိ';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`\u1031([#zpc])\u103A#kx`, (done: DoneFn) => {
        const input = '\u1031\u1091\u107D\u108B';
        const expected = 'င်္ဏ္ဍျေိ';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`\u1031([#zc])([#zplc])#kx`, (done: DoneFn) => {
        const input = '\u1031\u106A\u1065\u108C';
        const expected = 'င်္ဉ္စေီ';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`\u1031([#zpc])#kx`, (done: DoneFn) => {
        const input = '\u1031\u1092\u108B';
        const expected = 'င်္ဋ္ဌေိ';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`\u1031([#zc])\u103A\u103C\u103D#kx`, (done: DoneFn) => {
        const input = '\u1031\u108F\u108A\u107D\u108B';
        const expected = 'င်္နျွှေိ';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`\u1031([#zc])\u103A\u103D#kx`, (done: DoneFn) => {
        const input = '\u1031\u108F\u103D\u103A\u108B';
        const expected = 'င်္နျှေိ';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`\u1031([#zc])\u103A\u103C#kx`, (done: DoneFn) => {
        const input = '\u1031\u108F\u103C\u107D\u108B';
        const expected = 'င်္နျွေိ';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`\u1031([#zc])\u103A#kx`, (done: DoneFn) => {
        const input = '\u1031\u108F\u103A\u108B';
        const expected = 'င်္နျေိ';

        translitService.translit(input, 'zg2uni', zg2uniRules,
            {
                // fixOverlappedChars: true,
                sortOrder: true,
                singleForm: true,
                zg2uni: true
            }).subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(input, result));
                done();
            });
    });

    it(String.raw`\u1031([#zc])\u103C\u103D#kx`, (done: DoneFn) => {
        const input = '\u1031\u108F\u108A\u108B';
        const expected = 'င်္နွှေိ';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`\u1031([#zc])\u103D#kx`, (done: DoneFn) => {
        const input = '\u1031\u1090\u103D\u108B';
        const expected = 'င်္ရှေိ';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`\u1031([#zc])\u103C#kx`, (done: DoneFn) => {
        const input = '\u1031\u108F\u103C\u108B';
        const expected = 'င်္နွေိ';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`\u1031([#zc])#kx`, (done: DoneFn) => {
        const input = '\u1031\u1086\u108B';
        const expected = 'င်္ဿေိ';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`\u1031([#zc])#kx - (\u1064)`, (done: DoneFn) => {
        const input = '\u1031\u1086\u1064';
        const expected = 'င်္ဿေ';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    // // 'ြ'
    // // ...............
    it(String.raw`\u103B([#zc])\u1096#kx`, (done: DoneFn) => {
        const input = '\u1084\u106B\u1096\u108C';
        const expected = 'င်္ည္တြွီ';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`\u103B([#zc])\u1096#kx - (\u1064)`, (done: DoneFn) => {
        const input = '\u1084\u106B\u1096\u1064';
        const expected = 'င်္ည္တြွ';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`\u103B([#zc])([#zplc])#kx`, (done: DoneFn) => {
        const input = '\u1083\u1090\u1072\u108D';
        const expected = 'င်္ရ္တြံ';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`\u103B([#zpc])#kx`, (done: DoneFn) => {
        const input = '\u1084\u1091\u108B';
        const expected = 'င်္ဏ္ဍြိ';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`\u103B([#zc])\u103C\u103D#kx`, (done: DoneFn) => {
        const input = '\u1083\u108F\u108A\u108B';
        const expected = 'င်္နြွှိ';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`\u103B([#zc])\u103D#kx`, (done: DoneFn) => {
        const input = '\u1083\u108F\u103D\u108B';
        const expected = 'င်္နြှိ';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`\u103B([#zc])\u103D#kx - (\u1064)`, (done: DoneFn) => {
        const input = '\u1083\u108F\u103D\u1064';
        const expected = 'င်္နြှ';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`\u103B([#zc])\u103C#kx`, (done: DoneFn) => {
        const input = '\u1083\u108F\u103C\u108B';
        const expected = 'င်္နြွိ';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`\u103B([#zc])#kx`, (done: DoneFn) => {
        const input = '\u107F\u108F\u108B';
        const expected = 'င်္နြိ';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`\u103B([#zc])#kx - (\u1064)`, (done: DoneFn) => {
        const input = '\u107F\u108F\u1064';
        const expected = 'င်္နြ';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    // // [ွှ  ွ  ှ]
    // // ...............
    it(String.raw`([#zc])\u103A\u103C\u103D#kx`, (done: DoneFn) => {
        const input = '\u108F\u108A\u107D\u108B';
        const expected = 'င်္နျွှိ';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`([#zc])\u103A\u103C\u103D#kx - (\u1064)`, (done: DoneFn) => {
        const input = '\u108F\u108A\u107D\u1064';
        const expected = 'င်္နျွှ';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`([#zc])\u103C\u103D#kx`, (done: DoneFn) => {
        const input = '\u108F\u108A\u108B';
        const expected = 'င်္နွှိ';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`([#zc])\u103C\u103D#kx - (\u1064)`, (done: DoneFn) => {
        const input = '\u108F\u108A\u1064';
        const expected = 'င်္နွှ';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`([#zc])\u103A\u103D#kx`, (done: DoneFn) => {
        const input = '\u108F\u103D\u103A\u108B';
        const expected = 'င်္နျှိ';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`([#zc])\u103C\u103A#kx`, (done: DoneFn) => {
        const input = '\u108F\u103C\u107D\u108B';
        const expected = 'င်္နျွိ';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`([#zc])\u103D#kx`, (done: DoneFn) => {
        const input = '\u1090\u103D\u108B';
        const expected = 'င်္ရှိ';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`([#zc])\u103A\u103C#kx`, (done: DoneFn) => {
        const input = '\u108F\u103C\u107D\u108B';
        const expected = 'င်္နျွိ';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`([#zc])\u1096#kx`, (done: DoneFn) => {
        const input = '\u108F\u1096\u108C';
        const expected = 'င်္န္တွီ';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`([#zc])\u103C#kx`, (done: DoneFn) => {
        const input = '\u108F\u103C\u108B';
        const expected = 'င်္နွိ';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`([#zc])\u103C#kx - (\u1064)`, (done: DoneFn) => {
        const input = '\u108F\u103C\u1064';
        const expected = 'င်္နွ';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    // 'ျ'
    // ...............
    it(String.raw`([#zc])([#zplc])\u103A#kx`, (done: DoneFn) => {
        const input = '\u1090\u1074\u107D\u108B';
        const expected = 'င်္ရ္ထျိ';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`([#zc])([#zplc])\u103A#kx - (\u1064)`, (done: DoneFn) => {
        const input = '\u1090\u1074\u107D\u1064';
        const expected = 'င်္ရ္ထျ';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`([#zpc])\u103A#kx`, (done: DoneFn) => {
        const input = '\u1097\u107D\u108B';
        const expected = 'င်္ဋ္ဋျိ';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`([#zpc])\u103A#kx - (\u1064)`, (done: DoneFn) => {
        const input = '\u1097\u107D\u1064';
        const expected = 'င်္ဋ္ဋျ';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`([#zc])\u103A#kx`, (done: DoneFn) => {
        const input = '\u108F\u103A\u108B';
        const expected = 'င်္နျိ';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`([#zc])\u103A#kx - (\u1064)`, (done: DoneFn) => {
        const input = '\u108F\u103A\u1064';
        const expected = 'င်္နျ';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    // #
    // ...............
    it(String.raw`([#zc])([#zplc])#kx`, (done: DoneFn) => {
        const input = '\u108F\u1074\u108C';
        const expected = 'င်္န္ထီ';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`([#zc])([#zplc])#kx - (\u1064)`, (done: DoneFn) => {
        const input = '\u108F\u1074\u1064';
        const expected = 'င်္န္ထ';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`([#zplc])#kx`, (done: DoneFn) => {
        const input = '\u106E\u108B';
        const expected = 'င်္ဍ္ဍိ';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`([#zplc])#kx - (\u1064)`, (done: DoneFn) => {
        const input = '\u106E\u1064';
        const expected = 'င်္ဍ္ဍ';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`([#zc])#kx`, (done: DoneFn) => {
        const input = '\u1086\u108B';
        const expected = 'င်္ဿိ';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`([#zc])#kx - (\u1064)`, (done: DoneFn) => {
        const input = '\u1086\u1064';
        const expected = 'င်္ဿ';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`#kx`, (done: DoneFn) => {
        const input = '\u108B';
        const expected = 'င်္ိ';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`#kx - (\u1064)`, (done: DoneFn) => {
        const input = '\u1064';
        const expected = '\u1004\u103A\u1039';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    // // Extra
    // // ...............
    it(String.raw`\u1031\u108F\u108B\u102F\u1094`, (done: DoneFn) => {
        const input = '\u1031\u108F\u108B\u102F\u1094';
        const expected = 'င်္နေို့';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`\u1031\u108F\u103D\u108C\u1094`, (done: DoneFn) => {
        const input = '\u1031\u108F\u103D\u108C\u1094';
        const expected = 'င်္နှေီ့';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`\u1031\u1014\u108B\u1094`, (done: DoneFn) => {
        const input = '\u1031\u1014\u108B\u1094';
        const expected = 'င်္နေိ့';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`\u1031\u1025\u108B\u1037`, (done: DoneFn) => {
        const input = '\u1031\u1025\u108B\u1037';
        const expected = 'င်္ဥေိ့';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`\u1031\u107F\u108F\u108B\u1037`, (done: DoneFn) => {
        const input = '\u1031\u107F\u108F\u108B\u1037';
        const expected = 'င်္နြေိ့';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`\u1031\u107F\u108F\u108B\u1037`, (done: DoneFn) => {
        const input = '\u1031\u1000\u108B\u1037';
        const expected = 'င်္ကေိ့';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`\u103B\u108F\u108B\u1037`, (done: DoneFn) => {
        const input = '\u103B\u108F\u108B\u1037';
        const expected = 'င်္နြိ့';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`\u1001\u108B\u1037`, (done: DoneFn) => {
        const input = '\u1001\u108B\u1037';
        const expected = 'င်္ခိ့';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`\u1031\u1025\u108B\u1087\u1033`, (done: DoneFn) => {
        const input = '\u1031\u1025\u108B\u1087\u1033';
        const expected = 'င်္ဥှေို';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`\u1031\u100A\u108B\u1087\u1033`, (done: DoneFn) => {
        const input = '\u1031\u100A\u108B\u1087\u1033';
        const expected = 'င်္ညှေို';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`\u1025\u108B\u1034`, (done: DoneFn) => {
        const input = '\u1025\u108B\u1034';
        const expected = 'င်္ဥိူ';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`\u1031\u1000\u108B\u1088`, (done: DoneFn) => {
        const input = '\u1031\u1000\u108B\u1088';
        const expected = 'င်္ကှေို';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`\u1031\u1000\u108B\u1089`, (done: DoneFn) => {
        const input = '\u1031\u1000\u108B\u1089';
        const expected = 'င်္ကှေိူ';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`\u1015\u108B\u1089`, (done: DoneFn) => {
        const input = '\u1015\u108B\u1089';
        const expected = 'င်္ပှိူ';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`\u1031\u1000\u108B\u102F`, (done: DoneFn) => {
        const input = '\u1031\u1000\u108B\u102F';
        const expected = 'င်္ကေို';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`\u1031\u1000\u108B\u1030`, (done: DoneFn) => {
        const input = '\u1031\u1000\u108B\u1030';
        const expected = 'င်္ကေိူ';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`\u1000\u108B\u1030`, (done: DoneFn) => {
        const input = '\u1000\u108B\u1030';
        const expected = 'င်္ကိူ';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    // 'ေ' + 'ြ'
    // ------------------------------------------------------------------------------------------
    // 'ွှ'
    // ...............
    it(String.raw`\u1031\u103B([#zc])\u103C\u103D`, (done: DoneFn) => {
        const input = '\u1031\u1081\u108F\u103D\u103C';
        const expected = 'နြွှေ';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    // 'ှ'
    // ...............
    it(String.raw`\u1031\u103B([#zc])\u103D`, (done: DoneFn) => {
        const input = '\u1031\u107E\u1000\u103D';
        const expected = 'ကြှေ';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    // 'ွ'
    // ...............
    it(String.raw`\u1031\u103B([#zc])\u1096`, (done: DoneFn) => {
        const input = '\u1031\u1081\u108F\u1096';
        const expected = 'န္တြွေ';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`\u1031\u103B([#zc])\u103C`, (done: DoneFn) => {
        const input = '\u1031\u107E\u1000\u103C';
        const expected = 'ကြွေ';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    // #
    // ...............
    it(String.raw`\u1031\u103B([#zc])([#zplc])`, (done: DoneFn) => {
        const input = '\u1031\u1081\u106A\u1065';
        const expected = 'ဉ္စြေ';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`\u1031\u103B([#zpc])`, (done: DoneFn) => {
        const input = '\u1031\u107E\u1091';
        const expected = 'ဏ္ဍြေ';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`\u1031\u103B([#zc])`, (done: DoneFn) => {
        const input = '\u1031\u103B\u108F';
        const expected = '\u1014\u103C\u1031';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    // 'ေ'
    // ------------------------------------------------------------------------------------------
    // 'ျ' + 'ွှ'
    // ...............
    it(String.raw`\u1031([#zc])\u103A\u103C\u103D`, (done: DoneFn) => {
        const input = '\u1031\u1090\u108A\u107D';
        const expected = 'ရျွှေ';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    // 'ွှ'
    // ...............
    it(String.raw`\u1031([#zc])\u103C\u103D`, (done: DoneFn) => {
        const input = '\u1031\u1090\u108A';
        const expected = 'ရွှေ';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    // 'ျ' + 'ှ'
    // ...............
    it(String.raw`\u1031([#zc])\u103A\u103D`, (done: DoneFn) => {
        const input = '\u1031\u101B\u103D\u107D';
        const expected = 'ရျှေ';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    // 'ှ'
    // ...............
    it(String.raw`\u1031([#zc])\u103D`, (done: DoneFn) => {
        const input = '\u1031\u101B\u103D';
        const expected = 'ရှေ';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    // 'ျ' + 'ွ'
    // ...............
    it(String.raw`\u1031([#zc])\u103A\u103C`, (done: DoneFn) => {
        const input = '\u1031\u101B\u103C\u107D';
        const expected = 'ရျွေ';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    // 'ွ'
    // ...............
    it(String.raw`\u1031([#zc])\u1096`, (done: DoneFn) => {
        const input = '\u1031\u108F\u1096';
        const expected = 'န္တွေ';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`\u1031([#zc])\u103C`, (done: DoneFn) => {
        const input = '\u1031\u1090\u103C';
        const expected = 'ရွေ';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    // 'ျ'
    // ...............
    it(String.raw`\u1031([#zc])([#zplc])\u103A`, (done: DoneFn) => {
        const input = '\u1031\u1014\u1071\u107D';
        const expected = 'န္တျေ';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`\u1031([#zpc])\u103A`, (done: DoneFn) => {
        const input = '\u1031\u1091\u107D';
        const expected = 'ဏ္ဍျေ';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`\u1031([#zc])\u103A`, (done: DoneFn) => {
        const input = '\u1031\u1000\u103A';
        const expected = 'ကျေ';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    // #
    // ...............
    it(String.raw`\u1031([#zc])([#zplc])`, (done: DoneFn) => {
        const input = '\u1031\u1086\u1085';
        const expected = 'ဿ္လေ';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`\u1031([#zpc])`, (done: DoneFn) => {
        const input = '\u1031\u1091';
        const expected = 'ဏ္ဍေ';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`\u1031([#zc])`, (done: DoneFn) => {
        const input = '\u1031\u1000';
        const expected = 'ကေ';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    // 'ြ'
    // ------------------------------------------------------------------------------------------
    it(String.raw`\u103B([#zc])\u1096`, (done: DoneFn) => {
        const input = '\u1081\u108F\u1096';
        const expected = 'န္တြွ';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`\u103B([#zc])([#zplc])`, (done: DoneFn) => {
        const input = '\u1082\u1000\u1060';
        const expected = 'က္ကြ';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`\u103B([#zpc])`, (done: DoneFn) => {
        const input = '\u1082\u1091';
        const expected = 'ဏ္ဍြ';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`\u103B([#zc])`, (done: DoneFn) => {
        const input = '\u107E\u1000';
        const expected = 'ကြ';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    // Pasin
    // ------------------------------------------------------------------------------------------
    it(String.raw`([#zc])\u1096`, (done: DoneFn) => {
        const input = '\u108F\u1096';
        const expected = 'န္တွ';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`'([#zc])([#zplc])`, (done: DoneFn) => {
        const input = '\u1000\u1060';
        const expected = 'က္က';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`'([#zpc]) - (\u106E)`, (done: DoneFn) => {
        const input = '\u106E';
        const expected = 'ဍ္ဍ';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`'([#zpc]) - (\u106F)`, (done: DoneFn) => {
        const input = '\u106F';
        const expected = 'ဍ္ဎ';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`'([#zpc]) - (\u1091)`, (done: DoneFn) => {
        const input = '\u1091';
        const expected = 'ဏ္ဍ';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`'([#zpc]) - (\u1092)`, (done: DoneFn) => {
        const input = '\u1092';
        const expected = 'ဋ္ဌ';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`'([#zpc]) - (\u1097)`, (done: DoneFn) => {
        const input = '\u1097';
        const expected = 'ဋ္ဋ';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`'\u1096`, (done: DoneFn) => {
        const input = '\u1096';
        const expected = '္တွ';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`'@px`, (done: DoneFn) => {
        const input = '\u1060';
        const expected = '္က';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    // 'း'
    // ------------------------------------------------------------------------------------------
    it(String.raw`\u104E`, (done: DoneFn) => {
        const input = '\u104E';
        const expected = '၎င်း';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`\u1044\u1004\u1039\u1038`, (done: DoneFn) => {
        const input = '\u1044\u1004\u1039\u1038';
        const expected = '၎င်း';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`\u1040\u1004\u1039\u1038`, (done: DoneFn) => {
        const input = '\u1040\u1004\u1039\u1038';
        const expected = 'ဝင်း';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    // [ဉ  ဥ]
    // ------------------------------------------------------------------------------------------
    it(String.raw`\u1009(\u102F\u1036)`, (done: DoneFn) => {
        const input = '\u1009\u1033\u1036';
        const expected = 'ဥုံ';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`\u1025\u102C`, (done: DoneFn) => {
        const input = '\u1025\u102C';
        const expected = 'ဉာ';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`\u1025\u1039\u1037 (with \u103A\u1037)`, (done: DoneFn) => {
        const input = '\u1025\u1039\u1037';
        const expected = 'ဉ့်';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`\u1025\u1039\u1037 (with \u103A\u1037)`, (done: DoneFn) => {
        const input = '\u1025\u1037\u1039';
        const expected = 'ဉ့်';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`\u1025\u1037\u1039 (with \u1037\u103A)`, (done: DoneFn) => {
        const input = '\u1025\u1037\u1039';
        const expected = 'ဉ့်';

        translitService.translit(input, 'zg2uni', zg2uniRules,
            {
                preferU1037U103A: true
            }).subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(input, result));
                done();
            });
    });

    it(String.raw`\u1025\u1037\u1039 - (with \u1037\u103A)`, (done: DoneFn) => {
        const input = '\u1025\u1039\u1037';
        const expected = 'ဉ့်';

        translitService.translit(input, 'zg2uni', zg2uniRules,
            {
                preferU1037U103A: true
            }).subscribe(result => {
                expect(result.outputText).toBe(expected, toFailOutput(input, result));
                done();
            });
    });

    it(String.raw`\u1025\u1039`, (done: DoneFn) => {
        const input = '\u1025\u1039';
        const expected = 'ဉ်';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`\u1025\u1010\u1039`, (done: DoneFn) => {
        const input = '\u1025\u1010\u1039';
        const expected = 'ဉတ်';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`\u1025([\u1000-\u1021\u103F])\u1039`, (done: DoneFn) => {
        const input = '\u1025\u1086\u1039';
        const expected = 'ဉဿ်';

        translitService.translit(input, 'rule1', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });
});
