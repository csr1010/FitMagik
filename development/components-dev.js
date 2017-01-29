(function() {
    "use strict";

    // defining main module of the application
    angular.module("mm", ['ui.router']);

    //route configuration
    angular.module("mm").config(["$stateProvider", "$urlRouterProvider",
        function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/sleep');
            $stateProvider
                .state('sleep', {
                    url: '/sleep',
                    controller: "sleepController as vm",
                    templateUrl: './assets/sleep/sleepView.html'
                });
        }
    ]);
})();

(function(localscope) {
    "use strict";
    localscope.sleepController = function() {
        this.test = "simply to test !";
    };
    angular.module("mm").controller("sleepController", localscope.sleepController);
    sleepController.$inject = ['$scope'];
})(this);
