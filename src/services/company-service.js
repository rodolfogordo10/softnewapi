import UserService from './user-service';
import Company from '../models/company';

class CompanyService extends UserService {
    constructor() {
        super();
        this.insertUserInFirebase = super.insertUserInFirebase;
    }
    
    // //method to get user's information in remote store from firebase
    async getCompanyById(companyId) {
        const refDatabase = this.database.ref(`softnew/companies/${companyId}/company-info/`);

        let companyFound = {};
        await refDatabase.once("value", snapshot => {
            companyFound = snapshot.val();
        }, errorObject => {
            return new Error("The read failed: " + errorObject.code);
        });
        
        if (companyFound) {
            return companyFound;
        }

        throw new Error('Company not found');
    
    }

    
    //call the father method saveUser and make a copy into database with companyInformations
    async registerCompany(company) {
        const newCompany = new Company(company);
        delete company.uid;
        return this.insertUserInFirebase(company)
            .then(companyRecorded => this.createCompanyRefObject(company, companyRecorded))
    };

    async createCompanyRefObject(company, companyRecorded) {
        const companyRef = Object.assign({}, company, companyRecorded);;
        const newCompany = new Company(companyRef);
        delete newCompany.password;
        const refDatabase = this.database.ref(`softnew/companies/${newCompany.uid}/company-info/`);
        return await refDatabase.set(newCompany)
            .then(() => `Empresa ${newCompany.name} criada com sucesso!`)
    }
}


export default CompanyService;