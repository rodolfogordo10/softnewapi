import UserService from './user-service';
import Saler from '../models/saler';

//extends FirebaseService
class SalerService extends UserService {
    constructor() {
        super()
        this.insertUserInFirebase = super.insertUserInFirebase;
    }

    async registerSaler(saler, company) {
        saler.company = company;
        const newSaler = new Saler(saler);
        delete newSaler.uid;
        return this.insertUserInFirebase(newSaler)
            .then(salerRecorded => this.createSalerRefObject(saler, salerRecorded))
    };

    async createSalerRefObject(saler, salerRecorded) {
        const salerRef = Object.assign({}, saler, salerRecorded);;
        const newSaler = new Saler(salerRef);
        delete newSaler.password;
        const refDatabase = this.database.ref(`softnew/companies/${newSaler.company.uid}/salers/${newSaler.uid}/saler-info/`);
        return await refDatabase.set(newSaler)
            .then(() => this.createSalerRefObjectToLogin(newSaler))
    }

    async createSalerRefObjectToLogin(saler) {
        const refDatabase = this.database.ref(`softnew/saler/${saler.uid}/saler-info/`);
        return await refDatabase.set(saler)
            .then(() => `Cobrador(a) ${saler.name} do cliente ${saler.company.name} criado(a) com sucesso!`)
    }
}

export default SalerService;
