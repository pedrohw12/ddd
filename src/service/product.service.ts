import Product from "../entity/product";

export default class ProductService {
  static increasePrice(products: Product[], percentage: number): void {
    if (percentage < 0) {
      throw new Error("Percentage must be non-negative");
    }

    products.forEach((product) => {
      product.changePrice((product.price * percentage) / 100 + product.price);
    });
  }
}
