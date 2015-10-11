import { View, Component } from 'angular2/angular2';
import { RouterLink } from 'angular2/router';
import { ShoppingCartService } from '../../services/shopping-cart-service';

@Component({
    selector: 'welcome'
})
@View({
    templateUrl: './components/welcome/welcome.html',
    directives: [RouterLink]
})
export class Welcome {
    myName: string;
    cart: ShoppingCartService;

    constructor(shoppingCartService:ShoppingCartService) {
        this.cart = shoppingCartService;
        //this.cart.firstName ="Kevin";
        this.myName = this.cart.firstName;
    }
}
