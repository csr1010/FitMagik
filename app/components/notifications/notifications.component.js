class NotificationCntrl {
    constructor($scope, NotificationService, $timeout) {
        'ngInject';
        this._$scope = $scope;
        this._NotificationService = NotificationService;
        this.notifications = [];
        this.timeout = $timeout;
        this.displaydata()
    }

    displaydata() {
        this._NotificationService.getNotifications().then(
            (notifications) => {
                this.notifications = notifications;
            }
        )
    };
}
let notificationsComponent = {
    // bindings: {
    //     notifications: '='
    // },
    controller: NotificationCntrl,
    templateUrl: 'notifications/notifications.html'
};

export default notificationsComponent;
