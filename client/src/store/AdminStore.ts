import {makeAutoObservable} from "mobx";
import { IProduct } from "../models/response/IProduct";
import ProductService from "../services/ProductService";

export default class AdminStore {
    products = [] as IProduct[];
    productsCount: number = 0;
    pages: number[] = [];
    currentPage: number = 1;

    constructor() {
        makeAutoObservable(this);
    };

    setProducts(products: IProduct[]) {
        this.products = products;
    };

    setProductsCount(count: number) {
        this.productsCount = count;
    };

    setPages(count: number) {
        this.pages = [];
        for (let i=1; i<count+1; i++) {
            this.pages.push(i)
        }
    };

    setCurrentPage(pageNumber: number) {
        this.currentPage = pageNumber;
    };

    cleanStore() {
        this.products = [];
    };

    async addProduct(newProduct: FormData) {
        try {
            await ProductService.addProduct(newProduct);
            this.fetchProduct(this.currentPage, 9);
        } catch (error: any) {
            console.log(error.response?.data?.message);
        }
    };

    async fetchProduct(page: number, limit: number, CategoryId?: number) {
        try {
            const {data} = await ProductService.fetchProduct(page, limit, CategoryId);
            this.setProducts(data.rows);
            this.setProductsCount(data.count);
            this.setPages(Math.ceil(data.count/9));
        } catch (error: any) {
            console.log(error.response?.data?.message);
        }
    };

    async deleteProduct(id: number) {
        try {
            await ProductService.deleteProduct(id);
            this.fetchProduct(this.currentPage, 9);
        } catch (error: any) {
            console.log(error.response?.data?.message);
        }
    };
}