"use strict";

import {jQuery} from 'jquery/dist/jquery';

import _ from 'lodash';

require("bootstrap/dist/js/bootstrap.js");
require("bootstrap/dist/css/bootstrap.css");

const angular = require("angular");
import {formly} from 'angular-formly/dist/formly';
import {angularFormlyBootstrap} from 'angular-formly-templates-bootstrap';
import {uiBootstrap} from 'angular-ui-bootstrap';
import {uiRouter} from 'angular-ui-router';

console.log(formly);

let ngModule = angular.module("cta", [
    "ui.router",
    'ui.bootstrap',
    'formly',
    "formlyBootstrap"
]);

import {criminalDr} from './components/criminals/criminalsDirective';
import {criminalsGrid} from './components/criminalsGrid/criminalsGrid';

console.log(angular, ngModule);

criminalsGrid(ngModule);
criminalDr(ngModule);