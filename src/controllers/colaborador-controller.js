import ColaboradorService from '../services/colaborador-service';
import EmpresaService from '../services/empresa-service';
import Colaborador from '../models/colaborador';

class ColaboradorController {
    constructor() {
        this.colaboradorService = new ColaboradorService();
        this.empresaService = new EmpresaService();
    }

    criarNovoColaborador(req, res) {
        this.empresaService.getEmpresaById(req.body.empresaId)
            .then(empresa => this.colaboradorService.registrarColaborador(req.body.colaborador, empresa))
            .then((message) => res.status(200).send({ message }))
            .catch(error => {
                res.status(404).send({ errorMessage: error.message || error })
            })
    }

    // getSaler(req, res) {
    //     const salerId = req.params.salerId;
    //     const { getCompanyFromFirebase} = this.ColaboradorService;

    //     getSalerById(salerId)
    //         .then(user => res.status(201).json({ user: user.toJSON() }))
    //         .catch(error => res.status(401).json(error));
    // }

}



export default ColaboradorController;


