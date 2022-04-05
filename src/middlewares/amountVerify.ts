import { RequestHandler } from 'express';

const amountValidator: RequestHandler = (req, res, next) => {
  const Product = req.body;
  if (!Product.amount) {
    return res.status(400).send({ error: 'Amount is required' });
  }
  if (typeof Product.amount !== 'string') {
    return res.status(422).send({ error: 'Amount must be a string' });
  }
  if (Product.amount.length < 2) {
    return res.status(422).send({ error: 'Amount must be longer than 2 characters' });
  }
  next();
};

export default amountValidator;