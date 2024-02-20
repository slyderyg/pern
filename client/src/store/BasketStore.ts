import {makeAutoObservable} from "mobx";
import { IBasketItem } from "../models/response/IBasketItem";

export default class BasketStore {
    basket = [] as IBasketItem[];

    constructor() {
        makeAutoObservable(this);
    };

    setBasket(basket: IBasketItem[]) {
        this.basket = basket;
    };
}