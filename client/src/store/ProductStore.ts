import {makeAutoObservable} from "mobx";
import { IProduct } from "../models/response/IProduct";
import ProductService from "../services/ProductService";

export default class ProductStore {
    products = [] as IProduct[];

    constructor() {
        makeAutoObservable(this);
    }

    setProducts(products: IProduct[]) {
        this.products = products;
    }

    async addProduct(newProduct: FormData) {
        try {
            await ProductService.addCategory(newProduct);
            // добавить фукцию fetch product
        } catch (error: any) {
            console.log(error.response?.data?.message);
        }
    }

}