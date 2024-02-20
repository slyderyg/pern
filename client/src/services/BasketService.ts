import { AxiosResponse } from "axios";
import $api from "../http";
import { IBasketItem } from "../models/response/IBasketItem";

export default class BasketService {
    static fetchBasket(): Promise<AxiosResponse<IBasketItem[]>> {
        return $api.get<IBasketItem[]>('/getbasket')
    };

    static addToBasket(productId: number, quantity: number): Promise<AxiosResponse<IBasketItem>> {
        return $api.post<IBasketItem>('/addtobasket', {productId, quantity});
    };

    static removeBasketItem(productId: number): Promise<AxiosResponse<IBasketItem>>  {
        return $api.delete<IBasketItem>('/removefrombasket', {data: {productId}})
    };
};