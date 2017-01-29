(function(localscope) {
    "use strict";
    localscope.sleepController = function() {
        this.test = "simply to test !";
    };
    angular.module("mm").controller("sleepController", localscope.sleepController);
    sleepController.$inject = ['$scope'];
})(this);
