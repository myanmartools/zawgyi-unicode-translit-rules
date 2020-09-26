import { translit } from '@dagonmetric/translit-js';

import { zg2uniRules } from '../../src/zg2uni-rules';

import { toFailOutput } from './shared.spec';

describe('zg2uni-rules-individual', () => {
    // Overlapped characters normalization
    // ------------------------------------------------------------------------------------------
    it(String.raw`overlapped characters normalization`, () => {
        const input = '\u1000\u102D\u102D\u102D\u1036\u1036';
        const expected = '\u1000\u102D\u1036';

        const result = translit(input, zg2uniRules, {
            convertSingleForm: false,
            fixExtraSpace: false,
            sortOrder: false,
            convertZg2Uni: false
        });
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // Single form normalization
    // ------------------------------------------------------------------------------------------
    it(String.raw`single form normalization`, () => {
        const input = '\u107F\u108F\u107D\u103C\u108A\u102D\u102E\u1033\u1034';
        const expected = '\u103B\u1014\u103A\u103C\u103D\u102E\u1030';

        const result = translit(input, zg2uniRules, {
            fixExtraSpace: false,
            sortOrder: false,
            convertZg2Uni: false
        });
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // Fix extra space normalization phase
    // ------------------------------------------------------------------------------------------
    it(String.raw`Fix extra space normalization - (with \u1031\u103B)`, () => {
        const input = '\u1031  \u103B \u1000';
        const expected = '\u1031\u103B\u1000';

        const result = translit(input, zg2uniRules, {
            sortOrder: false,
            convertZg2Uni: false
        });
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`Fix extra space normalization - (with \u1031)`, () => {
        const input = '\u1031  \u1000';
        const expected = '\u1031\u1000';

        const result = translit(input, zg2uniRules, {
            sortOrder: false,
            convertZg2Uni: false
        });
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`Fix extra space normalization - (with \u103B)`, () => {
        const input = '\u103B  \u1000';
        const expected = '\u103B\u1000';

        const result = translit(input, zg2uniRules, {
            sortOrder: false,
            convertZg2Uni: false
        });
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`Fix extra space normalization`, () => {
        const input = '\u1000   \u102D  \u1037';
        const expected = '\u1000\u102D\u1037';

        const result = translit(input, zg2uniRules, {
            sortOrder: false,
            convertZg2Uni: false
        });
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // Order normalization phase
    // ------------------------------------------------------------------------------------------
    it(String.raw`order normalization phase`, () => {
        const input = '\u1000\u1036\u102E\u1060\u102F\u103A';
        const expected = '\u1000\u1060\u103A\u102E\u102F\u1036';

        const result = translit(input, zg2uniRules, {
            convertZg2Uni: false
        });
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // \u108B-\u108D, \u1064
    // ------------------------------------------------------------------------------------------
    // 'ေ' + 'ြ'
    // ...............
    it(String.raw`\u1031\u103B([#zc])\u1096#kx`, () => {
        const input = '\u1031\u1083\u108F\u1096\u108B';
        const expected = 'င်္န္တြွေိ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1031\u103B([#zc])\u1096#kx - (\u1064)`, () => {
        const input = '\u1031\u1083\u108F\u1096\u1064';
        const expected = 'င်္န္တြွေ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1031\u103B([#zc])([#zplc])#kx`, () => {
        const input = '\u1031\u1084\u1086\u1071\u108D';
        const expected = 'င်္ဿ္တြေံ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1031\u103B([#zc])([#zplc])#kx - (\u1064)`, () => {
        const input = '\u1031\u1084\u1086\u1071\u1064';
        const expected = 'င်္ဿ္တြေ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1031\u103B([#zpc])#kx`, () => {
        const input = '\u1031\u1084\u106F\u108D';
        const expected = 'င်္ဍ္ဎြေံ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1031\u103B([#zpc])#kx - (\u1064)`, () => {
        const input = '\u1031\u1084\u106F\u1064';
        const expected = 'င်္ဍ္ဎြေ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1031\u103B([#zc])\u103C\u103D#kx`, () => {
        const input = '\u1031\u1083\u108F\u108A\u108B';
        const expected = 'င်္နြွှေိ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1031\u103B([#zc])\u103C\u103D#kx - (\u1064)`, () => {
        const input = '\u1031\u1083\u108F\u108A\u1064';
        const expected = 'င်္နြွှေ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`'\u1031\u103B([#zc])\u103D#kx`, () => {
        const input = '\u1031\u1083\u108F\u103D\u108B';
        const expected = 'င်္နြှေိ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`'\u1031\u103B([#zc])\u103D#kx - (\u1064)`, () => {
        const input = '\u1031\u1083\u108F\u103D\u1064';
        const expected = 'င်္နြှေ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1031\u103B([#zc])\u103C#kx`, () => {
        const input = '\u1031\u1083\u108F\u103C\u108B';
        const expected = 'င်္နြွေိ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1031\u103B([#zc])\u103C#kx - (\u1064)`, () => {
        const input = '\u1031\u1083\u108F\u103C\u1064';
        const expected = 'င်္နြွေ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`'\u1031\u103B([#zc])#kx`, () => {
        const input = '\u1031\u107F\u108F\u108B';
        const expected = 'င်္နြေိ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`'\u1031\u103B([#zc])#kx - (\u1064)`, () => {
        const input = '\u1031\u107F\u108F\u1064';
        const expected = 'င်္နြေ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // 'ေ'
    // ...............
    it(String.raw`\u1031([#zc])\u1096#kx`, () => {
        const input = '\u1031\u1090\u1096\u108C';
        const expected = 'င်္ရ္တွေီ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1031([#zc])\u1096#kx - (\u1064)`, () => {
        const input = '\u1031\u1090\u1096\u1064';
        const expected = 'င်္ရ္တွေ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1031([#zc])([#zplc])\u103A#kx`, () => {
        const input = '\u1031\u1040\u1072\u107D\u108B';
        const expected = 'င်္ဝ္တျေိ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1031([#zpc])\u103A#kx`, () => {
        const input = '\u1031\u1091\u107D\u108B';
        const expected = 'င်္ဏ္ဍျေိ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1031([#zc])([#zplc])#kx`, () => {
        const input = '\u1031\u106A\u1065\u108C';
        const expected = 'င်္ဉ္စေီ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1031([#zpc])#kx`, () => {
        const input = '\u1031\u1092\u108B';
        const expected = 'င်္ဋ္ဌေိ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1031([#zc])\u103A\u103C\u103D#kx`, () => {
        const input = '\u1031\u108F\u108A\u107D\u108B';
        const expected = 'င်္နျွှေိ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1031([#zc])\u103A\u103D#kx`, () => {
        const input = '\u1031\u108F\u103D\u103A\u108B';
        const expected = 'င်္နျှေိ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1031([#zc])\u103A\u103C#kx`, () => {
        const input = '\u1031\u108F\u103C\u107D\u108B';
        const expected = 'င်္နျွေိ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1031([#zc])\u103A#kx`, () => {
        const input = '\u1031\u108F\u103A\u108B';
        const expected = 'င်္နျေိ';

        const result = translit(input, zg2uniRules, {
            // fixOverlappedChars: true,
            sortOrder: true,
            singleForm: true,
            zg2uni: true
        });
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1031([#zc])\u103C\u103D#kx`, () => {
        const input = '\u1031\u108F\u108A\u108B';
        const expected = 'င်္နွှေိ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1031([#zc])\u103D#kx`, () => {
        const input = '\u1031\u1090\u103D\u108B';
        const expected = 'င်္ရှေိ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1031([#zc])\u103C#kx`, () => {
        const input = '\u1031\u108F\u103C\u108B';
        const expected = 'င်္နွေိ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1031([#zc])#kx`, () => {
        const input = '\u1031\u1086\u108B';
        const expected = 'င်္ဿေိ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1031([#zc])#kx - (\u1064)`, () => {
        const input = '\u1031\u1086\u1064';
        const expected = 'င်္ဿေ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // 'ြ'
    // ...............
    it(String.raw`\u103B([#zc])\u1096#kx`, () => {
        const input = '\u1084\u106B\u1096\u108C';
        const expected = 'င်္ည္တြွီ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u103B([#zc])\u1096#kx - (\u1064)`, () => {
        const input = '\u1084\u106B\u1096\u1064';
        const expected = 'င်္ည္တြွ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u103B([#zc])([#zplc])#kx`, () => {
        const input = '\u1083\u1090\u1072\u108D';
        const expected = 'င်္ရ္တြံ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u103B([#zpc])#kx`, () => {
        const input = '\u1084\u1091\u108B';
        const expected = 'င်္ဏ္ဍြိ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u103B([#zc])\u103C\u103D#kx`, () => {
        const input = '\u1083\u108F\u108A\u108B';
        const expected = 'င်္နြွှိ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u103B([#zc])\u103D#kx`, () => {
        const input = '\u1083\u108F\u103D\u108B';
        const expected = 'င်္နြှိ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u103B([#zc])\u103D#kx - (\u1064)`, () => {
        const input = '\u1083\u108F\u103D\u1064';
        const expected = 'င်္နြှ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u103B([#zc])\u103C#kx`, () => {
        const input = '\u1083\u108F\u103C\u108B';
        const expected = 'င်္နြွိ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u103B([#zc])#kx`, () => {
        const input = '\u107F\u108F\u108B';
        const expected = 'င်္နြိ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u103B([#zc])#kx - (\u1064)`, () => {
        const input = '\u107F\u108F\u1064';
        const expected = 'င်္နြ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // [ွှ  ွ  ှ]
    // ...............
    it(String.raw`([#zc])\u103A\u103C\u103D#kx`, () => {
        const input = '\u108F\u108A\u107D\u108B';
        const expected = 'င်္နျွှိ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#zc])\u103A\u103C\u103D#kx - (\u1064)`, () => {
        const input = '\u108F\u108A\u107D\u1064';
        const expected = 'င်္နျွှ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#zc])\u103C\u103D#kx`, () => {
        const input = '\u108F\u108A\u108B';
        const expected = 'င်္နွှိ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#zc])\u103C\u103D#kx - (\u1064)`, () => {
        const input = '\u108F\u108A\u1064';
        const expected = 'င်္နွှ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#zc])\u103A\u103D#kx`, () => {
        const input = '\u108F\u103D\u103A\u108B';
        const expected = 'င်္နျှိ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#zc])\u103C\u103A#kx`, () => {
        const input = '\u108F\u103C\u107D\u108B';
        const expected = 'င်္နျွိ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#zc])\u103D#kx`, () => {
        const input = '\u1090\u103D\u108B';
        const expected = 'င်္ရှိ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#zc])\u103A\u103C#kx`, () => {
        const input = '\u108F\u103C\u107D\u108B';
        const expected = 'င်္နျွိ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#zc])\u1096#kx`, () => {
        const input = '\u108F\u1096\u108C';
        const expected = 'င်္န္တွီ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#zc])\u103C#kx`, () => {
        const input = '\u108F\u103C\u108B';
        const expected = 'င်္နွိ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#zc])\u103C#kx - (\u1064)`, () => {
        const input = '\u108F\u103C\u1064';
        const expected = 'င်္နွ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // 'ျ'
    // ...............
    it(String.raw`([#zc])([#zplc])\u103A#kx`, () => {
        const input = '\u1090\u1074\u107D\u108B';
        const expected = 'င်္ရ္ထျိ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#zc])([#zplc])\u103A#kx - (\u1064)`, () => {
        const input = '\u1090\u1074\u107D\u1064';
        const expected = 'င်္ရ္ထျ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#zpc])\u103A#kx`, () => {
        const input = '\u1097\u107D\u108B';
        const expected = 'င်္ဋ္ဋျိ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#zpc])\u103A#kx - (\u1064)`, () => {
        const input = '\u1097\u107D\u1064';
        const expected = 'င်္ဋ္ဋျ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#zc])\u103A#kx`, () => {
        const input = '\u108F\u103A\u108B';
        const expected = 'င်္နျိ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#zc])\u103A#kx - (\u1064)`, () => {
        const input = '\u108F\u103A\u1064';
        const expected = 'င်္နျ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // #
    // ...............
    it(String.raw`([#zc])([#zplc])#kx`, () => {
        const input = '\u108F\u1074\u108C';
        const expected = 'င်္န္ထီ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#zc])([#zplc])#kx - (\u1064)`, () => {
        const input = '\u108F\u1074\u1064';
        const expected = 'င်္န္ထ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#zplc])#kx`, () => {
        const input = '\u106E\u108B';
        const expected = 'င်္ဍ္ဍိ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#zplc])#kx - (\u1064)`, () => {
        const input = '\u106E\u1064';
        const expected = 'င်္ဍ္ဍ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#zc])#kx`, () => {
        const input = '\u1086\u108B';
        const expected = 'င်္ဿိ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#zc])#kx - (\u1064)`, () => {
        const input = '\u1086\u1064';
        const expected = 'င်္ဿ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`#kx`, () => {
        const input = '\u108B';
        const expected = 'င်္ိ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`#kx - (\u1064)`, () => {
        const input = '\u1064';
        const expected = '\u1004\u103A\u1039';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // Extra
    // ...............
    it(String.raw`\u1031\u108F\u108B\u102F\u1094`, () => {
        const input = '\u1031\u108F\u108B\u102F\u1094';
        const expected = 'င်္နေို့';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1031\u108F\u103D\u108C\u1094`, () => {
        const input = '\u1031\u108F\u103D\u108C\u1094';
        const expected = 'င်္နှေီ့';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1031\u1014\u108B\u1094`, () => {
        const input = '\u1031\u1014\u108B\u1094';
        const expected = 'င်္နေိ့';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1031\u1025\u108B\u1037`, () => {
        const input = '\u1031\u1025\u108B\u1037';
        const expected = 'င်္ဥေိ့';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1031\u107F\u108F\u108B\u1037`, () => {
        const input = '\u1031\u107F\u108F\u108B\u1037';
        const expected = 'င်္နြေိ့';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1031\u107F\u108F\u108B\u1037`, () => {
        const input = '\u1031\u1000\u108B\u1037';
        const expected = 'င်္ကေိ့';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u103B\u108F\u108B\u1037`, () => {
        const input = '\u103B\u108F\u108B\u1037';
        const expected = 'င်္နြိ့';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1001\u108B\u1037`, () => {
        const input = '\u1001\u108B\u1037';
        const expected = 'င်္ခိ့';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1031\u1025\u108B\u1087\u1033`, () => {
        const input = '\u1031\u1025\u108B\u1087\u1033';
        const expected = 'င်္ဥှေို';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1031\u100A\u108B\u1087\u1033`, () => {
        const input = '\u1031\u100A\u108B\u1087\u1033';
        const expected = 'င်္ညှေို';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1025\u108B\u1034`, () => {
        const input = '\u1025\u108B\u1034';
        const expected = 'င်္ဥိူ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1031\u1000\u108B\u1088`, () => {
        const input = '\u1031\u1000\u108B\u1088';
        const expected = 'င်္ကှေို';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1031\u1000\u108B\u1089`, () => {
        const input = '\u1031\u1000\u108B\u1089';
        const expected = 'င်္ကှေိူ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1015\u108B\u1089`, () => {
        const input = '\u1015\u108B\u1089';
        const expected = 'င်္ပှိူ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1031\u1000\u108B\u102F`, () => {
        const input = '\u1031\u1000\u108B\u102F';
        const expected = 'င်္ကေို';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1031\u1000\u108B\u1030`, () => {
        const input = '\u1031\u1000\u108B\u1030';
        const expected = 'င်္ကေိူ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1000\u108B\u1030`, () => {
        const input = '\u1000\u108B\u1030';
        const expected = 'င်္ကိူ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // 'ေ' + 'ြ'
    // ------------------------------------------------------------------------------------------
    // 'ွှ'
    // ...............
    it(String.raw`\u1031\u103B([#zc])\u103C\u103D`, () => {
        const input = '\u1031\u1081\u108F\u103D\u103C';
        const expected = 'နြွှေ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // 'ှ'
    // ...............
    it(String.raw`\u1031\u103B([#zc])\u103D`, () => {
        const input = '\u1031\u107E\u1000\u103D';
        const expected = 'ကြှေ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // 'ွ'
    // ...............
    it(String.raw`\u1031\u103B([#zc])\u1096`, () => {
        const input = '\u1031\u1081\u108F\u1096';
        const expected = 'န္တြွေ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1031\u103B([#zc])\u103C`, () => {
        const input = '\u1031\u107E\u1000\u103C';
        const expected = 'ကြွေ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // #
    // ...............
    it(String.raw`\u1031\u103B([#zc])([#zplc])`, () => {
        const input = '\u1031\u1081\u106A\u1065';
        const expected = 'ဉ္စြေ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1031\u103B([#zpc])`, () => {
        const input = '\u1031\u107E\u1091';
        const expected = 'ဏ္ဍြေ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1031\u103B([#zc])`, () => {
        const input = '\u1031\u103B\u108F';
        const expected = '\u1014\u103C\u1031';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // 'ေ'
    // ------------------------------------------------------------------------------------------
    // 'ျ' + 'ွှ'
    // ...............
    it(String.raw`\u1031([#zc])\u103A\u103C\u103D`, () => {
        const input = '\u1031\u1090\u108A\u107D';
        const expected = 'ရျွှေ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // 'ွှ'
    // ...............
    it(String.raw`\u1031([#zc])\u103C\u103D`, () => {
        const input = '\u1031\u1090\u108A';
        const expected = 'ရွှေ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // 'ျ' + 'ှ'
    // ...............
    it(String.raw`\u1031([#zc])\u103A\u103D`, () => {
        const input = '\u1031\u101B\u103D\u107D';
        const expected = 'ရျှေ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // 'ှ'
    // ...............
    it(String.raw`\u1031([#zc])\u103D`, () => {
        const input = '\u1031\u101B\u103D';
        const expected = 'ရှေ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // 'ျ' + 'ွ'
    // ...............
    it(String.raw`\u1031([#zc])\u103A\u103C`, () => {
        const input = '\u1031\u101B\u103C\u107D';
        const expected = 'ရျွေ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // 'ွ'
    // ...............
    it(String.raw`\u1031([#zc])\u1096`, () => {
        const input = '\u1031\u108F\u1096';
        const expected = 'န္တွေ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1031([#zc])\u103C`, () => {
        const input = '\u1031\u1090\u103C';
        const expected = 'ရွေ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // 'ျ'
    // ...............
    it(String.raw`\u1031([#zc])([#zplc])\u103A`, () => {
        const input = '\u1031\u1014\u1071\u107D';
        const expected = 'န္တျေ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1031([#zpc])\u103A`, () => {
        const input = '\u1031\u1091\u107D';
        const expected = 'ဏ္ဍျေ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1031([#zc])\u103A`, () => {
        const input = '\u1031\u1000\u103A';
        const expected = 'ကျေ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // #
    // ...............
    it(String.raw`\u1031([#zc])([#zplc])`, () => {
        const input = '\u1031\u1086\u1085';
        const expected = 'ဿ္လေ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1031([#zpc])`, () => {
        const input = '\u1031\u1091';
        const expected = 'ဏ္ဍေ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1031([#zc])`, () => {
        const input = '\u1031\u1000';
        const expected = 'ကေ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // 'ြ'
    // ------------------------------------------------------------------------------------------
    it(String.raw`\u103B([#zc])\u1096`, () => {
        const input = '\u1081\u108F\u1096';
        const expected = 'န္တြွ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u103B([#zc])([#zplc])`, () => {
        const input = '\u1082\u1000\u1060';
        const expected = 'က္ကြ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u103B([#zpc])`, () => {
        const input = '\u1082\u1091';
        const expected = 'ဏ္ဍြ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u103B([#zc])`, () => {
        const input = '\u107E\u1000';
        const expected = 'ကြ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // ပါဌ်ဆင့်
    // ------------------------------------------------------------------------------------------
    it(String.raw`([#zc])\u1096`, () => {
        const input = '\u108F\u1096';
        const expected = 'န္တွ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`'([#zc])([#zplc])`, () => {
        const input = '\u1000\u1060';
        const expected = 'က္က';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`'([#zpc]) - (\u106E)`, () => {
        const input = '\u106E';
        const expected = 'ဍ္ဍ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`'([#zpc]) - (\u106F)`, () => {
        const input = '\u106F';
        const expected = 'ဍ္ဎ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`'([#zpc]) - (\u1091)`, () => {
        const input = '\u1091';
        const expected = 'ဏ္ဍ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`'([#zpc]) - (\u1092)`, () => {
        const input = '\u1092';
        const expected = 'ဋ္ဌ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`'([#zpc]) - (\u1097)`, () => {
        const input = '\u1097';
        const expected = 'ဋ္ဋ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`'\u1096`, () => {
        const input = '\u1096';
        const expected = '္တွ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`'@px`, () => {
        const input = '\u1060';
        const expected = '္က';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // 'း'
    // ------------------------------------------------------------------------------------------
    it(String.raw`\u104E`, () => {
        const input = '\u104E';
        const expected = '၎င်း';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1044\u1004\u1039\u1038`, () => {
        const input = '\u1044\u1004\u1039\u1038';
        const expected = '၎င်း';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1040\u1004\u1039\u1038`, () => {
        const input = '\u1040\u1004\u1039\u1038';
        const expected = 'ဝင်း';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // [ဉ  ဥ]
    // ------------------------------------------------------------------------------------------
    it(String.raw`\u1009(\u102F\u1036)`, () => {
        const input = '\u1009\u1033\u1036';
        const expected = 'ဥုံ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1025\u102C`, () => {
        const input = '\u1025\u102C';
        const expected = 'ဉာ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1025\u1039\u1037 (with \u103A\u1037)`, () => {
        const input = '\u1025\u1039\u1037';
        const expected = 'ဉ့်';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1025\u1039\u1037 (with \u103A\u1037)`, () => {
        const input = '\u1025\u1037\u1039';
        const expected = 'ဉ့်';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1025\u1037\u1039 (with \u1037\u103A)`, () => {
        const input = '\u1025\u1037\u1039';
        const expected = 'ဉ့်';

        const result = translit(input, zg2uniRules, {
            preferU1037U103a: true
        });
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1025\u1037\u1039 - (with \u1037\u103A)`, () => {
        const input = '\u1025\u1039\u1037';
        const expected = 'ဉ့်';

        const result = translit(input, zg2uniRules, {
            preferU1037U103a: true
        });
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1025\u1039`, () => {
        const input = '\u1025\u1039';
        const expected = 'ဉ်';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1025\u1010\u1039`, () => {
        const input = '\u1025\u1010\u1039';
        const expected = 'ဉတ်';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // 'ဝ'
    // ------------------------------------------------------------------------------------------
    it(String.raw`\u1040 - (\u1040\u102B)`, () => {
        const input = '\u1040\u102B';
        const expected = 'ဝါ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1040 - (\u1040\u1039)`, () => {
        const input = '\u1040\u1039';
        const expected = 'ဝ်';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1040 - (\u1040\u103A)`, () => {
        const input = '\u1040\u103A';
        const expected = 'ဝျ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1040 - (\u1040\u102D\u102F)`, () => {
        const input = '\u1040\u102D\u102F';
        const expected = 'ဝို';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1040 - (\u1040\u102D)`, () => {
        const input = '\u1040\u102D';
        const expected = 'ဝိ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1040 - (\u1086\u1040\u102D)`, () => {
        const input = '\u1086\u1040\u102D';
        const expected = 'ဿဝိ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1040 - (\u1040\u1086)`, () => {
        const input = '\u1040\u1086';
        const expected = 'ဝဿ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1040 - (\u101D\u1040\u1086)`, () => {
        const input = '\u101D\u1040\u1086';
        const expected = 'ဝဝဿ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1040 - (\u1040)`, () => {
        const input = '\u1040';
        const expected = '၀';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1040 - (\u1040\u1040)`, () => {
        const input = '\u1040\u1040';
        const expected = '၀၀';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1040 - (\u1040,\u1040)`, () => {
        const input = '\u1040,\u1040';
        const expected = '၀,၀';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1040 - (\u1040.\u1040)`, () => {
        const input = '\u1040.\u1040';
        const expected = '၀.၀';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1040 - (\u1040:\u1040)`, () => {
        const input = '\u1040:\u1040';
        const expected = '၀:၀';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1040 - (\u1040\u1038\u1040)`, () => {
        const input = '\u1040\u1038\u1040';
        const expected = '၀း၀';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1040 - (\u1041,\u1040\u1040\u1040)`, () => {
        const input = '\u1041,\u1040\u1040\u1040';
        const expected = '၁,၀၀၀';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1040 - (\u1041\u1040\u1038\u1040)`, () => {
        const input = '\u1041\u1040\u1038\u1040';
        const expected = '၁၀း၀';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // Order resorting
    // ------------------------------------------------------------------------------------------
    it(String.raw`([#zc])\u103A\u102C\u1039\u1038`, () => {
        const input = '\u1031\u101A\u102C\u1000\u103A\u102C\u1039\u1038';
        const expected = 'ယောက်ျား';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#zc])\u103A\u102C\u1039`, () => {
        const input = '\u1031\u101A\u102C\u1000\u103A\u102C\u1039';
        const expected = 'ယောက်ျာ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // Others
    // ------------------------------------------------------------------------------------------
    it(String.raw`\u1039`, () => {
        const input = '\u1000\u1039';
        const expected = 'က်';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u103A`, () => {
        const input = '\u1000\u103A';
        const expected = 'ကျ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u103B`, () => {
        const input = '\u103B';
        const expected = 'ြ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u103C`, () => {
        const input = '\u1000\u103C';
        const expected = 'ကွ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u103D`, () => {
        const input = '\u1000\u103D';
        const expected = 'ကှ';

        const result = translit(input, zg2uniRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });
});
