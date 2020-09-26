import { translit } from '@dagonmetric/translit-js';

import { uni2zgRules } from '../../src/uni2zg-rules';

import { toFailOutput } from './shared.spec';

describe('uni2zg-rules-individual', () => {
    // \u1086
    // ------------------------------------------------------------------------------------------
    it(String.raw`\u1086`, () => {
        const input = 'ဿ';
        const expected = '\u1086';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // \u1014
    // ------------------------------------------------------------------------------------------
    it(String.raw`\u1014`, () => {
        const input = 'န';
        const expected = '\u1014';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // \u101B
    // ------------------------------------------------------------------------------------------
    it(String.raw`\u101B`, () => {
        const input = 'ရ';
        const expected = '\u101B';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // \u1040
    // ------------------------------------------------------------------------------------------
    it(String.raw`\u1040`, () => {
        const input = '၀';
        const expected = '\u1040';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // \u1044
    // ------------------------------------------------------------------------------------------
    it(String.raw`\u1044`, () => {
        const input = '၄';
        const expected = '\u1044';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // \u1009
    // ------------------------------------------------------------------------------------------
    it(String.raw`\u1009`, () => {
        const input = 'ဉ';
        const expected = '\u1009';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // \u1025
    // ------------------------------------------------------------------------------------------
    it(String.raw`\u1025`, () => {
        const input = 'ဥ';
        const expected = '\u1025';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // \u100A
    // ------------------------------------------------------------------------------------------
    it(String.raw`\u100A`, () => {
        const input = 'ည';
        const expected = '\u100A';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // \u108B-\u108D
    // ------------------------------------------------------------------------------------------
    // ပါဌ်ဆင့်
    // ...............
    it(String.raw`\u1004\u103A\u1039([#uc])\u1039\u1010\u103C\u103D\u1031#kx`, () => {
        const input = 'င်္န္တြွေိ';
        const expected = '\u1031\u1083\u108F\u1096\u108B';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1004\u103A\u1039([#uc])\u1039\u1010\u103D\u1031#kx`, () => {
        const input = 'င်္ရ္တွေီ';
        const expected = '\u1031\u1090\u1096\u108C';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1004\u103A\u1039([#uc])\u1039([#uc])\u103C\u1031#kx`, () => {
        const input = 'င်္ဿ္တြေံ';
        const expected = '\u1031\u1084\u1086\u1071\u108D';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1004\u103A\u1039([#uc])\u1039([#uc])\u103B\u1031#kx`, () => {
        const input = 'င်္၀္တျေိ';
        const expected = '\u1031\u101D\u1072\u107D\u108B';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1004\u103A\u1039([#uc])\u1039([#uc])\u1031#kx`, () => {
        const input = 'င်္ဉ္စေီ';
        const expected = '\u1031\u106A\u1065\u108C';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1004\u103A\u1039([#uc])\u1039\u1010\u103C\u103D#kx`, () => {
        const input = 'င်္ည္တြွီ';
        const expected = '\u1084\u106B\u1096\u108C';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1004\u103A\u1039([#uc])\u1039\u1010\u103D\u1031#kx`, () => {
        const input = 'င်္န္တွီ';
        const expected = '\u108F\u1096\u108C';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1004\u103A\u1039([#uc])\u1039([#uc])\u103C#kx`, () => {
        const input = 'င်္ရ္တြံ';
        const expected = '\u1083\u1090\u1072\u108D';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1004\u103A\u1039([#uc])\u1039([#uc])\u103B#kx`, () => {
        const input = 'င်္ရ္ထျိ';
        const expected = '\u1090\u1074\u107D\u108B';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1004\u103A\u1039([#uc])\u1039([#uc])#kx`, () => {
        const input = 'င်္န္ထီ';
        const expected = '\u108F\u1074\u108C';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // '.' (zg: \u1094)
    // ...............
    it(String.raw`\u1004\u103A\u1039([#u2fOr30])\u1031#kx\u102F\u1037`, () => {
        const input = 'င်္နေို့';
        const expected = '\u1031\u108F\u108B\u102F\u1094';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1004\u103A\u1039([#u2fOr30])\u103E\u1031#kx\u1037`, () => {
        const input = 'င်္နှေီ့';
        const expected = '\u1031\u108F\u103D\u108C\u1094';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1004\u103A\u1039([#u2fOr30])#kx\u102F\u1037`, () => {
        const input = 'င်္နီု့';
        const expected = '\u108F\u108C\u102F\u1094';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1004\u103A\u1039([#u2fOr30])\u103E#kx\u1037'`, () => {
        const input = 'င်္နှိ့';
        const expected = '\u108F\u103D\u108B\u1094';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1004\u103A\u1039\u1014\u1031#kx\u1037`, () => {
        const input = 'င်္နေိ့';
        const expected = '\u1031\u1014\u108B\u1094';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1004\u103A\u1039\u1014#kx\u1037`, () => {
        const input = 'င်္နိ့';
        const expected = '\u1014\u108B\u1094';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // '.' (zg: \u1037)
    // ...............
    it(String.raw`\u1004\u103A\u1039([#u37\u1014])\u103C\u1031#kx([\u102B\u102C])\u1037`, () => {
        const input = 'င်္နြေိာ့';
        const expected = '\u1031\u107F\u108F\u108B\u102C\u1037';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1004\u103A\u1039([#u37\u1014])\u103C\u1031#kx\u1037`, () => {
        const input = 'င်္နြေိ့';
        const expected = '\u1031\u107F\u108F\u108B\u1037';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1004\u103A\u1039[\u1009\u1025]\u1031#kx\u1037`, () => {
        const input = 'င်္ဉေိ့';
        const expected = '\u1031\u1025\u108B\u1037';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1004\u103A\u1039([#u37])\u1031#kx\u1037`, () => {
        const input = 'င်္ကေိ့';
        const expected = '\u1031\u1000\u108B\u1037';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1004\u103A\u1039([#u37\u1014])\u103C#kx\u1037`, () => {
        const input = 'င်္နြိ့';
        const expected = '\u103B\u108F\u108B\u1037';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1004\u103A\u1039[\u1009\u1025]#kx\u1037`, () => {
        const input = 'င်္ဉိ့';
        const expected = '\u1025\u108B\u1037';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1004\u103A\u1039([#u37])#kx\u1037`, () => {
        const input = 'င်္ခိ့';
        const expected = '\u1001\u108B\u1037';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // [ု  ူ] (zg: \u1033, \u1034)
    // ...............
    it(String.raw`\u1004\u103A\u1039[\u1009\u1025]\u103E\u1031#kx\u102F`, () => {
        const input = 'င်္ဉှေို';
        const expected = '\u1031\u1025\u108B\u1087\u1033';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1004\u103A\u1039[\u1009\u1025]\u103E\u1031#kx\u1030`, () => {
        const input = 'င်္ဉှေိူ';
        const expected = '\u1031\u1025\u108B\u1087\u1034';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1004\u103A\u1039[\u1009\u1025]\u1031#kx\u102F`, () => {
        const input = 'င်္ဉေို';
        const expected = '\u1031\u1025\u108B\u1033';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1004\u103A\u1039[\u1009\u1025]\u103E#kx\u1030`, () => {
        const input = 'င်္ဉှိူ';
        const expected = '\u1025\u108B\u1087\u1034';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1004\u103A\u1039[\u1009\u1025]#kx\u1030`, () => {
        const input = 'င်္ဉိူ';
        const expected = '\u1025\u108B\u1034';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // [ု  ူ] (zg: \u1088, \u1089)
    // ...............
    it(String.raw`\u1004\u103A\u1039([#u2fOr30])\u103E\u1031#kx\u102F`, () => {
        const input = 'င်္ကှေို';
        const expected = '\u1031\u1000\u108B\u1088';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1004\u103A\u1039([#u2fOr30])\u103E\u1031#kx\u1030`, () => {
        const input = 'င်္ကှေိူ';
        const expected = '\u1031\u1000\u108B\u1089';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1004\u103A\u1039([#u2fOr30])\u103E#kx\u1030`, () => {
        const input = 'င်္ပှိူ';
        const expected = '\u1015\u108B\u1089';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // [ု  ူ] (zg: \u102F, \u1030)
    // ...............
    it(String.raw`\u1004\u103A\u1039([#u2fOr30])\u1031#kx\u102F`, () => {
        const input = 'င်္ကေို';
        const expected = '\u1031\u1000\u108B\u102F';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1004\u103A\u1039([#u2fOr30])\u1031#kx\u1030`, () => {
        const input = 'င်္ကေိူ';
        const expected = '\u1031\u1000\u108B\u1030';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1004\u103A\u1039([#u2fOr30])#kx\u1030`, () => {
        const input = 'င်္ကိူ';
        const expected = '\u1000\u108B\u1030';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    //  ေ
    // ...............
    it(String.raw`\u1004\u103A\u1039([#uc])\u103C\u103D\u103E\u1031#kx`, () => {
        const input = 'င်္နြွှေိ';
        const expected = '\u1031\u1083\u108F\u108A\u108B';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1004\u103A\u1039([#uc])\u103C\u103D\u1031#kx`, () => {
        const input = 'င်္နြွေိ';
        const expected = '\u1031\u1083\u108F\u103C\u108B';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1004\u103A\u1039([#uc])\u103C\u103E\u1031#kx`, () => {
        const input = 'င်္နြှေိ';
        const expected = '\u1031\u107F\u108F\u103D\u108B';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1004\u103A\u1039([#uc])\u103B\u103D\u103E\u1031#kx`, () => {
        const input = 'င်္နျွှေိ';
        const expected = '\u1031\u108F\u108A\u107D\u108B';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1004\u103A\u1039([#uc])\u103B\u103D\u1031#kx`, () => {
        const input = 'င်္နျွေိ';
        const expected = '\u1031\u108F\u103C\u107D\u108B';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1004\u103A\u1039([#uc])\u103B\u103E\u1031#kx`, () => {
        const input = 'င်္နျှေိ';
        const expected = '\u1031\u108F\u103D\u103A\u108B';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1004\u103A\u1039([#uc])\u103D\u103E\u1031#kx`, () => {
        const input = 'င်္နွှေိ';
        const expected = '\u1031\u108F\u108A\u108B';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1004\u103A\u1039([#uc])\u103D\u1031#kx`, () => {
        const input = 'င်္နွေိ';
        const expected = '\u1031\u108F\u103C\u108B';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1004\u103A\u1039([#uc])\u103E\u1031#kx`, () => {
        const input = 'င်္နှေိ';
        const expected = '\u1031\u108F\u103D\u108B';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1004\u103A\u1039([#uc])\u103C\u1031#kx`, () => {
        const input = 'င်္နြေိ';
        const expected = '\u1031\u107F\u108F\u108B';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1004\u103A\u1039([#uc])\u103B\u1031#kx`, () => {
        const input = 'င်္နျေိ';
        const expected = '\u1031\u108F\u103A\u108B';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1004\u103A\u1039([#uc])\u1031#kx`, () => {
        const input = 'င်္ဿေိ';
        const expected = '\u1031\u1086\u108B';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // [ွှ  ွ  ှ]
    // ...............
    it(String.raw`\u1004\u103A\u1039([#uc])\u103C\u103D\u103E#kx`, () => {
        const input = 'င်္နြွှိ';
        const expected = '\u1083\u108F\u108A\u108B';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1004\u103A\u1039([#uc])\u103C\u103D#kx`, () => {
        const input = 'င်္နြွိ';
        const expected = '\u1083\u108F\u103C\u108B';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1004\u103A\u1039([#uc])\u103C\u103E#kx`, () => {
        const input = 'င်္နြှိ';
        const expected = '\u107F\u108F\u103D\u108B';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1004\u103A\u1039([#uc])\u103B\u103D\u103E#kx`, () => {
        const input = 'င်္နျွှိ';
        const expected = '\u108F\u108A\u107D\u108B';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1004\u103A\u1039([#uc])\u103B\u103D#kx`, () => {
        const input = 'င်္နျွိ';
        const expected = '\u108F\u103C\u107D\u108B';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1004\u103A\u1039([#uc])\u103B\u103E#kx`, () => {
        const input = 'င်္နျှိ';
        const expected = '\u108F\u103D\u103A\u108B';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1004\u103A\u1039([#uc])\u103D\u103E#kx`, () => {
        const input = 'င်္နွှိ';
        const expected = '\u108F\u108A\u108B';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1004\u103A\u1039([#uc])\u103D#kx`, () => {
        const input = 'င်္နွိ';
        const expected = '\u108F\u103C\u108B';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1004\u103A\u1039([#uc])\u103E#kx`, () => {
        const input = 'င်္နှိ';
        const expected = '\u108F\u103D\u108B';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // 'ြ'
    // ...............
    it(String.raw`\u1004\u103A\u1039([#uc])\u103C#kx`, () => {
        const input = 'င်္နြိ';
        const expected = '\u107F\u108F\u108B';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // 'ျ'
    // ...............
    it(String.raw`\u1004\u103A\u1039([#uc])\u103B#kx`, () => {
        const input = 'င်္နျိ';
        const expected = '\u108F\u103A\u108B';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // #
    // ...............
    it(String.raw`\u1004\u103A\u1039([#uc])#kx`, () => {
        const input = 'င်္ဿိ';
        const expected = '\u1086\u108B';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // \u1064
    // ------------------------------------------------------------------------------------------
    // ပါဌ်ဆင့်
    // ...............
    it(String.raw`\u1004\u103A\u1039([#uc])\u1039\u1010\u103C\u103D\u1031`, () => {
        const input = 'င်္န္တြွေ';
        const expected = '\u1031\u1083\u108F\u1096\u1064';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1004\u103A\u1039([#uc])\u1039\u1010\u103D\u1031`, () => {
        const input = 'င်္ရ္တွေ';
        const expected = '\u1031\u1090\u1096\u1064';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1004\u103A\u1039([#uc])\u1039([#uc])\u103C\u1031`, () => {
        const input = 'င်္ဿ္တြေ';
        const expected = '\u1031\u1084\u1086\u1071\u1064';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1004\u103A\u1039([#uc])\u1039([#uc])\u103B\u1031`, () => {
        const input = 'င်္၀္တျေ';
        const expected = '\u1031\u101D\u1072\u107D\u1064';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1004\u103A\u1039([#uc])\u1039([#uc])\u1031`, () => {
        const input = 'င်္ဉ္စေ';
        const expected = '\u1031\u106A\u1065\u1064';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1004\u103A\u1039([#uc])\u1039\u1010\u103C\u103D`, () => {
        const input = 'င်္ည္တြွ';
        const expected = '\u1084\u106B\u1096\u1064';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1004\u103A\u1039([#uc])\u1039\u1010\u103D\u1031`, () => {
        const input = 'င်္န္တွ';
        const expected = '\u108F\u1096\u1064';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1004\u103A\u1039([#uc])\u1039([#uc])\u103C`, () => {
        const input = 'င်္ရ္တြ';
        const expected = '\u1083\u1090\u1072\u1064';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1004\u103A\u1039([#uc])\u1039([#uc])\u103B`, () => {
        const input = 'င်္ရ္ထျ';
        const expected = '\u1090\u1074\u107D\u1064';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1004\u103A\u1039([#uc])\u1039([#uc])`, () => {
        const input = 'င်္န္ထ';
        const expected = '\u108F\u1074\u1064';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // '.' (zg: \u1094)
    // ...............
    // '.' (zg: \u1094)
    // ...............
    it(String.raw`\u1004\u103A\u1039([#u2fOr30])\u1031\u102F\u1037`, () => {
        const input = 'င်္နေု့';
        const expected = '\u1031\u108F\u1064\u102F\u1094';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1004\u103A\u1039([#u2fOr30])\u103E\u1031\u1037`, () => {
        const input = 'င်္နှေ့';
        const expected = '\u1031\u108F\u103D\u1064\u1094';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1004\u103A\u1039([#u2fOr30])\u102F\u1037`, () => {
        const input = 'င်္နု့';
        const expected = '\u108F\u1064\u102F\u1094';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1004\u103A\u1039([#u2fOr30])\u103E\u1037'`, () => {
        const input = 'င်္နှ့';
        const expected = '\u108F\u103D\u1064\u1094';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1004\u103A\u1039\u1014\u1031\u1037`, () => {
        const input = 'င်္နေ့';
        const expected = '\u1031\u1014\u1064\u1094';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1004\u103A\u1039\u1014\u1037`, () => {
        const input = 'င်္န့';
        const expected = '\u1014\u1064\u1094';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // '.' (zg: \u1037)
    // ...............
    it(String.raw`\u1004\u103A\u1039([#u37\u1014])\u103C\u1031\u1037`, () => {
        const input = 'င်္နြေ့';
        const expected = '\u1031\u107F\u108F\u1064\u1037';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1004\u103A\u1039[\u1009\u1025]\u1031\u1037`, () => {
        const input = 'င်္ဉေ့';
        const expected = '\u1031\u1025\u1064\u1037';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1004\u103A\u1039([#u37])\u1031\u1037`, () => {
        const input = 'င်္ကေ့';
        const expected = '\u1031\u1000\u1064\u1037';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1004\u103A\u1039([#u37\u1014])\u103C\u1037`, () => {
        const input = 'င်္နြ့';
        const expected = '\u103B\u108F\u1064\u1037';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1004\u103A\u1039[\u1009\u1025]\u1037`, () => {
        const input = 'င်္ဉ့';
        const expected = '\u1025\u1064\u1037';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1004\u103A\u1039([#u37])\u1037`, () => {
        const input = 'င်္ခ့';
        const expected = '\u1001\u1064\u1037';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // [ု  ူ] (zg: \u1033, \u1034)
    // ...............
    it(String.raw`\u1004\u103A\u1039[\u1009\u1025]\u103E\u1031\u102F`, () => {
        const input = 'င်္ဉှေု';
        const expected = '\u1031\u1025\u1064\u1087\u1033';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1004\u103A\u1039[\u1009\u1025]\u103E\u1031\u1030`, () => {
        const input = 'င်္ဉှေူ';
        const expected = '\u1031\u1025\u1064\u1087\u1034';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1004\u103A\u1039[\u1009\u1025]\u1031\u102F`, () => {
        const input = 'င်္ဉေု';
        const expected = '\u1031\u1025\u1064\u1033';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1004\u103A\u1039[\u1009\u1025]\u103E\u1030`, () => {
        const input = 'င်္ဉှူ';
        const expected = '\u1025\u1064\u1087\u1034';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1004\u103A\u1039[\u1009\u1025]\u1030`, () => {
        const input = 'င်္ဉူ';
        const expected = '\u1025\u1064\u1034';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // [ု  ူ] (zg: \u1088, \u1089)
    // ...............
    it(String.raw`\u1004\u103A\u1039([#u2fOr30])\u103E\u1031\u102F`, () => {
        const input = 'င်္ကှေု';
        const expected = '\u1031\u1000\u1064\u1088';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1004\u103A\u1039([#u2fOr30])\u103E\u1031\u1030`, () => {
        const input = 'င်္ကှေူ';
        const expected = '\u1031\u1000\u1064\u1089';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1004\u103A\u1039([#u2fOr30])\u103E\u1030`, () => {
        const input = 'င်္ပှူ';
        const expected = '\u1015\u1064\u1089';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // [ု  ူ] (zg: \u102F, \u1030)
    // ...............
    it(String.raw`\u1004\u103A\u1039([#u2fOr30])\u1031\u102F`, () => {
        const input = 'င်္ကေု';
        const expected = '\u1031\u1000\u1064\u102F';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1004\u103A\u1039([#u2fOr30])\u1031\u1030`, () => {
        const input = 'င်္ကေူ';
        const expected = '\u1031\u1000\u1064\u1030';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1004\u103A\u1039([#u2fOr30])\u1030`, () => {
        const input = 'င်္ကူ';
        const expected = '\u1000\u1064\u1030';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    //  ေ
    // ...............
    it(String.raw`\u1004\u103A\u1039([#uc])\u103C\u103D\u103E\u1031`, () => {
        const input = 'င်္နြွှေ';
        const expected = '\u1031\u1083\u108F\u108A\u1064';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1004\u103A\u1039([#uc])\u103C\u103D\u1031`, () => {
        const input = 'င်္နြွေ';
        const expected = '\u1031\u1083\u108F\u103C\u1064';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1004\u103A\u1039([#uc])\u103C\u103E\u1031`, () => {
        const input = 'င်္နြှေ';
        const expected = '\u1031\u107F\u108F\u103D\u1064';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1004\u103A\u1039([#uc])\u103C\u1031`, () => {
        const input = 'င်္နြေ';
        const expected = '\u1031\u107F\u108F\u1064';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1004\u103A\u1039([#uc])\u103B\u103D\u103E\u1031`, () => {
        const input = 'င်္နျွှေ';
        const expected = '\u1031\u108F\u108A\u107D\u1064';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1004\u103A\u1039([#uc])\u103B\u103D\u1031`, () => {
        const input = 'င်္နျွေ';
        const expected = '\u1031\u108F\u103C\u107D\u1064';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1004\u103A\u1039([#uc])\u103B\u103E\u1031`, () => {
        const input = 'င်္နျှေ';
        const expected = '\u1031\u108F\u103D\u103A\u1064';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1004\u103A\u1039([#uc])\u103B\u1031`, () => {
        const input = 'င်္နျေ';
        const expected = '\u1031\u108F\u103A\u1064';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1004\u103A\u1039([#uc])\u103D\u103E\u1031`, () => {
        const input = 'င်္နွှေ';
        const expected = '\u1031\u108F\u108A\u1064';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1004\u103A\u1039([#uc])\u103D\u1031`, () => {
        const input = 'င်္နွေ';
        const expected = '\u1031\u108F\u103C\u1064';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1004\u103A\u1039([#uc])\u103E\u1031`, () => {
        const input = 'င်္နှေ';
        const expected = '\u1031\u108F\u103D\u1064';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1004\u103A\u1039([#uc])\u1031`, () => {
        const input = 'င်္ဿေ';
        const expected = '\u1031\u1086\u1064';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // [ွှ  ွ  ှ]
    // ...............
    it(String.raw`\u1004\u103A\u1039([#uc])\u103C\u103D\u103E`, () => {
        const input = 'င်္နြွှ';
        const expected = '\u1083\u108F\u108A\u1064';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1004\u103A\u1039([#uc])\u103C\u103D`, () => {
        const input = 'င်္နြွ';
        const expected = '\u1083\u108F\u103C\u1064';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1004\u103A\u1039([#uc])\u103C\u103E`, () => {
        const input = 'င်္နြှ';
        const expected = '\u107F\u108F\u103D\u1064';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1004\u103A\u1039([#uc])\u103B\u103D\u103E`, () => {
        const input = 'င်္နျွှ';
        const expected = '\u108F\u108A\u107D\u1064';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1004\u103A\u1039([#uc])\u103B\u103D`, () => {
        const input = 'င်္နျွ';
        const expected = '\u108F\u103C\u107D\u1064';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1004\u103A\u1039([#uc])\u103B\u103E`, () => {
        const input = 'င်္နျှ';
        const expected = '\u108F\u103D\u103A\u1064';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1004\u103A\u1039([#uc])\u103D\u103E`, () => {
        const input = 'င်္နွှ';
        const expected = '\u108F\u108A\u1064';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1004\u103A\u1039([#uc])\u103D`, () => {
        const input = 'င်္နွ';
        const expected = '\u108F\u103C\u1064';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1004\u103A\u1039([#uc])\u103E`, () => {
        const input = 'င်္နှ';
        const expected = '\u108F\u103D\u1064';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // 'ြ'
    // ...............
    it(String.raw`\u1004\u103A\u1039([#uc])\u103C`, () => {
        const input = 'င်္နြ';
        const expected = '\u107F\u108F\u1064';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // 'ျ'
    // ...............
    it(String.raw`\u1004\u103A\u1039([#uc])\u103B`, () => {
        const input = 'င်္နျ';
        const expected = '\u108F\u103A\u1064';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // #
    // ...............
    it(String.raw`\u1004\u103A\u1039([#uc])`, () => {
        const input = 'င်္ဿ';
        const expected = '\u1086\u1064';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // \u108B-\u108D
    // ------------------------------------------------------------------------------------------
    it(String.raw`\u1004\u103A\u1039#kx' (\u108B)`, () => {
        const input = 'င်္ိ';
        const expected = '\u108B';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1004\u103A\u1039#kx' (\u108C)`, () => {
        const input = 'င်္ီ';
        const expected = '\u108C';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1004\u103A\u1039#kx' (\u108D)`, () => {
        const input = 'င်္ံ';
        const expected = '\u108D';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // \u1064
    // ------------------------------------------------------------------------------------------
    it(String.raw`\u1004\u103A\u1039`, () => {
        const input = 'င်္';
        const expected = '\u1064';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // // \u108E
    // // ------------------------------------------------------------------------------------------
    // ပါဌ်ဆင့်
    // ...............
    it(String.raw`([#uc])\u1039\u1010\u103C\u103D\u1031\u102D\u1036`, () => {
        const input = 'န္တြွေိံ';
        const expected = '\u1031\u1083\u108F\u1096\u108E';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#uc])\u1039([#uc])\u103C\u1031\u102D\u1036`, () => {
        const input = 'န္တြေိံ';
        const expected = '\u1031\u1083\u108F\u1072\u108E';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#uc])\u1039([#uc])\u103C\u102D\u1036`, () => {
        const input = 'န္တြိံ';
        const expected = '\u1083\u108F\u1072\u108E';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // ...............
    it(String.raw`([#uc])\u103C\u103D\u103E\u1031\u102D\u1036`, () => {
        const input = 'နြွှေိံ';
        const expected = '\u1031\u1083\u108F\u108A\u108E';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#uc])\u103C\u103D\u1031\u102D\u1036`, () => {
        const input = 'နြွေိံ';
        const expected = '\u1031\u1083\u108F\u103C\u108E';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#uc])\u103C\u103E\u1031\u102D\u1036`, () => {
        const input = 'နြှေိံ';
        const expected = '\u1031\u107F\u108F\u103D\u108E';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#uc])\u103C\u1031\u102D\u1036`, () => {
        const input = 'နြေိံ';
        const expected = '\u1031\u107F\u108F\u108E';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#uc])\u103C\u103D\u103E\u102D\u1036`, () => {
        const input = 'နြွှိံ';
        const expected = '\u1083\u108F\u108A\u108E';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#uc])\u103C\u103D\u102D\u1036`, () => {
        const input = 'နြွိံ';
        const expected = '\u1083\u108F\u103C\u108E';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#uc])\u103C\u103E\u102D\u1036`, () => {
        const input = 'နြှိံ';
        const expected = '\u107F\u108F\u103D\u108E';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#uc])\u103C\u102D\u1036`, () => {
        const input = 'နြိံ';
        const expected = '\u107F\u108F\u108E';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // ပါဌ်ဆင့် (zg: [\u1060-\u1063], [\u1065-\u1069], [\u106C-\u107C], \u1085, \u1093, \u1096)
    // ------------------------------------------------------------------------------------------
    // 'ေ'
    // ...............
    it(String.raw`\u100D\u1039\u100D\u103C\u1031`, () => {
        const input = 'ဍ္ဍြေ';
        const expected = '\u1031\u1081\u106E';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u100D\u1039\u100D\u1031`, () => {
        const input = 'ဍ္ဍေ';
        const expected = '\u1031\u106E';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u100D\u1039\u100E\u103C\u1031`, () => {
        const input = 'ဍ္ဎြေ';
        const expected = '\u1031\u1081\u106F';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u100D\u1039\u100E\u1031`, () => {
        const input = 'ဍ္ဎေ';
        const expected = '\u1031\u106F';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u100F\u1039\u100D\u103C\u1031`, () => {
        const input = 'ဏ္ဍြေ';
        const expected = '\u1031\u1082\u1091';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u100F\u1039\u100D\u1031`, () => {
        const input = 'ဏ္ဍေ';
        const expected = '\u1031\u1091';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u100B\u1039\u100C\u103C\u1031`, () => {
        const input = 'ဋ္ဌြေ';
        const expected = '\u1031\u1081\u1092';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u100B\u1039\u100C\u1031`, () => {
        const input = 'ဋ္ဌေ';
        const expected = '\u1031\u1092';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u100B\u1039\u100B\u103C\u1031`, () => {
        const input = 'ဋ္ဋြေ';
        const expected = '\u1031\u1081\u1097';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u100B\u1039\u100B\u1031`, () => {
        const input = 'ဋ္ဋေ';
        const expected = '\u1031\u1097';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#uc])\u1039\u1010\u103C\u103D\u1031' - (\u1081)`, () => {
        const input = 'န္တြွေ';
        const expected = '\u1031\u1081\u108F\u1096';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#uc])\u1039\u1010\u103C\u103D\u1031' - (\u1082)`, () => {
        const input = 'က္တြွေ';
        const expected = '\u1031\u1082\u1000\u1096';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#uc])\u1039\u1010\u103D\u1031`, () => {
        const input = 'က္တွေ';
        const expected = '\u1031\u1000\u1096';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#ulc])\u1039#plx\u103C\u1031`, () => {
        const input = 'ထ္ထြေ';
        const expected = '\u1031\u1082\u1011\u1073';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#uc])\u1039#psx\u103C\u1031`, () => {
        const input = 'ခ္ထြေ';
        const expected = '\u1031\u1081\u1001\u1074';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#ulc])\u1039#plx\u103B\u1031`, () => {
        const input = 'က္ထျေ';
        const expected = '\u1031\u1000\u1073\u107D';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#uc])\u1039#psx\u103B\u1031`, () => {
        const input = 'ခ္ထျေ';
        const expected = '\u1031\u1001\u1074\u107D';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#ulc])\u1039#plx\u1031`, () => {
        const input = 'ထ္ထေ';
        const expected = '\u1031\u1011\u1073';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#uc])\u1039#psx\u1031`, () => {
        const input = 'န္တေ';
        const expected = '\u1031\u108F\u1072';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // 'ွ'
    // ...............
    it(String.raw`([#uc])\u1039\u1010\u103C\u103D`, () => {
        const input = 'က္တြွ';
        const expected = '\u1082\u1000\u1096';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#uc])\u1039\u1010\u103D`, () => {
        const input = 'က္တွ';
        const expected = '\u1000\u1096';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // 'ြ'
    // ...............
    it(String.raw`\u100D\u1039\u100D\u103C`, () => {
        const input = 'ဍ္ဍြ';
        const expected = '\u1081\u106E';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u100F\u1039\u100D\u103C`, () => {
        const input = 'ဏ္ဍြ';
        const expected = '\u1082\u1091';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#ulc])\u1039#plx\u103C`, () => {
        const input = 'ထ္ထြ';
        const expected = '\u1082\u1011\u1073';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#uc])\u1039#psx\u103C`, () => {
        const input = 'န္တြ';
        const expected = '\u1081\u108F\u1072';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // #
    // ...............
    it(String.raw`\u100D\u1039\u100D`, () => {
        const input = 'ဍ္ဍ';
        const expected = '\u106E';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u100D\u1039\u100E`, () => {
        const input = 'ဍ္ဎ';
        const expected = '\u106F';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u100F\u1039\u100D`, () => {
        const input = 'ဏ္ဍ';
        const expected = '\u1091';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u100B\u1039\u100C`, () => {
        const input = 'ဋ္ဌ';
        const expected = '\u1092';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u100B\u1039\u100B`, () => {
        const input = 'ဋ္ဋ';
        const expected = '\u1097';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#ulc])\u1039#plx`, () => {
        const input = 'ထ္ထ';
        const expected = '\u1011\u1073';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#uc])\u1039#psx`, () => {
        const input = 'န္တ';
        const expected = '\u108F\u1072';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#uc])\u1039#psx' - \u106C`, () => {
        const input = 'က္ဋ';
        const expected = '\u1000\u106C';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#uc])\u1039#psx' - \u106D`, () => {
        const input = 'က္ဌ';
        const expected = '\u1000\u106D';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // 'း' (zg: \u1038)
    // ------------------------------------------------------------------------------------------
    it(String.raw`\u104E\u1004\u103A\u1038`, () => {
        const input = '၎င်း';
        const expected = '\u104E';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1044\u1004\u103A\u1038`, () => {
        const input = '၄င်း';
        const expected = '\u104E';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1040\u1004\u103A\u1038`, () => {
        const input = '၀င်း';
        const expected = '\u101D\u1004\u1039\u1038';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // '.' (zg: \u1095)
    // ------------------------------------------------------------------------------------------

    // '.' (zg: \u1094)
    // ------------------------------------------------------------------------------------------
    // 'ေ' + 'ု'
    // ...............
    it(String.raw`([#u2fOr30])\u1031([\u102D\u102E])\u102F\u1037`, () => {
        const input = 'ကေို့';
        const expected = '\u1031\u1000\u102D\u102F\u1094';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#u2fOr30])\u1031\u102F([\u1032\u1036])\u1037`, () => {
        const input = 'နေုဲ့';
        const expected = '\u1031\u108F\u102F\u1032\u1094';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#u2fOr30])\u1031\u102F\u1037\u103A`, () => {
        const input = 'နေု့်';
        const expected = '\u1031\u108F\u1039\u102F\u1094';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#u2fOr30])\u103A\u1031\u102F\u1037`, () => {
        const input = 'န်ေု့';
        const expected = '\u1031\u108F\u1039\u102F\u1094';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#u2fOr30])\u1031\u102F\u1037`, () => {
        const input = 'နေု့';
        const expected = '\u1031\u108F\u102F\u1094';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // 'ေ' + 'ှ'
    // ...............
    it(String.raw`([#u2fOr30])\u103E\u1031([\u102D\u102E\u1032\u1036])\u1037`, () => {
        const input = 'ကှေိ့';
        const expected = '\u1031\u1000\u103D\u102D\u1094';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#u2fOr30])\u103E\u1031\u1037\u103A`, () => {
        const input = 'နှေ့်';
        const expected = '\u1031\u108F\u103D\u1039\u1094';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#u2fOr30])\u103A\u103E\u1031\u1037`, () => {
        const input = 'န်ှေ့';
        const expected = '\u1031\u108F\u103D\u1039\u1094';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#u2fOr30])\u103E\u103A\u1031\u1037`, () => {
        const input = 'နှ်ေ့';
        const expected = '\u1031\u108F\u103D\u1039\u1094';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#u2fOr30])\u103E\u1031\u1037`, () => {
        const input = 'နှေ့';
        const expected = '\u1031\u108F\u103D\u1094';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // 'ု'
    // ...............
    it(String.raw`([#u2fOr30])([\u102D\u102E])\u102F\u1037`, () => {
        const input = 'နို့';
        const expected = '\u108F\u102D\u102F\u1094';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#u2fOr30])\u102F([\u1032\u1036])\u1037`, () => {
        const input = 'နုဲ့';
        const expected = '\u108F\u102F\u1032\u1094';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#u2fOr30])\u102F\u1037\u103A`, () => {
        const input = 'နု့်';
        const expected = '\u108F\u1039\u102F\u1094';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#u2fOr30])\u103A\u102F\u1037`, () => {
        const input = 'န်ု့';
        const expected = '\u108F\u1039\u102F\u1094';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#u2fOr30])\u102F\u1037`, () => {
        const input = 'နု့';
        const expected = '\u108F\u102F\u1094';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // 'ှ'
    // ...............
    it(String.raw`([#u2fOr30])\u103E([\u102D\u102E\u1032\u1036])\u1037`, () => {
        const input = 'နှိ့';
        const expected = '\u108F\u103D\u102D\u1094';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#u2fOr30])\u103E\u1037\u103A`, () => {
        const input = 'နှ့်';
        const expected = '\u108F\u103D\u1039\u1094';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#u2fOr30])\u103A\u103E\u1037`, () => {
        const input = 'န်ှ့';
        const expected = '\u108F\u103D\u1039\u1094';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#u2fOr30])\u103E\u103A\u1037`, () => {
        const input = 'နှ့်';
        const expected = '\u108F\u103D\u1039\u1094';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#u2fOr30])\u103E\u1037`, () => {
        const input = 'နှ့';
        const expected = '\u108F\u103D\u1094';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // 'န'
    // ...............
    it(String.raw`\u1014\u1031\u1037\u103A`, () => {
        const input = 'နေ့်';
        const expected = '\u1031\u1014\u1039\u1094';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1014\u103A\u1031\u1037`, () => {
        const input = 'န်ေ့';
        const expected = '\u1031\u1014\u1039\u1094';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1014\u1031([\u102D\u102E\u1032\u1036])\u1037`, () => {
        const input = 'နေိ့';
        const expected = '\u1031\u1014\u102D\u1094';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1014\u1031\u1037`, () => {
        const input = 'နေ့';
        const expected = '\u1031\u1014\u1094';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1014\u103A\u1037`, () => {
        const input = 'န့်';
        const expected = '\u1014\u1039\u1094';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1014\u1037\u103A`, () => {
        const input = 'န့်';
        const expected = '\u1014\u1039\u1094';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1014([\u102D\u102E\u1032\u1036])\u1037`, () => {
        const input = 'နိ့';
        const expected = '\u1014\u102D\u1094';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1014\u1037`, () => {
        const input = 'န့';
        const expected = '\u1014\u1094';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // '.' (zg: \u1037)
    // ------------------------------------------------------------------------------------------
    it(String.raw`([#u37\u1014])\u103C\u1031\u1037\u103A`, () => {
        const input = 'နြေ့်';
        const expected = '\u1031\u107F\u108F\u1039\u1037';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#u37\u1014])\u103A\u103C\u1031\u1037`, () => {
        const input = 'န်ြေ့';
        const expected = '\u1031\u107F\u108F\u1039\u1037';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#u37\u1014])\u103C\u1031([\u102D\u102E\u1032\u1036])\u1037`, () => {
        const input = 'နြေိ့';
        const expected = '\u1031\u107F\u108F\u102D\u1037';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#u37\u1014])\u103C\u1031\u1037`, () => {
        const input = 'နြေ့';
        const expected = '\u1031\u103B\u108F\u1037';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // 'ေ'
    // ...............
    it(String.raw`[\u1009\u1025]\u103A\u1031\u1037`, () => {
        const input = 'ဉ်ေ့';
        const expected = '\u1031\u1025\u1039\u1037';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`[\u1009\u1025]\u1031\u1037\u103A`, () => {
        const input = 'ဉေ့်';
        const expected = '\u1031\u1025\u1039\u1037';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#u37])\u103A\u1031\u1037`, () => {
        const input = 'က်ေ့';
        const expected = '\u1031\u1000\u1039\u1037';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#u37])\u1031\u1037\u103A`, () => {
        const input = 'ကေ့်';
        const expected = '\u1031\u1000\u1039\u1037';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`[\u1009\u1025]\u1031([\u102D\u102E\u1032\u1036])\u1037`, () => {
        const input = 'ဉေိ့';
        const expected = '\u1031\u1025\u102D\u1037';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#u37])\u1031([\u102D\u102E\u1032\u1036])\u1037`, () => {
        const input = 'ကေိ့';
        const expected = '\u1031\u1000\u102D\u1037';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`[\u1009\u1025]\u1031\u1037`, () => {
        const input = 'ဉေ့';
        const expected = '\u1031\u1025\u1037';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#u37])\u1031\u1037`, () => {
        const input = 'ကေ့';
        const expected = '\u1031\u1000\u1037';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // 'ြ'
    // ...............
    it(String.raw`([#u37\u1014])\u103C([\u102D\u102E\u1032\u1036])\u1037`, () => {
        const input = 'နြိ့';
        const expected = '\u107F\u108F\u102D\u1037';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#u37\u1014])\u103C\u1037\u103A`, () => {
        const input = 'နြ့်';
        const expected = '\u107F\u108F\u1039\u1037';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#u37\u1014])\u103A\u103C\u1037`, () => {
        const input = 'န်ြ့';
        const expected = '\u107F\u108F\u1039\u1037';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#u37\u1014])\u103C\u1037`, () => {
        const input = 'နြ့';
        const expected = '\u103B\u108F\u1037';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // #
    // ...............
    it(String.raw`[\u1009\u1025]\u1037\u103A`, () => {
        const input = 'ဉ့်';
        const expected = '\u1025\u1039\u1037';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`[\u1009\u1025]\u103A\u1037`, () => {
        const input = 'ဉ့်';
        const expected = '\u1025\u1039\u1037';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#u37])\u1037\u103A`, () => {
        const input = 'က့်';
        const expected = '\u1000\u1039\u1037';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#u37])\u103A\u1037`, () => {
        const input = 'က့်';
        const expected = '\u1000\u1039\u1037';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`[\u1009\u1025]([\u102D\u102E\u1032\u1036])\u1037`, () => {
        const input = 'ဉိ့';
        const expected = '\u1025\u102D\u1037';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#u37])([\u102D\u102E\u1032\u1036])\u1037`, () => {
        const input = 'ကိ့';
        const expected = '\u1000\u102D\u1037';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`[\u1009\u1025]\u1037`, () => {
        const input = 'ဉ့';
        const expected = '\u1025\u1037';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#u37])\u1037`, () => {
        const input = 'က့';
        const expected = '\u1000\u1037';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    //  [ဲ  ံ] (zg: \u1032, \u1036) - [ု  ူ] + [ဲ  ံ] မှ [ဲ  ံ] + [ု  ူ] သို့
    // ------------------------------------------------------------------------------------------
    // 'ျ' + [ွှ  ွ] + 'ေ'
    // ...............
    it(String.raw`([#uc])\u103B\u103D\u103E\u1031\u102F([\u1032\u1036])`, () => {
        const input = 'ကျွှေုဲ';
        const expected = '\u1031\u1000\u108A\u107D\u1032\u1033';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#uc])\u103B\u103D\u103E\u1031\u1030([\u1032\u1036])`, () => {
        const input = 'ကျွှေူဲ';
        const expected = '\u1031\u1000\u108A\u107D\u1032\u1034';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#uc])\u103B\u103D\u1031\u102F([\u1032\u1036])`, () => {
        const input = 'နျွေုဲ';
        const expected = '\u1031\u108F\u103C\u107D\u1032\u1033';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#uc])\u103B\u103D\u1031\u1030([\u1032\u1036])`, () => {
        const input = 'နျွေူဲ';
        const expected = '\u1031\u108F\u103C\u107D\u1032\u1034';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // 'ျ' + 'ှ' + 'ေ'
    // ...............
    it(String.raw`([#uc])\u103B\u103E\u1031\u102F([\u1032\u1036])`, () => {
        const input = 'နျှေုဲ';
        const expected = '\u1031\u108F\u103D\u103a\u1032\u1033';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#uc])\u103B\u103E\u1031\u1030([\u1032\u1036])`, () => {
        const input = 'နျှေူဲ';
        const expected = '\u1031\u108F\u103D\u103a\u1032\u1034';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // 'ျ' + 'ေ'
    // ...............
    it(String.raw`([#uc])\u103B\u1031\u102F([\u1032\u1036])`, () => {
        const input = 'နျေုဲ';
        const expected = '\u1031\u108F\u103a\u1032\u1033';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // 'ျ' + [ွှ  ွ]
    // ...............
    it(String.raw`([#uc])\u103B\u103D\u103E\u1030([\u1032\u1036])`, () => {
        const input = 'နျွှူံ';
        const expected = '\u108F\u108A\u107D\u1036\u1034';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#uc])\u103B\u103D\u1030([\u1032\u1036])`, () => {
        const input = 'နျွူဲ';
        const expected = '\u108F\u103C\u107D\u1032\u1034';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // 'ျ' + 'ှ'
    // ...............
    it(String.raw`([#uc])\u103B\u103E\u102F([\u1032\u1036])`, () => {
        const input = 'နျှုဲ';
        const expected = '\u108F\u103D\u103a\u1032\u1033';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // 'ျ'
    // ...............
    it(String.raw`([#uc])\u103B\u1030([\u1032\u1036])`, () => {
        const input = 'နျူဲ';
        const expected = '\u108F\u103a\u1032\u1034';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // [ွှ  ွ] + 'ေ'
    // ...............
    it(String.raw`([#uc])\u103D\u103E\u1031\u1030([\u1032\u1036])`, () => {
        const input = 'နွှေူဲ';
        const expected = '\u1031\u108F\u108A\u1032\u1034';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#uc])\u103D\u1031\u1030([\u1032\u1036])`, () => {
        const input = 'နွေူဲ';
        const expected = '\u1031\u108F\u103C\u1032\u1034';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // [ွှ  ွ]
    // ...............
    it(String.raw`([#uc])\u103D\u103E\u1030([\u1032\u1036])`, () => {
        const input = 'နွှူဲ';
        const expected = '\u108F\u108A\u1032\u1034';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#uc])\u103D\u1030([\u1032\u1036])`, () => {
        const input = 'နွူဲ';
        const expected = '\u108F\u103C\u1032\u1034';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // [ု  ူ] (zg: \u1033, \u1034)
    // ------------------------------------------------------------------------------------------
    // 'ေ' + 'ှ' + [ိ  ီ]
    // ...............
    it(String.raw`[\u1009\u1025]\u103E\u1031([\u102D\u102E])\u102F`, () => {
        const input = 'ဉှေို';
        const expected = '\u1031\u1025\u102D\u1087\u1033';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // 'ေ' + 'ှ' + '်'
    // ...............
    it(String.raw`[\u1009\u1025]\u103E\u103A\u1031\u1030`, () => {
        const input = 'ဉှ်ေူ';
        const expected = '\u1031\u1025\u1039\u1087\u1034';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`[\u1009\u1025]\u103A\u103E\u1031\u1030`, () => {
        const input = 'ဉ်ှေူ';
        const expected = '\u1031\u1025\u1039\u1087\u1034';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // 'ေ' + [ိ  ီ]
    // ...............
    it(String.raw`[\u1009\u1025]\u1031([\u102D\u102E])\u1030`, () => {
        const input = 'ဉေိူ';
        const expected = '\u1031\u1025\u102D\u1034';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // 'ေ' + 'ှ'
    // ...............
    it(String.raw`[\u1009\u1025]\u103E\u1031\u1030`, () => {
        const input = 'ဉှေူ';
        const expected = '\u1031\u1025\u1087\u1034';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // 'ေ'
    // ...............
    it(String.raw`[\u1009\u1025]\u1031\u1030`, () => {
        const input = 'ဉေူ';
        const expected = '\u1031\u1025\u1034';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // 'ှ' + [ိ  ီ]
    // ...............
    it(String.raw`[\u1009\u1025]\u103E([\u102D\u102E])\u1030`, () => {
        const input = 'ဉှိူ';
        const expected = '\u1025\u102D\u1087\u1034';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // [ိ  ီ]
    // ...............
    it(String.raw`[\u1009\u1025]([\u102D\u102E])\u1030`, () => {
        const input = 'ဉိူ';
        const expected = '\u1025\u102D\u1034';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // '်'
    // ...............
    it(String.raw`[\u1009\u1025]\u103A\u1030`, () => {
        const input = 'ဉ်ူ';
        const expected = '\u1025\u1039\u1034';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // 'ှ'
    // ...............
    it(String.raw`[\u1009\u1025]\u103E\u1030`, () => {
        const input = 'ဉှူ';
        const expected = '\u1025\u1087\u1034';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // #
    // ...............
    it(String.raw`[\u1009\u1025]\u1030`, () => {
        const input = 'ဉူ';
        const expected = '\u1025\u1034';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // [ု  ူ] (zg: \u1088, \u1089)
    // ------------------------------------------------------------------------------------------
    // 'ေ' + 'ှ' + [ိ  ီ]
    // ...............
    it(String.raw`([#u2fOr30])\u103E\u1031([\u102D\u102E])\u102F`, () => {
        const input = 'နှေို';
        const expected = '\u1031\u108F\u102D\u1088';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#u2fOr30])\u103E\u1031([\u102D\u102E])\u1030`, () => {
        const input = 'နှေိူ';
        const expected = '\u1031\u108F\u102D\u1089';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // 'ေ' + 'ှ' + '်'
    // ...............
    it(String.raw`([#u2fOr30])\u103E\u103A\u1031\u1030`, () => {
        const input = 'နှ်ေူ';
        const expected = '\u1031\u108F\u1039\u1089';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#u2fOr30])\u103A\u103E\u1031\u1030`, () => {
        const input = 'န်ှေူ';
        const expected = '\u1031\u108F\u1039\u1089';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // 'ေ' + 'ှ'
    // ...............
    it(String.raw`([#u2fOr30])\u103E\u1031\u1030`, () => {
        const input = 'နှေူ';
        const expected = '\u1031\u108F\u1089';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // 'ှ' + [ိ  ီ]
    // ...............
    it(String.raw`([#u2fOr30])\u103E([\u102D\u102E])\u1030`, () => {
        const input = 'နှိူ';
        const expected = '\u108F\u102D\u1089';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // 'ှ' + '်'
    // ...............
    it(String.raw`([#u2fOr30])\u103E\u103A\u1030`, () => {
        const input = 'နှ်ူ';
        const expected = '\u108F\u1039\u1089';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#u2fOr30])\u103A\u103E\u1030`, () => {
        const input = 'န်ှူ';
        const expected = '\u108F\u1039\u1089';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // 'ှ'
    // ...............
    it(String.raw`([#u2fOr30])\u103E\u1030`, () => {
        const input = 'နှူ';
        const expected = '\u108F\u1089';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // [ု  ူ] (zg: \u102F, \u1030)
    // ------------------------------------------------------------------------------------------
    // 'ေ' + '်'
    // ...............
    it(String.raw`([#u2fOr30])\u103A\u1031\u1030`, () => {
        const input = 'န်ေူ';
        const expected = '\u1031\u108F\u1039\u1030';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // 'ေ' + [ိ  ီ]
    // ...............
    it(String.raw`([#u2fOr30])\u1031([\u102D\u102E])\u1030`, () => {
        const input = 'နေိူ';
        const expected = '\u1031\u108F\u102D\u1030';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // 'ေ'
    // ...............
    it(String.raw`([#u2fOr30])\u1031\u1030`, () => {
        const input = 'နေူ';
        const expected = '\u1031\u108F\u1030';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // '်'
    // ...............
    it(String.raw`([#u2fOr30])\u103A\u1030`, () => {
        const input = 'န်ူ';
        const expected = '\u108F\u1039\u1030';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // [ိ  ီ]
    // ...............
    it(String.raw`([#u2fOr30])([\u102D\u102E])\u1030`, () => {
        const input = 'နိူ';
        const expected = '\u108F\u102D\u1030';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // #
    // ...............
    it(String.raw`([#u2fOr30])\u1030`, () => {
        const input = 'ရု';
        const expected = '\u1090\u102F';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // '်' (zg: \u1039)
    // ------------------------------------------------------------------------------------------
    // 'ေ'
    // ...............
    it(String.raw`([#uc])\u103C\u103D\u103E\u103A\u1031`, () => {
        const input = 'နြွှ်ေ';
        const expected = '\u1031\u1083\u108F\u108A\u1039';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#uc])\u103A\u103C\u103D\u103E\u1031`, () => {
        const input = 'န်ြွှေ';
        const expected = '\u1031\u1083\u108F\u108A\u1039';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#uc])\u103C\u103D\u103A\u1031`, () => {
        const input = 'နြွ်ေ';
        const expected = '\u1031\u1083\u108F\u103C\u1039';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#uc])\u103A\u103C\u103D\u1031`, () => {
        const input = 'န်ြွေ';
        const expected = '\u1031\u1083\u108F\u103C\u1039';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#uc])\u103A\u103C\u103E\u1031`, () => {
        const input = 'န်ြှေ';
        const expected = '\u1031\u107F\u108F\u1087\u1039';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#uc])\u103A\u103C\u1031`, () => {
        const input = 'န်ြေ';
        const expected = '\u1031\u107F\u108F\u1039';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#uc])\u103A\u103B\u103D\u103E\u1031`, () => {
        const input = 'န်ျွှေ';
        const expected = '\u1031\u108F\u108A\u107D\u1039';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#uc])\u103A\u103B\u103D\u1031`, () => {
        const input = 'န်ျွေ';
        const expected = '\u1031\u108F\u103C\u107D\u1039';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#uc])\u103A\u103B\u103E\u1031`, () => {
        const input = 'န်ျှေ';
        const expected = '\u1031\u108F\u103D\u103A\u1039';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#uc])\u103A\u103B\u1031`, () => {
        const input = 'န်ျေ';
        const expected = '\u1031\u108F\u103A\u1039';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#uc])\u103A\u103D\u103E\u1031`, () => {
        const input = 'န်ွှေ';
        const expected = '\u1031\u108F\u108A\u1039';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#uc])\u103A\u103D\u1031`, () => {
        const input = 'န်ွေ';
        const expected = '\u1031\u108F\u103C\u1039';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#uc])\u103E\u103A\u1031`, () => {
        const input = 'နှ်ေ';
        const expected = '\u1031\u108F\u103D\u1039';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1009\u103A\u1031`, () => {
        const input = 'ဉ်ေ';
        const expected = '\u1031\u1025\u1039';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#uc])\u103A\u1031`, () => {
        const input = 'က်ေ';
        const expected = '\u1031\u1000\u1039';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // [ွှ  ွ  ှ]
    // ...............
    it(String.raw`([#uc])\u103C\u103D\u103E\u103A`, () => {
        const input = 'နြွှ်';
        const expected = '\u1083\u108F\u108A\u1039';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#uc])\u103A\u103C\u103D`, () => {
        const input = 'န်ြွ';
        const expected = '\u1083\u108F\u103C\u1039';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#uc])\u103A\u103C\u103E`, () => {
        const input = 'န်ြှ';
        const expected = '\u107F\u108F\u1087\u1039';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#uc])\u103A\u103B\u103D\u103E`, () => {
        const input = 'န်ျွှ';
        const expected = '\u108F\u108A\u107D\u1039';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#uc])\u103A\u103B\u103D`, () => {
        const input = 'န်ျွ';
        const expected = '\u108F\u103C\u107D\u1039';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#uc])\u103A\u103B\u103E`, () => {
        const input = 'န်ျှ';
        const expected = '\u108F\u103D\u103A\u1039';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#uc])\u103A\u103D\u103E`, () => {
        const input = 'န်ွှ';
        const expected = '\u108F\u108A\u1039';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#uc])\u103A\u103D`, () => {
        const input = 'န်ွ';
        const expected = '\u108F\u103C\u1039';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#uc])\u103E\u103A`, () => {
        const input = 'နှ်';
        const expected = '\u108F\u103D\u1039';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // 'ြ'
    // ...............
    it(String.raw`([#uc])\u103A\u103C`, () => {
        const input = 'န်ြ';
        const expected = '\u107F\u108F\u1039';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // 'ျ'
    // ...............
    it(String.raw`([#uc])\u103B\u103A`, () => {
        const input = 'နျ်';
        const expected = '\u108F\u103A\u1039';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#uc])\u103A\u103B`, () => {
        const input = 'န်ျ';
        const expected = '\u108F\u103A\u1039';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // [ိ  ီ  ဲ  ံ] (zg: \u102D, \u102E, \u1032, \u1036)
    // ------------------------------------------------------------------------------------------
    it(String.raw`([#uc])\u103C\u103D\u103E\u1031([\u102D\u102E\u1032])`, () => {
        const input = 'နြွှေိ';
        const expected = '\u1031\u1083\u108F\u108A\u102D';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#uc])\u103C\u103D\u1031([\u102D\u102E\u1032])`, () => {
        const input = 'နြွေိ';
        const expected = '\u1031\u1083\u108F\u103C\u102D';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // 'ြ' + 'ှ' + 'ေ'
    // ...............
    it(String.raw`([#uc])\u103C\u103E\u1031([\u102D\u102E\u1032])`, () => {
        const input = 'နြှေိ';
        const expected = '\u1031\u107F\u108F\u1087\u102D';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // 'ြ' + 'ေ'
    // ...............
    it(String.raw`([#uc])\u103C\u1031([\u102D\u102E\u1032])`, () => {
        const input = 'နြေိ';
        const expected = '\u1031\u107F\u108F\u102D';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // 'ြ' + [ွှ  ွ]
    // ...............
    it(String.raw`([#uc])\u103C\u103D\u103E([\u102D\u102E\u1032])`, () => {
        const input = 'နြွှိ';
        const expected = '\u1083\u108F\u108A\u102D';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // 'ြ' + 'ှ'
    // ...............
    it(String.raw`([#uc])\u103C\u103E([\u102D\u102E\u1032])`, () => {
        const input = 'နြှိ';
        const expected = '\u107F\u108F\u1087\u102D';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    //  ြ
    // ...............
    it(String.raw`([#uc])\u103C([\u102D\u102E\u1032])`, () => {
        const input = 'နြိ';
        const expected = '\u107F\u108F\u102D';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    //  ေ
    // ------------------------------------------------------------------------------------------
    // 'ြ' + [ွှ  ွ]
    // ...............
    it(String.raw`([#uc])\u103C\u103D\u103E\u1031`, () => {
        const input = 'နြွှေ';
        const expected = '\u1031\u1081\u108F\u108A';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#uc])\u103C\u103D\u1031`, () => {
        const input = 'နြွေ';
        const expected = '\u1031\u1081\u108F\u103C';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // 'ြ' + 'ှ'
    // ...............
    it(String.raw`([#uc])\u103C\u103E\u1031`, () => {
        const input = 'နြှေ';
        const expected = '\u1031\u103B\u108F\u1087';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // 'ြ'
    // ...............
    it(String.raw`([#uc])\u103C\u1031`, () => {
        const input = 'နြေ';
        const expected = '\u1031\u103B\u108F';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // 'ျ' + [ွှ  ွ]
    // ...............
    it(String.raw`([#uc])\u103B\u103D\u103E\u1031`, () => {
        const input = 'နျွှေ';
        const expected = '\u1031\u108F\u108A\u107D';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#uc])\u103B\u103D\u1031`, () => {
        const input = 'နျွေ';
        const expected = '\u1031\u108F\u103C\u107D';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // 'ျ' + 'ှ'
    // ...............
    it(String.raw`([#uc])\u103B\u103E\u1031`, () => {
        const input = 'နျှေ';
        const expected = '\u1031\u108F\u103D\u103A';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // 'ျ'
    // ...............
    it(String.raw`([#uc])\u103B\u1031`, () => {
        const input = 'နျေ';
        const expected = '\u1031\u108F\u103A';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // [ွှ  ွ]
    // ...............
    it(String.raw`([#uc])\u103D\u103E\u1031`, () => {
        const input = 'နွှေ';
        const expected = '\u1031\u108F\u108A';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#uc])\u103D\u1031`, () => {
        const input = 'နွေ';
        const expected = '\u1031\u108F\u103C';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // 'ှ'
    // ...............
    it(String.raw`([#uc])\u103E\u1031`, () => {
        const input = 'နှေ';
        const expected = '\u1031\u108F\u103D';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // #
    // ...............
    it(String.raw`([#uc])\u1031`, () => {
        const input = 'ကေ';
        const expected = '\u1031\u1000';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // [ွှ  ွ  ှ]
    // ------------------------------------------------------------------------------------------
    // 'ြ'
    // ...............
    it(String.raw`([#uc])\u103C\u103D\u103E`, () => {
        const input = 'နြွှ';
        const expected = '\u1081\u108F\u108A';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#uc])\u103C\u103D`, () => {
        const input = 'နြွ';
        const expected = '\u1081\u108F\u103C';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#uc])\u103C\u103E`, () => {
        const input = 'နြှ';
        const expected = '\u103B\u108F\u1087';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // 'ျ'
    // ...............
    it(String.raw`([#uc])\u103B\u103D\u103E`, () => {
        const input = 'နျွှ';
        const expected = '\u108F\u108A\u107D';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#uc])\u103B\u103D`, () => {
        const input = 'နျွ';
        const expected = '\u108F\u103C\u107D';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#uc])\u103B\u103E`, () => {
        const input = 'နျှ';
        const expected = '\u108F\u103D\u103A';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // #
    // ...............
    it(String.raw`([#uc])\u103D\u103E`, () => {
        const input = 'နွှ';
        const expected = '\u108F\u108A';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#uc])\u103D`, () => {
        const input = 'နွ';
        const expected = '\u108F\u103C';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#uc])\u103E`, () => {
        const input = 'နှ';
        const expected = '\u108F\u103D';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // 'ြ'
    // ------------------------------------------------------------------------------------------
    it(String.raw`([#uc])\u103C`, () => {
        const input = 'နြ';
        const expected = '\u103B\u108F';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`([#uc])\u103B\u103C`, () => {
        const input = 'နျြ';
        const expected = '\u1081\u108F\u103A';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // 'ျ'
    // ------------------------------------------------------------------------------------------
    it(String.raw`([#uc])\u103B`, () => {
        const input = 'နျ';
        const expected = '\u108F\u103A';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // 'ဦ'
    // ------------------------------------------------------------------------------------------
    it(String.raw`\u1025\u102E`, () => {
        const input = 'ဦ';
        const expected = '\u1026';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    // Others
    // ------------------------------------------------------------------------------------------
    it(String.raw`\u102D\u1036`, () => {
        const input = 'ိံ';
        const expected = '\u108E';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1039\u1010\u103D`, () => {
        const input = '္တွ';
        const expected = '\u1096';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1039#psx`, () => {
        const input = '္က';
        const expected = '\u1060';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u102B\u103A`, () => {
        const input = 'ခါ်';
        const expected = '\u1001\u105A';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u102B\u103A' - with \u1031`, () => {
        const input = 'ခေါ်';
        const expected = '\u1031\u1001\u105A';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u103D\u103E`, () => {
        const input = 'ွှ';
        const expected = '\u108A';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u103B`, () => {
        const input = 'ျ';
        const expected = '\u103A';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u103C`, () => {
        const input = 'ြ';
        const expected = '\u103B';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u103D`, () => {
        const input = 'ွ';
        const expected = '\u103C';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u103E`, () => {
        const input = 'ှ';
        const expected = '\u103D';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u102F`, () => {
        const input = 'ု';
        const expected = '\u102F';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u102F' to '\u1033`, () => {
        const input = 'ကျို';
        const expected = '\u1000\u103a\u102d\u1033';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1030`, () => {
        const input = 'ူ';
        const expected = '\u1030';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1030' to '\u1034`, () => {
        const input = 'ကျူ';
        const expected = '\u1000\u103a\u1034';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1037\u103A`, () => {
        const input = '့်';
        const expected = '\u1039\u1095';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u103A`, () => {
        const input = '်';
        const expected = '\u1039';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1037`, () => {
        const input = '့';
        const expected = '\u1037';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });

    it(String.raw`\u1037' to '\u1095`, () => {
        const input = 'ကျို့';
        const expected = '\u1000\u103a\u102d\u1033\u1095';

        const result = translit(input, uni2zgRules);
        void expect(result.outputText).toBe(expected, toFailOutput(input, result));
    });
});
