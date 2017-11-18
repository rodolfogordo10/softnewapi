import SalerService from '../services/saler-service';
import CompanyService from '../services/company-service';
import Saler from '../models/saler';

class SalerController {
    constructor() {
        this.salerService = new SalerService();
        this.companyService = new CompanyService();
    }

    createNewSaler(req, res) {
        this.companyService.getCompanyById(req.body.companyId)
            .then(company => this.salerService.registerSaler(req.body.saler, company))
            .then((message) => res.status(200).send({ message }))
            .catch(error => {
                res.status(404).send({ errorMessage: error.message || error })
            })
    }

    // getSaler(req, res) {
    //     const salerId = req.params.salerId;
    //     const { getCompanyFromFirebase} = this.salerService;

    //     getSalerById(salerId)
    //         .then(user => res.status(201).json({ user: user.toJSON() }))
    //         .catch(error => res.status(401).json(error));
    // }

}



export default SalerController;


