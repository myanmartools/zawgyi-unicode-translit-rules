// This file is required by karma.conf.js and loads recursively all the .spec and framework files

// tslint:disable: no-import-side-effect
// tslint:disable: no-implicit-dependencies
// tslint:disable: no-any
// tslint:disable: no-reserved-keywords
// tslint:disable: no-unsafe-any

import 'core-js/es7/reflect';
import 'zone.js/dist/zone';
import 'zone.js/dist/zone-testing';

import { getTestBed } from '@angular/core/testing';

import { platformServerTesting, ServerTestingModule } from '@angular/platform-server/testing';

declare const require: any;

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
    ServerTestingModule,
    platformServerTesting()
);

// Then we find all the tests.
const context = require.context('./', true, /\.spec\.ts$/);

// And load the modules.
context.keys().map(context);
