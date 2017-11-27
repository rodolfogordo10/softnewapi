import empresaService from '../services/empresa-service';
import Empresa from '../models/empresa';

class EmpresaController {
    constructor() {
        this.empresaService = new empresaService();
    }

    criarNovaEmpresa(req, res) {
        this.empresaService.registrarEmpresa(req.body)
            .then((message) => res.status(200).send({ message }))
            .catch(error => res.status(404).send({ errorMessage: error.message || error }))
    }

    // getEmpresa(req, res) {
    //     const empresaId = req.params.empresaId;
    //     const { getEmpresaFromFirebase} = this.empresaService;

    //     getEmpresaFromFirebase(empresaId)
    //         .then(user => res.status(201).json({ user: user.toJSON() }))
    //         .catch(error => res.status(401).json(error));
    // }

}



export default EmpresaController;


