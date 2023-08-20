import OrderItem from "./order-item";

export default class Order {
  _id: string;
  _costumerId: string;
  _items: OrderItem[] = [];

  constructor(id: string, costumerId: string, items: OrderItem[]) {
    this._id = id;
    this._costumerId = costumerId;
    this._items = items;
  }

  total(): number {
    return this._items.reduce((acc, item) => acc + item._price, 0);
  }
}
