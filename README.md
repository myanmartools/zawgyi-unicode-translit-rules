# Zawgyi Unicode Transliterate Rules

[![GitHub Actions Status](https://github.com/myanmartools/zawgyi-unicode-translit-rules/workflows/Main%20Workflow/badge.svg)](https://github.com/myanmartools/zawgyi-unicode-translit-rules/actions)
[![Azure Pipelines Status](https://dev.azure.com/myanmartools/zawgyi-unicode-translit-rules/_apis/build/status/myanmartools.zawgyi-unicode-translit-rules?branchName=master)](https://dev.azure.com/myanmartools/zawgyi-unicode-translit-rules/_build/latest?definitionId=6&branchName=master)
[![codecov](https://codecov.io/gh/myanmartools/zawgyi-unicode-translit-rules/branch/master/graph/badge.svg)](https://codecov.io/gh/myanmartools/zawgyi-unicode-translit-rules)
[![npm version](https://img.shields.io/npm/v/@myanmartools/zawgyi-unicode-translit-rules.svg)](https://www.npmjs.com/package/@myanmartools/zawgyi-unicode-translit-rules)
[![Gitter](https://badges.gitter.im/myanmartools/community.svg)](https://gitter.im/myanmartools/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

Zawgyi Unicode transliterate / convert regular expression rules in JavaScript and JSON formats that can work with [@dagonmetric/ng-translit](https://www.npmjs.com/package/@dagonmetric/ng-translit) package.

## Features

* High performance, reliable, accurate and perfect Zawgyi to Unicode and Unicode to Zawgyi conversion rules!
* Fully tested with Myanmar Spelling Book (မြန်မာ စာလုံးပေါင်း သတ်ပုံကျမ်း) data
* 100% code coverage unit tested
* Open source and MIT license!

### Zawgyi-One to Unicode Rule Features

* Perfect conversion with five rule phases
* Overlapped characters normalization
* Space between accented characters normalization
* Order normalization
* Specialized conversion on Pahsin (ပါဌ်ဆင့်) and Kinsi (ကင်းစီး)
* Auto checking and converting between 'ဉ' (\u1009) and 'ဥ' (\u1025)
* Auto checking and converting from 'ဦ' (\u1025\u102E) to 'ဦ' (\u1026)
* Deep checking and converting between '၀' (သုည \u1040) and 'ဝ' (ဝလုံး \u101D)
* Customizable on/off rule parsing with `when` and `skip` options

### Unicode to Zawgyi-One Rule Features

* Perfect and performance optimized conversion with only one phase!

## Getting Started

### Installation

npm

```bash
npm install @myanmartools/zawgyi-unicode-translit-rules
```

or yarn

```bash
yarn add @myanmartools/zawgyi-unicode-translit-rules
```

### Usage and Application

See [Zawgyi Unicode Converter Angular PWA](https://github.com/myanmartools/zawgyi-unicode-converter) repo.

#### Live Application

[Zawgyi Unicode Converter](https://zawgyi-unicode-converter.myanmartools.org)

## Feedback and Contributing

Check out the [Contributing](https://github.com/myanmartools/zawgyi-unicode-translit-rules/blob/master/CONTRIBUTING.md) page to see the best places to log issues and start discussions.

## License

This repository is licensed with the [MIT](https://github.com/myanmartools/zawgyi-unicode-translit-rules/blob/master/LICENSE) license.
