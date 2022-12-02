import { DataTypes, Model, Optional, Sequelize } from 'sequelize'
import UserAttributes from '../../core/entities/user'
import sequelizeInstance from './index'

interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}
class User
  extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes
{
  public id: number
  public name: string
  public content: string
  public email: string
  public password: string
  public isVerified: boolean

  public createdAt: string
  public updatedAt: string
  public deletedAt: string
}

export const initUser = (sequelize: Sequelize) => {
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
      deletedAt: DataTypes.DATE,
      name: {
        type: DataTypes.STRING(40),
      },
      content: {
        type: DataTypes.STRING(160),
      },
      email: {
        type: DataTypes.STRING(40),
        unique: true,
      },
      password: {
        type: DataTypes.STRING(80),
      },
      isVerified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    { modelName: 'user', sequelize: sequelizeInstance }
  )

  return User
}

export default User
