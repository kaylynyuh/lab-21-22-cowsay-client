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

//controller constructor function
//$scope will create a new child scope
//args have to be exact same order as dependency strings
function CowsayController($log){
  $log.debug('init CowsayController');
  this.title = 'Hellarz';
  this.show = false;
  this.state = null;
  this.stateArray = [];

  cowsay.list((err, cowfiles) => {
    this.cowfiles = cowfiles;
    this.currentCow = this.cowfiles[0];
    console.log('this.cowfiles', this.cowfiles);
  });

  this.updateCow = function(input){
    $log.debug('this.updateCow()');
    return '\n' + cowsay.say({text: input || 'Give me some s*** to say'});
  };

  this.repeatCow = function(input){
    $log.debug('this.repeatCow()');
    this.stateArray.push(input);
    this.state = '\n' + cowsay.say({text: input});
    if(this.show === false) this.show = true;
  };

  //attach a resetCow () to cowsayCtrl that checks the length of state array, if it's 0, don't show else...
  this.resetCow = function(){
    $log.debug('this.resetCow()');
    this.stateArray === 0 ? this.show = false : this.show = true;
    this.state = this.stateArray.pop() || '';
    //invoke this method in the html to data bind to the template
  };
}

demoApp.controller('NavController', ['$log', NavController]);
function NavController($log){
  $log.debug('init NavController');
  this.routes = [
    {
      name: 'Home',
      url: '/home',
    },
    {
      name: 'About',
      url: '/about',
    },
  ];
}
