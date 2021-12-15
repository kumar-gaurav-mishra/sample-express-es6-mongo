import express from 'express'
const router = express.Router();
import {
  getUsers,
  createUser
} from '../controllers/users//users';
import {
  createColectionFromConfig,
  createDbFromConfig
} from '../controllers/db/connection';


//All Defined Routes

/** User Routes */
router.get('/users', getUsers);
router.post('/users', createUser);
//Db operation routes
router.get('/db/create', createDbFromConfig);
router.get('/db/createCollections', createColectionFromConfig);




export default router;
