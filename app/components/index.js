import notificationsComponent from '../components/notifications/notifications.component';
import boxAdsComponent from '../components/boxads/boxads.component';

let componentsModule = angular.module("componentsModule", []);

componentsModule.component('notificationsComponent', notificationsComponent);
componentsModule.component('boxAdsComponent', boxAdsComponent);
export default componentsModule;
