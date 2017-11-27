import AgendaColaboradorService from '../services/agenda-colaborador-service';
import AgendaColaborador from '../models/agenda-colaborador';

class AgendaColaboradorController {
    constructor() {
        this.agendaColaboradorService = new AgendaColaboradorService();
    }

    addAgendaColaborador(req, res){
        const idEmpresa = req.params.idEmpresa;
        const idColaborador = req.params.idColaborador;
        const agendas = req.body;

        const agendaColaboradorArray = agendas.map(agendaColaborador => {
            return new AgendaColaborador(agendaColaborador);
        })
        this.agendaColaboradorService.addAgendaColaboradorIntoFirebase(agendaColaboradorArray, idEmpresa, idColaborador)
            .then(message => res.status(201).send({message}))
            .catch(error => res.status(404).send({errorMessage: error.message || error }))
    }

    removeAgendaColaborador(req, res){
        const idEmpresa = req.params.idEmpresa;
        const idColaborador = req.params.idColaborador;
        const idCarteira = req.params.idCarteira;

        this.agendaColaboradorService.removeAgendaColaboradorFromFirebase(idCarteira, idEmpresa, idColaborador)
            .then(message => res.status(201).send({message}))
            .catch(error => res.status(404).send({errorMessage: error.message || error }))
    }
}

export default AgendaColaboradorController;


