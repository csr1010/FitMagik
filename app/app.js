//using ES6 - by default ES6 comes with strict mode
//importing libraries/modules from other sources


//import configurations
import mainConstants from "./config/main.constants";

//import templates
import "./config/main.templates";

//import modules
import './modules/maincontainer';
import './modules/sleep';
import './modules/auth';

//import services
import './services';

//import components
import './components';

// modules
var modules = [
    'ui.router',
    'templates',
    'auth0.lock',
    'angular-jwt',
    'modules.containerModule',
    'modules.sleepModule',
    'modules.authModule',
    'services.serviceModule',
    'componentsModule'
];
window.app = angular.module("mm", modules);
angular.module("mm").constant("MainConstants", mainConstants);
angular.bootstrap(document, ["mm"], {
    strictDi: true
});
