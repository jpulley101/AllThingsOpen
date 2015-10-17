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
/// <reference path="../node_modules/angular2/bundles/typings/angular2/angular2.d.ts" />
var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var welcome_1 = require('../src/components/welcome/welcome');
var plan_1 = require('../src/components/plan/plan');
var pick_1 = require('../src/components/pick/pick');
var purchase_1 = require('../src/components/purchase/purchase');
var shopping_cart_service_1 = require('../src/services/shopping-cart-service');
var DisplayComponent = (function () {
    function DisplayComponent(router) {
        this.router = router;
    }
    DisplayComponent = __decorate([
        angular2_1.Component({
            selector: "my-app",
            bindings: [welcome_1.Welcome, plan_1.Plan, pick_1.Pick, purchase_1.Purchase, shopping_cart_service_1.ShoppingCartService]
        }),
        angular2_1.View({
            templateUrl: 'nav.html',
            directives: [router_1.ROUTER_DIRECTIVES],
        }),
        router_1.RouteConfig([
            { path: '/', component: welcome_1.Welcome, as: 'Home' },
            { path: '/Plan', component: plan_1.Plan, as: 'Plan' },
            { path: '/Pick', component: pick_1.Pick, as: 'Pick' },
            { path: '/Purchase', component: purchase_1.Purchase, as: 'Purchase' },
        ]), 
        __metadata('design:paramtypes', [router_1.Router])
    ], DisplayComponent);
    return DisplayComponent;
})();
angular2_1.bootstrap(DisplayComponent, [
    router_1.ROUTER_PROVIDERS,
    angular2_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })
]);
//# sourceMappingURL=app.js.map