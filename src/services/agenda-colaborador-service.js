import ColaboradorAgenda from '../models/agenda-colaborador';
import firebaseAdmin from '../config/database-firebase';

class ColaboradorAgendaService {
    constructor() {
        this.auth = firebaseAdmin.defaultAuth();
        this.database = firebaseAdmin.defaultDatabase();
    }
    //call the father method saveUser and make a copy into database with companyInformations
    async addAgendaColaboradorIntoFirebase(agendaColaborador, idEmpresa, idColaborador) {
        const refDatabase = this.database.ref(`softnew/empresas/${idEmpresa}/colaboradores/${idColaborador}/agenda-colaborador/`);
        return await refDatabase.set(agendaColaborador)
            .then(() => `Carteira(s) criada com sucesso!`)
    };

    async removeAgendaColaboradorFromFirebase(idCarteira, idEmpresa, idColaborador) {
        const refDatabase = this.database.ref(`softnew/empresas/${idEmpresa}/colaboradores/${idColaborador}/agenda-colaborador/`);
        let found = false;
        let agendaColaboradorList = null;
        
        await refDatabase.once("value", snapshot => {
            agendaColaboradorList = snapshot.val();
            if (agendaColaboradorList) {
                Object.keys(agendaColaboradorList).forEach((index) => {
                    if(agendaColaboradorList[index].idCarteira === Number(idCarteira)){
                        const agendaColaboradorNameRemove = agendaColaboradorList[index].nome
                        found = true;
                        refDatabase.child(index).remove();
                        return `Carteira ${agendaColaboradorNameRemove} removida com sucesso!`;                            
                    }
                })

                if(!found){
                    return new Error('Carteira não encontrada');
                }
            }else {
                return new Error('Cobrador sem carteiras cadastradas');                
            }
        }, errorObject => {
            return new Error("The read failed: " + errorObject.code);
        });
        
        return 'Carteira removida com sucesso';
    }
}


export default ColaboradorAgendaService;