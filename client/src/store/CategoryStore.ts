import {makeAutoObservable} from "mobx";
import { ICategory } from "../models/response/ICategory";
import CategoryService from "../services/CategoryService";

export default class CategoryStore {
    categories = [] as ICategory[];
    isLoading = false;

    constructor() {
        makeAutoObservable(this);
    }

    setCategories(categories: ICategory[]) {
        this.categories = categories;
    }

    setLoading(bool: boolean) {
        this.isLoading = bool;
    }

    async fetchCategory() {
        try {
            const {data} = await CategoryService.fetchCategory();
            this.setCategories(data);

        } catch (error: any) {
            console.log(error.response?.data?.message);
        }
    }

    async addCategory(name: string) {
        try {
            await CategoryService.addCategory(name);
            this.fetchCategory();
        } catch (error: any) {
            console.log(error.response?.data?.message);
        }
    }

    async deleteCategory(name: string) {
        try {
            await CategoryService.deleteCategory(name);
            this.fetchCategory();
        } catch (error: any) {
            console.log(error.response?.data?.message);
        }

    }

}