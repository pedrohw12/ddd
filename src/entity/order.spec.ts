import Order from "./order";
import OrderItem from "./order-item";

describe("Order Unit Tests", () => {
  test("Should throw an error when no id is provided", () => {
    expect(() => {
      const order = new Order("", "costumerID", []);
    }).toThrowError("Id is required");
  });

  test("Should throw an error when no customerid is provided", () => {
    expect(() => {
      const order = new Order("123", "", []);
    }).toThrowError("CustomerId is required");
  });

  test("Should throw an error when no items are provided", () => {
    expect(() => {
      const order = new Order("123", "customerId", []);
    }).toThrowError("Item quantity must be greater than 0");
  });

  test("Should calculate total", () => {
    const item = new OrderItem("123", "name", 5, 'prodcutId', 100);
    const item2 = new OrderItem("123", "item2", 100, 'productId2', 5);
    const order = new Order("o1", "customer1", [item]);
    let total = order.total();

    expect(total).toBe(5);

    const order2 = new Order("o1", "customer1", [item, item2]);
    total = order2.total()
    expect(total).toBe(105);
  });
});
