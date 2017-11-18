import CompanyService from '../services/company-service';
import Company from '../models/company';

class CompanyController {
    constructor() {
        this.companyService = new CompanyService();
    }

    createNewCompany(req, res) {
        this.companyService.registerCompany(req.body)
            .then((message) => res.status(200).send({ message }))
            .catch(error => res.status(404).send({ errorMessage: error.message || error }))
    }

    // getCompany(req, res) {
    //     const companyId = req.params.companyId;
    //     const { getCompanyFromFirebase} = this.companyService;

    //     getCompanyFromFirebase(companyId)
    //         .then(user => res.status(201).json({ user: user.toJSON() }))
    //         .catch(error => res.status(401).json(error));
    // }

}



export default CompanyController;


