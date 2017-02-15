import AuthService from "../services/auth.service";
import NotificationService from "../services/notifications.service";
import boxadService from "../services/boxads.service";


let serviceModule = /*global angular*/ angular.module("services.serviceModule", []);
serviceModule.service("authService", AuthService);
serviceModule.service("NotificationService", NotificationService);
serviceModule.service("boxadService", boxadService);


export default serviceModule;
