import { RequestHandler } from 'express';

const classeValidator: RequestHandler = (req, res, next) => {
  const { classe } = req.body;
  if (!classe) {
    return res.status(400).send({ error: 'Classe is required' });
  }
  if (typeof classe !== 'string') {
    return res.status(422).send({ error: 'Classe must be a string' });
  }
  if (classe.length <= 2) {
    return res.status(422).send({ error: 'Classe must be longer than 2 characters' });
  }
  next();
};

export default classeValidator;