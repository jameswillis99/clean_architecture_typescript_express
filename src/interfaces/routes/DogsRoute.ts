import express from 'express';
import DogsController from '../controllers/DogsController';
import RouteWrapper from '../RouteWrapper';
const router = express.Router()

// define the home page route
router.get('/',RouteWrapper(new DogsController().get));
router.post('/',RouteWrapper(new DogsController().post));

export default router;