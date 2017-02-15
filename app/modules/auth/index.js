import AuthConfig from "../auth/auth.config";
import AuthController from "../auth/auth.controller";
import AuthRun from "../auth/auth.run";

let authModule = angular.module("modules.authModule", []);
authModule.controller("authController", AuthController);
authModule.config(AuthConfig);
authModule.run(AuthRun);

export default authModule;
