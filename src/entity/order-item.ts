export default class OrderItem {
  private _id: string;
  private _producetId: string;
  private _name: string;
  private _price: number;
  private _quantity: number;

  constructor(id: string, name: string, price: number, productId: string, quantity: number) {
    this._id = id;
    this._name = name;
    this._price = price;
    this._producetId = productId;
    this._quantity = quantity;
  }

  get price() { 
    return this._price;
  }
}
