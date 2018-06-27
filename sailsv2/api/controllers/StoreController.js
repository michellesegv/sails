/**
 * StoreController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  HelloWorld: function (req, res) {
    return res.json({ Hello: 'Hello World!' });
  }
};

