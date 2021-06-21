import express from 'express';
import DogsController from '../controllers/DogsController';
import RouteWrapper from '../RouteWrapper';
const router = express.Router()

router.get('/', (req,res) => new RouteWrapper(req,res, new DogsController()).get());
router.post('/', (req,res) => new RouteWrapper(req,res, new DogsController()).post());

export default router;