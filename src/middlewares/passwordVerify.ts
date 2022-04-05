import { RequestHandler } from 'express';

const passwordValidator: RequestHandler = (req, res, next) => {
  const { password } = req.body;
  if (!password) {
    return res.status(400).send({ error: 'Password is required' });
  }
  if (typeof password !== 'string') {
    return res.status(422).send({ error: 'Password must be a string' });
  }
  if (password.length <= 7) {
    return res.status(422).send({ error: 'Password must be longer than 7 characters' });
  }
  next();
};

export default passwordValidator;