/**
 * Created by Kevin.Hennessy on 10/3/2015.
 */
import {RoseBush} from "../types/rose-bush";

export class ShoppingCartService {
    // personal info
    firstName: string = "Kevin";
    lastName: string = "Hennessy";
    country: string = "Canada";
    creditCard: number = 897999923;
    email: string = "Kevin.Hennessy@appliedis.com";

    // Garden dimensions
    length: number;
    width: number;
    squareFootage: number;
    maxRoses: number;

    // roses
    roses: Array<RoseBush> = [(new RoseBush())];

    // purchase info
    totalQuantity = 15;
    amount = 35;

 }


