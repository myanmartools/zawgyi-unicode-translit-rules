// tslint:disable: no-floating-promises

// tslint:disable: no-implicit-dependencies

import { TestBed } from '@angular/core/testing';

import { TranslitModule, TranslitService } from '@dagonmetric/ng-translit';

import { zg2uniRules } from '../src/zg2uni-rules';

import { toFailOutput } from './shared.spec';

describe('translit#zg2uni-misc', () => {
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

    it(String.raw`\u1021\u102C\u101B\u1017 \u107B`, (done: DoneFn) => {
        const input = '\u1021\u102C\u101B\u1017 \u107B';
        const expected = '\u1021\u102C\u101B\u1017\u1039\u1018';

        translitService.translit(input, 'zg2uni', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });

    it(String.raw`\u101C\u102D\u102F \u1037`, (done: DoneFn) => {
        const input = '\u101C\u102D\u102F \u1037';
        const expected = '\u101C\u102D\u102F\u1037';

        translitService.translit(input, 'zg2uni', zg2uniRules).subscribe(result => {
            expect(result.outputText).toBe(expected, toFailOutput(input, result));
            done();
        });
    });
});
