import express from 'express';
import companyRouter from './company-routes';
import salerRouter from './saler-routes';
import salerBookRouter from './saler-book-routes';

const router = express.Router();

router.get('/', (req, res) => res.send('hello world'));
router.use('/company', companyRouter);
router.use('/saler', salerRouter);
router.use('/saler-book/', salerBookRouter);
export default router;
