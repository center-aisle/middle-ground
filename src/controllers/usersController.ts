require("mongoose");
const User = require("../models/User.ts")

module.exports = {
    update: function(req, res) {
        User.findByIdAndUpdate(req.params.UserId, req.body, {new: true}, (err, UserId) => {
                if (err) return res.status(500).send(err);
                return res.send(UserId)
            });
    },
    findById: function(req, res) {
        User.findById(req.params.id, (err, dbUsers) => {
            if (err) return res.status(422).send(err)
            return res.send(dbUsers);
            });
    }
};

//update function in a get request in the api routes because finding a single ID in
//findbyidandupdate in a put request in the api routes because updating an id