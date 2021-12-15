import {
    createDb,
    creatCollections
} from '../../utils/create-db';

const createColectionFromConfig = async (req, res, next) => {
    try {
        await creatCollections();
        res.status(200).send({
            data: {
                message: "collections created successfully"
            },
            err: null
        });
    } catch (err) {
        console.log(err);
        res.status(500).send({
            data: null,
            err: err
        });
    }

}

const createDbFromConfig = async (req, res, next) => {
    try {
        await createDb();
        res.status(200).send({
            data: {
                message: "db created successfully"
            },
            err: null
        });
    } catch (err) {
        console.log(err);
        res.status(500).send({
            data: null,
            err: err
        });
    }

}
module.exports = {
    createColectionFromConfig,
    createDbFromConfig
}
