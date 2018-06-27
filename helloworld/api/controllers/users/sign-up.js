// /**
//  * user/sign-up.js
//  *
//  * @description :: Server-side controller action for handling incoming requests.
//  * @help        :: See https://sailsjs.com/documentation/concepts/controllers
//  */
// module.exports = {
//   friendlyName: 'Sign up',

//   description: '',

//   inputs: {
//     userId: {
//       description: 'The ID of the user to look up.',
//       // By declaring a numeric example, Sails will automatically respond with `res.badRequest`
//       // if the `userId` parameter is not a number.
//       type: 'number',
//       // By making the `userId` parameter required, Sails will automatically respond with
//       // `res.badRequest` if it's left out.
//       required: true
//     }
//   },

//   exits: {
//     success: {
//       responseType: 'view',
//       viewTemplatePath: 'pages/welcome'
//     },
//     notFound: {
//       description: 'No user with the specified ID was found in the database.',
//       responseType: 'notFound'
//     }
//   },


//   fn: function (inputs, exits) {
//     // Look up the user whose ID was specified in the request.
//     // Note that we don't have to validate that `userId` is a number;
//     // the machine runner does this for us and returns `badRequest`
//     // if validation fails.
//     var user = await User.findOne({ id: inputs.userId });

//     // If no user was found, respond "notFound" (like calling `res.notFound()`)
//     if (!user) { return exits.notFound(); }

//     // Display the welcome view.
//     return exits.success({ name: user.name });

//   }


// };