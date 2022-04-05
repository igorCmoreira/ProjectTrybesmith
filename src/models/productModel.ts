import { Pool, RowDataPacket } from 'mysql2/promise';
import Product from '../interfaces/product.interface';

export default class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection; 
  }

  public async getAll(): Promise<Product[]> {
    const [result] = await this.connection
      .execute<RowDataPacket[]>('SELECT * FROM Trybesmith.Products');
    return result as Product[];
  }
}