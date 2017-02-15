class BoxadsCntrl {
    constructor($scope, $timeout) {
        'ngInject';
        this._$scope = $scope;
    }
}
let BoxadsComponent = {
    controller: BoxadsCntrl,
    templateUrl: 'boxads/boxads.html'
};

export default BoxadsComponent;
