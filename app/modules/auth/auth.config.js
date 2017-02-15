function AuthConfig($stateProvider, $urlRouterProvider, lockProvider) {
    'ngInject';
    $stateProvider
        .state('auth', {
            url: "/auth",
            controller: "authController as vm",
            templateUrl: 'auth/authView.html'
        });

    lockProvider.init({
        clientID: 'Ea6GXnhIsNp5DjH15D52wjZjl9pRV26c',
        domain: 'csmagik.auth0.com'
    });

}

export default AuthConfig;
