"use strict";

global.sinon = require('sinon');
global.chai = require("chai");
global.mockery = require('mockery');
global.mockrequire = require('mockrequire');
global.React = require('react/addons');
global.mochaModule = require('./mochaModule');
global.should = chai.should();
global.assert = chai.assert;
global.expect = chai.expect;

chai.use(require('sinon-chai'));
