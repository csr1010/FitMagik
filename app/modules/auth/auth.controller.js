class AuthController {
    constructor($scope, authService) {
        'ngInject';
        this._$scope = $scope;
        this.authService = authService;
    };
};

export default AuthController;
