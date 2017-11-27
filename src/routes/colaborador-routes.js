import { Router } from 'express';
import ColaboradorController from '../controllers/colaborador-controller';

const colaboradorController = new ColaboradorController();

const router = new Router();

router.post('/', (req, res) => colaboradorController.criarNovoColaborador(req, res));
router.post('/login', (req, res) => colaboradorController.login(req, res));

export default router;
