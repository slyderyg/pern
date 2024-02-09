export interface IProduct {
    CategoryId: number,
    model: string,
    brand: string,
    price: number | undefined,
    description: string,
    img: FileList | null
}