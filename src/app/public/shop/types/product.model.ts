/**
 * @author sania kulkarni
 */

export class ProductItem {
  public id: number;
  public name: string;
  public description : string
  public price: number;
  public quantity: number;
  public image: string;


  constructor(id: number, name: string, price: number, image: string) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.image = image;
  }
}
