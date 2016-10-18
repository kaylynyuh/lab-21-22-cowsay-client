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
demoApp.controller('CowsayController', ['$log', '$scope', CowsayController]); //controllers are always obj constructors
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
    return cowsayCtrl.show === false ? cowsayCtrl.show = true : cowsayCtrl.show = false;
  };

}
