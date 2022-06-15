import { Product } from './product.model';

export class Review{
    id!: number
    comment!: string;
    rating!: number;
    weight! : number;
    height! : number;
    product!: Product;
    userId! : number;
    productId! : number;

    constructor(){

    }

    fromJson(json  : any){
        this.id = json.id;
        this.comment = json.comment;
        this.rating = json.rating;
        this.weight = json.weight;
        this.height = json.height;
        this.userId = json.userId;
        this.productId = json.productId

        if('product' in json){
            const product = new Product();
            product.fromJson(json.product);
            this.product = product
        }

    }
}