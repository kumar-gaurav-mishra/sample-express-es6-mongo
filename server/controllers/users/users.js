import {
    createUserService,
    getUsersService
} from '../../services/users';
import {
    createUserSchema
} from '../../validators/users';
import {
    responseHandler
} from '../../utils/response-handler';
const getUsers = async (req, res, next) => {
    try {
        const users = await getUsersService();
        const resp = responseHandler(200, null, users);
        res.status(resp.status).send(resp);

    } catch (err) {
        console.log(err)
        const resp = responseHandler(500, err, null);
        res.status(resp.status).send(resp);
    }
};

const createUser = async (req, res, next) => {
    try {
        await createUserSchema(req.body);
        const users = await createUserService(req.body);
        const resp = responseHandler(200, null, users);
        res.status(resp.status).send(resp);

    } catch (err) {
        console.log(err)
        const resp = responseHandler(500, err, null);
        res.status(resp.status).send(resp);
    }
};
module.exports = {
    getUsers,
    createUser
}
