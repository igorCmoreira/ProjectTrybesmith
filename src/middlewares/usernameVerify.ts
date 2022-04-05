import { RequestHandler } from 'express';

const usernameValidator: RequestHandler = (req, res, next) => {
  const { username } = req.body;
  if (!username) {
    return res.status(400).send({ error: 'Username is required' });
  }
  if (typeof username !== 'string') {
    return res.status(422).send({ error: 'Username must be a string' });
  }
  if (username.length <= 2) {
    return res.status(422).send({ error: 'Username must be longer than 2 characters' });
  }
  next();
};

export default usernameValidator;