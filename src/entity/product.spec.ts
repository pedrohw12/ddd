import Product from "./product";

describe("Product Unit Tests", () => {
  test("Should throw an error when no id is provided", () => {
    expect(() => {
      const product = new Product("", "Product1", 100);
    }).toThrowError("Id is required");
  });

  test("Should throw an error when no name is provided", () => {
    expect(() => {
      const product = new Product("123", "", 100);
    }).toThrowError("Name is required");
  });

  test("Should throw an error when no price is provided", () => {
    expect(() => {
      const product = new Product("123", "Product1", -1);
    }).toThrowError("Price must be greater than zero");
  });

  test("Should change name", () => {
    let product = new Product("123", "Product1", 1);
    product.changeName('New product')
    expect(product.name).toBe('New product');
  });

  test("Should change price", () => {
    let product = new Product("123", "Product1", 1);
    product.changePrice(2)
    expect(product.price).toBe(2);
  });
});
