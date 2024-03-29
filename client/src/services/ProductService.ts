import $api from "../http";
import { AxiosResponse } from "axios";


export default class ProductService {
    static addProduct(newProduct: FormData): Promise<AxiosResponse<FormData>> {
        return $api.post<FormData>('/addproduct', newProduct)
    };

    static fetchProduct(page: number, limit: number, CategoryId?: number) {
        return $api.get('/getallproducts', {params: {
            CategoryId, page, limit
        }})
    };

    static deleteProduct(id: number) {
        return $api.delete('/deleteproduct', {data: {id}})
    };


}