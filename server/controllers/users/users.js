import {
    createUserService,
    getUsersService
} from '../../services/users';
import { createUserSchema } from '../../validators/users';
const getUsers = async (req, res, next) => {
    try {
        const users = await getUsersService();
        res.status(200).send({
            data: users,
            err: null
        });

    } catch (err) {
        console.log(err)
        res.status(500).send({
            data: null,
            err: err
        });
    }
};

const createUser = async (req, res, next) => {
    try {
        await createUserSchema(req.body);
        const users = await createUserService(req.body);
        res.status(200).send({
            data: users,
            err: null
        });

    } catch (err) {
        console.log(err)
        res.status(500).send({
            data: null,
            err: err
        });
    }
};
module.exports = {
    getUsers,
    createUser
}
