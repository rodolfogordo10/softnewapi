import { Router } from 'express';
import SalerBookController from '../controllers/saler-book-controller';

const salerBookController = new SalerBookController();

const router = new Router();

router.post('/:idEmpresa/:idCobrador', (req, res) => salerBookController.addSalerBook(req, res));
router.delete('/:idEmpresa/:idCobrador/:idCarteira', (req, res) => salerBookController.removeSalerBook(req, res));

// router.post('/login', (req, res) => salerBookController.login(req, res));

export default router;

