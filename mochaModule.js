function mochaModule(modName, mock) {
  var mockIsObject = (typeof mock === 'object' && !(mock instanceof Array)) ? true : false;
  var absModPath = getModulePath(modName);
  var mod = require(absModPath);

  var orginaMethods = {};
  var orginaMethod;

  before(function() {
    if (mockIsObject) {
      for(var method in mock) {
        orginaMethods[method] = mod[method]
        mod[method] = mock[method];
      }
    } else {
      orginaMethod = require.cache[require.resolve(absModPath)].exports;
      require.cache[require.resolve(absModPath)].exports = mock;
    }
  });

  after(function(){
    if (mockIsObject) {
      for(var method in orginaMethods) {
        mod[method] = orginaMethods[method];
      }
    } else {
      require.cache[require.resolve(absModPath)].exports = orginaMethod;
    }
  });
}

function getModulePath(modName) {
  var relativePatt = /^..?\//i;
  var scriptPattern = /\.js/i;

  if (relativePatt.test(modName) || scriptPattern.test(modName)) {
    var modPathArray = modName.split('../');
    var parentPathArray = module.parent.filename.split('/');
    var index = parentPathArray.length - modPathArray.length;

    parentPathArray.splice(index, modPathArray.length);
    parentPathArray.push(modPathArray[modPathArray.length - 1]);

    return parentPathArray.join('/');
  }

  return modName;
}

module.exports = mochaModule;
