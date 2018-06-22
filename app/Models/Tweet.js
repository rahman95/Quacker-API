'use strict'

const Model = use('Model')

class Tweet extends Model {

  /**
   * Get User For Tweet
   *
   * @method user
   *
   * @return {Object}
   */
  user () {
    return this.belongsTo('App/Models/User')
  }

  /**
   * Get Replies For Tweet
   *
   * @method replies
   *
   * @return {Object}
   */
  replies() {
    return this.hasMany('App/Models/Reply')
  }

  /**
   * Get Favourites For Tweet
   *
   * @method replies
   *
   * @return {Object}
   */
  favorites() {
    return this.hasMany('App/Models/Favorite')
  }
}

module.exports = Tweet
