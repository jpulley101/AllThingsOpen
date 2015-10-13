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
/// <reference path="../../typings/tsd.d.ts" />
var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var shopping_cart_service_1 = require("../../services/shopping-cart-service");
var Plan = (function () {
    function Plan(shoppingCartService) {
        this.dimensions = [4, 8, 12, 16, 20, 24];
        this.cart = shoppingCartService;
        this.squareFootage = this.cart.squareFootage;
        this.maxRoses = this.cart.maxRoses;
        this.length = this.cart.length;
        this.width = this.cart.width;
    }
    Plan.prototype.setWidth = function (value) {
        this.cart.width = value;
        this.setSquareFootage();
        this.setMaxRoses();
    };
    Plan.prototype.setLength = function (value) {
        this.cart.length = value;
        this.setSquareFootage();
        this.setMaxRoses();
    };
    Plan.prototype.setSquareFootage = function () {
        this.squareFootage = this.cart.width * this.cart.length;
        this.cart.squareFootage = this.squareFootage;
    };
    Plan.prototype.setMaxRoses = function () {
        this.maxRoses = this.squareFootage / 4;
        this.cart.maxRoses = this.maxRoses;
    };
    Plan = __decorate([
        angular2_1.Component({
            selector: 'plan'
        }),
        angular2_1.View({
            templateUrl: './components/plan/plan.html',
            directives: [angular2_1.CORE_DIRECTIVES, router_1.RouterLink, angular2_1.NgModel]
        }), 
        __metadata('design:paramtypes', [shopping_cart_service_1.ShoppingCartService])
    ], Plan);
    return Plan;
})();
exports.Plan = Plan;
//# sourceMappingURL=plan.js.map