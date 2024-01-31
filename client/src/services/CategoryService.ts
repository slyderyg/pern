import $api from "../http";
import { AxiosRequestConfig, AxiosResponse } from "axios";
import { ICategory } from "../models/response/ICategory";

export default class CategoryService {
    static fetchCategory(): Promise<AxiosResponse<ICategory[]>> {
        return $api.get<ICategory[]>('/getallcategories')
    };

    static addCategory(name: string): Promise<AxiosResponse<ICategory>> {
        return $api.post<ICategory>('/addcategory', {name})
    };

    static deleteCategory(name:string): Promise<AxiosResponse<string>>  {
        return $api.delete<string>('/deletecategory', {data: {name}})
    };

}