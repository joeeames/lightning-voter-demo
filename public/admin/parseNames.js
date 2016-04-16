angular.module('app').factory('parseNames', function() {
  return function(blobInput) {
    var lines = blobInput.split(/\r?\n/);
    lines.forEach(function(line, idx) {
      var pieces = line.split('|');
      lines[idx] = {
        email: pieces[0],
        firstName: pieces[1],
        lastName: pieces[2]
      }
    })
    return lines;
  }
})