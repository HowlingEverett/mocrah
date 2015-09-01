'use strict';

var merge = require('lodash/object/merge');

module.exports = function(Component, props, stubs) {
  return React.createClass({
    childContextTypes: {
      makePath: React.PropTypes.func,
      makeHref: React.PropTypes.func,
      transitionTo: React.PropTypes.func,
      replaceWith: React.PropTypes.func,
      goBack: React.PropTypes.func,
      getCurrentPath: React.PropTypes.func,
      getCurrentRoutes: React.PropTypes.func,
      getCurrentPathname: React.PropTypes.func,
      getCurrentParams: React.PropTypes.func,
      getCurrentQuery: React.PropTypes.func,
      isActive: React.PropTypes.func,
      getRouteAtDepth: React.PropTypes.func,
      getRouteComponents: React.PropTypes.func,
      routeHandlers: React.PropTypes.array,
    },

    getChildContext: function() {
      return merge({
        makePath: function() {},
        makeHref: function() {},
        transitionTo: function() {},
        replaceWith: function() {},
        goBack: function() {},
        getCurrentPath: function() {},
        getCurrentRoutes: function() {},
        getCurrentPathname: function() {},
        getCurrentParams: function() {},
        getCurrentQuery: function() {},
        isActive: function() {},
        getRouteAtDepth: function() {},
        getRouteComponents: function() {},
        routeHandlers: []
      }, stubs);
    },

    render: function() {
      return <Component {...props}/>;
    }
  });
};
