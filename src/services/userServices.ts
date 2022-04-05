import connection from '../models/connection';
import UserModel from '../models/userModel';
import User from '../interfaces/user.interface';

class UserService { 
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async createUser(user: User): Promise<User> {
    const userCreated = await this.model.createUser(user);
    return userCreated;
  }
}
export default UserService;