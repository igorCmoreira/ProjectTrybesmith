import { Pool, RowDataPacket } from 'mysql2/promise';
import Order from '../interfaces/order.inteface';

export default class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection; 
  }

  public async getAll(): Promise<Order[]> {
    const [orders] = await this.connection
      .execute<RowDataPacket[]>('SELECT * FROM Trybesmith.Orders;');
    const promiseProducts = orders.map((i) => (this.connection
      .execute<RowDataPacket[]>('SELECT id FROM Trybesmith.Products WHERE orderId = ?;', [i.id])));

    const products = await Promise.all(promiseProducts);

    const results = orders.map((item, i) => {
      const [prod] = products[i];
      const product = prod.map((pro) => pro.id);
      const re: Order = {
        id: item.id,
        userId: item.userId,
        products: product as number[],
      };
      return re;
    });
    return results;
  }
}