import User from '../entities/user'

interface UserRepository {
  getById(id: number): Promise<User>
}

export default UserRepository
