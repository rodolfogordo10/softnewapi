import SalerBookService from '../services/saler-book-service';
import SalerBook from '../models/saler-book';

class SalerBookController {
    constructor() {
        this.salerBookService = new SalerBookService();
    }

    addSalerBook(req, res){
        const idEmpresa = req.params.idEmpresa;
        const idCobrador = req.params.idCobrador;
        const agendas = req.body;
        
        const salerBookArray = agendas.map(salerBook => {
            return new SalerBook(salerBook);
        })
        this.salerBookService.addSalerBookIntoFirebase(salerBookArray, idEmpresa, idCobrador)
            .then(message => res.status(201).send({message}))
            .catch(error => res.status(404).send({errorMessage: error.message || error }))
    }

    removeSalerBook(req, res){
        const idEmpresa = req.params.idEmpresa;
        const idCobrador = req.params.idCobrador;
        const idCarteira = req.params.idCarteira;

        this.salerBookService.removeSalerBookFromFirebase(idCarteira, idEmpresa, idCobrador)
            .then(message => res.status(201).send({message}))
            .catch(error => res.status(404).send({errorMessage: error.message || error }))
    }
}

export default SalerBookController;


