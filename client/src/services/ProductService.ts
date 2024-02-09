import $api from "../http";
import { AxiosResponse } from "axios";


export default class ProductService {
    static addCategory(newProduct: FormData): Promise<AxiosResponse<FormData>> {
        return $api.post<FormData>('/addproduct', newProduct)
    }
}