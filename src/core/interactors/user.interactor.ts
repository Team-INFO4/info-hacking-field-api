import UserRepository from '../repositories/user.repository'
import { IResponse } from './response'
import UserEntity from '../entities/user'
import { HTTP_STATUS } from '../constants/http'

class UserInteractor {
  userRepository: UserRepository

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository
  }

  async getById(id: number): Promise<IResponse<UserEntity | undefined>> {
    const userModel: UserEntity = await this.userRepository.getById(id)

    if (!userModel) {
      return { status: HTTP_STATUS.NOT_FOUND, error: 'Not Found' }
    }

    const user: UserEntity = {
      id: userModel.id,
      name: userModel.name,
      content: userModel.content,
      email: userModel.email,
      password: userModel.password,
      isVerified: userModel.isVerified,
      createdAt: userModel.createdAt,
      updatedAt: userModel.updatedAt,
      deletedAt: userModel.deletedAt,
    }

    return { status: HTTP_STATUS.OK, data: user }
  }
}

export default UserInteractor
