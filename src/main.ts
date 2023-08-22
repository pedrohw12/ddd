import Address from "./domain/entity/address";
import Customer from "./domain/entity/customer";

let customer = new Customer("123", "Pedro Wanderley");
let address = new Address("Rua dois", 2, "2121212", "Sao Paulo");
customer.address = address;
customer.activate();

