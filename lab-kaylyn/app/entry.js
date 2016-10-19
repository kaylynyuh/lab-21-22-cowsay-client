'use strict';

//require webpack assets
require('./scss/main.scss');

//npm modules
const cowsay = require('cowsay-browser');
const angular = require('angular');

//app modules

//angular modules
const demoApp = angular.module('demoApp', []); //create demoApp, this line is creative an angular module, it's a setter

//angular-constructs
demoApp.controller('CowsayController', ['$log', CowsayController]);
//creating a controller on the demoApp module ^

function CowsayController($log){
  $log.debug('init CowsayController');
  this.title = 'Hellarz';
  this.historyArray = [];

  cowsay.list((err, files) => {
    this.files = files;
    this.current = this.files[0];
    console.log('this.files', this.files);
  });

  this.update = function(input){
    $log.debug('this.update()');
    return '\n' + cowsay.say({text: input || 'Give me some s*** to say', f: this.current});
  };

  this.duplicate = function(input){
    $log.debug('this.update()');
    this.state = this.update(input);
    this.historyArray.push(this.state);
  };

  //attach a undo () to cowsayCtrl that checks the length of state array, if it's 0, don't show else...
  this.undo = function(){
    $log.debug('this.undo()');
    this.history.pop();
    this.state = this.historyArray.pop() || '';
  };
}
