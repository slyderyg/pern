import {makeAutoObservable} from "mobx";
import { IProduct } from "../models/response/IProduct";
import ProductService from "../services/ProductService";

export default class ProductStore {
    products = [] as IProduct[];
    productsCount: number = 0;

    constructor() {
        makeAutoObservable(this);
    };

    setProducts(products: IProduct[]) {
        this.products = products;
    };

    setProductsCount(count: number) {
        this.productsCount = count;
    };

    cleanStore() {
        this.products = [];
    };

    async fetchProduct(page: number, limit: number, CategoryId?: number) {
        try {
            const {data} = await ProductService.fetchProduct(page, limit, CategoryId);
            this.setProducts(data.rows);
            this.setProductsCount(data.count);
        } catch (error: any) {
            console.log(error.response?.data?.message);
        }
    };

    async lazyLoadProducts(page: number) {
        const {data} = await ProductService.fetchProduct(page, 9);
        this.setProducts([...this.products, ...data.rows]);
        this.setProductsCount(data.count);
    };

}