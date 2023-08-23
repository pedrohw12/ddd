import Customer from "../../product/entity/entity/customer";
import Order from "../entity/order";
import OrderItem from "../entity/order-item";
import OrderService from "./order.service";

describe("Order service unit tests", () => {
  it("should place an order", () => {
    const customer = new Customer("id", "name");
    const item1 = new OrderItem("id", "name", 10, "productId", 1);
    const order = OrderService.placeOrder(customer, [item1]);

    expect(customer.rewardPoints).toBe(5);
    expect(order.total()).toBe(10);
  });

  it("should get total of all orders", () => {
    const item1 = new OrderItem("id1", "order 1", 10, "productId", 1);
    const item2 = new OrderItem("id2", "order 2", 20, "productId2", 1);

    const order = new Order("id1", "order 1", [item1]);
    const order2 = new Order("id2", "order 2", [item2]);

    const total = OrderService.total([order, order2]);

    expect(total).toBe(30);
  });
});
