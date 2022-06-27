import { Product } from './product.model';
import { User } from './user.model';

export class Review{
    id!: number
    comment!: string;
    ratingGlobally!: number;
    ratingRealToSize!: number;
    ratingConfort!: number;
    ratingQuality!: number;
    size! : string;
    weight! : number;
    height! : number;
    product!: Product;
    userId! : number;
    productId! : number;
    user! : User;

    constructor(){

    }

    fromJson(json  : any){
        this.id = json.id;
        this.comment = json.comment;
        this.ratingGlobally = json.ratingGlobally;
        this.ratingRealToSize = json.ratingRealToSize;
        this.ratingConfort = json.ratingConfort;
        this.ratingQuality = json.ratingQuality;
        this.size = json.size;
        this.weight = json.weight;
        this.height = json.height;
        this.userId = json.userId;
        this.productId = json.productId

        if('Product' in json){
            const product = new Product();
            product.fromJson(json.Product);
            this.product = product
        }

        if('User' in json){
            const user = new User();
            user.fromJson(json.User);
            this.user = user
        }

    }
}