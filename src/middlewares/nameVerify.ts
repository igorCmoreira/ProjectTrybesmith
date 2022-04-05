import { RequestHandler } from 'express';

const nameValidator: RequestHandler = (req, res, next) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).send({ error: 'Name is required' });
  }
  if (typeof name !== 'string') {
    return res.status(422).send({ error: 'Name must be a string' });
  }
  if (name.length < 2) {
    return res.status(422).send({ error: 'Name must be longer than 2 characters' });
  }
  next();
};

export default nameValidator;