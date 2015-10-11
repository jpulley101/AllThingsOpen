/**
 * Created by Kevin.Hennessy on 10/3/2015.
 */
var rose_bush_1 = require("../types/rose-bush");
var ShoppingCartService = (function () {
    function ShoppingCartService() {
        // personal info
        this.firstName = "Kevin";
        this.lastName = "Hennessy";
        this.country = "Canada";
        this.creditCard = 897999923;
        this.email = "Kevin.Hennessy@appliedis.com";
        // roses
        this.roses = [(new rose_bush_1.RoseBush())];
        // purchase info
        this.totalQuantity = 15;
        this.amount = 35;
    }
    return ShoppingCartService;
})();
exports.ShoppingCartService = ShoppingCartService;
//# sourceMappingURL=shopping-cart-service.js.map