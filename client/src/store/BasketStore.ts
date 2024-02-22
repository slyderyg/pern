import {makeAutoObservable} from "mobx";
import { IBasketItem } from "../models/response/IBasketItem";
import BasketService from "../services/BasketService";

export default class BasketStore {
    basket = [] as IBasketItem[];
    constructor() {
        makeAutoObservable(this);
    };
    setBasket(basket: IBasketItem[]) {
        this.basket = basket;
    };
    async fetchBasket() {
        try {
            const { data } = await BasketService.fetchBasket();
            this.setBasket(data);
        } catch (error: any) {
            console.log(error.response?.data?.message);
        }
    };

    async addToBasket(productId: number, quantity: number) {
        try {
            await BasketService.addToBasket(productId, quantity);
            this.fetchBasket();
        } catch (error: any) {
            console.log(error.response?.data?.message);
        }
    }

    async removeBasketItem(productId: number) {
        try {
            await BasketService.removeBasketItem(productId);
            this.fetchBasket();   
        } catch (error: any) {
            console.log(error.response?.data?.message);
        }
    }
    //добавить функции для изменения количества товара в корзине
}