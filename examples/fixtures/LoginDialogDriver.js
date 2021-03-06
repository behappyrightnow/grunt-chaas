var LoginDialogDriver = (function () {
    function LoginDialogDriver(userName, password) {
        this.userName = userName;
        this.password = password;
        this.loginAttempts = 0;
    }
    LoginDialogDriver.prototype.loginWithUsernameAndPassword = function (userName, password) {
        this.loginAttempts++;
        var result = (userName == this.userName && password == this.password);
        if (result) {
            this.message = userName + " logged in.";
        } else {
            this.message = userName + " not logged in.";
        }
        return result;
    };

    LoginDialogDriver.prototype.loginMessage = function () {
        return this.message;
    };

    LoginDialogDriver.prototype.numberOfLoginAttempts = function () {
        console.log(this.loginAttempts);
        return this.loginAttempts;
    };
    return LoginDialogDriver;
})();
