import 'mongoose';
import PoliticalQuestion from '../models/PoliticalQuestion';

export const politicalQuestions = {
    async findById(id: string): Promise<any> {
        let dbQuestion: any = null;
        try {
            dbQuestion = await PoliticalQuestion.findById(id).exec();
        } catch (error) {
            console.error(error);
        }

        return dbQuestion;
    },

    async findAll(): Promise<any> {
        let dbQuestions: any = null;
        try {
            dbQuestions = await PoliticalQuestion.find({}).exec();
        } catch (error) {
            console.error(error);
        }
        return dbQuestions;
    },
};

export default politicalQuestions;

// update function in a get request in the api routes because finding a single ID in
// findbyidandupdate in a put request in the api routes because updating an id
