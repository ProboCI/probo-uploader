var request = require('request'),
    fs = require('fs');

var UploadClient = function(options) {
  this.upload = this.uploadFile.bind(this);
  this.upload = this.uploadStream.bind(this);
  this.checkRequiredFields(options);
  var i = null;
  for (i in this.configOptions) {
    this[this.configOptions[i]] = options[this.configOptions[i]];
  }
};

UploadClient.prototype.configOptions = [
  'host',
  'name',
  'token',
];

UploadClient.prototype.checkRequiredFields = function(options) {
  var i = null;
  for (i in this.configOptions) {
    if (!options[this.configOptions[i]]) {
      throw new Error('Required configuration ' + this.configOptions[i] + ' not set.');
    }
  }
};

UploadClient.prototype.createRequest = function(done) {
  var options = {
    uri: this.host + '/asset/' + this.token + '/' + this.name,
    headers: {
      'API-VERSION': '1',
    },
  };
  return request.post(options, function(error, response, body) {
    if (error) throw error;
    if (response.statusCode != 201) {
      error = new Error('Upload failed. Error received from server: ' + body);
    }
    if (done) {
      done(error, body);
    }
  });
};

UploadClient.prototype.uploadFile = function(filePath, done) {
  var request = this.createRequest(done);
  var readStream = fs.createReadStream(filePath);
  readStream.pipe(request);
};

UploadClient.prototype.uploadStream = function(readStream, done) {
  var request = this.createRequest(done);
  readStream.pipe(request);
};



module.exports = UploadClient;
