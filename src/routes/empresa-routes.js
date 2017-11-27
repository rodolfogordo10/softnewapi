import { Router } from 'express';
import EmpresaController from '../controllers/empresa-controller';

const empresaController = new EmpresaController();

const router = new Router();

router.post('/', (req, res) => empresaController.criarNovaEmpresa(req, res));
router.post('/login', (req, res) => empresaController.login(req, res));

export default router;
