import { RequestHandler } from 'express';

const levelValidator: RequestHandler = (req, res, next) => {
  const { level } = req.body;
  if (level <= 0) {
    return res.status(422).send({ error: 'Level must be greater than 0' });
  }
  if (!level) {
    return res.status(400).send({ error: 'Level is required' });
  }
  if (typeof level !== 'number') {
    return res.status(422).send({ error: 'Level must be a number' });
  }
  next();
};

export default levelValidator;