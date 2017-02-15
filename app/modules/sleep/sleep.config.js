function sleepConfig($stateProvider, $urlRouterProvider) {
    'ngInject';
    $stateProvider
        .state('main.sleep', {
            url: "/sleep",
            controller: "sleepController as vm",
            templateUrl: 'sleep/sleepView.html'
        });
}

export default sleepConfig;
