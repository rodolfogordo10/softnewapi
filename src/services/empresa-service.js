import UserService from './user-service';
import Empresa from '../models/empresa';

class EmpresaService extends UserService {
    constructor() {
        super();
        this.insertUserInFirebase = super.insertUserInFirebase;
    }
    
    // //method to get user's information in remote store from firebase
    async getEmpresaById(empresaId) {
        const refDatabase = this.database.ref(`softnew/empresas/${empresaId}/empresas-info/`);

        let empresaFound = {};
        await refDatabase.once("value", snapshot => {
            empresaFound = snapshot.val();
        }, errorObject => {
            return new Error("The read failed: " + errorObject.code);
        });

        if (empresaFound) {
            return empresaFound;
        }

        throw new Error('Empresa not found');
    
    }

    
    //call the father method saveUser and make a copy into database with companyInformations
    async registrarEmpresa(empresa) {
        const newEmpresa = new Empresa(empresa);
        delete empresa.uid;
        return this.insertUserInFirebase(empresa)
            .then(empresaRecorded => this.createEmpresaRefObject(empresa, empresaRecorded))
    };

    async createEmpresaRefObject(empresa, empresaRecorded) {
        const empresaRef = Object.assign({}, empresa, empresaRecorded);;
        const newEmpresa = new Empresa(empresaRef);
        delete newEmpresa.password;
        const refDatabase = this.database.ref(`softnew/empresas/${newEmpresa.uid}/empresa-info/`);
        return await refDatabase.set(newEmpresa)
            .then(() => `Empresa ${newEmpresa.nome} criada com sucesso!`)
    }
}


export default EmpresaService;