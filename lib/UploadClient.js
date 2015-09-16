var request = require('request');

var UploadClient = function(options) {
  this.upload = this.upload.bind(this);
};

UploadClient.prototype.createRequest = function() {
};

UploadClient.prototype.upload = function(readStream) {
  var request = this.createRequest();
  readStream.pipe(request);
};


module.exports = UploadClient;
