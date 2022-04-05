import { Pool, ResultSetHeader } from 'mysql2/promise';
import User from '../interfaces/user.interface';

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection; 
  }

  public async createUser(user: User): Promise<User> {
    const { username, classe, level, password } = user;
    const [result] = await this.connection
      .execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?,?,?,?)',
      [username, classe, level, password],
    );
    const { insertId } = result;
    return { id: insertId, username, classe, level, password };
  }
}