var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var shopping_cart_service_1 = require('../../services/shopping-cart-service');
var show_error_1 = require('../../helpers/show-error');
var Purchase = (function () {
    function Purchase(shoppingCartService) {
        this.model = new shopping_cart_service_1.ShoppingCartService();
        this.countries = ['US', 'Canada'];
        this.model = shoppingCartService;
        this.calculateTotalAmount();
    }
    Purchase.prototype.onSubmit = function () {
        console.log("Submitting:");
        console.log(this.model);
    };
    Purchase.prototype.calculateTotalAmount = function () {
        this.model.amount = _.chain(this.model.roses)
            .pluck('subtotal')
            .compact()
            .reduce(function (sum, num) { return parseFloat(sum) + (parseFloat(num) + 0); })
            .value();
    };
    Purchase = __decorate([
        angular2_1.Component({
            selector: 'purchase',
        }),
        angular2_1.View({
            templateUrl: './components/purchase/purchase.html',
            directives: [router_1.RouterLink, angular2_1.CORE_DIRECTIVES, angular2_1.FORM_DIRECTIVES, show_error_1.ShowError]
        }), 
        __metadata('design:paramtypes', [shopping_cart_service_1.ShoppingCartService])
    ], Purchase);
    return Purchase;
})();
exports.Purchase = Purchase;
//# sourceMappingURL=purchase.js.map