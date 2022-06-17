export class User{
    id!: number;
    firstName!: string;
    lastName!: string;
    email! : string;
    role!: string;
    country! : string;
    city! : string;
    totalReview! : number;


    constructor(){

    }

    fromJson(json  : any){
        this.id = json.id;
        this.firstName = json.firstName;
        this.lastName = json.lastName;
        this.email = json.email;
        this.role = json.role;
        this.country = json.country;
        this.city = json.city;
        this.totalReview = json.totalReview;
    }
}