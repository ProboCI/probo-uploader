# Probo Uploader

The probo uploader is a command line client for uploading files to
[Probo.CI](probo.ci) or any server using the
[Probo Asset Receiver](https://github.com/ProboCI/probo-asset-receiver.git).

The idea with probo-uploader is to provide a simple and secure way to upload
assets to a receiver from wherever they are generated. To this end the uploads
are secured using a token that can be deleted at any time were the upload token
to fall into enemy hands. Note that this client performs uploads and is incapable
of downloading the files again. On probo.ci direct downloads are publicly available.


For use with [Probo.CI](probo.ci) you first need to go to your project page and
generate an upload token. If you are using the asset receiver independently
[see below](#self-hosted-receiver).


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

### Uploading a file stream and monitoring progress

If you want to keep track of the progress of your upload you can use the pipeview command.
This can be installed in Linux via the package manager.

#### Installing pipeview on MacOSX via Homebrew

```` bash
brew install pv
````

#### Using pipeview

```` bash
pv [database file] | probo-uploader --token=[your token] --name=[filename on probo]
````

### Uploading to your own Probo Asset Receiver <a name="self-hosted-receiver" />

First you'll need to create an upload token either manually or from another system.
A set of curl steps for performing this action is described in the documentation for the
[Probo Asset Receiver](https://github.com/ProboCI/probo-asset-receiver.git).

```` bash
probo-uploader --token=bar --host=http://localhost:3000 somefile.txt
````

### Exploring options

Discover the options with `-h`:

```` bash
probo-uploader -h
````
