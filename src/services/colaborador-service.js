import UserService from './user-service';
import Colaborador from '../models/colaborador';

//extends FirebaseService
class ColaboradorService extends UserService {
    constructor() {
        super()
        this.insertUserInFirebase = super.insertUserInFirebase;
    }

    async registrarColaborador(colaborador, empresa) {
        colaborador.empresa = empresa;
        const novoColaborador = new Colaborador(colaborador);
        delete novoColaborador.uid;
        return this.insertUserInFirebase(novoColaborador)
            .then(colaboradorRecorded => this.criarColaboradorRef(colaborador, colaboradorRecorded))
    };

    async criarColaboradorRef(colaborador, colaboradorRecorded) {
        const colaboradorRef = Object.assign({}, colaborador, colaboradorRecorded);;
        const novoColaborador = new Colaborador(colaboradorRef);
        delete novoColaborador.password;
        const refDatabase = this.database.ref(`softnew/empresas/${novoColaborador.empresa.uid}/colaboradores/${novoColaborador.uid}/colaborador-info/`);
        return await refDatabase.set(novoColaborador)
            .then(() => this.criarColaboradorRefToLogin(novoColaborador))
    }

    async criarColaboradorRefToLogin(colaborador) {
        const refDatabase = this.database.ref(`softnew/colaborador/${colaborador.uid}/colaborador-info/`);
        return await refDatabase.set(colaborador)
            .then(() => `Cobrador(a) ${colaborador.nome} do cliente ${colaborador.empresa.nome} criado(a) com sucesso!`)
    }
}

export default ColaboradorService;
