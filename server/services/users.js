import config from '../config';
import {
    newConnection
} from '../utils/create-db';
const createUserService = async (userData) => {
    try {
        const connection = await newConnection();
        const db = connection.db(config.db).collection('users');
        const users = await db.insertOne(userData);
        connection.close();
        return Promise.resolve(users);
    } catch (err) {
        return Promise.reject(err);
    }
}

const getUsersService = async () => {
    try {
        const connection = await newConnection();
        const db = connection.db(config.db).collection('users');
        const users = await db.find({}).toArray();
        connection.close();
        return Promise.resolve(users);

    } catch (err) {
        return Promise.reject(err);
    }
}

module.exports = {
    createUserService,
    getUsersService
}
