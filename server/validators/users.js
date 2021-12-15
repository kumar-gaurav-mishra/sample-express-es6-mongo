import Joi from 'joi';

const createUserSchema = async (user) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        age: Joi.number().required(),
        occupation: Joi.string().required()
    });
    try {
        const data = await schema.validateAsync(user);
        return data;
    } catch (err) {
        console.log(err);
        throw err;
    }
}

module.exports = {
    createUserSchema
}
