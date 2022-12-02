import UserInteractor from './user.interactor'
import UserDataSource from '../../dataSources/user.source'

const userDataSource = new UserDataSource()
export const userInteractor = new UserInteractor(userDataSource)
