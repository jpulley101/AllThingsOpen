import { View, Component } from 'angular2/angular2';
import { RouterLink } from 'angular2/router';
import { ShoppingCartService } from '../../services/shopping-cart-service';

@Component({
    selector: 'Welcome'
})
@View({
    templateUrl: './components/welcome/welcome.html',
    directives: [RouterLink]
})
export class Welcome {
    myName: string;

    constructor(shoppingCartService:ShoppingCartService) {
        this.myName = shoppingCartService.firstName;
    }
}
