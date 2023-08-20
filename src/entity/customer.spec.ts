import Address from "./address";
import Customer from "./customer";

describe("Customer Unit Tests", () => {
  test("Should throw an error when no id is provided", () => {
    expect(() => {
      let customer = new Customer("", "Pedro Wanderley");
    }).toThrowError("Id is required");
  });

  test("Should throw an error when no name is provided", () => {
    expect(() => {
      let customer = new Customer("1212121", "");
    }).toThrowError("Name is required");
  });

  test("Should change name", () => {
    let customer = new Customer("1212121", "Pedro");
    customer.changeName("Pedro W");
    expect(customer.name).toBe("Pedro W");
  });

  test("Should activate customer address is provided", () => {
    let customer = new Customer("1212121", "Pedro");
    const address = new Address("rua", 255, "zipcode", "LA");
    customer.address = address;
    customer.activate();

    expect(customer.isActive()).toBe(true);
  });

  test("Should throw error when address is not provided on activate", () => {
    expect(() => {
      const customer = new Customer("1212121", "Pedro");
      customer.activate();
    }).toThrowError("Address is mandatory to activate a customer");
  });

  test("Should deactivate customer", () => {
    let customer = new Customer("1212121", "Pedro");
    customer.deactivate();

    expect(customer.isActive()).toBe(false);
  });
});
