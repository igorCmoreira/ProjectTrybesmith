import { Request, Response, NextFunction } from 'express';
import ProductService from '../services/productsServices';

class ProductController {
  constructor(private productService = new ProductService()) { }

  public getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const products = await this.productService.getAll();
      res.status(200).json(products);
    } catch (err) {
      next(err);
    }
  };

  public addProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name, amount } = req.body;
      const created = await this.productService.addProduct({ name, amount });
      return res.status(201).send({ item: created });
    } catch (err) {
      next(err);
    }
  };
}

export default ProductController;