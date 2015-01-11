doctrina-theme
==============

## Pre-Requisites

 1. Node - it is assumed that nodejs is present
 2. npm - npm is needed to get the "ball" rolling

## Immediately After Cloning
Run `npm install` - this will be the only time it is needed to be run. It will install all server side dependencies. After this, grunt will take over.

## To Build Theme

Some things to note:
 
 1. Typing `grunt clean:all` will delete all rendered files and dependencies. It will be necessary to type `npm install` once again to start things off.
 2. Grunt has control over bower via the auto_install plugin (i.e. grunt will run bower install).

### Dev
`grunt`

This will default to the dev environment
