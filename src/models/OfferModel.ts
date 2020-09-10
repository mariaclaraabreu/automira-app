class OfferModel {
  public id: string;
  public board: string;
  public brand: string;
  public city: string;
  public color: string;
  public km: string;
  public model: string;
  public price: string;
  public year: string;
  public views: number;
  

  public constructor(id:string, board:string, 
    brand:string, city:string, 
    color:string, km:string, 
    model:string, price:string, 
    year:string, views:number){
    
    this.id = id;
    this.board = board;
    this.brand = brand;
    this.city = city;
    this.color = color;
    this.km = km;
    this.model = model;
    this.price = price;
    this.year = year;
    this.views = 0;
  }
}

export default OfferModel;

