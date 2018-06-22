'use strict'

const Model = use('Model')
const Hash = use('Hash')

class User extends Model {
  static boot () {
    super.boot()

    /**
     * A hook to hash the user password before saving
     * it to the database.
     */
    this.addHook('beforeSave', async (userInstance) => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password)
      }
    })
  }

  /**
   * A relationship on tokens is required for auth to
   * work. Since features like `refreshTokens` or
   * `rememberToken` will be saved inside the
   * tokens table.
   *
   * @method tokens
   *
   * @return {Object}
   */
  tokens () {
    return this.hasMany('App/Models/Token')
  }

   /**
   * Get Tweets For User
   *
   * @method tweets
   *
   * @return {Object}
   */
  tweets () {
    return this.hasMany('App/Models/Tweet')
  }

  /**
   * Get Followers For User
   *
   * @method followers
   *
   * @return {Object}
   */
  followers () {
    return this.belongsToMany('App/Models/User', 'user_id', 'follower_id').pivotTable('followers')
  }

  /**
   * Get Followers For User
   *
   * @method following
   *
   * @return {Object}
   */
  following () {
    return this.belongsToMany('App/Models/User', 'follower_id', 'user_id').pivotTable('followers')
  }

  /**
   * Get Replies For User
   *
   * @method replies
   *
   * @return {Object}
   */
  replies () {
    return this.hasMany('App/Models/Reply')
  }

   /**
   * Get Favorites For User
   *
   * @method favorites
   *
   * @return {Object}
   */
  favorites () {
    return this.hasMany('App/Models/Favorite')
  }
}

module.exports = User
