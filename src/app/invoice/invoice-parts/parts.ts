export class parts{
    id:any;
    cycleTime:any;
    name:any;
    price:any;
    customer:any;

    parts(data:any){
        this.id = data.id;
        this.name = data.id;
        this.cycleTime = data.cycleTime;
        this.customer = data.customer;
        this.price = data.price;
    }
}