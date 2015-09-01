// Based on https://github.com/Khan/react-components/blob/master/test/compiler.js
var transformer = require('./jsx-stub-transform'),
  origJs = require.extensions['.js'];

// Install the compiler.
require.extensions['.js'] = function(module, filename) {
  if(filename.indexOf('node_modules/') >= 0 && filename.indexOf('node_modules/hui') < 0 && filename.indexOf('node_modules/mocrah') < 0) {
    return origJs(module, filename);
  }
  return module._compile(transformer.transform(filename), filename);
};
