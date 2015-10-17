/// <reference path="../node_modules/angular2/bundles/typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap, provide} from 'angular2/angular2';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, Router, RouteConfig, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {Welcome} from '../src/components/welcome/welcome';
import {Plan} from '../src/components/plan/plan';
import {Pick} from '../src/components/pick/pick';
import {Purchase} from '../src/components/purchase/purchase';
import {ShoppingCartService} from '../src/services/shopping-cart-service';

@Component({
  selector: "my-app",
  bindings: [Welcome, Plan, Pick, Purchase, ShoppingCartService]
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
  constructor(router: Router) {
    this.router = router;
  }
}
bootstrap(DisplayComponent,[
  ROUTER_PROVIDERS,
  provide(LocationStrategy, {useClass: HashLocationStrategy})
]);