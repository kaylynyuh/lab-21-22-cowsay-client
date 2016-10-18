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
demoApp.controller('CowsayController', ['$log', '$scope', CowsayController]);
//creating a controller on the demoApp module ^

//controller constructor function
//$scope will create a new child scope
//args have to be exact same order as dependency strings
function CowsayController($log, $scope){
  $log.debug('init CowsayController');
  let cowsayCtrl = $scope.cowsayCtrl = {};
  //attach properties to the $scope object. (via cowsayCtrl)
  cowsayCtrl.title = 'Hellarz';
  cowsayCtrl.show = false;
  cowsayCtrl.state = null;
  cowsayCtrl.stateArray = [];

  cowsayCtrl.updateCow = function(input){
    $log.debug('cowsayCtrl.updateCow()');
    return '\n' + cowsay.say({text: input || 'Give me some s*** to say'});
  };

  cowsayCtrl.repeatCow = function(input){
    $log.debug('cowsayCtrl.repeatCow()');
    cowsayCtrl.stateArray.push(input);
    cowsayCtrl.state = '\n' + cowsay.say({text: input});

    if(cowsayCtrl.show === false) cowsayCtrl.show = true;
  };


  //attach a resetCow () to cowsayCtrl that checks the length of state array, if it's 0, don't show else...
  cowsayCtrl.resetCow = function(){
    $log.debug('cowsayCtrl.resetCow()');
    cowsayCtrl.stateArray === 0 ? cowsayCtrl.show = false : cowsayCtrl.show = true;
    cowsayCtrl.state = cowsay.say({text: cowsayCtrl.stateArray.pop()});
    //invoke this method in the html to data bind to the template
  };

  cowsay.list((err, cowfiles) => {
    this.cowfiles = cowfiles;
    this.currentCow = this.cowfiles[0];
    console.log('this.cowfiles', this.cowfiles);
  });
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
