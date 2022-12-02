import User from '../core/entities/user'
import UserRepository from '../core/repositories/user.repository'
import UserModel from './sequelize/user.model'

class UserDataSource implements UserRepository {
  public async getById(id: number): Promise<User> {
    const userModel: User = await UserModel.findOne({
      where: {
        id,
      },
    })

    return userModel
  }
}

export default UserDataSource
