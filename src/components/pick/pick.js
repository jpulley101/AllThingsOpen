/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="../../typings/lodash/lodash.d.ts" />
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
var rose_service_1 = require('../../services/rose-service');
var shopping_cart_service_1 = require("../../services/shopping-cart-service");
var rose_bush_1 = require("../../types/rose-bush");
var Pick = (function () {
    function Pick(roseService, shoppingCartService) {
        this.catSelected = false;
        this.service = shoppingCartService;
        this.model = shoppingCartService.roses;
        this.maxRoses = shoppingCartService.maxRoses;
        this.totalQuantity = shoppingCartService.totalQuantity;
        this.roseInventory = roseService.getRoses();
    }
    Pick.calculateSubTotal = function (rose) {
        if (rose.price && rose.quantity) {
            rose.subtotal = rose.price * rose.quantity;
        }
        else {
            rose.subtotal = null;
        }
        return rose.subtotal;
    };
    Pick.prototype.getRoses = function ($event) {
        this.catSelected = true;
    };
    Pick.prototype.addRoseBush = function () {
        this.model.push(new rose_bush_1.RoseBush());
    };
    Pick.prototype.removeRoseBush = function (roseBush) {
        _.pull(this.model, roseBush);
        this.calculateTotalQuantity();
    };
    Pick.prototype.getCategoryIndex = function (rose) {
        var index = _.findIndex(this.roseInventory, { 'name': rose.category });
        if (index == -1) {
            return 0;
        }
        else {
            return index;
        }
    };
    Pick.prototype.setRosePrice = function (rose) {
        var catIndex = _.findIndex(this.roseInventory, { 'name': rose.category });
        if (catIndex != -1) {
            var index = _.findIndex(this.roseInventory[catIndex].products, { 'name': rose.name });
            if (index == -1) {
                return null;
            }
            else {
                rose.price = this.roseInventory[catIndex].products[index].price;
                return rose.price;
            }
        }
        else {
            rose.price = null;
            rose.points = null;
            rose.quantity = null;
            return null;
        }
    };
    Pick.prototype.getRating = function (rose) {
        var catIndex = rose ? _.findIndex(this.roseInventory, { 'name': rose.category }) : -1;
        if (catIndex != -1) {
            var index = _.findIndex(this.roseInventory[catIndex].products, { 'name': rose.name });
            if (index == -1) {
                return null;
            }
            else {
                rose.points = this.roseInventory[catIndex].products[index].points;
                return _.range(0, rose.points);
            }
        }
        else {
            return null;
        }
    };
    Pick.prototype.calculateSubTotal = function (rose) {
        if (rose.price && rose.quantity) {
            rose.subtotal = rose.price * rose.quantity;
        }
        else {
            rose.subtotal = null;
        }
        return rose.subtotal;
    };
    Pick.prototype.emptyValues = function (rose) {
        rose.quantity = null;
    };
    Pick.prototype.calculateTotalQuantity = function () {
        this.totalQuantity = _.chain(this.model)
            .pluck('quantity')
            .without(null)
            .reduce(function (sum, num) { return parseInt(sum) + (parseInt(num) + 0); })
            .value();
        this.service.totalQuantity = this.totalQuantity;
    };
    Pick.prototype.checkMaxRoses = function () {
        this.calculateTotalQuantity();
        if (this.totalQuantity) {
            return this.maxRoses >= this.totalQuantity;
        }
        else {
            return true;
        }
    };
    Pick.prototype.getMaxRoses = function () {
        return this.maxRoses;
    };
    Pick = __decorate([
        angular2_1.Component({
            selector: 'pick',
            bindings: [rose_service_1.RoseService]
        }),
        angular2_1.View({
            templateUrl: './components/pick/pick.html',
            directives: [router_1.RouterLink, angular2_1.CORE_DIRECTIVES, angular2_1.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [rose_service_1.RoseService, shopping_cart_service_1.ShoppingCartService])
    ], Pick);
    return Pick;
})();
exports.Pick = Pick;
//# sourceMappingURL=pick.js.map