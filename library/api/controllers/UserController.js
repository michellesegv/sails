/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  /*create: function (req, res) {
    if (req.method == "POST") {
      console.log(req.method);
      var userName = req.param("name");
      // var insert = "INSERT INTO User(name) VALUES(" + name + ")";
      User.create({ name: userName }).exec(
        function(err, result){
          return res.json(result);
        }
      )
      // var createdUser = await User.create({ name: userName }).fetch();


      // User.query(insert, function (err, record) {

      //   if (err) {
      //     console.log(err);
      //   }
      //   else {
      //     console.log(record);
      //     // res.redirect('User/index');
      //   }
      // });

    }
    else {
      // res.render("create");
      console.log('no funciona')
    }
  },*/
  // write: function (req, res) {
  //   var usersNamedFinn = await User.find({ name: req.param('name') });

  //   sails.log('Wow, there are %d users named Finn.  Check it out:', usersNamedFinn.length, usersNamedFinn);
  //   return res.json(usersNamedFinn);
  // },
  create: function (req, res, next, callback) {
    User.create({
      name: req.param('name')
    })
      .then(function () {
        res.ok();
        // console.log('después de ejecutar create()')
      })
    // //create a user
    // User.create(params, function (err, createdData) {
    //   if (err) {
    //     return res.badRequest({
    //       error: err
    //     });
    //   } else {
    //     return res.json({
    //       data: createdData
    //     });
    //   }
    // });
  },
  'new': function (req, res) {
    res.view();
  },
  index: function (req, res) {
    User.find(function foundUser(err, users) {
      if (err) return res.redirect('/user/new');
      res.view({
        users: users
      });
    });
  },
  // create: function (req, res) {
  // console.log(req)
  // User.create(req.params.all(), function userCreated(err, user) {
  //   if (err) return res.redirect('/user/new');
  //   res.redirect('/user/show/' + user.id);
  // });
  // var nameUser = req.param('name');
  // var user = {
  //   name: nameUser,
  // }
  // User.create(user).exec(function (err, result) {
  //   if (err) {
  //     sails.log.debug('Some error occured ' + err);
  //     return res.json(500, { error: 'Some error occured' });
  //   }
  //   sails.log.debug('Success', JSON.stringify(result));
  //   return res.json(200, { success: 'Success' });
  // });
  // }
};

