# Probo Uploader

The probo uploader is a command line client for uploading files to
[Probo.CI](probo.ci) or any server using the
[Probo Asset Receiver](git@github.com:ProboCI/probo-uploader.git).

The idea with the Probo Asset Receiver is 


For use with [Probo.CI](probo.ci) you need to go to your project page


## Installation

Installation is easy using [npm](https://www.npmjs.com/):

```` bash
sudo npm install -g probo-uploader
````

## Usage

### Uploading a file from disk

If you are uploading a file from disk you can specify the path to the file as
a command line argument.

```` bash
probo-uploader --token=[your token] some-file.txt
````

### Uploading a file stream

If you are creating a `mysqldump` or similar it is possible to stream that file
directly to the asset receiver.

```` bash
mysqldump mydb | probo-uploader --token=[your token] --name=dev.sql
````

### Uploading to your own Probo Asset Receiver

First you'll need to create an upload token either manually or from another system.
A set of curl steps for performing this action is described in the documentation for the
[Probo Asset Receiver](git@github.com:ProboCI/probo-uploader.git).

```` bash
probo-uploader --token=bar --host=http://localhost:3000 somefile.txt
````

### Exploring options

Discover the options with `-h`:

```` bash
probo-uploader -h
````
