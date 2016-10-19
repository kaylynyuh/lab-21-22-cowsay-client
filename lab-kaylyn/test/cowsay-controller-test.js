'use strict';

//first require in entry point and angular-mocks in every file
require('./lib/test-setup.js');

const cowsay = require('cowsay-browser');
const angular = require('angular');

describe('testing cowsayCtrl', function(){
  beforeEach(() => {
    //get the demoApp
    angular.mock.module('demoApp');
    //mock things that have been added to demoApp
    angular.mock.inject($controller => {
      this.cowsayCtrl = new $controller('CowsayController');
      //before every test create a new instance of controller
    });
  });



  describe('testing initial properties', () => {
    it('title should equal Hellarz', () => {
      expect(this.cowsayCtrl.title).toBe('Hellarz');
    });

    it('history should be empty array', () => {
      expect(Array.isArray(this.cowsayCtrl.historyArray)).toBe(true);
    });

    it('cowfile should be same as cowsay.list', () => {
      cowsay.list((err, list) => {
        expect(this.cowsayCtrl.files).toEqual(list);
        expect(this.cowsayCtrl.current).toEqual(list[0]);
      });
    });
  });

  //test method that modifies scope correctly
  describe('testing #update()', () => {
    it('should return a beavis.zen hello', () => {
      //get mock result
      //should return EXACTLY what updateCow is expecting, even with the newline
      let expectedResult = '\n' + cowsay.say({text: 'hello', f: this.cowsayCtrl.current});
      let result = this.cowsayCtrl.update('hello');
      expect(result).toEqual(expectedResult);
    });
  });

  describe('testing #duplicate()', () => {
    it('should return a beavis.zen hello', () => {
      //get mock result
      //should return EXACTLY what updateCow is expecting, even with the newline
      let expectedResult = '\n' + cowsay.say({text: 'hello', f: this.cowsayCtrl.current});
      let result = this.cowsayCtrl.updateCow('hello');
      expect(result).toEqual(expectedResult);
    });
  });

  describe('testing #undo()', () => {
    it('should return a beavis.zen hello', () => {
      //get mock result
      //should return EXACTLY what updateCow is expecting, even with the newline
      let expectedResult = '\n' + cowsay.say({text: 'hello', f: this.cowsayCtrl.current});
      let result = this.cowsayCtrl.updateCow('hello');
      expect(result).toEqual(expectedResult);
    });
  });
});
