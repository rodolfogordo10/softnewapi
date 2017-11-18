import { Router } from 'express';
import CompanyController from '../controllers/company-controller';

const companyController = new CompanyController();

const router = new Router();

router.post('/', (req, res) => companyController.createNewCompany(req, res));
router.post('/login', (req, res) => companyController.login(req, res));

export default router;
