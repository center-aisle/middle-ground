import 'mongoose';
import User from '../models/User';
import { exec } from 'child_process';

const users = {
    async update(openId: string, updatedUser: any): Promise<any> {
        let dbUsers: any = null;
        try {
            dbUsers = await User.findByIdAndUpdate(openId, updatedUser, {new: true}).exec();
        } catch (error) {
            console.error(error);
        }
        return dbUsers;
    },

    async findById(openId: string): Promise<any> {
        let dbUsers: any = null;
        try {
            dbUsers = await User.findById(openId).exec();
        } catch (error) {
            console.error(error);
        }
        return dbUsers;
    },

    async findOrCreate(openId: string, firstName: string, lastName: string, email: string, picture: string): Promise<any> {
        let dbUsers: any = null;
        try {
            dbUsers = await User.findOrCreate({
                openId,
                firstName,
                lastName,
                email,
                picture
            }); // why can I not have .exec() here?!?!?!?!
            console.log("DBUSERS FINDORCREATE: ", dbUsers);
        } catch (error) {
            console.error(error);
        };
        return dbUsers;
    }
};

export default users;

// update function in a get request in the api routes because finding a single ID in
// findbyidandupdate in a put request in the api routes because updating an id
