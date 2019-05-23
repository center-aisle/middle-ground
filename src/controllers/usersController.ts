require("mongoose");
export default require("../models/User.ts");

module.exports = {
    findAll: function(req, res) {
        db.find({})
            .then(dbUsers => res.json(dbUsers))
            .catch(err => res.status(422).json(err));
    },
    save: function(req, res) {
        db.create(req.body)
            .then(dbUsers => res.json(dbUsers))
            .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db.findById(req.params.id)
            .then(dbUsers => res.json(dbUsers))
            .catch(err => res.status(422).json(err));
    }

// change findall and save -> update and findOrCreate
// Use arrow functions for e6
};