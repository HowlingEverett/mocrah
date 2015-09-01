"use strict";

require('./fake_dom')('<html><body></body></html>');

global.sinon = require('sinon');
global.chai = require("chai");
global.mockrequire = require('mockrequire');
global.mockery = require('mockery');
global.React = require('react/addons');
global.TestUtils = React.addons.TestUtils;
global.scryByType = TestUtils.scryRenderedComponentsWithType;
global.findByType = TestUtils.findRenderedComponentWithType;
global.scryByClass = TestUtils.scryRenderedDOMComponentsWithClass;
global.findByClass = TestUtils.findRenderedDOMComponentWithClass;
global.scryByTag = TestUtils.scryRenderedDOMComponentsWithTag;
global.findByTag = TestUtils.findRenderedDOMComponentWithTag;
global.scryByProp = require('./scryRenderedDOMComponentsWithProp').scryRenderedDOMComponentsWithProp;
global.findByProp = require('./scryRenderedDOMComponentsWithProp').findRenderedDOMComponentWithProp;
global.renderIntoDocument = TestUtils.renderIntoDocument;
global.mockrouter = require('./mockRouter');
global.mochaModule = require('./mochaModule');
global.should = chai.should();
global.assert = chai.assert;
global.expect = chai.expect;

chai.use(require('sinon-chai'));
