import { Router } from 'express';
import SalerController from '../controllers/saler-controller';

const salerController = new SalerController();

const router = new Router();

router.post('/', (req, res) => salerController.createNewSaler(req, res));
router.post('/login', (req, res) => salerController.login(req, res));

export default router;
