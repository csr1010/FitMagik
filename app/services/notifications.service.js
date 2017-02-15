class NotificationService {
    constructor($http, $q, MainConstants, $timeout) {
        'ngInject';
        this._$http = $http;
        this._$q = $q;
        this._mainConstants = MainConstants;
        this._$timeout = $timeout;
    }
    getNotifications() {
        let deferred = this._$q.defer();

        this._$http({
            url: this._mainConstants.api + '/notifications',
            method: 'GET'
        }).then(
            (res) => {
                deferred.resolve(res.data.notifications);
                //this._$timeout(this.getNotifications, 10000);
            },
            (err) => deferred.reject(err)
        );

        return deferred.promise;
    }
};
export default NotificationService;
