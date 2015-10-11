import { View, Component, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';
import { RouterLink } from 'angular2/router';
import { ShoppingCartService } from '../../services/shopping-cart-service';

@Component({
    selector: 'purchase',
})
@View({
    templateUrl: './components/purchase/purchase.html',
    directives: [RouterLink, CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class Purchase {
    model = new ShoppingCartService();
    countries = ['US', 'Canada'];

    constructor(shoppingCartService:ShoppingCartService) {

        this.model = shoppingCartService;
        console.log(this.model.firstName)
    }

    onSubmit() {
        console.log("Submitting:");
        console.log(this.model);
    }
}

