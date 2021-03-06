import Database from './model'

export default (scope, callback) => {
  try {
    const db = new Database(scope)
    callback(null, db)
  } catch (e) {
    scope.logger.error(e)
  }
}
