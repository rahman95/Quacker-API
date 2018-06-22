'use strict'

const Model = use('Model')

class Favorite extends Model {

  /**
   * Get Tweet of Favourite
   *
   * @method replies
   *
   * @return {Object}
   */
  tweet () {
    return this.belongsTo('App/Models/Tweet')
  }

  /**
   * Get User of Favourite
   *
   * @method replies
   *
   * @return {Object}
   */
  user () {
    return this.belongsTo('App/Models/User')
}
}

module.exports = Favorite
