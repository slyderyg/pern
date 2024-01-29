import $api from "../http";
import { AxiosResponse } from "axios";
import { ICategory } from "../models/response/ICategory";

export default class CategoryService {
    static fetchCategory(): Promise<AxiosResponse<ICategory[]>> {
        return $api.get<ICategory[]>('/getallcategories')
    }
}