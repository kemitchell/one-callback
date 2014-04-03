var assert = require('assert');
var oneCallback = require('../index.js');

suite('One Callback', function() {

  test('Ensure only called once', function(done) {
    var cbCount = 0;

    var callback = oneCallback(function() {
      console.log(++cbCount);
    });

    callback();
    callback();
    callback();
    callback();

    assert.equal(cbCount, 1, 'Should have only executed callback once.');
    done();

  });
});
