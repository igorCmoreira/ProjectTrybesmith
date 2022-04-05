import { Request, Response, NextFunction } from 'express';
import UserService from '../services/userServices';
import User from '../interfaces/user.interface';
import { genAuthToken } from '../services/auth';

class UserControler { 
  constructor(private userService = new UserService()) { }

  public createUser = async (req: Request, res: Response, next: NextFunction) => {
    try { 
      const user: User = req.body;
      const created: User = await this.userService.createUser(user);
      if (!created.id) {
        return res.status(501).end();
      }
      const token = genAuthToken(created.id);
      return res.status(201).send({ token });
    } catch (err) {
      next(err);
    }
  };
}

export default UserControler;