class AuthService {
    constructor(lock, authManager, MainConstants, $window, $state) {
        'ngInject';
        this._lock = lock;
        this._authManager = authManager;
        this._MainConstants = MainConstants;
        this._$window = $window;
        this._$state = $state;
    };

    login() {
        this._lock.show();
    }

    logout() {
        this._$window.localStorage.removeItem(this._MainConstants.jwtKey);
        this._authManager.unauthenticate();
        this._$state.go("auth");
    }

    // Set up the logic for when a user authenticates
    // This method is called from app.run.js
    registerAuthenticationListener() {
        this._lock.on('authenticated', (authResult) => {
            this._$window.localStorage[this._MainConstants.jwtKey] = authResult.idToken;
            this._authManager.authenticate();
            this._$state.go("main");
        });
    }
};
export default AuthService;
