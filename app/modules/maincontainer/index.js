// Create the module where our functionality can attach to
import mainController from '../maincontainer/mainController';
import mainConfig from '../maincontainer/main.config';
import offCanvas from '../maincontainer/offcanvas.component';

let containerModule = angular.module('modules.containerModule', []);
containerModule.config(mainConfig);
containerModule.controller('mainController', mainController);
containerModule.component('offCanvas', offCanvas);

export default containerModule;
