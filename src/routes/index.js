import express from 'express';
import empresaRouter from './empresa-routes';
import colaboradorRouter from './colaborador-routes';
import agendaColaboradorRouter from './agenda-colaborador-routes';

const router = express.Router();

router.get('/', (req, res) => res.send('hello world'));
router.use('/empresa', empresaRouter);
router.use('/colaborador', colaboradorRouter);
router.use('/agenda-colaborador/', agendaColaboradorRouter);
export default router;
