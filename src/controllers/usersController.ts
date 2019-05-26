import 'mongoose';
import User from '../models/User';

export const controller = {
    async update(id: string, updatedUser: any): Promise<any> {
        let dbUsers: any = null;
        try {
            dbUsers = await User.findByIdAndUpdate(id, updatedUser, {new: true}).exec();
        } catch (error) {
            // Something to do if it fails
        }

        return dbUsers;
    },

    async findById(id: string): Promise<any> {
        let dbUsers: any = null;
        try {
            dbUsers = await User.findById(id).exec();
        } catch (error) {
            // Something to do if it fails
        }

        return dbUsers;
    },
};

export default controller;

// update function in a get request in the api routes because finding a single ID in
// findbyidandupdate in a put request in the api routes because updating an id
