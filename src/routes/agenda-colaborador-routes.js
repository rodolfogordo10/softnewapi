import { Router } from 'express';
import AgendaColaboradorController from '../controllers/agenda-colaborador-controller';

const agendaColaboradorController = new AgendaColaboradorController();

const router = new Router();

router.post('/:idEmpresa/:idColaborador', (req, res) => agendaColaboradorController.addAgendaColaborador(req, res));
router.delete('/:idEmpresa/:idColaborador/:idCarteira', (req, res) => agendaColaboradorController.removeAgendaColaborador(req, res));

// router.post('/login', (req, res) => AgendaColaboradorController.login(req, res));

export default router;

