import 'mongoose';
import User from '../models/User';

const controller = {
    update: (req: { params: { UserId: any; }; body: any; }, res: { status: (arg0: number) => { send: (arg0: any) => void; }; send: (arg0: import('mongoose').Document | null) => void; }) => {
        User.findByIdAndUpdate(req.params.UserId, req.body, {new: true}, (err, UserId) => {
                if (err) { return res.status(500).send(err); }
                return res.send(UserId);
            });
    },
    findById(req: { params: { id: any; }; }, res: { status: (arg0: number) => { send: (arg0: any) => void; }; send: (arg0: import('mongoose').Document | null) => void; }) {
        User.findById(req.params.id, (err, dbUsers) => {
            if (err) { return res.status(422).send(err); }
            return res.send(dbUsers);
            });
    },
};

export default controller;

// update function in a get request in the api routes because finding a single ID in
// findbyidandupdate in a put request in the api routes because updating an id
