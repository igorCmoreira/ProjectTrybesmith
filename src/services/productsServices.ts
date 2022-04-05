import connection from '../models/connection';
import ProductModel from '../models/productModel';
import Product from '../interfaces/product.interface';

class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async getAll(): Promise<Product[]> {
    const products = await this.model.getAll();
    return products;
  }

  public async addProduct(pro: Product): Promise<Product> {
    const product = await this.model.addProduct(pro);
    return product;
  }
}

export default ProductService;