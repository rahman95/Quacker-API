'use strict'

const Model = use('Model')

class Reply extends Model {

  /**
   * Get User of Reply
   *
   * @method replies
   *
   * @return {Object}
   */
  user () {
    return this.belongsTo('App/Models/User')
  }

  /**
   * Get Tweet of Reply
   *
   * @method replies
   *
   * @return {Object}
   */
  tweet() {
    return this.belongsTo('App/Models/Tweet')
}
}

module.exports = Reply
