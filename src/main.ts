import Address from "./entity/address";
import Customer from "./entity/customer";
import Order from "./entity/order";
import OrderItem from "./entity/order-item";

let customer = new Customer("123", "Pedro Wanderley");
let address = new Address("Rua dois", 2, "2121212", "Sao Paulo");
customer.address = address;
customer.activate();

const item1 = new OrderItem("1", "Item1", 10);
const item2 = new OrderItem("2", "Item2", 15);
const order = new Order("1", "123", [item1, item2]);
