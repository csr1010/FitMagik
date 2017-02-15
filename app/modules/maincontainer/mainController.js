class mainController {
    constructor($state, authService) {
        'ngInject';
        this.authService = authService;
        $state.go("main.sleep");
    }
}
export default mainController;
