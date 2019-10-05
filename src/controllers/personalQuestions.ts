import 'mongoose';
import PersonalQuestion from '../models/PersonalQuestion';

export const personalQuestions = {
    async findById(id: string): Promise<any> {
        let dbQuestion: any = null;
        try {
            dbQuestion = await PersonalQuestion.findById(id).exec();
        } catch (error) {
            console.error(error);
        }

        return dbQuestion;
    },

    async findAll(): Promise<any> {
        let dbQuestions: any = null;
        try {
            dbQuestions = await PersonalQuestion.find({}).exec();
        } catch (error) {
            console.error(error);
        }
        return dbQuestions;
    }
};

export default personalQuestions;

// update function in a get request in the api routes because finding a single ID in
// findbyidandupdate in a put request in the api routes because updating an id
