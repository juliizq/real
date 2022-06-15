export class Product{
    id!: number;
    name!: string;
    shop!: string;
    categoryId! : number;


    constructor(){

    }

    fromJson(json  : any){
        this.id = json.id;
        this.name = json.name;
        this.shop = json.shop;
        this.categoryId = json.categoryId;
    }
}