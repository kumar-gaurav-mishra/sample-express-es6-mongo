import {
    MongoClient
} from 'mongodb';
import config from '../config.js';

const createDb = async () => {
    await MongoClient.connect(`${config.dbUrl}${config.db}`, function (err, db) {
        if (err) throw err;
        console.log("Database created!");
        db.close();
    });
}

const creatCollections = async () => {
    const promises = [];
    MongoClient.connect(config.dbUrl, (err, connection) => {
        if (err) throw err;
        const db = connection.db(config.db);
        for (const collection of config.collections) {
            promises.push(
                new Promise((resolve, reject) => {
                    db.listCollections({
                        name: collection
                    }).hasNext().then(data => {
                        if (!data) {
                            db.createCollection(collection, (err, res) => {
                                if (err) reject(err);
                                console.log(collection, "Collection created!");
                                resolve();
                            });
                        } else {
                            resolve();
                        }
                    });
                })
            );
        }
        return Promise.all(promises).then(data => {
            connection.close();
            console.log("Done");
        }).catch(err => {
            console.log(err);
        });
    });
}

const newConnection = async () => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(config.dbUrl, (err, connection) => {
            if (err) reject(err);
            resolve(connection);
        });
    });
}



module.exports = {
    createDb,
    creatCollections,
    newConnection
}
