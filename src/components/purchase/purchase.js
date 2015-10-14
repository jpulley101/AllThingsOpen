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
/**
 * This is a component that displays an error message.
 *
 * For instance,
 *
 * <show-error control="creditCard" [errors]="['required', 'invalidCreditCard']"></show-error>
 *
 * Will display the "is required" error if the control is empty, and "invalid credit card" if the
 * control is not empty
 * but not valid.
 *
 * In a real application, this component would receive a service that would map an error code to an
 * actual error message.
 * To make it simple, we are using a simple map here.
 */
var ShowError = (function () {
    function ShowError(formDir) {
        this.formDir = formDir;
    }
    Object.defineProperty(ShowError.prototype, "errorMessage", {
        get: function () {
            var c = this.formDir.form.find(this.controlPath);
            for (var i = 0; i < this.errorTypes.length; ++i) {
                if (c && c.touched && c.hasError(this.errorTypes[i])) {
                    return this._errorMessage(this.errorTypes[i]);
                }
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    ShowError.prototype._errorMessage = function (code) {
        var config = { 'required': 'is required!', 'invalidCreditCard': 'is invalid credit card number' };
        return config[code];
    };
    ShowError = __decorate([
        angular2_1.Component({ selector: 'show-error', properties: ['controlPath: control', 'errorTypes: errors'] }),
        angular2_1.View({
            template: "\n    <div *ng-if=\"errorMessage !== null\"  class=\"valign materialize-red-text text-lighten-2\">{{errorMessage}}</div>\n  ",
            directives: [angular2_1.NgIf]
        }), 
        __metadata('design:paramtypes', [angular2_1.NgForm])
    ], ShowError);
    return ShowError;
})();
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
            directives: [router_1.RouterLink, angular2_1.CORE_DIRECTIVES, angular2_1.FORM_DIRECTIVES, ShowError]
        }), 
        __metadata('design:paramtypes', [shopping_cart_service_1.ShoppingCartService])
    ], Purchase);
    return Purchase;
})();
exports.Purchase = Purchase;
//# sourceMappingURL=purchase.js.map