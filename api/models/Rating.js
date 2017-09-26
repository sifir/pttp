/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
    // Extend with custom logic here by adding additional fields, methods, etc.
    attributes: {
        user: {
            model: 'user'
        },
        service: {
            type: 'integer',
            enum: [1,2,3,4,5]
        },
        quality: 'integer',
        
//        Esto lo comente porque hasta que no crees
//        estas entidades (product y order) no podes hacer el 'sails lift'
//        product: {
//            model: 'product'
//        },
//        order: {
//            model: 'order',
//            unique: true
//        }

    }
};

