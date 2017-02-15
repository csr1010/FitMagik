// Create the module where our functionality can attach to
import sleepController from '../sleep/sleepController';
import sleepConfig from '../sleep/sleep.config';

let sleepModule = angular.module('modules.sleepModule', []);
sleepModule.config(sleepConfig);
sleepModule.controller('sleepController', sleepController);

export default sleepModule;
