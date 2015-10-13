/// <reference path="../node_modules/angular2/bundles/typings/angular2/angular2.d.ts" />

import {HTTP_BINDINGS} from 'angular2/http';
import {Component, View, bootstrap, bind, NgModel} from 'angular2/angular2';
import {ROUTER_BINDINGS, ROUTER_DIRECTIVES, ROUTER_PRIMARY_COMPONENT, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {RouterLink, RouteConfig, Router, RouterOutlet, Location, RouteParams} from 'angular2/router';
import {Welcome} from '../src/components/welcome/welcome';
import {Plan} from '../src/components/plan/plan';
import {Pick} from '../src/components/pick/pick';
import {Purchase} from '../src/components/purchase/purchase';
import {ShoppingCartService} from '../src/services/shopping-cart-service';

@Component({
  selector: "my-app",
  bindings: [Welcome, Plan, Pick, Purchase, ShoppingCartService, ROUTER_DIRECTIVES]
})
@View({
  templateUrl: 'nav.html',
  directives:[ROUTER_DIRECTIVES],
})
@RouteConfig([
  {path: '/', component: Welcome, as: 'Home'},
  {path: '/Plan', component: Plan, as: 'Plan'},
  {path: '/Pick', component: Pick, as: 'Pick'},
  {path: '/Purchase', component: Purchase, as: 'Purchase'},
])
class DisplayComponent {
  router: Router;
  location: Location;
  constructor(router: Router, location: Location) {
    this.router = router;
    this.location = location;

  }
  getLinkStyle(path) {
    //return this.location.path() === path;
  }
}

bootstrap(DisplayComponent,[
  ROUTER_BINDINGS,
  bind(ROUTER_PRIMARY_COMPONENT).toValue(DisplayComponent) ,
  bind(LocationStrategy).toClass(HashLocationStrategy)
]);