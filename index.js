module.exports = function(done) {
  var cbFired = false;
  return function(err, data) {
    if (!cbFired) {
      cbFired = true;
      typeof(done) === 'function' ? done(err, data) : null;
    }
  };
};
