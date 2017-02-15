function MainConfig($stateProvider, $urlRouterProvider) {
    'ngInject';
    //$urlRouterProvider.otherwise('/auth');
    $stateProvider
        .state('main', {
            url: "/fitness",
            controller: "mainController as vm",
            templateUrl: 'maincontainer/mainView.html'
        });
}

export default MainConfig;
