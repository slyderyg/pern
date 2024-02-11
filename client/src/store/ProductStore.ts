import {makeAutoObservable} from "mobx";
import { IProduct } from "../models/response/IProduct";
import ProductService from "../services/ProductService";

export default class ProductStore {
    products = [] as IProduct[];

    constructor() {
        makeAutoObservable(this);
    };

    setProducts(products: IProduct[]) {
        this.products = products;
    };

    async addProduct(newProduct: FormData) {
        try {
            await ProductService.addProduct(newProduct);
            this.fetchProduct();
        } catch (error: any) {
            console.log(error.response?.data?.message);
        }
    };

    async fetchProduct(CategoryId?: number, page?: number, limit?: number) {
        try {
            const {data} = await ProductService.fetchProduct(CategoryId, page, limit);
            this.setProducts(data.rows);
        } catch (error: any) {
            console.log(error.response?.data?.message);
        }
    };

    async deleteProduct(id: number) {
        try {
            await ProductService.deleteProduct(id);
            this.fetchProduct();
        } catch (error: any) {
            console.log(error.response?.data?.message);
        }
    }

}