var ShouldIBuyChaas = (function () {
    function ShouldIBuyChaas() {
        this.cashInWallet = 0;
        this.creditCard = "no";
        this.pintsOfChaasRemaining = 0;
    }
    ShouldIBuyChaas.prototype.goToStore = function () {
        return (this.pintsOfChaasRemaining == 0 && (this.cashInWallet > 2 || this.creditCard === 'yes')) ? "yes" : "no";
    };
    return ShouldIBuyChaas;
})();
